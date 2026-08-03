import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Eye, ArrowRight, Star } from 'lucide-react';
import { HERO_BENEFITS } from '../data/playbookData';
import { handleCtaClick } from '../utils/ctaConfig';
import playbookMockupImg from '../assets/images/hr_playbook_mockup_1785236765701.jpg';

interface HeroSectionProps {
  onOpenCheckout?: () => void;
  onOpenSamplePreview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSamplePreview }) => {
  return (
    <section className="relative bg-[#001B3D] text-white pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 overflow-hidden border-b border-blue-900/50">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#FFD700]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Trust Badge */}
        <div className="flex justify-center lg:justify-start mb-5">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-[#FFD700]/40 text-[#FFD700] px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold shadow-sm tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
            <span>CRACK YOUR HR INTERVIEW IN THE NEXT 7 DAYS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase">
                CRACK YOUR HR INTERVIEW IN THE NEXT 7 DAYS
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#FFD700]">
                Stop Guessing Interview Answers.
              </p>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Learn the exact HR questions recruiters ask.
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 max-w-xl mx-auto lg:mx-0">
              {HERO_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-center justify-start gap-2.5 text-white text-sm sm:text-base font-bold text-left bg-[#002B5C]/60 border border-blue-400/20 px-3.5 py-2 rounded-xl">
                  <div className="bg-emerald-500/20 text-emerald-400 p-1 rounded-full shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Pricing Box */}
            <div className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-4 sm:p-5 shadow-xl max-w-lg mx-auto lg:mx-0 space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <span className="text-blue-300/70 text-sm line-through decoration-red-500 decoration-2">
                  Regular Price ₹999
                </span>
                <span className="bg-[#FFD700] text-[#001B3D] px-2.5 py-0.5 rounded-md text-xs font-black uppercase tracking-wider">
                  Limited Offer 70% OFF
                </span>
              </div>

              {/* Centered Price Arrangement */}
              <div className="flex flex-col items-center lg:items-start space-y-1 py-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#FFD700] tracking-tight">
                    Only ₹299 Today
                  </span>
                </div>
                <p className="text-xs text-blue-200 font-medium text-center lg:text-left">
                  One-Time Payment • Digital PDF • Instant Access
                </p>
              </div>

              {/* Main CTA Button */}
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={() => handleCtaClick()}
                  id="hero-primary-cta"
                  className="w-full bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-3.5 sm:py-4 px-2.5 sm:px-6 rounded-xl shadow-lg shadow-amber-500/20 text-xs sm:text-base lg:text-lg tracking-wide transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span className="whitespace-nowrap truncate">GET THE HR PLAYBOOK – ₹299</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-200 px-1 pt-0.5">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Secure Payment & Direct Resend Link</span>
                  </div>
                  <button
                    onClick={onOpenSamplePreview}
                    id="hero-sample-preview-btn"
                    className="inline-flex items-center gap-1 text-[#FFD700] hover:underline font-bold cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Look Inside Sample</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Micro rating / social proof banner */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-1 text-xs text-blue-200">
              <div className="flex text-[#FFD700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <span>Trusted by 1,400+ HR Freshers & MBA Students across India</span>
            </div>

          </div>

          {/* Right Column: 3D Product Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group max-w-xs sm:max-w-sm lg:max-w-none w-full">
              {/* Subtle background glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-[#FFD700] to-blue-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative bg-[#002B5C] border border-blue-400/30 rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-col items-center">
                <img
                  src={playbookMockupImg}
                  alt="HR Interview Success Playbook 2026 - 3D Mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[460px] object-contain rounded-xl shadow-lg border border-blue-900/60 block"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedPublic) {
                      target.dataset.triedPublic = "true";
                      target.src = "/hr_playbook_mockup_1785236765701.jpg";
                    } else if (!target.dataset.triedAssets) {
                      target.dataset.triedAssets = "true";
                      target.src = "/assets/images/hr_playbook_mockup_1785236765701.jpg";
                    }
                  }}
                />
                
                {/* Instant Access & Price Badge */}
                <div className="w-full bg-[#001B3D] border border-[#FFD700]/50 rounded-xl p-2.5 sm:p-3 shadow-xl flex items-center justify-between mt-3">
                  <div className="text-left">
                    <p className="text-[11px] sm:text-xs font-bold text-[#FFD700] uppercase tracking-wider">Instant Access PDF</p>
                    <p className="text-[11px] sm:text-xs text-blue-200 font-medium">50 Q&As • Payroll • HR Docs</p>
                  </div>
                  <div className="bg-[#FFD700] text-[#001B3D] text-xs font-black px-2.5 py-1 rounded-lg shrink-0">
                    ₹299
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile quick action indicator */}
            <p className="text-center text-xs text-blue-300 mt-3 sm:hidden">
              📱 Formatted for seamless reading on Mobile, Tablet & Laptop
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
