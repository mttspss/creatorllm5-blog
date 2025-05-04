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
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
      <div
        className="h-2 bg-[#00DAFB] transition-width duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
