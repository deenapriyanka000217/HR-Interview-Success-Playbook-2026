import React, { useState } from 'react';
import { MODULES } from '../data/playbookData';
import { ModuleItem } from '../types';
import { handleCtaClick } from '../utils/ctaConfig';
import { 
  Building2, 
  Award, 
  FileText, 
  HelpCircle, 
  Users, 
  FileSpreadsheet, 
  Calculator, 
  Mail, 
  Zap, 
  TrendingUp, 
  GraduationCap,
  Check,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface WhatYouGetSectionProps {
  onOpenSamplePreview: () => void;
  onOpenCheckout?: () => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({ onOpenSamplePreview }) => {
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-[#FFD700]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#FFD700]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#FFD700]" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-[#FFD700]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#FFD700]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-[#FFD700]" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-[#FFD700]" />;
      case 'Mail': return <Mail className="w-5 h-5 text-[#FFD700]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#FFD700]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#FFD700]" />;
      default: return <GraduationCap className="w-5 h-5 text-[#FFD700]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#001B3D] text-white border-b border-blue-900/50">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-blue-400/30 text-[#FFD700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Breakdown</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Everything You Need to Prepare Smarter
          </h2>
          <p className="text-blue-100 text-sm sm:text-base font-medium">
            11 core modules designed specifically for HR freshers and job candidates in India.
          </p>
        </div>

        {/* 11 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MODULES.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className="group bg-[#002B5C] border border-blue-400/20 hover:border-[#FFD700]/50 rounded-2xl p-5 shadow-lg transition-all cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#001B3D] bg-[#FFD700] px-2.5 py-1 rounded-lg">
                    {module.number}
                  </span>
                  <div className="p-2 rounded-xl bg-[#001B3D] border border-blue-400/20 group-hover:scale-105 transition-transform">
                    {getIcon(module.iconName)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors">
                  {module.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Takeaway Bullets Preview */}
              <div className="pt-3 border-t border-blue-800 space-y-1.5">
                {module.keyTakeaways.slice(0, 2).map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-blue-200">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-[#FFD700] pt-1 group-hover:underline">
                <span>Explore Module Details</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Modal for Module Details */}
        {selectedModule && (
          <div className="fixed inset-0 z-50 bg-[#00142E]/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#002B5C] text-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-blue-400/30 relative animate-in fade-in zoom-in duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-black text-[#001B3D] bg-[#FFD700] px-2.5 py-0.5 rounded-md">
                    Module {selectedModule.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedModule.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="text-blue-300 hover:text-white p-1 rounded-lg text-lg font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-blue-100 text-sm leading-relaxed">
                {selectedModule.description}
              </p>

              <div className="bg-[#001B3D] border border-blue-400/20 rounded-xl p-4 space-y-2">
                <h4 className="text-xs font-extrabold uppercase text-[#FFD700] tracking-wider">
                  Key Concepts Covered:
                </h4>
                <ul className="space-y-2">
                  {selectedModule.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-blue-100">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedModule(null);
                    handleCtaClick();
                  }}
                  className="flex-1 bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-2.5 rounded-xl text-sm shadow-md cursor-pointer"
                >
                  Get Playbook – ₹299
                </button>
                <button
                  onClick={() => {
                    setSelectedModule(null);
                    onOpenSamplePreview();
                  }}
                  className="px-4 bg-[#001B3D] border border-blue-400/30 hover:bg-blue-900 text-white font-bold py-2.5 rounded-xl text-sm cursor-pointer"
                >
                  Sample Preview
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section Bottom Banner CTA */}
        <div className="bg-[#002B5C] border border-blue-400/30 rounded-2xl p-6 text-center space-y-3 max-w-3xl mx-auto shadow-xl">
          <p className="text-white text-sm sm:text-base font-bold">
            Ready to master all 11 modules and step into your HR interview fully prepared?
          </p>
          <button
            onClick={() => handleCtaClick()}
            id="curriculum-cta-btn"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-3 sm:py-3.5 px-3 sm:px-6 rounded-xl text-xs sm:text-sm md:text-base shadow-md transition-transform cursor-pointer whitespace-nowrap max-w-full"
          >
            <span className="whitespace-nowrap truncate">UNLOCK ALL 11 MODULES FOR ₹299</span>
          </button>
        </div>

      </div>
    </section>
  );
};
