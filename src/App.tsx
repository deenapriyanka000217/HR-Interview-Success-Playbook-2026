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
import { handleCtaClick } from './utils/ctaConfig';

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

  // Track PageView immediately when landing page mounts
  useEffect(() => {
    pixelTracker.trackPageView();
  }, []);

  const handleOpenSamplePreview = () => {
    setIsUnlocked(false);
    setIsReaderOpen(true);
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

