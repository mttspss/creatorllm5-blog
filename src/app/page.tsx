import Image from 'next/image';
import Calendar from '@/components/Calendar';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Top bar: frase allineata con la navbar */}
      {/* Hero section: centered text + image */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16" style={{ minHeight: '70vh', marginTop: '2.5rem' }}>
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center md:justify-center md:items-start" style={{ marginTop: '-2rem' }}>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
            Looking <span className="italic font-normal">for</span> my next
          </h1>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-2">
            opportunity
          </h1>
          <h1 className="text-3xl md:text-5xl font-normal text-gray-900 dark:text-white leading-tight mb-2">
            to make <span className="italic">a</span> <span className="font-black">change.</span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-normal text-gray-900 dark:text-white leading-tight">
            <span className="italic">The</span>{' '}
            <span className="font-black bg-[#00DAFB] text-black px-2 rounded inline-block">digital</span>{' '}
            way.
          </h1>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0" style={{ marginTop: '-2rem' }}>
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-[#00DAFB] flex items-center justify-center bg-[#00dafb]/10">
            <Image
              src="/robot-hand.jpg"
              alt="Robot and human hand"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
      {/* Sotto la frase principale */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start px-4 mt-2 mb-12">
        <span className="text-gray-700 dark:text-gray-300 font-normal text-base md:text-lg">
          And this, is my journey to launch 12 startups in 12 months
        </span>
      </div>
      {/* Calendario */}
      <section className="max-w-4xl mx-auto w-full px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-8 md:mt-0">
          My journey, day by day
        </h2>
        <Calendar posts={posts} />
      </section>
    </div>
  );
}
