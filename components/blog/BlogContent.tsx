import type { BlogPost } from "@/lib/blog";

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article
      className="prose prose-neutral sm:prose-lg max-w-none px-4 sm:px-0 prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
      dangerouslySetInnerHTML={{ __html: post.contentHtml }}
    />
  );
}
