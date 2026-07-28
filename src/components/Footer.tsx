import React from 'react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'refund' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#00142E] text-blue-200 py-10 px-4 border-t border-blue-900/60 text-xs">
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        
        {/* Brand & Essential Policy Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-blue-900/50 pb-6">
          <div className="text-left space-y-1">
            <p className="font-black text-white text-sm tracking-wide">
              HR INTERVIEW SUCCESS PLAYBOOK 2026
            </p>
            <p className="text-blue-300/70 text-[11px]">
              Independent Digital Career & HR Interview Preparation Manual
            </p>
          </div>

          {/* Essential Policy Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-blue-100">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-blue-800">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-blue-800">•</span>
            <button
              onClick={() => onOpenLegal('refund')}
              className="hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
            <span className="text-blue-800">•</span>
            <button
              onClick={() => onOpenLegal('contact')}
              className="hover:text-[#FFD700] transition-colors cursor-pointer"
            >
              Contact / Support
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto space-y-2 text-[11px] text-blue-300/60 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> This playbook is an educational and preparation resource. It does not guarantee employment, job placement, interview selection, or specific salary outcomes. Interview results depend on personal qualifications, communication skills, individual preparation, and employer hiring decisions.
          </p>
          <p>
            Facebook™ is a trademark of Meta Platforms, Inc. This site is not part of or endorsed by Facebook, Instagram, or Meta Platforms, Inc.
          </p>
          <p className="pt-2 text-blue-400/50">
            © {new Date().getFullYear()} HR Success Hub. All Rights Reserved. Instant Digital Access.
          </p>
        </div>

      </div>
    </footer>
  );
};
