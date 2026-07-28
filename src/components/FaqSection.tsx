import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/playbookData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First open by default
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#001B3D] text-white border-b border-blue-900/50">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-blue-400/30 text-[#FFD700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base font-medium">
            Clear, honest answers to help you make an informed decision.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-blue-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#002B5C] border border-blue-400/30 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:border-[#FFD700] placeholder-blue-300/60"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#002B5C] border border-blue-400/20 rounded-2xl overflow-hidden shadow-lg transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base cursor-pointer hover:bg-blue-900/50 transition-colors"
                >
                  <span className="flex items-start gap-2.5">
                    <span className="text-[#001B3D] bg-[#FFD700] font-extrabold text-xs px-2 py-0.5 rounded mt-0.5">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FFD700]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-blue-100 text-xs sm:text-sm leading-relaxed border-t border-blue-800 bg-[#001B3D]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
