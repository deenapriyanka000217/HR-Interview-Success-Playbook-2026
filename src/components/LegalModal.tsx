import React from 'react';
import { X, Shield, FileText, RefreshCw, Mail, Phone } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'refund' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200 text-slate-900 my-auto">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            {type === 'privacy' && <Shield className="w-5 h-5 text-blue-600" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-blue-600" />}
            {type === 'refund' && <RefreshCw className="w-5 h-5 text-blue-600" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-blue-600" />}

            <h3 className="font-extrabold text-slate-900 text-lg capitalize">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms & Conditions'}
              {type === 'refund' && 'Refund & Cancellation Policy'}
              {type === 'contact' && 'Support & Contact Us'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg text-lg font-bold cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 max-h-80 overflow-y-auto pr-1">
          {type === 'privacy' && (
            <>
              <p>
                <strong>Privacy Policy:</strong> We value your personal information and privacy. When you purchase the HR Interview Success Playbook 2026, we collect basic details (Name, Email, Phone) solely to deliver your digital product access and provide order receipts.
              </p>
              <p>
                We do not sell, rent, or trade your personal information to third-party marketers. Payment processing is handled through PCI-DSS compliant payment processors using 256-bit SSL encryption.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong>Terms & Conditions:</strong> The HR Interview Success Playbook 2026 is an educational and interview-preparation guide designed for freshers, students, and job seekers.
              </p>
              <p>
                Upon purchasing for ₹299, you receive a personal, non-transferable single-user license to download and access the PDF guide. Unauthorized commercial redistribution or resale of this digital file is strictly prohibited.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <p>
                <strong>Refund & Cancellation Policy:</strong> Due to the instant-access digital download nature of the PDF product, all sales of the HR Interview Success Playbook 2026 are final once access is granted.
              </p>
              <p>
                If you encounter any technical difficulty opening your file or receiving your email download link, please contact our support team immediately at <strong>support@hrsuccessplaybook.in</strong> and we will resolve it or re-send your files within 12 hours.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              <p className="font-bold text-slate-900">
                HR Success Hub Support Team
              </p>
              <p>
                We are here to assist you with any questions regarding your digital download or interview preparation.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 font-medium">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>Email: support@hrsuccessplaybook.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Support: +91 98765 43210</span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  Support Hours: Monday to Saturday (9:00 AM – 7:00 PM IST)
                </p>
              </div>
            </>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs cursor-pointer"
        >
          Close Window
        </button>

      </div>
    </div>
  );
};
