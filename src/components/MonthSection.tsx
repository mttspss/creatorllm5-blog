import { Post } from '@/lib/posts';
import PostCard from './PostCard';

export default function MonthSection({
  month,
  posts,
}: {
  month: string;
  posts: Post[];
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 ml-4 text-xl font-bold text-[#00DAFB]">
        {month}
      </h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
} 