import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import Image from "next/image";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="mb-6 mx-auto px-4 sm:px-0">
      <div className="flex items-start gap-2 sm:gap-3 my-3">
        <Link href="/blog" className="text-gray-600 flex-shrink-0">
          <Image
            src="/assets/img/leftArrow.svg"
            alt="Back"
            className="w-8 h-8 sm:w-9 sm:h-9 hover:bg-gray-100 p-1 rounded-full"
            loading="eager"
            width={200}
            draggable={false}
            height={200}
          />
        </Link>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 line-clamp-2 sm:line-clamp-2">
          {post.title}
        </h1>
      </div>
      <Image
        src={post.image}
        alt={post.title}
        className="w-full max-w-4xl h-48 sm:h-64 md:h-80 object-cover rounded-xl mb-3"
        loading="eager"
        width={200}
        draggable={false}
        height={200}
      />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 max-w-4xl -mt-2">
        <p className="text-gray-900 text-sm sm:text-base">{post.date}</p>
        <p className="text-gray-800 text-sm sm:text-base">{post.author}</p>
      </div>
    </header>
  );
}
