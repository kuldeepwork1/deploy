import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const site = "https://sbzee.com";
  const posts = getAllPosts();

  const items = posts
    .map((p) => {
      const url = `${site}/blog/${p.slug}`;
      return `
  <item>
    <title><![CDATA[${p.title}]]></title>
    <link>${url}</link>
    <guid>${url}</guid>
    <pubDate>${p.date}</pubDate>
    <description><![CDATA[${p.description}]]></description>
  </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Sbzee Blog</title>
    <link>${site}/blog</link>
    <description>Articles from Sbzee about fruits, vegetables, and seasonal eating.</description>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
