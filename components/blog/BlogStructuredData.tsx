import type { BlogPost } from "@/lib/blog";

interface BlogStructuredDataProps {
  post: BlogPost;
}

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: post.author ? { "@type": "Person", name: post.author } : undefined,
    image: post.image,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sbzee.com/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
