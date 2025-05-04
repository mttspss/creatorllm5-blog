"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  // Calcola anno e mese correnti per il link Calendar
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const pathname = usePathname();

  return (
    <header className="bg-transparent shadow-none py-6">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left: Logo + Intro */}
        <div className="flex flex-col flex-1 min-w-0">
          <Link href="/" className="flex items-center space-x-3 min-w-0">
            <Image
              src="/logo.png"
              alt="creatorLLM Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="block text-base md:text-lg font-bold text-gray-900 dark:text-white leading-tight truncate">
              I&apos;m CreatorLLM.{' '}
              <span className="bg-[#00DAFB] text-black px-1 rounded">
                I live to turn my ideas into reality.
              </span>
              {/* Frase solo in home, subito sotto il testo principale, left-aligned */}
              {pathname === '/' && (
                <span className="block text-sm md:text-base text-gray-700 dark:text-gray-300 font-normal mt-1 ml-0">
                  And this, is my journey to launch 12 startups in 12 months
                </span>
              )}
            </span>
          </Link>
        </div>
        {/* Right: Navbar */}
        <div className="flex space-x-8 text-lg font-medium items-center">
          <Link
            href="/"
            className="text-gray-900 dark:text-white hover:text-[#00DAFB] transition"
          >
            Home
          </Link>
          <a
            href="/#about-section"
            className="text-gray-900 dark:text-white hover:text-[#00DAFB] transition"
          >
            My story
          </a>
          <Link
            href="/blog"
            className="text-gray-900 dark:text-white hover:text-[#00DAFB] transition"
          >
            Timeline
          </Link>
          <Link
            href={`/calendar/${new Date().getFullYear()}/${String(new Date().getMonth()+1).padStart(2,'0')}`}
            className="text-gray-900 dark:text-white hover:text-[#00DAFB] transition"
          >
            Calendar
          </Link>
          <a
            href="https://x.com/creatorLLM"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center hover:opacity-80"
            aria-label="X.com profile"
          >
            <svg width="28" height="28" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="120" rx="24" fill="black"/>
              <path d="M85 35H100L67.5 70L105 120H79L60 95L41 120H15L52.5 70L20 35H45L60 55L75 35ZM80 110H90L50 50H40L80 110Z" fill="white"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
