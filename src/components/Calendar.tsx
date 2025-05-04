"use client";

import Link from 'next/link';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths, subMonths } from 'date-fns';
import { useState } from 'react';
import type { Post } from '@/lib/posts';

interface CalendarProps {
  posts: Post[];
}

export default function Calendar({ posts }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Group posts by date, skipping invalid dates
  const postsByDate = posts.reduce((acc, post) => {
    if (!post.date) return acc;
    const dateObj = new Date(post.date);
    if (isNaN(dateObj.getTime())) return acc;
    const date = dateObj.toISOString().split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  const handlePrev = () => {
    setAnimDir('left');
    setTimeout(() => {
      setCurrentMonth(subMonths(currentMonth, 1));
      setAnimDir(null);
    }, 200);
  };
  const handleNext = () => {
    setAnimDir('right');
    setTimeout(() => {
      setCurrentMonth(addMonths(currentMonth, 1));
      setAnimDir(null);
    }, 200);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-4 md:p-6 transition-colors duration-500">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          className="rounded-full p-2 hover:bg-indigo-100 dark:hover:bg-gray-700 transition"
          aria-label="Previous month"
        >
          <span className="text-xl">←</span>
        </button>
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-900 dark:text-indigo-100">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          onClick={handleNext}
          className="rounded-full p-2 hover:bg-indigo-100 dark:hover:bg-gray-700 transition"
          aria-label="Next month"
        >
          <span className="text-xl">→</span>
        </button>
      </div>
      <div className={`grid grid-cols-7 gap-1 md:gap-2 text-center transition-transform duration-200 ${animDir === 'left' ? '-translate-x-10 opacity-0' : ''} ${animDir === 'right' ? 'translate-x-10 opacity-0' : ''}`}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="font-semibold text-indigo-700 dark:text-indigo-200 text-xs md:text-sm py-1">
            {day}
          </div>
        ))}
        {days.map((day) => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const dayPosts = postsByDate[dateStr] || [];
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isCurrentDay = isToday(day);

          return (
            <div
              key={dateStr}
              className={`min-h-[60px] md:min-h-[80px] p-1 md:p-2 border border-indigo-100 dark:border-gray-700 rounded-lg flex flex-col items-center justify-start transition-all duration-200 group ${
                isCurrentMonth ? 'bg-white dark:bg-gray-900' : 'bg-indigo-50 dark:bg-gray-800 opacity-60'
              } ${isCurrentDay ? 'ring-2 ring-indigo-400 dark:ring-indigo-600' : ''} hover:scale-105 hover:z-10`}
            >
              <div className={`text-xs md:text-sm font-medium mb-1 ${isCurrentDay ? 'text-indigo-600 dark:text-indigo-300' : 'text-gray-500 dark:text-gray-400'}`}>
                {format(day, 'd')}
              </div>
              {dayPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="block text-xs md:text-sm text-indigo-700 dark:text-indigo-200 hover:text-indigo-900 dark:hover:text-yellow-300 bg-indigo-100 dark:bg-gray-700 rounded px-1 py-0.5 mb-1 truncate w-full transition-colors duration-200"
                >
                  {post.title}
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
} 