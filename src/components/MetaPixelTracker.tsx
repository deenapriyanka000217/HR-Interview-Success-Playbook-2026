import React, { useState, useEffect } from 'react';
import { pixelTracker } from '../utils/metaPixel';
import { MetaPixelEvent } from '../types';
import { Activity, ChevronUp, ChevronDown, CheckCircle2 } from 'lucide-react';

export const MetaPixelTrackerWidget: React.FC = () => {
  const [logs, setLogs] = useState<MetaPixelEvent[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    setLogs(pixelTracker.getLogs());
    const unsubscribe = pixelTracker.subscribe((updatedLogs) => {
      setLogs(updatedLogs);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="fixed bottom-16 sm:bottom-4 left-3 z-30 font-sans text-xs">
      <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white rounded-xl shadow-xl overflow-hidden max-w-xs transition-all">
        
        {/* Toggle Bar */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-3 py-2 bg-slate-950 flex items-center justify-between gap-2 text-slate-300 hover:text-white cursor-pointer font-bold text-[11px]"
        >
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Activity className="w-3.5 h-3.5 text-blue-400" />
            <span>Meta Pixel Status ({logs.length} Events)</span>
          </div>
          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>

        {/* Expanded Event Log */}
        {isExpanded && (
          <div className="p-2.5 space-y-2 max-h-48 overflow-y-auto bg-slate-900 text-[10px]">
            <p className="text-slate-400 font-medium">Real-Time Meta Ads Pixel Stream:</p>
            {logs.length === 0 ? (
              <p className="text-slate-500 italic">No events logged yet.</p>
            ) : (
              logs.map((log, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 p-2 rounded-lg space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {log.eventName}
                    </span>
                    <span className="text-slate-500">{log.timestamp}</span>
                  </div>
                  {log.params && (
                    <div className="text-slate-400 font-mono text-[9px] bg-slate-900 p-1 rounded">
                      {JSON.stringify(log.params)}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};
