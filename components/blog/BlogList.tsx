import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "./BlogCard";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mx-auto px-0 sm:px-0">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </section>
  );
}
