import React from 'react';
import { CreditCard, Download, Rocket } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const STEPS = [
    {
      num: 'STEP 1',
      title: 'Purchase the playbook securely.',
      desc: 'Complete quick ₹299 payment via UPI (GPay/PhonePe/Paytm), Cards, or NetBanking.',
      icon: <CreditCard className="w-6 h-6 text-[#FFD700]" />
    },
    {
      num: 'STEP 2',
      title: 'Receive access to the digital PDF.',
      desc: 'Get instant access on your screen plus a direct download copy sent to your email.',
      icon: <Download className="w-6 h-6 text-[#FFD700]" />
    },
    {
      num: 'STEP 3',
      title: 'Use the guide to structure your HR preparation.',
      desc: 'Master 50 Q&As, HR documents, payroll math, and Excel formulas with full confidence.',
      icon: <Rocket className="w-6 h-6 text-[#FFD700]" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#001B3D] text-white border-b border-blue-900/50">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Start in 3 Simple Steps
          </h2>
          <p className="text-blue-100 text-sm sm:text-base font-medium">
            Zero wait time. Start preparing for your next interview in under 2 minutes.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-6 shadow-lg transition-shadow space-y-4 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#001B3D] border border-blue-400/20 flex items-center justify-center">
                {s.icon}
              </div>

              <span className="text-xs font-black text-[#001B3D] bg-[#FFD700] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                {s.num}
              </span>

              <h3 className="text-base font-bold text-white">
                {s.title}
              </h3>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
