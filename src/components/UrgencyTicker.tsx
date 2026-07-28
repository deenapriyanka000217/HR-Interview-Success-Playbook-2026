import React from 'react';
import { Sparkles, Zap, Clock } from 'lucide-react';

export const UrgencyTicker: React.FC = () => {
  const tickerItems = [
    '🔥 LAUNCH OFFER: ₹299 ONLY (REGULAR PRICE ₹999) — 70% DISCOUNT ACTIVE TODAY',
    '⚡ INSTANT DIGITAL ACCESS TO FULL 2026 HR PLAYBOOK PDF',
    '🎓 50 IMPORTANT HR INTERVIEW QUESTIONS WITH MODEL ANSWERS INCLUDED',
    '📑 RECRUITMENT WORKFLOWS, HR DOCUMENTS & PAYROLL FORMULAS',
    '⏰ LIMITED TIME OFFER — GET YOUR COPY NOW FOR ₹299'
  ];

  return (
    <div className="bg-[#00142E] text-[#FFD700] border-b border-blue-900/50 py-2.5 px-2 overflow-hidden relative z-30 font-sans text-xs font-bold tracking-wide">
      <div className="flex items-center gap-2 max-w-7xl mx-auto">
        <div className="bg-[#FFD700] text-[#001B3D] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase shrink-0 flex items-center gap-1 shadow-sm">
          <Zap className="w-3 h-3 fill-[#001B3D]" />
          <span>LIVE OFFER</span>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden whitespace-nowrap flex-1 relative">
          <div className="inline-block animate-marquee space-x-8 text-blue-100 font-semibold text-xs sm:text-sm">
            {tickerItems.concat(tickerItems).map((text, index) => (
              <span key={index} className="inline-flex items-center gap-2">
                <span className="text-[#FFD700] font-black">•</span>
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
