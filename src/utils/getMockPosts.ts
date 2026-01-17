import type { SocialMediaPost } from '@/types/socialMedia';
import { extractHashtags } from '@/utils/formatHashtags';

const MAX_RESULTS = 5;

export function getMockPosts(username: string): SocialMediaPost[] {
  return [
    {
      id: '1',
      author: {
        name: 'Oppia Software Labs',
        username: 'OppiaLabs',
        verified: true,
      },
      content:
        'Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. #Software',
      hashtags: extractHashtags('Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. #Software'),
      interactions: {
        comments: 13,
        retweets: 12,
        likes: 24,
        shares: 13,
      },
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '2',
      author: {
        name: 'Oppia Software Labs',
        username: 'OppiaLabs',
        verified: true,
      },
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. #Geko #Development',
      hashtags: extractHashtags('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. #Geko #Development'),
      interactions: {
        comments: 13,
        retweets: 12,
        likes: 24,
        shares: 13,
      },
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '3',
      author: {
        name: 'Oppia Software Labs',
        username: 'OppiaLabs',
        verified: true,
      },
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Update',
      hashtags: extractHashtags('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #Update'),
      interactions: {
        comments: 13,
        retweets: 12,
        likes: 24,
        shares: 13,
      },
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ].slice(0, MAX_RESULTS);
}
