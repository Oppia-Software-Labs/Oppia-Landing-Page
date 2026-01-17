export interface TextSegment {
  text: string;
  isHashtag: boolean;
}

export function formatHashtags(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  const hashtagRegex = /#\w+/g;
  let lastIndex = 0;
  let match;

  while ((match = hashtagRegex.exec(text)) !== null) {
    // Add text before the hashtag
    if (match.index > lastIndex) {
      segments.push({
        text: text.substring(lastIndex, match.index),
        isHashtag: false,
      });
    }

    // Add the hashtag
    segments.push({
      text: match[0],
      isHashtag: true,
    });

    lastIndex = hashtagRegex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({
      text: text.substring(lastIndex),
      isHashtag: false,
    });
  }

  // If no hashtags found, return the entire text as a single segment
  if (segments.length === 0) {
    segments.push({ text, isHashtag: false });
  }

  return segments;
}

export function extractHashtags(text: string): string[] {
  const hashtagRegex = /#(\w+)/g;
  const hashtags: string[] = [];
  let match;

  while ((match = hashtagRegex.exec(text)) !== null) {
    hashtags.push(match[1]);
  }

  return hashtags;
}
