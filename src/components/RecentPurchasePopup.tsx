import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle, X } from 'lucide-react';

interface PurchaseNotification {
  id: number;
  name: string;
  location: string;
  timeAgo: string;
}

const RECENT_PURCHASES: PurchaseNotification[] = [
  { id: 1, name: 'Priya Sharma', location: 'Mumbai', timeAgo: '2 minutes ago' },
  { id: 2, name: 'Ananya Verma', location: 'Bengaluru', timeAgo: '4 minutes ago' },
  { id: 3, name: 'Rohan Mehta', location: 'Delhi NCR', timeAgo: '7 minutes ago' },
  { id: 4, name: 'Kavita Patel', location: 'Ahmedabad', timeAgo: '11 minutes ago' },
  { id: 5, name: 'Siddharth Rao', location: 'Hyderabad', timeAgo: '14 minutes ago' },
  { id: 6, name: 'Neha Gupta', location: 'Pune', timeAgo: '18 minutes ago' },
  { id: 7, name: 'Arjun Nair', location: 'Kochi', timeAgo: '22 minutes ago' }
];

export const RecentPurchasePopup: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    // Show first popup after 3 seconds
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    // Cycle notifications every 8 seconds (hide after 4s, show next after 4s)
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setIsVisible(true);
      }, 3000);
    }, 10000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const current = RECENT_PURCHASES[currentIdx];

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-3 sm:left-6 z-40 max-w-xs sm:w-80 w-[85vw] animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-[#002B5C] text-white border border-blue-400/30 rounded-2xl p-3.5 shadow-2xl shadow-black/60 flex items-start gap-3 relative overflow-hidden backdrop-blur-md">
        
        {/* Decorative Gold Accent Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFD700]"></div>

        <div className="p-2.5 bg-[#FFD700] text-[#001B3D] rounded-xl shrink-0 font-bold mt-0.5">
          <ShoppingBag className="w-4 h-4" />
        </div>

        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-1.5 text-[10px] text-[#FFD700] font-bold uppercase tracking-wider mb-0.5">
            <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Recently Purchased</span>
          </div>

          <p className="text-xs font-bold text-white truncate">
            {current.name} <span className="font-normal text-blue-200">from {current.location}</span>
          </p>

          <p className="text-[11px] text-blue-300 mt-0.5 flex items-center justify-between">
            <span>Bought HR Playbook 2026</span>
            <span className="text-[10px] text-blue-400">{current.timeAgo}</span>
          </p>
        </div>

        <button
          onClick={() => setIsDismissed(true)}
          className="text-blue-300 hover:text-white p-1 rounded-md cursor-pointer transition-colors"
          title="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
