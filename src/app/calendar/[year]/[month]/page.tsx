import Link from 'next/link';

type Props = {
  params: {
    year: string;
    month: string;
  };
};

export default async function CalendarMonth({ params }: Props) {
  const { year, month } = params;
  
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