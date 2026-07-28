import React from 'react';
import { WHY_DIFFERENT_POINTS } from '../data/playbookData';
import { Sparkles, CheckCircle2, MessageSquarePlus } from 'lucide-react';

export const WhyDifferentSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#00142E] text-white border-b border-blue-900/40">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-blue-400/30 text-[#FFD700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>Value Differentiation</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Why This Guide Is Different
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base font-medium">
            Designed specifically to eliminate fluff and deliver high-impact preparation for Indian HR candidates.
          </p>
        </div>

        {/* 5 Distinctive Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_DIFFERENT_POINTS.map((pt, idx) => (
            <div
              key={idx}
              className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-5 shadow-lg space-y-3"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#001B3D] text-emerald-400 rounded-lg border border-blue-400/20">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base">
                  {pt.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pl-1">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Candidate Reviews Hub */}
        <div className="bg-[#002B5C] border border-dashed border-blue-400/30 rounded-2xl p-6 text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex p-2.5 bg-[#001B3D] text-[#FFD700] rounded-full border border-blue-400/20">
            <MessageSquarePlus className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-white text-sm sm:text-base">
            Verified Candidate Reviews Hub
          </h4>
          <p className="text-xs text-blue-200 leading-relaxed max-w-md mx-auto">
            Genuine candidate feedback and interview success stories are updated continuously following digital download verifications.
          </p>
        </div>

      </div>
    </section>
  );
};
