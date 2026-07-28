import React from 'react';
import { AlertCircle, BookX, Sparkles } from 'lucide-react';
import { PAIN_POINTS } from '../data/playbookData';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#00142E] text-white border-b border-blue-900/40">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Common Fresher Challenges</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            HR Interview Coming Up?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
            Knowing HR theory and being ready to answer interview questions are two different things.
          </p>
        </div>

        {/* Pain Point Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PAIN_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-5 shadow-lg transition-all relative space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#FFD700] text-[#001B3D] flex items-center justify-center font-extrabold text-xs">
                  0{idx + 1}
                </div>
                <p className="text-white font-bold text-base leading-snug">
                  “{item.quote}”
                </p>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
              <div className="pt-2 border-t border-blue-800 flex items-center text-xs font-medium text-red-300 gap-1.5">
                <BookX className="w-3.5 h-3.5 text-red-400" />
                <span>Common interview roadblock</span>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion Callout Banner */}
        <div className="bg-[#002B5C] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#FFD700]/30 text-center space-y-3 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-1.5 bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30 px-3 py-1 rounded-full text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The All-In-One Solution</span>
          </div>
          
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold max-w-3xl mx-auto leading-snug text-white">
            The HR Interview Success Playbook brings the essential preparation topics together in one practical guide.
          </h3>
          
          <p className="text-blue-100 text-xs sm:text-sm max-w-2xl mx-auto">
            No more jumping between fragmented blogs, outdated PDF slides, or generic interview sites. Everything is structured logically for Indian corporate standards.
          </p>
        </div>

      </div>
    </section>
  );
};
