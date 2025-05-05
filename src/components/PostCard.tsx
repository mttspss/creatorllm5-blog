import Link from 'next/link';
import { Post } from '@/lib/posts';
import { format, parseISO } from 'date-fns';

function getReadingTime(text: string) {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="relative mb-8 ml-8">
      <span className="absolute -left-8 top-2 w-5 h-5 bg-[#00DAFB] border-4 border-white rounded-full z-10" />
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
        <header className="flex items-center gap-2 mb-2">
          <span className="text-lg mr-1" aria-label="calendar" title="Calendar post">📅</span>
          <time dateTime={post.date} className="text-sm text-gray-500">
            {format(parseISO(post.date), 'MMM d, yyyy')}
          </time>
        </header>
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          <Link href={`/blog/${post.id}`} className="hover:text-[#00DAFB] transition">
            {post.title}
          </Link>
        </h3>
        {post.description && (
          <p className="text-gray-600 mb-2">
            {post.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${post.id}`}
            className="text-[#00DAFB] font-semibold hover:underline text-sm"
          >
            Read more →
          </Link>
          <span className="ml-2 text-xs italic text-gray-400">{getReadingTime(post.content)}</span>
        </div>
      </div>
    </article>
  );
} 