import React, { useState } from 'react';
import { HR_DOCUMENTS } from '../data/playbookData';
import { HrDocument } from '../types';
import { handleCtaClick } from '../utils/ctaConfig';
import { FileText, Eye, Check } from 'lucide-react';

interface HrDocumentsSectionProps {
  onOpenCheckout?: () => void;
}

export const HrDocumentsSection: React.FC<HrDocumentsSectionProps> = () => {
  const [activeDoc, setActiveDoc] = useState<HrDocument | null>(null);

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#001B3D] text-white border-b border-blue-900/50">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] border border-blue-400/30 text-[#FFD700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>Corporate Compliance & Documentation</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Understand Essential HR Documents
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Understand what these documents are used for, their common structure and the important information they typically contain.
          </p>
        </div>

        {/* 6 Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HR_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-5 shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-[#001B3D] text-[#FFD700] rounded-xl border border-blue-400/20">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#001B3D] uppercase tracking-widest bg-[#FFD700] px-2 py-0.5 rounded">
                    Official Format
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {doc.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  {doc.purpose}
                </p>

                <div className="space-y-1.5 pt-1">
                  <p className="text-xs font-bold text-[#FFD700] uppercase tracking-wider">
                    Key Standard Clauses:
                  </p>
                  {doc.components.map((comp, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-blue-200">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveDoc(doc)}
                className="w-full mt-2 bg-[#001B3D] hover:bg-blue-900 border border-blue-400/30 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>Inspect Template Structure</span>
              </button>
            </div>
          ))}
        </div>

        {/* Modal preview of HR document */}
        {activeDoc && (
          <div className="fixed inset-0 z-50 bg-[#00142E]/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#002B5C] text-white rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl border border-blue-400/30 relative animate-in fade-in zoom-in duration-200">
              <div className="flex items-start justify-between border-b border-blue-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#001B3D] text-[#FFD700] rounded-lg border border-blue-400/20">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{activeDoc.title}</h3>
                    <p className="text-xs text-blue-300">Standard Corporate Template Format</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveDoc(null)}
                  className="text-blue-300 hover:text-white p-1 rounded-lg text-lg font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-extrabold uppercase text-[#FFD700]">Document Purpose:</p>
                <p className="text-xs sm:text-sm text-blue-100">{activeDoc.purpose}</p>
              </div>

              <div className="bg-[#001B3D] border border-blue-400/20 rounded-xl p-4 space-y-2 font-serif text-blue-100 text-xs sm:text-sm leading-relaxed">
                <p className="font-sans font-bold text-[#FFD700] text-xs uppercase tracking-wider">
                  Sample Excerpt Preview:
                </p>
                <p className="italic">"{activeDoc.samplePreviewText}"</p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveDoc(null);
                    handleCtaClick();
                  }}
                  className="flex-1 bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-2.5 rounded-xl text-xs sm:text-sm cursor-pointer shadow-md"
                >
                  Get All 6 Editable Templates in Playbook – ₹299
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
