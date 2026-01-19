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
