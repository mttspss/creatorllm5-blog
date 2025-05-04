import { getPostData, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const post = await getPostData(params.id);

    return (
      <article className="prose prose-lg mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-gray-500 mb-8">
          {new Date(post.date).toLocaleDateString('it-IT', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    );
  } catch (error) {
    notFound();
  }
} 