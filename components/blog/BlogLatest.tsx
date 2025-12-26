import Link from "next/link";
import { type BlogPost } from "@/lib/blog";
import Image from "next/image";

interface BlogLatestProps {
  post: BlogPost;
}

export function BlogLatest({ post }: BlogLatestProps) {
  return (
    <div className="group flex flex-col sm:grid sm:grid-cols-5 gap-4 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-2">
      <div className="overflow-hidden rounded-xl  mb-2 sm:mb-0 sm:col-span-2">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-28 object-cover rounded-xl group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
          width={200}
          height={200}
          draggable={false}
        />
      </div>
      <article className="md:flex flex-col justify-between md:col-span-3 md:h-full">
        <div className="flex-1">
          <Link href={`/blog/${post.slug}`} className="w-full">
            <h3 className="text-sm sm:text-base font-semibold mb-2 line-clamp-1">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-700 mb-4 text-xs md:text-sm line-clamp-2">
            {post.description}
          </p>
        </div>
        {/* <div className="mt-auto">
            Read more →
            </div> */}
      </article>
    </div>
  );
}
