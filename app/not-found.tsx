import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "404 - Page Not Found",
    description:
      "The page you are looking for does not exist. Navigate back to the homepage.",
    robots: { index: false, follow: true },
  };
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6 text-center">
      <h1 className="text-6xl font-bold mb-4" style={{ color: "red" }}>
        404
      </h1>

      <h2 className="text-2xl mb-4 font-semibold">Page Not Found</h2>

      <p className="mb-6 max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It may have been
        moved or deleted.
      </p>

      <Link href="/">
        <button className="btn-accent px-6 py-3 rounded transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
