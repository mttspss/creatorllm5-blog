import Link from 'next/link';

export default function CalendarMonth({ params: { year, month } }: { params: { year: string; month: string } }) {
  return (
    <div className="p-4 max-w-4xl mx-auto relative">
      <Link
        href={`/calendar/${new Date().getFullYear()}/${String(new Date().getMonth()+1).padStart(2,'0')}`}
        className="absolute top-0 right-0 text-sm text-[#00DAFB] hover:underline"
      >
        Today →
      </Link>
      <h1 className="text-2xl font-bold mb-4">📆 {year}/{month}</h1>
      {/* ...griglia... */}
    </div>
  );
} 