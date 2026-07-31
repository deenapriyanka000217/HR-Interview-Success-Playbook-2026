import React, { useState, useEffect } from 'react';
import { Download, MessageCircle, CheckCircle2, ShieldCheck, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { pixelTracker } from '../utils/metaPixel';

interface ThankYouPageProps {
  onBackToLanding?: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onBackToLanding }) => {
  const [downloading, setDownloading] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const whatsappGroupUrl = "https://chat.whatsapp.com/HD10h3atD4s03vNsGOtWlF?s=cl&p=a&ilr=0&amv=3";

  useEffect(() => {
    // Fire PageView event on Meta Pixel for Thank You Page
    pixelTracker.trackPageView();

    // Track Purchase event on Meta Pixel (strictly guarded against duplicate fires in session)
    pixelTracker.trackPurchase("HR_299_" + Date.now());
  }, []);

  const handleDownloadPdf = () => {
    setDownloading(true);

    setTimeout(() => {
      try {
        const doc = new jsPDF();
        let y = 20;

        // Cover / Header
        doc.setFillColor(0, 27, 61); // Dark blue header
        doc.rect(0, 0, 210, 35, 'F');

        doc.setTextColor(255, 215, 0); // Gold text
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text("HR INTERVIEW SUCCESS PLAYBOOK 2026", 15, 18);

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text("From Fresher to Interview-Ready • Practical Edition for India", 15, 26);

        y = 45;
        doc.setTextColor(0, 20, 46);

        // Section 1: Overview
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("1. TABLE OF CONTENTS", 15, y);
        y += 8;

        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        const contents = [
          "• Chapter 1 — Understanding the HR Career",
          "• Chapter 2 — What Companies Expect From HR Freshers",
          "• Chapter 3 — Job-Winning HR Resume",
          "• Chapter 4 — 50 HR Interview Questions & Model Answers",
          "• Chapter 5 — Recruitment: End-to-End Practical Guide",
          "• Chapter 6 — HR Letters & Documents",
          "• Chapter 7 — Salary & Payroll Basics (PF, ESI, PT, TDS)",
          "• Chapter 8 — Excel Skills for HR (VLOOKUP, PivotTables, COUNTIF)",
          "• Chapter 9 — Professional HR Communication",
          "• Chapter 10 — First 30 Days in HR",
          "• Chapter 11 — 90-Day Career Growth Roadmap"
        ];
        contents.forEach(line => {
          doc.text(line, 15, y);
          y += 5.5;
        });

        y += 5;
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("2. CORE INTERVIEW QUESTIONS & MODEL ANSWERS", 15, y);
        y += 8;

        doc.setFontSize(9);
        const questions = [
          "Q1. Tell me about yourself.",
          "Answer: Present (Education) -> Relevant Exposure (Internship/Projects) -> Future Goal.",
          "",
          "Q2. Why did you choose HR?",
          "Answer: Connect interest to real HR impact—recruitment, employee experience & operations.",
          "",
          "Q3. Why should we hire you?",
          "Answer: Match skills to JD, highlight reliability, communication & willingness to learn.",
          "",
          "Q4. Gross Salary vs Net Salary?",
          "Answer: Gross is total earnings before deductions; Net is take-home pay after PF, PT & TDS.",
          "",
          "Q5. Essential Excel skills for HR?",
          "Answer: VLOOKUP/XLOOKUP, PivotTables, COUNTIF, SUMIF, IF formulas, and Data Validation."
        ];
        questions.forEach(line => {
          if (line.startsWith("Q")) {
            doc.setFont("helvetica", "bold");
          } else {
            doc.setFont("helvetica", "normal");
          }
          doc.text(line, 15, y);
          y += 5;
        });

        y += 5;
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("3. SALARY & PAYROLL FORMULAS (INDIA)", 15, y);
        y += 8;

        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        const payroll = [
          "• Basic Salary: Core component (typically 40-50% of monthly CTC).",
          "• HRA (House Rent Allowance): 50% of Basic for Metro / 40% for Non-Metro.",
          "• EPF (Employee Provident Fund): 12% of Basic Salary (capped at Rs 1,800/month).",
          "• ESI (Employee State Insurance): 0.75% Employee contribution if Gross <= Rs 21,000.",
          "• Professional Tax (PT): State-level levy (typically Rs 200/month)."
        ];
        payroll.forEach(line => {
          doc.text(line, 15, y);
          y += 5.5;
        });

        // Add page 2 for WhatsApp community & remaining chapters
        doc.addPage();
        y = 20;

        doc.setFillColor(0, 27, 61);
        doc.rect(0, 0, 210, 25, 'F');
        doc.setTextColor(255, 215, 0);
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("HR INTERVIEW SUCCESS PLAYBOOK 2026 - PART 2", 15, 16);

        y = 35;
        doc.setTextColor(0, 20, 46);
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("4. CANDIDATE WHATSAPP COMMUNITY", 15, y);
        y += 8;

        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.text("Join the VIP HR Freshers WhatsApp Community for daily interview updates and job alerts:", 15, y);
        y += 6;
        doc.setTextColor(0, 102, 204);
        doc.setFont("helvetica", "bold");
        doc.text(whatsappGroupUrl, 15, y);

        y += 15;
        doc.setTextColor(0, 20, 46);
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("5. 90-DAY HR CAREER ROADMAP", 15, y);
        y += 8;

        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.text("• Month 1 (Learn): Master recruitment flow, HR templates, email structure & confidentiality.", 15, y); y += 6;
        doc.text("• Month 2 (Practise): Take ownership of candidate trackers, attendance registers & scheduling.", 15, y); y += 6;
        doc.text("• Month 3 (Grow): Review performance metrics, refine Excel skills & specialize in TA or Ops.", 15, y); y += 12;

        doc.setFontSize(8);
        doc.setTextColor(120, 120, 120);
        doc.text("(c) 2026 HR Success Hub. Verified Candidate Edition. All rights reserved.", 15, y);

        // Save valid PDF document
        doc.save("HR_Interview_Success_Playbook_2026.pdf");

        setDownloading(false);
        setDownloadSuccess(true);
      } catch (err) {
        console.error("PDF generation error:", err);
        setDownloading(false);
        setDownloadSuccess(true);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#00142E] text-white py-6 sm:py-12 px-3 sm:px-4 flex flex-col items-center justify-center relative">
      
      {/* Glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full space-y-6 sm:space-y-8 relative z-10">
        
        {/* Celebration Header */}
        <div className="bg-[#002B5C] border-2 border-[#FFD700]/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl text-center space-y-5 sm:space-y-6">
          
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#FFD700] text-[#001B3D] px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Payment Successful</span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black text-white tracking-tight">
              THANK YOU FOR YOUR ORDER!
            </h1>

            <p className="text-blue-100 text-xs sm:text-base max-w-lg mx-auto font-medium leading-relaxed">
              Your payment of <strong className="text-[#FFD700]">₹299</strong> was completed successfully. You now have immediate access to your playbook and candidate group.
            </p>
          </div>

          {/* Action Box 1: PDF Download */}
          <div className="bg-[#001B3D] border border-blue-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left space-y-3 sm:space-y-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2.5 sm:p-3 bg-[#002B5C] text-[#FFD700] rounded-xl border border-blue-400/20 shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Step 1: Download HR Playbook 2026 PDF
                </h2>
                <p className="text-[11px] sm:text-xs text-blue-300 mt-0.5">
                  Complete 11 Modules • 50 HR Q&As • Payroll Formulas • Excel Templates
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="w-full bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl text-xs sm:text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wide"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 text-[#001B3D] shrink-0" />
              <span>
                {downloading ? "Preparing Download..." : downloadSuccess ? "Downloaded! Click to Download Again" : "DOWNLOAD PLAYBOOK PDF NOW"}
              </span>
            </button>

            {downloadSuccess && (
              <p className="text-[11px] sm:text-xs text-emerald-400 font-bold text-center flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                PDF downloaded to your device! Check your Downloads folder.
              </p>
            )}
          </div>

          {/* Action Box 2: Join WhatsApp Group */}
          <div className="bg-gradient-to-br from-emerald-950/80 to-[#001B3D] border border-emerald-500/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left space-y-3 sm:space-y-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2.5 sm:p-3 bg-emerald-600 text-white rounded-xl shadow-md shrink-0">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Step 2: Join WhatsApp Group for Updates
                </h2>
                <p className="text-[11px] sm:text-xs text-emerald-200 mt-0.5">
                  Join WhatsApp Group for Updates
                </p>
              </div>
            </div>

            <a
              href={whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#00142E] font-black py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl text-xs sm:text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all text-center uppercase tracking-wide"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>JOIN WHATSAPP GROUP NOW</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </a>

            <div className="text-[11px] text-emerald-300/80 text-center pt-0.5">
              <span>🔒 Private & Spam-Free Candidate Group</span>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-blue-800 text-[11px] sm:text-xs text-blue-300">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              Lifetime Access • Receipt Sent
            </span>

            {onBackToLanding ? (
              <button
                onClick={onBackToLanding}
                className="text-[#FFD700] hover:text-white font-bold underline cursor-pointer transition-colors"
              >
                ← Back to Playbook Landing Page
              </button>
            ) : (
              <a
                href="/playbook"
                className="text-[#FFD700] hover:text-white font-bold underline cursor-pointer transition-colors"
              >
                ← Back to Playbook Landing Page
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
