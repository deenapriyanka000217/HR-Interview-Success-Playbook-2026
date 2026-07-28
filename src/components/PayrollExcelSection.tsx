import React, { useState } from 'react';
import { PAYROLL_BASICS, EXCEL_SKILLS } from '../data/playbookData';
import { handleCtaClick } from '../utils/ctaConfig';
import { Calculator, FileSpreadsheet, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface PayrollExcelSectionProps {
  onOpenCheckout?: () => void;
}

export const PayrollExcelSection: React.FC<PayrollExcelSectionProps> = () => {
  // Simple interactive Net Take-Home Salary Calculator
  const [ctcInput, setCtcInput] = useState<number>(360000); // 3.6 LPA default

  const annualCtc = ctcInput || 0;
  const monthlyCtc = Math.round(annualCtc / 12);
  const basicSalary = Math.round(monthlyCtc * 0.5); // 50% Basic
  const hra = Math.round(basicSalary * 0.4); // 40% HRA
  const grossSalary = monthlyCtc;

  // Deductions
  const employeePf = Math.min(1800, Math.round(basicSalary * 0.12)); // Capped at 1800 or 12%
  const professionalTax = 200; // Average ₹200/mo
  const netTakeHome = Math.max(0, grossSalary - employeePf - professionalTax);

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#00142E] text-white border-b border-blue-900/40">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-blue-400/30 text-[#FFD700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Demand Technical Skills</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Payroll & Excel Skills Made Easy
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base font-medium">
            Master the two most heavily tested technical areas in entry-level HR interviews.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: HR Payroll Basics */}
          <div className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-6 space-y-5 shadow-xl">
            <div className="flex items-center gap-3 border-b border-blue-800 pb-3">
              <div className="p-2.5 bg-[#001B3D] text-[#FFD700] rounded-xl border border-blue-400/20">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">HR Payroll Basics</h3>
                <p className="text-xs text-blue-300">Statutory Compliance & Salary Components</p>
              </div>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {PAYROLL_BASICS.map((item, idx) => (
                <div key={idx} className="bg-[#001B3D] border border-blue-400/20 rounded-xl p-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-[#FFD700]">
                      • {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mini Interactive Net Salary Preview */}
            <div className="bg-[#001B3D] border border-blue-400/30 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#FFD700]">
                  Interactive Payroll Simulator
                </span>
                <span className="text-[10px] text-blue-300">Module 07 Tool</span>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-blue-200 flex justify-between font-medium">
                  <span>Annual CTC (INR):</span>
                  <span className="font-bold text-[#FFD700]">₹{annualCtc.toLocaleString('en-IN')}</span>
                </label>
                <input
                  type="range"
                  min="180000"
                  max="1200000"
                  step="30000"
                  value={ctcInput}
                  onChange={(e) => setCtcInput(Number(e.target.value))}
                  className="w-full accent-[#FFD700] cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="bg-[#002B5C] p-2 rounded border border-blue-400/20">
                  <span className="text-blue-300 text-[10px]">Monthly Gross:</span>
                  <p className="font-bold text-white">₹{grossSalary.toLocaleString('en-IN')}</p>
                </div>
                <div className="bg-[#002B5C] p-2 rounded border border-[#FFD700]/40">
                  <span className="text-[#FFD700] text-[10px]">Net Take-Home:</span>
                  <p className="font-black text-[#FFD700]">₹{netTakeHome.toLocaleString('en-IN')}/mo</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: HR Excel Skills */}
          <div className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-6 space-y-5 shadow-xl">
            <div className="flex items-center gap-3 border-b border-blue-800 pb-3">
              <div className="p-2.5 bg-[#001B3D] text-[#FFD700] rounded-xl border border-blue-400/20">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">HR Excel Skills</h3>
                <p className="text-xs text-blue-300">Reporting & Data Operations Formulas</p>
              </div>
            </div>

            <div className="space-y-3">
              {EXCEL_SKILLS.map((item, idx) => (
                <div key={idx} className="bg-[#001B3D] border border-blue-400/20 rounded-xl p-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm font-bold text-white">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-blue-200 pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#001B3D] border border-emerald-500/30 rounded-xl p-4 text-xs text-emerald-300 leading-relaxed">
              📊 <span className="font-bold">Playbook Inclusion:</span> Includes step-by-step formula copy-paste snippets and dummy HR data tables for hands-on practice.
            </div>
          </div>

        </div>

        {/* Section CTA */}
        <div className="text-center space-y-3 pt-2">
          <button
            onClick={() => handleCtaClick()}
            id="payroll-excel-cta-btn"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-3.5 sm:py-4 px-3 sm:px-8 rounded-xl text-xs sm:text-base lg:text-lg shadow-xl cursor-pointer transition-transform whitespace-nowrap max-w-full"
          >
            <span className="whitespace-nowrap truncate">GET THE COMPLETE PLAYBOOK – ₹299</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </button>
          
          <p className="text-xs text-blue-300">
            One-Time Payment • Instant PDF Download • Forever Access
          </p>
        </div>

      </div>
    </section>
  );
};
