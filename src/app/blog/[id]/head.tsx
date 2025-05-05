import { getPostData } from '@/lib/posts';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await getPostData(params.id);
  const title = post.title || "creatorLLM's Blog";
  const description = post.description || 'A personal blog about building 12 startups in 12 months.';
  const url = `https://creatorllm.vercel.app/blog/${params.id}`;
  // Puoi personalizzare l'immagine se vuoi
  const ogImage = `https://creatorllm.vercel.app/og-default.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Head() {
  // Next.js userà generateMetadata
  return null;
} 