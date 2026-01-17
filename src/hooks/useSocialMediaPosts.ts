import { useState, useEffect, useCallback } from 'react';
import type { SocialMediaPost, SocialMediaState } from '@/types/socialMedia';

const CACHE_KEY = 'oppia-social-media-posts';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const MAX_POSTS = 5;

interface CachedData {
  posts: SocialMediaPost[];
  timestamp: number;
}

async function fetchTwitterPosts(username: string): Promise<SocialMediaPost[]> {
  try {
    const response = await fetch(
      `/api/twitter-posts?username=${encodeURIComponent(username)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.error || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }

    if (!data.posts || !Array.isArray(data.posts)) {
      throw new Error('Invalid response format from API');
    }

    if (data.error && data.posts.length === 0) {
      throw new Error(data.error);
    }
    
    return data.posts.slice(0, MAX_POSTS);
  } catch (error) {
    throw error;
  }
}

function getCachedPosts(): SocialMediaPost[] | null {
  if (typeof window === 'undefined') return null;

  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const data: CachedData = JSON.parse(cached);
    const now = Date.now();

    if (now - data.timestamp < CACHE_DURATION) {
      return data.posts;
    }

    // Cache expired
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch {
    return null;
  }
}

function cachePosts(posts: SocialMediaPost[]): void {
  if (typeof window === 'undefined') return;

  try {
    const data: CachedData = {
      posts,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
  }
}

export function useSocialMediaPosts(username: string = 'OppiaLabs') {
  const [posts, setPosts] = useState<SocialMediaPost[]>([]);
  const [state, setState] = useState<SocialMediaState>('idle');
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setState('loading');
    setError(null);

    try {
      const cachedPosts = getCachedPosts();
      if (cachedPosts) {
        setPosts(cachedPosts);
        setState('success');
        return;
      }

      const fetchedPosts = await fetchTwitterPosts(username);
      
      if (fetchedPosts.length === 0) {
        setState('error');
        setError('No posts available. The API returned an empty array.');
        return;
      }
      
      setPosts(fetchedPosts);
      cachePosts(fetchedPosts);
      setState('success');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load posts';
      setError(errorMessage);
      setState('error');
    }
  }, [username]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    state,
    error,
    refetch: fetchPosts,
  };
}
