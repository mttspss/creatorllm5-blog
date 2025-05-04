"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:scale-110 transition-transform"
    >
      {dark ? (
        <span role="img" aria-label="Light mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark mode">🌙</span>
      )}
    </button>
  );
} 