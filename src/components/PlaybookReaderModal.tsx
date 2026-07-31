import React, { useState } from 'react';
import { MODULES, TOPIC_QUESTIONS, HR_DOCUMENTS, VALUE_STACK } from '../data/playbookData';
import { Download, BookOpen, HelpCircle, FileText, Calculator, Sparkles, CheckCircle2, Search, X, Award, Printer } from 'lucide-react';

interface PlaybookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  isUnlocked: boolean; // true = purchased, false = sample preview
  orderId?: string;
  onOpenCheckout?: () => void;
}

export const PlaybookReaderModal: React.FC<PlaybookReaderModalProps> = ({
  isOpen,
  onClose,
  isUnlocked,
  orderId,
  onOpenCheckout
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'questions' | 'documents' | 'roadmap'>('overview');
  const [searchQ, setSearchQ] = useState<string>('');

  if (!isOpen) return null;

  const filteredQuestions = TOPIC_QUESTIONS.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQ.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQ.toLowerCase())
  );

  const handleDownloadPdf = async () => {
    try {
      const response = await fetch("/HR_Interview_Success_Playbook_2026_PREMIUM_.pdf");
      if (!response.ok) throw new Error("Failed to fetch PDF");
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "HR_Interview_Success_Playbook_2026_PREMIUM_.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    } catch {
      window.open("/HR_Interview_Success_Playbook_2026_PREMIUM_.pdf", "_blank");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 text-white rounded-2xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl border border-slate-700 relative animate-in fade-in zoom-in duration-200">
        
        {/* Top Navigation Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-3 bg-slate-950/90 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-400 text-slate-950 rounded-xl font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-base sm:text-lg">
                  HR Interview Success Playbook 2026
                </h3>
                {isUnlocked ? (
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                    Unlocked • Order #{orderId || 'SUCCESS'}
                  </span>
                ) : (
                  <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                    Sample Preview Mode
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">Digital Interactive Edition • PDF Guide</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isUnlocked ? (
              <button
                onClick={handleDownloadPdf}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Save / Download PDF</span>
              </button>
            ) : (
              <button
                onClick={onOpenCheckout}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Unlock Full Playbook ₹299</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-lg text-lg font-bold cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 p-2 bg-slate-950 border-b border-slate-800 text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Modules Overview ({MODULES.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('questions')}
            className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'questions'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>50 HR Interview Questions</span>
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'documents'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Essential HR Documents</span>
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'roadmap'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>30/90-Day Career Roadmap</span>
          </button>
        </div>

        {/* Tab Content Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-extrabold text-lg text-amber-400">
                    Welcome to the 2026 HR Interview Success Playbook
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    A structured preparation manual containing core recruitment workflows, payroll formulas, ATS resume rules, and 50 interview Q&As.
                  </p>
                </div>
                {!isUnlocked && (
                  <button
                    onClick={onOpenCheckout}
                    className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs shadow-md"
                  >
                    Unlock Full Access ₹299
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MODULES.map((m) => (
                  <div key={m.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400">Module {m.number}</span>
                      <span className="text-[10px] text-slate-500 uppercase">Chapter Guide</span>
                    </div>
                    <h5 className="font-bold text-white text-base">{m.title}</h5>
                    <p className="text-xs text-slate-300">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: QUESTIONS */}
          {activeTab === 'questions' && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search 50 HR Interview Questions (e.g., 'CTC', 'Why HR', 'Notice Period')..."
                    value={searchQ}
                    onChange={(e) => setSearchQ(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {filteredQuestions.map((q) => (
                  <div key={q.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-400">
                        Q{q.id}. [{q.category}]
                      </span>
                      <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">
                        {q.frequency}
                      </span>
                    </div>

                    <h5 className="font-bold text-white text-sm sm:text-base">
                      {q.question}
                    </h5>

                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <p className="font-bold text-emerald-400 text-xs mb-1">Model Answer Framework:</p>
                      <p>{q.modelAnswer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-300">
                Inspect official structure & common clauses for Indian corporate HR letters:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HR_DOCUMENTS.map((doc) => (
                  <div key={doc.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                    <h5 className="font-bold text-amber-400 text-base">{doc.title}</h5>
                    <p className="text-xs text-slate-300">{doc.purpose}</p>

                    <div className="bg-slate-900 p-3 rounded-lg text-xs font-serif text-slate-200 italic border border-slate-800">
                      "{doc.samplePreviewText}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ROADMAP */}
          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <h4 className="font-bold text-amber-400 text-base">
                  First 30 Days HR Starter Checklist
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Day 1-7: Learn employee handbook, organogram, and internal HR tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Day 8-15: Shadow recruitment calls, telephonic screens, and interview scheduling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Day 16-30: Handle onboarding documentation, attendance tracking & basic employee queries.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <h4 className="font-bold text-amber-400 text-base">
                  90-Day Career Growth Strategy
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Focus on mastering 1 specialized pillar (Talent Acquisition, Payroll Compliance, or HR Operations) while maintaining high responsiveness with team managers.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/90 rounded-b-2xl flex items-center justify-between text-xs text-slate-400">
          <span>HR Interview Success Playbook 2026 • Certified Digital Resource</span>
          {isUnlocked ? (
            <span className="text-emerald-400 font-bold">✓ Full Access Active</span>
          ) : (
            <button onClick={onOpenCheckout} className="text-amber-400 font-bold hover:underline">
              Unlock Full Access for ₹299 →
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
