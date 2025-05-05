"use client";

import Link from 'next/link';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths, subMonths } from 'date-fns';
import { useState, useMemo, useRef, useEffect } from 'react';
import type { Post } from '@/lib/posts';

interface CalendarProps {
  posts: Post[];
}

export default function Calendar({ posts }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

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

  // Generate years range based on posts (or +/- 2 years from current)
  const years = useMemo(() => {
    const postYears = posts
      .map((p) => new Date(p.date).getFullYear())
      .filter((y) => !isNaN(y));
    const minYear = Math.min(...postYears, new Date().getFullYear() - 2);
    const maxYear = Math.max(...postYears, new Date().getFullYear() + 2);
    return Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);
  }, [posts]);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  // Chiudi il picker quando si clicca fuori
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value, 10);
    setCurrentMonth((prev) => new Date(prev.getFullYear(), newMonth, 1));
  };
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value, 10);
    setCurrentMonth((prev) => new Date(newYear, prev.getMonth(), 1));
  };

  return (
    <div className="bg-gradient-to-br from-[#00DAFB]/80 to-[#00DAFB]/90 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-4 md:p-6 transition-colors duration-500">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          className="rounded-full p-2 hover:bg-[#00DAFB]/20 dark:hover:bg-gray-700 transition"
          aria-label="Previous month"
        >
          <span className="text-xl">←</span>
        </button>
        <div className="relative" ref={pickerRef}>
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="text-xl md:text-2xl font-semibold text-[#00DAFB] hover:text-[#00DAFB]/90 transition-colors px-4 py-2 rounded-lg bg-white/90"
          >
            {format(currentMonth, 'MMMM yyyy')}
          </button>
          {showPicker && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-[#00DAFB]/20 dark:border-gray-700 z-10">
              <div className="flex gap-2">
                <select
                  value={currentMonth.getMonth()}
                  onChange={handleMonthChange}
                  className="rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 border border-[#00DAFB]/30 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00DAFB]"
                  aria-label="Select month"
                >
                  {months.map((m, idx) => (
                    <option key={m} value={idx}>{m}</option>
                  ))}
                </select>
                <select
                  value={currentMonth.getFullYear()}
                  onChange={handleYearChange}
                  className="rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 border border-[#00DAFB]/30 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00DAFB]"
                  aria-label="Select year"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={handleNext}
          className="rounded-full p-2 hover:bg-[#00DAFB]/20 dark:hover:bg-gray-700 transition"
          aria-label="Next month"
        >
          <span className="text-xl">→</span>
        </button>
      </div>
      <div className={`grid grid-cols-7 gap-1 md:gap-2 text-center transition-transform duration-200 ${animDir === 'left' ? '-translate-x-10 opacity-0' : ''} ${animDir === 'right' ? 'translate-x-10 opacity-0' : ''}`}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm py-1">
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
              className={`min-h-[60px] md:min-h-[80px] p-1 md:p-2 border border-[#00DAFB]/20 dark:border-gray-700 rounded-lg flex flex-col items-center justify-start transition-all duration-200 group ${
                isCurrentMonth ? 'bg-white dark:bg-gray-900' : 'bg-[#00DAFB]/5 dark:bg-gray-800 opacity-60'
              } ${isCurrentDay ? 'ring-2 ring-[#00DAFB] dark:ring-[#00DAFB]' : ''} hover:scale-105 hover:z-10`}
            >
              <div className={`text-xs md:text-sm font-medium mb-1 ${isCurrentDay ? 'text-[#00DAFB] dark:text-[#00DAFB]' : 'text-gray-900 dark:text-gray-400'}`}>
                {format(day, 'd')}
              </div>
              {dayPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="block text-xs md:text-sm text-gray-900 dark:text-white hover:text-[#00DAFB] dark:hover:text-[#00DAFB] bg-[#00DAFB]/30 dark:bg-gray-700 rounded px-1 py-0.5 mb-1 truncate w-full transition-colors duration-200"
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