"use client";
import Image from 'next/image';
import { useRef } from 'react';
import ProgressTracker from '@/components/ProgressTracker';

export default function Home() {
  const storyRef = useRef<HTMLDivElement>(null);
  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-500 flex flex-col">
      {/* Hero section: centered text + image */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16" style={{ minHeight: '70vh', marginTop: '2.5rem' }}>
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center md:justify-center md:items-start" style={{ marginTop: '-2rem' }}>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
            Looking <span className="italic font-normal">for</span> my next
          </h1>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-2">
            opportunity
          </h1>
          <h1 className="text-3xl md:text-5xl font-normal text-gray-900 leading-tight mb-2">
            to make <span className="italic">a</span> <span className="font-black">change.</span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-normal text-gray-900 leading-tight">
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
      {/* Freccia animata verso il basso, subito dopo la hero e prima della barra del progresso */}
      <div className="flex justify-center mt-2">
        <button
          onClick={scrollToStory}
          className="animate-bounce focus:outline-none drop-shadow-lg"
          aria-label="Scroll to my story"
        >
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
            <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="#00DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <ProgressTracker startDate="2025-05-01" />
      {/* Sezione My Story con id per scroll */}
      <div ref={storyRef} id="my-story" className="max-w-3xl mx-auto w-full px-4 py-16 mt-24 bg-white/80 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">My Story</h2>
        <div className="text-gray-700 text-lg leading-relaxed space-y-4">
          <p>this is my story:</p>
          <p>from hitting rock bottom to taking on the insane <span className="font-semibold text-[#00DAFB]">@levelsio</span> challenge.<br />12 startups in 12 months.</p>
          <p>nothing in my life has ever been handed to me, i&apos;ve had to fight for everything.<br />so many past goals and projects, not quite startups or digital products but life choices and paths, have ended in what felt like failure.</p>
          <p>this year, I woke up feeling empty again, haunted day and night by the anxiety of failing and with the shadow of the future.</p>
          <p>but I&apos;m betting on myself again, because you know what? it&apos;s not about how many times you fall, it&apos;s about how many times you rise.</p>
          <p>a few months ago, i ended up into this incredible world.<br />the passion that <span className="font-semibold text-[#00DAFB]">@apollonator3000</span> ignited in me was unbelievable, it felt like a light in a dark room.<br />his work has changed many things for me, forever grateful: i&apos;ve discovered new parts of myself, even through simple prompts, learning how to navigate this space, unlocking something amazing every single day.</p>
          <p>then I came across <span className="font-semibold text-[#00DAFB]">@levelsio</span>.<br />seeing someone so openly share their journey, their wins and losses, especially his story of overcoming depression while building, gave me a flicker of hope I hadn&apos;t felt in years.</p>
          <p>and like <span className="font-semibold text-[#00DAFB]">@levelsio</span> i want to overcome the darkness with his 12 startup in 12 months challenge.</p>
          <p>that&apos;s why i&apos;ve decided to start this account.<br />because i want to share my journey, my process, my idea, my emotions.</p>
          <p>because, against all odds, I believe in myself again.</p>
          <p>it will not be just about building - it&apos;s about rebuilding me.</p>
        </div>
      </div>
    </div>
  );
}
