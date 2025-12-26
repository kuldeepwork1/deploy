import Link from "next/link";
import { type BlogPost } from "@/lib/blog";
import Image from "next/image";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group flex flex-col sm:grid sm:grid-cols-5 gap-4 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-4">
      <Link
        href={`/blog/${post.slug}`}
        className="overflow-hidden rounded-xl mb-2 sm:mb-0 sm:col-span-2 block"
      >
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
          width={200}
          height={200}
          draggable={false}
        />
      </Link>
      <article className="md:flex flex-col justify-between md:col-span-3 md:h-full">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base line-clamp-3">
            {post.description}
          </p>
        </div>
        <div className="mt-auto">
          <Link
            href={`/blog/${post.slug}`}
            className="text-accent-600 hover:text-accent-700 font-medium text-sm sm:text-base block text-left sm:text-right"
          >
            Read more →
          </Link>
        </div>
      </article>
    </div>
  );
}
