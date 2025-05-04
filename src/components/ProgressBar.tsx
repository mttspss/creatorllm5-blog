// src/components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  date: string;          // la data del post, es. '2025-03-20'
  totalDays?: number;    // default 365
  startDate?: string;    // data di partenza del diario
}

export default function ProgressBar({
  date,
  totalDays = 365,
  startDate = '2025-01-05',
}: ProgressBarProps) {
  // calcola diff in giorni (inclusivo)
  const start   = new Date(startDate);
  const current = new Date(date);
  const diffMs  = current.getTime() - start.getTime();
  const rawDay  = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  const dayNum  = Math.min(Math.max(rawDay, 1), totalDays);
  const pct     = Math.round((dayNum / totalDays) * 100);

  return (
    <div className="my-6">
      {/* testo Day X of Y */}
      <div className="flex justify-between text-sm font-medium mb-1">
        <span>Day {dayNum} of {totalDays}</span>
        <span>{pct}%</span>
      </div>
      {/* barra di progresso */}
      <div className="w-full bg-gray-200 rounded h-2">
        <div
          className="h-2 rounded bg-blue-500 transition-width duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
