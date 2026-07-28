import React from 'react';
import { RECRUITMENT_STEPS } from '../data/playbookData';
import { ArrowDown, CheckCircle2, GitCommit, Layers } from 'lucide-react';

export const RecruitmentProcessSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#001B3D] text-white border-b border-blue-900/50">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-blue-400/30 text-[#FFD700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>End-to-End Recruitment Workflow</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Go Beyond Interview Questions
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Understand how recruitment works in practice so you can discuss the process more confidently during interviews.
          </p>
        </div>

        {/* Visual Flowchart - Desktop Grid / Mobile Vertical Flow */}
        <div className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-5 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-blue-800 pb-3">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-[#FFD700]" />
              <span>11-Step Talent Acquisition Lifecycle</span>
            </h3>
            <span className="text-xs text-[#001B3D] font-extrabold bg-[#FFD700] px-2.5 py-1 rounded-md">
              Module 05 Preview
            </span>
          </div>

          <div className="space-y-3">
            {RECRUITMENT_STEPS.map((item, idx) => (
              <React.Fragment key={item.step}>
                <div className="group bg-[#001B3D] hover:bg-blue-900/60 border border-blue-400/20 hover:border-[#FFD700]/40 rounded-xl p-3.5 sm:p-4 transition-colors flex items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="w-8 h-8 rounded-lg bg-[#FFD700] text-[#001B3D] font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-blue-200 text-xs sm:text-sm mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 hidden sm:block" />
                </div>

                {/* Arrow indicator between steps except last */}
                {idx < RECRUITMENT_STEPS.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ArrowDown className="w-4 h-4 text-[#FFD700] animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Summary note */}
        <div className="bg-[#002B5C] border border-blue-400/30 rounded-xl p-4 text-center text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto shadow-sm">
          💡 <span className="font-bold text-[#FFD700]">Interview Pro Tip:</span> When asked about recruitment, explaining this structured 11-step lifecycle demonstrates to panel members that you possess practical operational clarity beyond theoretical definitions.
        </div>

      </div>
    </section>
  );
};
