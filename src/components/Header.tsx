import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-transparent shadow-none py-6">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left: Logo + Intro */}
        <Link href="/" className="flex items-center space-x-3 flex-1 min-w-0">
          {/* Logo rotondo 40×40 */}
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
          </span>
        </Link>

        {/* Right: Navbar */}
        <div className="flex space-x-8 text-lg font-medium">
          <Link
            href="/"
            className="text-gray-900 dark:text-white hover:text-[#00DAFB] transition"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-gray-900 dark:text-white hover:text-[#00DAFB] transition"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
