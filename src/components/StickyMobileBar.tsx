import React from 'react';
import { ArrowRight } from 'lucide-react';
import { handleCtaClick } from '../utils/ctaConfig';

interface StickyMobileBarProps {
  onOpenCheckout?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#00142E]/95 backdrop-blur-md border-t border-blue-900/60 p-3 shadow-2xl md:hidden">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Product & Price Info */}
        <div className="space-y-0.5">
          <p className="text-[11px] font-extrabold text-[#FFD700] truncate max-w-[140px] uppercase tracking-wide">
            HR PLAYBOOK 2026
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-blue-300/60 text-[10px] line-through">₹999</span>
            <span className="text-base font-black text-white">₹299</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => handleCtaClick()}
          id="sticky-mobile-cta"
          className="bg-[#FFD700] hover:brightness-110 text-[#001B3D] font-black px-4 py-2.5 rounded-xl text-xs shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95 transition-transform shrink-0"
        >
          <span>GET INSTANT ACCESS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
