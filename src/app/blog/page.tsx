import { getAllPosts, Post } from '@/lib/posts';
import Link from 'next/link';
import ProgressTracker from '@/components/ProgressTracker';
import { format, parseISO } from 'date-fns';
import MonthSection from '@/components/MonthSection';

// Raggruppa i post per mese utilizzando il tipo Post
function groupPostsByMonth(posts: Post[]): Record<string, Post[]> {
  return posts.reduce((acc: Record<string, Post[]>, post) => {
    const date = new Date(post.date);
    const month = format(date, 'MMMM yyyy');
    if (!acc[month]) acc[month] = [];
    acc[month].push(post);
    return acc;
  }, {});
}

export default function BlogPage() {
  // Ottieni tutti i post, tipizzati come Post[]
  const posts = getAllPosts();
  const grouped = groupPostsByMonth(posts);
  // Ordina i mesi in ordine decrescente (dal più recente)
  const months = Object.keys(grouped).sort((a, b) => {
    return new Date(grouped[b][0].date).getTime() - new Date(grouped[a][0].date).getTime();
  });

  return (
    <div className="py-8 max-w-2xl mx-auto">
      {/* Barra di progresso giornaliera */}
      <ProgressTracker startDate="2025-05-01" />

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 mt-8">
        Blog
      </h1>

      <div className="relative border-l-4 border-[#00DAFB]/40 ml-4">
        {months.map((month) => (
          <MonthSection key={month} month={month} posts={grouped[month]} />
        ))}
      </div>
    </div>
  );
}
