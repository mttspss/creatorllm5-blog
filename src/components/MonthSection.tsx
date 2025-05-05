"use client";
import { useState } from 'react';
import { Post } from '@/lib/posts';
import PostCard from './PostCard';

export default function MonthSection({
  month,
  posts,
}: {
  month: string;
  posts: Post[];
}) {
  const [open, setOpen] = useState(true);
  return (
    <section className="mb-10">
      <button
        className="mb-4 ml-4 text-xl font-bold text-[#00DAFB] flex items-center gap-2 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`month-posts-${month}`}
      >
        <span className={`transition-transform duration-200 ${open ? 'rotate-90' : 'rotate-0'}`}>▶</span>
        {month}
      </button>
      <div id={`month-posts-${month}`} className={open ? '' : 'hidden'}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
} 