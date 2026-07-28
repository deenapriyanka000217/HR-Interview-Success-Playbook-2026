import React from 'react';
import { VALUE_STACK } from '../data/playbookData';
import { handleCtaClick } from '../utils/ctaConfig';
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Lock } from 'lucide-react';

interface ValueStackSectionProps {
  onOpenCheckout?: () => void;
}

export const ValueStackSection: React.FC<ValueStackSectionProps> = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#00142E] text-white border-b border-blue-900/40">
      <div className="max-w-4xl mx-auto">
        
        {/* Premium Value Box */}
        <div className="bg-[#002B5C] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#FFD700]/50 relative overflow-hidden space-y-8">
          
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#001B3D] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete All-In-One Bundle</span>
            </div>
            
            <span className="text-xs font-bold text-blue-200">
              Limited-Time Launch Price
            </span>
          </div>

          {/* Title */}
          <div className="space-y-2 border-b border-blue-800 pb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              HR INTERVIEW SUCCESS PLAYBOOK 2026
            </h2>
            <p className="text-blue-100 text-sm sm:text-base font-medium">
              Everything you need to step into your next HR interview with maximum confidence.
            </p>
          </div>

          {/* Value Checklist */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase text-[#FFD700] tracking-wider">
              You Receive Everything Listed Below:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {VALUE_STACK.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-[#001B3D] border border-blue-400/20 p-3 rounded-xl text-xs sm:text-sm text-blue-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & CTA Block */}
          <div className="bg-[#001B3D] border border-blue-400/30 rounded-2xl p-6 text-center space-y-5">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-3">
                <span className="text-blue-300/70 text-sm sm:text-base line-through decoration-red-500 decoration-2">
                  Regular Price: ₹999
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded text-xs font-bold">
                  SAVE ₹700 TODAY
                </span>
              </div>

              <div className="flex items-baseline justify-center gap-2 pt-1">
                <span className="text-xs font-bold text-blue-300 uppercase">TODAY:</span>
                <span className="text-4xl sm:text-5xl font-black text-[#FFD700] tracking-tight">
                  ₹299
                </span>
                <span className="text-xs text-blue-300 uppercase font-bold">ONE-TIME PAYMENT</span>
              </div>
            </div>

            <button
              onClick={() => handleCtaClick()}
              id="value-stack-cta-btn"
              className="w-full bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-3.5 sm:py-4 px-2.5 sm:px-6 rounded-xl text-xs sm:text-base lg:text-xl shadow-xl transition-transform flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap"
            >
              <span className="whitespace-nowrap truncate">GET INSTANT ACCESS FOR ₹299</span>
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-blue-300 pt-1">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                256-Bit SSL Encryption
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
                Instant PDF Access
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
