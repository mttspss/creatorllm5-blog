import { getAllPosts } from '@/lib/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://creatorllm.vercel.app';
  const staticPages = [
    '',
    '/blog',
    '/calendar',
  ];
  const posts = getAllPosts();

  const urls = [
    ...staticPages.map((path) => `${baseUrl}${path}`),
    ...posts.map((post) => `${baseUrl}/blog/${post.id}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `<url><loc>${url}</loc></url>`
    )
    .join('\n  ')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 