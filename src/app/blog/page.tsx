import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href={`/blog/${post.id}`} className="hover:text-indigo-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('it-IT', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 