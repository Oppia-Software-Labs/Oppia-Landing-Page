import { cn } from '@/utils/cn';

interface SocialMediaSkeletonProps {
  count?: number;
}

export function SocialMediaSkeleton({ count = 5 }: SocialMediaSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'flex h-[280px] animate-pulse flex-col rounded-lg p-5',
            'bg-gradient-to-b from-[#111111] to-[#242424]',
            'border border-[#313030]'
          )}
          aria-label="Loading post"
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="h-5 w-5 shrink-0 rounded-full bg-gray-700" />
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="h-4 w-32 rounded bg-gray-700" />
              <div className="h-3 w-24 rounded bg-gray-700" />
            </div>
          </div>

          <div className="mb-auto flex-1 space-y-2">
            <div className="h-4 w-full rounded bg-gray-700" />
            <div className="h-4 w-full rounded bg-gray-700" />
            <div className="h-4 w-4/5 rounded bg-gray-700" />
            <div className="h-4 w-full rounded bg-gray-700" />
            <div className="h-4 w-3/4 rounded bg-gray-700" />
          </div>

          <div className="mt-4 flex items-center gap-6 border-t border-gray-800 pt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="h-4 w-4 rounded bg-gray-700" />
                <div className="h-3 w-6 rounded bg-gray-700" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
