import React from 'react';

interface ProgressTrackerProps {
  /** Data di inizio del conteggio in formato YYYY-MM-DD */
  startDate: string;
  /** Numero totale di giorni nel periodo (default 365) */
  totalDays?: number;
}

export default function ProgressTracker({
  startDate,
  totalDays = 365,
}: ProgressTrackerProps) {
  const now = new Date();
  const start = new Date(startDate);
  const diffMs = now.getTime() - start.getTime();
  const rawDay = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  const dayNum = Math.min(Math.max(rawDay, 1), totalDays);
  const pct = Math.round((dayNum / totalDays) * 100);

  return (
    <div className="w-full bg-gray-200 rounded h-4 mb-4 mt-2">
      <div
        className="h-4 bg-[#00DAFB] rounded transition-width duration-500"
        style={{ width: `${pct}%` }}
      />
      <div className="flex justify-between text-xs text-gray-700 mt-1 px-1">
        <span>Day {dayNum} of {totalDays}</span>
        <span>{pct}%</span>
      </div>
    </div>
  );
}
