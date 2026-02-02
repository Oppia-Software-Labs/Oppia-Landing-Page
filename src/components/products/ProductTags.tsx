/**
 * ProductTags component
 * Displays product tags/badges
 */

interface ProductTagsProps {
  tags: string[];
}

export function ProductTags({ tags }: ProductTagsProps) {
  return (
    <div className="mb-3 flex flex-wrap justify-center gap-1.5 max-md:mb-2.5 max-md:gap-1 max-[414px]:mb-2 max-[414px]:gap-1">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white bg-white/12 max-[414px]:px-2 max-[414px]:py-0.5 max-[414px]:text-[10px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

