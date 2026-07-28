import React, { useState } from 'react';
import { TOPIC_QUESTIONS } from '../data/playbookData';
import { QuestionItem } from '../types';
import { handleCtaClick } from '../utils/ctaConfig';
import { Sparkles, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroFeatureSectionProps {
  onOpenCheckout?: () => void;
  onOpenSamplePreview: () => void;
}

export const HeroFeatureSection: React.FC<HeroFeatureSectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [previewQuestion, setPreviewQuestion] = useState<QuestionItem>(TOPIC_QUESTIONS[0]);

  const TOPIC_TAGS = [
    'Tell me about yourself',
    'Why did you choose HR?',
    'Why should we hire you?',
    'Recruitment vs Selection',
    'Recruitment process',
    'Employee onboarding',
    'Payroll fundamentals',
    'CTC, Gross Salary & Net Salary',
    'Employee engagement',
    'Performance appraisal',
    'KRA and KPI',
    'Attrition',
    'Workplace situations',
    'Strengths & weaknesses',
    'HR operations'
  ];

  const filteredQuestions = activeCategory === 'All' 
    ? TOPIC_QUESTIONS 
    : TOPIC_QUESTIONS.filter(q => q.category === activeCategory);

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#00142E] text-white relative overflow-hidden border-b border-blue-900/40">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#002B5C] text-[#FFD700] border border-blue-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Core Module</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            50 IMPORTANT HR INTERVIEW QUESTIONS
          </h2>
          
          <p className="text-blue-100 text-base sm:text-lg font-medium leading-relaxed">
            Don't walk into an HR interview wondering what they might ask.
          </p>
        </div>

        {/* Topic Tag Cloud */}
        <div className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-5 sm:p-6 space-y-3">
          <h3 className="text-xs font-extrabold uppercase text-[#FFD700] tracking-wider">
            The Playbook helps you prepare for questions around:
          </h3>
          <div className="flex flex-wrap gap-2">
            {TOPIC_TAGS.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#001B3D] border border-blue-400/20 text-blue-100 text-xs sm:text-sm px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Explanation Banner */}
        <div className="bg-[#002B5C] border border-blue-400/30 rounded-2xl p-4 sm:p-6 text-blue-100 text-sm sm:text-base leading-relaxed flex flex-col sm:flex-row items-center gap-4">
          <div className="p-3 bg-[#001B3D] text-[#FFD700] rounded-xl shrink-0 border border-blue-400/20">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-bold text-white text-base">
              Structured Preparation Guidance & Practical Model Answers
            </p>
            <p className="text-blue-200 text-xs sm:text-sm">
              Each question includes structured framework breakdowns, bullet-point talking points, common mistakes to avoid, and sample responses tailored for Indian corporate hiring standards.
            </p>
          </div>
        </div>

        {/* Interactive Sample Q&A Preview Widget */}
        <div className="bg-[#002B5C] border border-blue-400/20 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-blue-800 pb-4">
            <div>
              <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider">Interactive Preview</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Sample Q&A Inspector</h3>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 text-xs">
              {['All', 'Personal', 'Recruitment', 'Payroll & Legal', 'HR Operations', 'Situational'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 rounded-md font-bold transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#FFD700] text-[#001B3D]'
                      : 'bg-[#001B3D] text-blue-200 hover:bg-blue-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Question Selector List */}
            <div className="lg:col-span-5 space-y-2 max-h-72 overflow-y-auto pr-1">
              {filteredQuestions.map((q) => (
                <div
                  key={q.id}
                  onClick={() => setPreviewQuestion(q)}
                  className={`p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${
                    previewQuestion.id === q.id
                      ? 'bg-blue-900 border-[#FFD700] text-white font-medium shadow-sm'
                      : 'bg-[#001B3D] border-blue-400/20 text-blue-200 hover:bg-blue-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase text-[#001B3D] bg-[#FFD700] px-1.5 py-0.5 rounded">
                      Q{q.id} • {q.category}
                    </span>
                    <span className="text-[10px] text-blue-300">{q.frequency}</span>
                  </div>
                  <p className="line-clamp-2">{q.question}</p>
                </div>
              ))}
            </div>

            {/* Selected Answer Box */}
            <div className="lg:col-span-7 bg-[#001B3D] border border-blue-400/20 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-blue-800 pb-2">
                <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider">
                  Model Answer & Strategy
                </span>
                <span className="text-xs text-blue-300">Question #{previewQuestion.id} of 50</span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-white">
                {previewQuestion.question}
              </h4>

              <div className="bg-[#002B5C] border border-blue-400/20 p-3.5 rounded-lg text-xs sm:text-sm text-blue-100 leading-relaxed space-y-2">
                <p className="font-bold text-[#FFD700]">Sample Model Response:</p>
                <p className="text-blue-100 italic">"{previewQuestion.modelAnswer}"</p>
              </div>

              <div className="space-y-1.5 pt-1">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Key Tips:</p>
                <ul className="space-y-1">
                  {previewQuestion.keyTips.map((tip, tIdx) => (
                    <li key={tIdx} className="text-xs text-blue-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="text-center space-y-3 pt-2">
          <button
            onClick={() => handleCtaClick()}
            id="hero-feature-cta"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FFD700] hover:brightness-110 active:scale-[0.98] text-[#001B3D] font-black py-3.5 sm:py-4 px-3 sm:px-8 rounded-xl text-xs sm:text-base lg:text-lg shadow-xl cursor-pointer transition-transform whitespace-nowrap max-w-full"
          >
            <span className="whitespace-nowrap truncate">START PREPARING TODAY – ₹299</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </button>
          
          <p className="text-xs text-blue-300">
            Instant PDF Download • Full 50 Questions & Model Answers Included
          </p>
        </div>

      </div>
    </section>
  );
};
