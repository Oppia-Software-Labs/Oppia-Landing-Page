export interface TwitterApiTweet {
  id: string;
  text: string;
  created_at: string;
  public_metrics: {
    reply_count: number;
    retweet_count: number;
    like_count: number;
    quote_count: number;
  };
  author_id?: string;
}

export interface TwitterApiUser {
  id: string;
  name: string;
  username: string;
  profile_image_url?: string;
  verified?: boolean;
}

export interface TwitterApiResponse {
  data?: TwitterApiTweet[];
  includes?: {
    users?: TwitterApiUser[];
  };
  errors?: Array<{ message: string }>;
}
