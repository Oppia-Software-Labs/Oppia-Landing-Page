/**
 * ProductTags component
 * Displays product tags/badges
 */

interface ProductTagsProps {
  tags: string[];
}

export function ProductTags({ tags }: ProductTagsProps) {
  return (
    <div className="mb-4 flex flex-wrap justify-center gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="rounded-full px-3.5 py-1 text-xs font-medium text-white bg-white/12"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

