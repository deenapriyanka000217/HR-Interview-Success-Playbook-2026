import React, { useState, useEffect } from 'react';
import { pixelTracker } from './utils/metaPixel';
import { UrgencyTicker } from './components/UrgencyTicker';
import { RecentPurchasePopup } from './components/RecentPurchasePopup';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { HeroFeatureSection } from './components/HeroFeatureSection';
import { RecruitmentProcessSection } from './components/RecruitmentProcessSection';
import { HrDocumentsSection } from './components/HrDocumentsSection';
import { PayrollExcelSection } from './components/PayrollExcelSection';
import { WhoIsThisForSection } from './components/WhoIsThisForSection';
import { ValueStackSection } from './components/ValueStackSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyDifferentSection } from './components/WhyDifferentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { PlaybookReaderModal } from './components/PlaybookReaderModal';
import { LegalModal } from './components/LegalModal';
import { ThankYouPage } from './components/ThankYouPage';
import { MetaPixelTrackerWidget } from './components/MetaPixelTracker';
import { handleCtaClick, getCtaLink, setCtaLink } from './utils/ctaConfig';
import { Link, Settings, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isReaderOpen, setIsReaderOpen] = useState<boolean>(false);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [completedOrderId, setCompletedOrderId] = useState<string>('');
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'refund' | 'contact' | null>(null);

  // Thank You Page mode (triggered by short path e.g. /hr-thank-you, /thank-you, or URL param e.g. ?thank_you=true)
  const [showThankYouPage, setShowThankYouPage] = useState<boolean>(() => {
    const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const params = new URLSearchParams(window.location.search);
    const isShortUrl = pathname.includes('hr-thank-you') || pathname.includes('hrthankyou') || pathname.includes('thank-you') || pathname.includes('thankyou');
    const isQueryParam = params.get('thank_you') === 'true' || params.get('status') === 'success' || params.get('payment') === 'success';
    return isShortUrl || isQueryParam;
  });

  // CTA link editor state
  const [isLinkConfigOpen, setIsLinkConfigOpen] = useState<boolean>(false);
  const [customLinkInput, setCustomLinkInput] = useState<string>(getCtaLink());

  // Track PageView immediately when landing page mounts
  useEffect(() => {
    pixelTracker.trackPageView();
  }, []);

  const handleOpenSamplePreview = () => {
    setIsUnlocked(false);
    setIsReaderOpen(true);
  };

  const handleSaveCustomLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (customLinkInput.trim()) {
      setCtaLink(customLinkInput.trim());
      setIsLinkConfigOpen(false);
      alert('CTA payment/resend link saved successfully!');
    }
  };

  // If URL contains thank_you=true or buyer was redirected, render full Thank You Fulfillment Page
  if (showThankYouPage) {
    return (
      <ThankYouPage
        onBackToLanding={() => setShowThankYouPage(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#001B3D] font-sans text-white antialiased selection:bg-[#FFD700] selection:text-[#001B3D] pb-20 md:pb-0">
      
      {/* SCROLLABLE URGENCY ANNOUNCEMENT TICKER ABOVE HEADERS */}
      <UrgencyTicker />

      {/* Top Bar for CTA Link Configuration & Thank You Page Toggle */}
      <div className="bg-[#00142E] border-b border-blue-900/50 px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-blue-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-semibold">Razorpay Redirect Target: https://pages.razorpay.com/hrplaybook</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowThankYouPage(true)}
            className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer transition-colors bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded"
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Preview Thank You / Download Page</span>
          </button>

          <button
            onClick={() => setIsLinkConfigOpen(!isLinkConfigOpen)}
            className="hover:text-[#FFD700] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Settings className="w-3 h-3 text-[#FFD700]" />
            <span>Edit Resend/CTA Link</span>
          </button>
        </div>
      </div>

      {/* Resend Link Configuration Banner */}
      {isLinkConfigOpen && (
        <div className="bg-[#002B5C] border-b border-[#FFD700]/40 p-3 sm:p-4 animate-in slide-in-from-top-2 duration-200">
          <form onSubmit={handleSaveCustomLink} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2 items-center">
            <div className="flex-1 w-full relative">
              <Link className="w-3.5 h-3.5 text-[#FFD700] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                value={customLinkInput}
                onChange={(e) => setCustomLinkInput(e.target.value)}
                placeholder="Paste your custom resend or payment URL..."
                className="w-full pl-9 pr-3 py-1.5 bg-[#001B3D] border border-blue-400/40 rounded-lg text-xs text-white focus:outline-hidden focus:border-[#FFD700]"
                required
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto shrink-0">
              <button
                type="submit"
                className="flex-1 sm:flex-initial bg-[#FFD700] text-[#001B3D] font-bold px-3 py-1.5 rounded-lg text-xs cursor-pointer hover:brightness-110"
              >
                Save CTA Link
              </button>
              <button
                type="button"
                onClick={() => setIsLinkConfigOpen(false)}
                className="px-3 py-1.5 bg-[#001B3D] text-blue-300 rounded-lg text-xs hover:text-white cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* SECTION 1 — HERO */}
      <HeroSection
        onOpenSamplePreview={handleOpenSamplePreview}
      />

      {/* SECTION 2 — PROBLEM / PAIN POINT */}
      <ProblemSection />

      {/* SECTION 3 — WHAT YOU'LL GET */}
      <WhatYouGetSection
        onOpenSamplePreview={handleOpenSamplePreview}
      />

      {/* SECTION 4 — HERO FEATURE (50 HR Interview Questions) */}
      <HeroFeatureSection
        onOpenSamplePreview={handleOpenSamplePreview}
      />

      {/* SECTION 5 — PRACTICAL HR KNOWLEDGE (Recruitment Lifecycle) */}
      <RecruitmentProcessSection />

      {/* SECTION 6 — HR DOCUMENTS */}
      <HrDocumentsSection />

      {/* SECTION 7 — PAYROLL + EXCEL */}
      <PayrollExcelSection />

      {/* SECTION 8 — WHO IS THIS FOR? */}
      <WhoIsThisForSection />

      {/* SECTION 9 — WHAT YOU RECEIVE (Value Stack) */}
      <ValueStackSection />

      {/* SECTION 10 — HOW IT WORKS */}
      <HowItWorksSection />

      {/* SECTION 11 — WHY THIS GUIDE IS DIFFERENT */}
      <WhyDifferentSection />

      {/* SECTION 12 — 20+ SCROLLABLE TESTIMONIALS (NAMES & CITIES) */}
      <TestimonialsSection />

      {/* SECTION 13 — FAQ */}
      <FaqSection />

      {/* SECTION 14 — FINAL CTA */}
      <FinalCtaSection />

      {/* STICKY MOBILE CTA BAR (md:hidden) */}
      <StickyMobileBar />

      {/* RECENT PURCHASE POP-UP (25% Width Bottom Left) */}
      <RecentPurchasePopup />

      {/* PLAYBOOK READER & DOWNLOAD HUB MODAL */}
      <PlaybookReaderModal
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
        isUnlocked={isUnlocked}
        orderId={completedOrderId}
        onOpenCheckout={() => handleCtaClick()}
      />

      {/* LEGAL / POLICY MODAL */}
      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />

      {/* META PIXEL STATUS DEBUGGER (Bottom Corner Widget) */}
      <MetaPixelTrackerWidget />

    </div>
  );
}

