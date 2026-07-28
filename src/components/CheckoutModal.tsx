import React, { useState, useEffect } from 'react';
import { CustomerDetails } from '../types';
import { pixelTracker } from '../utils/metaPixel';
import confetti from 'canvas-confetti';
import { ShieldCheck, Lock, CheckCircle2, CreditCard, Smartphone, Building2, AlertCircle, ArrowRight, X } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<CustomerDetails>({
    fullName: '',
    email: '',
    phone: '',
    state: 'Maharashtra',
    paymentMethod: 'upi'
  });

  const [upiId, setUpiId] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      // Fire InitiateCheckout ONLY when checkout modal is opened
      pixelTracker.trackInitiateCheckout();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address for PDF delivery');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsProcessing(true);

    // Simulate Payment Gateway delay (Razorpay/UPI)
    setTimeout(() => {
      setIsProcessing(false);
      const generatedOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

      // FIRE PURCHASE PIXEL EVENT ONLY NOW AFTER SUCCESSFUL PAYMENT
      pixelTracker.trackPurchase(generatedOrderId);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore if confetti blocked
      }

      // Close checkout and open Reader
      onClose();
      onSuccess(generatedOrderId);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 space-y-5 shadow-2xl border border-slate-200 relative my-auto animate-in fade-in zoom-in duration-200 text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Secure Checkout
              </h3>
              <p className="text-xs text-slate-500">256-Bit SSL Encrypted Payment</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg text-lg font-bold cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Order Summary Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="font-bold text-slate-900">
              HR Interview Success Playbook 2026
            </span>
            <span className="font-semibold text-slate-500 line-through">₹999</span>
          </div>

          <div className="flex items-center justify-between text-xs text-emerald-700">
            <span>Launch Offer Coupon (LAUNCH299 Applied)</span>
            <span className="font-bold">-₹700</span>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between font-extrabold text-base sm:text-lg text-slate-900">
            <span>Total Amount Payable:</span>
            <span className="text-amber-600">₹299</span>
          </div>
        </div>

        {/* Error message alert */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handlePaymentSubmit} className="space-y-4 text-xs sm:text-sm">
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Ananya Sharma"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-blue-600 text-xs sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address (PDF Sent Here) *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="ananya@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-blue-600 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:border-blue-600 text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="space-y-2 pt-1">
            <label className="block text-xs font-bold text-slate-700">
              Select Payment Method
            </label>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 font-semibold text-xs cursor-pointer ${
                  formData.paymentMethod === 'upi'
                    ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>UPI / QR</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 font-semibold text-xs cursor-pointer ${
                  formData.paymentMethod === 'card'
                    ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span>Cards</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'netbanking' })}
                className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 font-semibold text-xs cursor-pointer ${
                  formData.paymentMethod === 'netbanking'
                    ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Building2 className="w-4 h-4 text-purple-600" />
                <span>NetBanking</span>
              </button>
            </div>
          </div>

          {/* UPI Option specifics */}
          {formData.paymentMethod === 'upi' && (
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 space-y-2 text-xs">
              <p className="font-bold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Fastest UPI Payment (GPay, PhonePe, Paytm, BHIM)
              </p>
              <input
                type="text"
                placeholder="Enter UPI ID (e.g. 9876543210@paytm) or leave blank for QR"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs focus:outline-hidden"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isProcessing}
            id="pay-now-btn"
            className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-base shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-98 disabled:opacity-75"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                Verifying Payment with Bank...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>PAY ₹299 & GET INSTANT ACCESS</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </button>

          <p className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Guaranteed Instant Digital Delivery to Email & Screen
          </p>
        </form>

      </div>
    </div>
  );
};
