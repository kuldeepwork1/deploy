import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostSlugs, getPostBySlug, getTopPosts } from "@/lib/blog";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { BlogStructuredData } from "@/components/blog/BlogStructuredData";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogLatest } from "@/components/blog/BlogLatest";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  const images = post.image
    ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
    : undefined;

  return {
    title: `${post.tabTitle} | Sbzee Blog`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const topPosts = getTopPosts(params.slug);

  return (
    <div className="bg-white section-padding container-custom">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-5 md:col-span-3">
          <BlogPostHeader post={post} />
          <BlogContent post={post} />
          <BlogStructuredData post={post} />
        </div>
        <div className="col-span-5 md:col-span-2 max-w-sm ml-auto sticky top-20">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 line-clamp-2 sm:line-clamp-1 mt-10">
            Latest Posts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {topPosts.map((post) => (
              <BlogLatest key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
