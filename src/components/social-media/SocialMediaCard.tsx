import { memo } from 'react';
import type { SocialMediaPost } from '@/types/socialMedia';
import { formatHashtags } from '@/utils/formatHashtags';
import { OppiaIsotypeIcon } from '@/components/icons/oppia/OppiaIsotypeIcon';
import { CommentIcon } from '@/components/icons/social-media/CommentIcon';
import { RetweetIcon } from '@/components/icons/social-media/RetweetIcon';
import { LikeIcon } from '@/components/icons/social-media/LikeIcon';
import { ShareIcon } from '@/components/icons/social-media/ShareIcon';
import { cn } from '@/utils/cn';

interface SocialMediaCardProps {
  post: SocialMediaPost;
  isCenter?: boolean;
}

function SocialMediaCardComponent({ post, isCenter = false }: SocialMediaCardProps) {
  const textSegments = formatHashtags(post.content);

  return (
    <article
      className={cn(
        'flex h-[265px] flex-col rounded-lg p-5',
        'bg-gradient-to-b from-[#111111] to-[#242424]',
        'border border-[#313030]',
        'transition-all duration-300 ease-out',
        'hover:shadow-lg',
        'self-start',
        isCenter && 'scale-110 z-10 shadow-2xl origin-top'
      )}
      aria-label={`Post by ${post.author.name}`}
    >
      <header className="mb-1.5 flex items-center gap-3 pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#121212]">
          <OppiaIsotypeIcon width={24} height={24} className="h-6 w-6" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <h3 className="text-sm font-semibold text-white leading-tight">
            {post.author.name}
          </h3>
          <p className="text-xs text-gray-400 leading-tight">
            @{post.author.username}
          </p>
        </div>
      </header>

      <div className="mb-4 flex flex-1 items-center overflow-hidden">
        <p className="text-xs leading-relaxed text-white line-clamp-5">
          {textSegments.map((segment, index) => {
            if (segment.isHashtag) {
              return (
                <span
                  key={index}
                  className="text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  {segment.text}
                </span>
              );
            }
            return <span key={index}>{segment.text}</span>;
          })}
        </p>
      </div>

      <footer className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-yellow-500">
          <CommentIcon width={18} height={18} />
          <span className="text-xs">{post.interactions.comments}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-green-400">
          <RetweetIcon width={18} height={18} />
          <span className="text-xs">{post.interactions.retweets}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-red-400">
          <LikeIcon width={18} height={18} />
          <span className="text-xs">{post.interactions.likes}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-cyan-400">
          <ShareIcon width={18} height={18} />
          <span className="text-xs">{post.interactions.shares}</span>
        </div>
      </footer>
    </article>
  );
}

export const SocialMediaCard = memo(SocialMediaCardComponent);
