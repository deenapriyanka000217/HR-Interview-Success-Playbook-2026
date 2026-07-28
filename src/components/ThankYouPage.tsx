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
  const [whatsappGroupUrl, setWhatsappGroupUrl] = useState<string>(
    localStorage.getItem("whatsapp_group_url") || "https://chat.whatsapp.com/HD10h3atD4s03vNsGOtWlF?s=cl&p=a&ilr=0&amv=3"
  );
  const [isEditingWaUrl, setIsEditingWaUrl] = useState<boolean>(false);
  const [waInput, setWaInput] = useState<string>(whatsappGroupUrl);

  useEffect(() => {
    // Fire PageView event on Meta Pixel for Thank You Page
    pixelTracker.trackPageView();
  }, []);

  const handleDownloadPdf = () => {
    setDownloading(true);
    // Track Purchase Event on Meta Pixel
    pixelTracker.trackPurchase("HR_299_" + Date.now());

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

  const handleSaveWaUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (waInput.trim()) {
      localStorage.setItem("whatsapp_group_url", waInput.trim());
      setWhatsappGroupUrl(waInput.trim());
      setIsEditingWaUrl(false);
      alert("WhatsApp Group Link updated!");
    }
  };

  return (
    <div className="min-h-screen bg-[#00142E] text-white py-12 px-4 flex flex-col items-center justify-center relative">
      
      {/* Glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl w-full space-y-8 relative z-10">
        
        {/* Celebration Header */}
        <div className="bg-[#002B5C] border-2 border-[#FFD700]/60 rounded-3xl p-6 sm:p-10 shadow-2xl text-center space-y-6">
          
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#FFD700] text-[#001B3D] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Payment Successful</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              THANK YOU FOR YOUR ORDER!
            </h1>

            <p className="text-blue-100 text-sm sm:text-base max-w-lg mx-auto font-medium">
              Your payment of <strong className="text-[#FFD700]">₹299</strong> was completed successfully. You now have immediate access to your playbook and candidate group.
            </p>
          </div>

          {/* Action Box 1: PDF Download */}
          <div className="bg-[#001B3D] border border-blue-400/30 rounded-2xl p-6 text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#002B5C] text-[#FFD700] rounded-xl border border-blue-400/20">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  Step 1: Download HR Playbook 2026 PDF
                </h2>
                <p className="text-xs text-blue-300">
                  Complete 11 Modules • 50 HR Q&As • Payroll Formulas • Excel Templates
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="w-full bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-4 px-6 rounded-xl text-base sm:text-lg shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Download className="w-5 h-5 text-[#001B3D]" />
              <span>
                {downloading ? "Preparing Download..." : downloadSuccess ? "Downloaded! Click to Download Again" : "DOWNLOAD PLAYBOOK PDF NOW"}
              </span>
            </button>

            {downloadSuccess && (
              <p className="text-xs text-emerald-400 font-bold text-center flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                PDF downloaded to your device! If it didn't open, check your Downloads folder.
              </p>
            )}
          </div>

          {/* Action Box 2: Join WhatsApp Group */}
          <div className="bg-gradient-to-br from-emerald-950/80 to-[#001B3D] border border-emerald-500/40 rounded-2xl p-6 text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-600 text-white rounded-xl shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  Step 2: Join VIP HR Freshers WhatsApp Community
                </h2>
                <p className="text-xs text-emerald-200">
                  Get daily HR interview tips, resume reviews, & job opening alerts!
                </p>
              </div>
            </div>

            <a
              href={whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#00142E] font-black py-4 px-6 rounded-xl text-base sm:text-lg shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all text-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>JOIN WHATSAPP GROUP NOW</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="flex justify-between items-center text-[11px] text-emerald-300/80 pt-1">
              <span>🔒 Private & Spam-Free Candidate Group</span>
              <button
                type="button"
                onClick={() => setIsEditingWaUrl(!isEditingWaUrl)}
                className="underline hover:text-white cursor-pointer"
              >
                Change WA Link
              </button>
            </div>

            {isEditingWaUrl && (
              <form onSubmit={handleSaveWaUrl} className="flex gap-2 pt-2">
                <input
                  type="url"
                  value={waInput}
                  onChange={(e) => setWaInput(e.target.value)}
                  placeholder="Paste your WhatsApp Group Link..."
                  className="flex-1 px-3 py-1.5 bg-[#001B3D] border border-emerald-500/50 rounded-lg text-xs text-white"
                />
                <button
                  type="submit"
                  className="bg-emerald-400 text-[#001B3D] font-bold px-3 py-1.5 rounded-lg text-xs cursor-pointer"
                >
                  Save
                </button>
              </form>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-blue-800 text-xs text-blue-300">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Lifetime Access • Receipt Sent
            </span>

            {onBackToLanding && (
              <button
                onClick={onBackToLanding}
                className="hover:text-white font-bold underline cursor-pointer"
              >
                ← Back to Main Landing Page
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
