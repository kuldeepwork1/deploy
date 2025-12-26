import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogList } from "@/components/blog/BlogList";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog — Sbzee",
  description:
    "Read articles on seasonal eating, everyday nutrition tips, and the science behind fruits & vegetables.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-gray-50 section-padding">
      <div className="container-custom ">
        <header className="max-w-3xl mx-auto mb-6 sm:mb-8 text-center px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Sbzee Blog
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Insights, guides, and tips on fruits, vegetables, and seasonal
            eating.
          </p>
        </header>

        <BlogList posts={posts} />
      </div>
    </div>
  );
}
