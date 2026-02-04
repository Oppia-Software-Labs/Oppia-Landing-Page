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

  const cardContent = (
    <>
      <header className="mb-1 flex items-center gap-2 pt-3 sm:mb-1.5 sm:gap-3 sm:pt-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#121212] sm:h-10 sm:w-10">
          <OppiaIsotypeIcon width={24} height={24} className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <h3 className="text-xs font-semibold text-white leading-tight sm:text-sm">
            {post.author.name}
          </h3>
          <p className="text-[11px] text-gray-400 leading-tight sm:text-xs">
            @{post.author.username}
          </p>
        </div>
      </header>

      <div className="mb-3 flex flex-1 items-center overflow-hidden sm:mb-4">
        <p className="text-xs leading-relaxed text-white line-clamp-4 whitespace-pre-line sm:text-sm sm:line-clamp-5">
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

      <footer className="flex w-full items-center justify-between gap-1">
        <div className="flex items-center gap-1 text-gray-400 transition-colors hover:text-yellow-500 sm:gap-1.5">
          <CommentIcon width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="text-[10px] sm:text-xs">{post.interactions.comments}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 transition-colors hover:text-green-400 sm:gap-1.5">
          <RetweetIcon width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="text-[10px] sm:text-xs">{post.interactions.retweets}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 transition-colors hover:text-red-400 sm:gap-1.5">
          <LikeIcon width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="text-[10px] sm:text-xs">{post.interactions.likes}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 transition-colors hover:text-cyan-400 sm:gap-1.5">
          <ShareIcon width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="text-[10px] sm:text-xs">{post.interactions.shares}</span>
        </div>
      </footer>
    </>
  );

  const cardClassName = cn(
    'flex h-[220px] sm:h-[240px] lg:h-[265px] flex-col rounded-lg p-4 sm:p-5',
    'bg-gradient-to-b from-[#111111] to-[#242424]',
    'border border-[#313030]',
    'transition-all duration-300 ease-out',
    'hover:shadow-2xl hover:border-[#404040] hover:z-50',
    'cursor-pointer',
    'block',
    'relative',
    'z-0',
    'transform-gpu',
    'will-change-transform',
    isCenter && 'scale-110 z-10 shadow-2xl origin-top'
  );

  if (post.url) {
    return (
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        aria-label={`Post by ${post.author.name}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article
      className={cardClassName}
      aria-label={`Post by ${post.author.name}`}
    >
      {cardContent}
    </article>
  );
}

export const SocialMediaCard = memo(SocialMediaCardComponent);
