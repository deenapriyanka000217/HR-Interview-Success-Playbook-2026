import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Sparkles } from 'lucide-react';
import { handleCtaClick } from '../utils/ctaConfig';

interface FinalCtaSectionProps {
  onOpenCheckout?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#00142E] text-white border-t border-blue-900/50 relative overflow-hidden text-center">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-blue-600/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        
        <div className="inline-flex items-center gap-2 bg-[#002B5C] text-[#FFD700] border border-blue-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Preparing Today</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase">
          YOUR NEXT HR INTERVIEW DESERVES BETTER PREPARATION.
        </h2>

        <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Build stronger HR fundamentals, prepare important interview questions and approach your next opportunity with a structured plan.
        </p>

        <div className="bg-[#002B5C] border border-blue-400/30 rounded-2xl p-6 sm:p-8 space-y-5 max-w-xl mx-auto shadow-2xl">
          <div className="space-y-1">
            <h3 className="text-lg font-extrabold text-[#FFD700] tracking-wide uppercase">
              HR INTERVIEW SUCCESS PLAYBOOK 2026
            </h3>
            
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="text-blue-300/70 text-base line-through decoration-red-500 decoration-2">
                ₹999
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white">
                →
              </span>
              <span className="text-3xl sm:text-4xl font-black text-[#FFD700]">
                ₹299
              </span>
            </div>
          </div>

          <button
            onClick={() => handleCtaClick()}
            id="final-cta-btn"
            className="w-full bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-3.5 sm:py-4 px-2.5 sm:px-6 rounded-xl text-xs sm:text-base lg:text-xl shadow-xl transition-transform flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap"
          >
            <span className="whitespace-nowrap truncate">GET THE PLAYBOOK NOW – ₹299</span>
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
          </button>

          <p className="text-xs text-blue-300 font-medium pt-1">
            One-Time Payment • Digital Product • Direct Resend Access
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-blue-300 pt-2 border-t border-blue-800">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              Secure 256-Bit SSL Payment
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
              Instant Download
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
