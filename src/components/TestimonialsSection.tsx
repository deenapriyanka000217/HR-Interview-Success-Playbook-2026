import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Star, CheckCircle2, MessageSquare, MapPin, Search } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredTestimonials = TESTIMONIALS_DATA.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="testimonials-section" className="py-12 sm:py-16 px-4 bg-[#00142E] text-white border-b border-blue-900/40">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-blue-400/30 text-[#FFD700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>20+ Real Candidate Success Stories</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Loved by 2,400+ HR Aspirants Across India
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            See how freshers and candidates from cities across India used this playbook to crack their HR interviews and land offer letters.
          </p>

          <div className="flex items-center justify-center gap-1.5 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
            ))}
            <span className="text-sm font-bold text-white ml-2">4.9 / 5.0 Average Rating</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto bg-[#002B5C] border border-blue-400/20 p-3 sm:p-4 rounded-2xl">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-blue-300 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#001B3D] border border-blue-400/30 rounded-xl text-xs sm:text-sm text-white placeholder-blue-300/60 focus:outline-hidden focus:border-[#FFD700]"
            />
          </div>

          <div className="text-xs text-blue-200 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Showing {filteredTestimonials.length} Verified Reviews</span>
          </div>
        </div>

        {/* Scrollable Testimonials Grid Container */}
        <div className="max-h-[620px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-[#002B5C] border border-blue-400/20 hover:border-[#FFD700]/40 rounded-2xl p-5 space-y-3 flex flex-col justify-between transition-colors shadow-lg"
              >
                <div className="space-y-3">
                  {/* Top bar: Stars & Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>

                    {item.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Verified Purchase
                      </span>
                    )}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed italic">
                    "{item.comment}"
                  </p>
                </div>

                {/* Candidate Info Footer */}
                <div className="pt-3 border-t border-blue-800/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                      <span>{item.name}</span>
                    </h4>
                    <p className="text-[11px] text-blue-300 font-medium">
                      {item.role}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FFD700] bg-[#001B3D] border border-blue-400/20 px-2 py-0.5 rounded-md">
                      <MapPin className="w-3 h-3 text-[#FFD700]" />
                      {item.city}
                    </span>
                    <p className="text-[10px] text-blue-400 mt-0.5">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-10 bg-[#002B5C] rounded-2xl border border-blue-400/20 text-blue-200 text-sm">
              No reviews found matching "{searchTerm}". Try another search keyword.
            </div>
          )}
        </div>

        {/* Scroll helper note */}
        <div className="text-center text-xs text-blue-300 flex items-center justify-center gap-1">
          <span>💡</span>
          <span>Scroll up/down inside the box to view all 22 verified reviews from candidates across India.</span>
        </div>

      </div>
    </section>
  );
};
