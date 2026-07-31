import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Star, StarHalf, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center gap-0.5" aria-label={`${rating} stars`}>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
        ))}
        {hasHalfStar && (
          <StarHalf key="half" className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-3.5 h-3.5 text-blue-900/60 fill-blue-950/40" />
        ))}
        <span className="text-[11px] font-bold text-[#FFD700] ml-1">{rating}</span>
      </div>
    );
  };

  // Split testimonials into two groups for dual smooth left-scrolling marquee rows
  const row1 = TESTIMONIALS_DATA.slice(0, 11);
  const row2 = TESTIMONIALS_DATA.slice(11);

  // Duplicate arrays for seamless infinite leftward scrolling
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section id="testimonials-section" className="py-12 sm:py-16 bg-[#00142E] text-white border-b border-blue-900/40 overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 45s linear infinite;
        }
        .animate-scroll-left-fast {
          display: flex;
          width: max-content;
          animation: scrollLeft 38s linear infinite;
        }
        .animate-scroll-left:hover, .animate-scroll-left-fast:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-blue-400/30 text-[#FFD700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Candidate Success Stories</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Loved by 2,400+ HR Aspirants Across India
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Real candidate feedback from freshers and job seekers who used this playbook to crack their HR interviews.
          </p>

          <div className="flex items-center justify-center gap-1.5 pt-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
            ))}
            <StarHalf className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
            <span className="text-sm font-bold text-white ml-2">4.8 / 5.0 Rating (22 Verified Reviews)</span>
          </div>
        </div>

      </div>

      {/* Smooth Horizontal Left-Scrolling Testimonial Rows */}
      <div className="mt-8 space-y-4">
        {/* Marquee Row 1 */}
        <div className="relative w-full overflow-x-auto custom-scrollbar py-2">
          <div className="animate-scroll-left gap-4 px-4">
            {marqueeRow1.map((item, idx) => (
              <div
                key={`r1-${item.id}-${idx}`}
                className="w-[290px] sm:w-[340px] shrink-0 bg-[#002B5C] border border-blue-400/20 hover:border-[#FFD700]/40 rounded-xl p-4 sm:p-5 space-y-3 flex flex-col justify-between shadow-lg transition-all"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    {renderStars(item.rating)}
                    {item.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed italic line-clamp-4">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-800/80 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="font-bold text-white text-xs sm:text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-blue-300 font-medium truncate">
                      {item.role}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#FFD700] bg-[#001B3D] border border-blue-400/20 px-2 py-0.5 rounded-md shrink-0">
                    <MapPin className="w-3 h-3 text-[#FFD700]" />
                    {item.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="relative w-full overflow-x-auto custom-scrollbar py-2">
          <div className="animate-scroll-left-fast gap-4 px-4">
            {marqueeRow2.map((item, idx) => (
              <div
                key={`r2-${item.id}-${idx}`}
                className="w-[290px] sm:w-[340px] shrink-0 bg-[#002B5C] border border-blue-400/20 hover:border-[#FFD700]/40 rounded-xl p-4 sm:p-5 space-y-3 flex flex-col justify-between shadow-lg transition-all"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    {renderStars(item.rating)}
                    {item.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed italic line-clamp-4">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-800/80 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="font-bold text-white text-xs sm:text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-blue-300 font-medium truncate">
                      {item.role}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#FFD700] bg-[#001B3D] border border-blue-400/20 px-2 py-0.5 rounded-md shrink-0">
                    <MapPin className="w-3 h-3 text-[#FFD700]" />
                    {item.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-blue-300/80 mt-4 flex items-center justify-center gap-1.5">
        <span className="text-[#FFD700]">←</span>
        <span>Hover or touch cards to pause smooth auto-scrolling</span>
        <span className="text-[#FFD700]">→</span>
      </div>
    </section>
  );
};

