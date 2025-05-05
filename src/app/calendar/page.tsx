import Calendar from '@/components/Calendar';
import { getAllPosts } from '@/lib/posts';

export default function CalendarPage() {
  const posts = getAllPosts();
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 tracking-tight">Blog Calendar</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
        Quickly see which days I have published posts. Click a day to read the posts, or navigate between months!
      </p>
      <Calendar posts={posts} />
    </div>
  );
} 