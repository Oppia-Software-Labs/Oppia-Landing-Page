export interface SocialMediaPost {
  id: string;
  author: {
    name: string;
    username: string;
    verified: boolean;
  };
  content: string;
  hashtags: string[];
  interactions: {
    comments: number;
    retweets: number;
    likes: number;
    shares: number;
  };
  createdAt: string;
}

export interface SocialMediaPostResponse {
  posts: SocialMediaPost[];
}

export type SocialMediaState = 'idle' | 'loading' | 'success' | 'error';
