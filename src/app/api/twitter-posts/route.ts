import { NextRequest, NextResponse } from 'next/server';
import type { SocialMediaPost } from '@/types/socialMedia';
import { extractHashtags } from '@/utils/formatHashtags';
import type { TwitterApiUser, TwitterApiResponse } from '@/types/twitterApi';
import { getMockPosts } from '@/utils/getMockPosts';

const TWITTER_API_URL = 'https://api.x.com/2';
const MAX_RESULTS = 5;

async function fetchTweetsFromX(username: string): Promise<SocialMediaPost[]> {
  const bearerToken = process.env.TWITTER_BEARER_TOKEN;

  if (!bearerToken) {
    throw new Error('TWITTER_BEARER_TOKEN is not configured');
  }

  const userLookupUrl = `${TWITTER_API_URL}/users/by/username/${username}`;
  const userResponse = await fetch(userLookupUrl, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!userResponse.ok) {
    const errorText = await userResponse.text();
    let errorMessage = `Failed to fetch user: ${userResponse.status} ${userResponse.statusText}`;
    
    try {
      const errorData = JSON.parse(errorText);
      if (errorData.title === 'CreditsDepleted') {
        errorMessage = 'Twitter API credits depleted. Please add credits to your Twitter API account or upgrade your plan.';
      } else if (errorData.detail) {
        errorMessage = errorData.detail;
      }
    } catch {
      errorMessage += ` - ${errorText}`;
    }
    
    throw new Error(errorMessage);
  }

  const userData = await userResponse.json();
  const userId = userData.data?.id;

  if (!userId) {
    throw new Error('User not found');
  }

  let userDetails: TwitterApiUser = {
    id: userId,
    name: userData.data?.name || username,
    username: userData.data?.username || username,
    verified: userData.data?.verified || false,
  };

  try {
    const userDetailsUrl = `${TWITTER_API_URL}/users/${userId}?user.fields=profile_image_url,verified`;
    const detailsResponse = await fetch(userDetailsUrl, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (detailsResponse.ok) {
      const detailsData = await detailsResponse.json();
      if (detailsData.data) {
        userDetails = {
          ...userDetails,
          ...detailsData.data,
        };
      }
    }
  } catch {
  }

  const tweetsUrl = new URL(`${TWITTER_API_URL}/users/${userId}/tweets`);
  tweetsUrl.searchParams.set('max_results', MAX_RESULTS.toString());
  tweetsUrl.searchParams.set(
    'tweet.fields',
    'created_at,public_metrics,text'
  );

  const tweetsResponse = await fetch(tweetsUrl.toString(), {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (!tweetsResponse.ok) {
    const errorText = await tweetsResponse.text();
    throw new Error(
      `Failed to fetch tweets: ${tweetsResponse.status} ${tweetsResponse.statusText} - ${errorText}`
    );
  }

  const tweetsData: TwitterApiResponse = await tweetsResponse.json();

  if (tweetsData.errors) {
    throw new Error(
      `Twitter API errors: ${tweetsData.errors.map((e) => e.message).join(', ')}`
    );
  }

  if (!tweetsData.data || tweetsData.data.length === 0) {
    return [];
  }


  const posts: SocialMediaPost[] = tweetsData.data.map((tweet) => ({
    id: tweet.id,
    author: {
      name: userDetails.name,
      username: userDetails.username,
      verified: userDetails.verified || false,
    },
    content: tweet.text,
    hashtags: extractHashtags(tweet.text),
    interactions: {
      comments: tweet.public_metrics.reply_count,
      retweets: tweet.public_metrics.retweet_count,
      likes: tweet.public_metrics.like_count,
      shares: tweet.public_metrics.quote_count,
    },
    createdAt: tweet.created_at,
  }));

  return posts;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get('username') || 'OppiaLabs';
  const useMockFallback = searchParams.get('fallback') === 'true' || !process.env.TWITTER_BEARER_TOKEN;

  if (useMockFallback) {
    const mockPosts = getMockPosts(username);
    return NextResponse.json({ posts: mockPosts, usingFallback: true }, { status: 200 });
  }

  try {
    const posts = await fetchTweetsFromX(username);
    
    if (posts.length === 0) {
      const mockPosts = getMockPosts(username);
      return NextResponse.json({ posts: mockPosts, usingFallback: true }, { status: 200 });
    }

    return NextResponse.json({ posts, usingFallback: false }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch posts';
    
    const isCreditsError = errorMessage.includes('CreditsDepleted') || 
                          errorMessage.includes('Payment Required') ||
                          errorMessage.includes('credits');

    if (isCreditsError) {
      const mockPosts = getMockPosts(username);
      return NextResponse.json({ 
        posts: mockPosts, 
        usingFallback: true,
        error: 'Using mock data: Twitter API requires credits'
      }, { status: 200 });
    }

    return NextResponse.json(
      { error: errorMessage, posts: [], usingFallback: false },
      { status: 500 }
    );
  }
}
