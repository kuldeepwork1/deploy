import { posts } from "@/content/blog/blog_posts";

export type BlogPost = {
  slug: string;
  tabTitle: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  image: string;
  tags?: string[];
  contentHtml: string;
};

const allPosts: BlogPost[] = [...posts];

let sortedPosts: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (!sortedPosts) {
    sortedPosts = allPosts.slice();
  }
  return sortedPosts;
}

export function getTopPosts(blogPostSlug: string): BlogPost[] {
  return allPosts.filter((p) => p.slug !== blogPostSlug).slice(0, 5);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}
