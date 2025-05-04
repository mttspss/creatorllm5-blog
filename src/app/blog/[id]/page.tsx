import { getPostData, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  let post;
  try {
    post = await getPostData(params.id);
  } catch {
    notFound();
  }

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
} 