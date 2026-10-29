'use client';

import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';

interface FloatingQuickContactProps {
  onOpenEstimate: () => void;
}

export function FloatingQuickContact({ onOpenEstimate }: FloatingQuickContactProps) {
  return (
    <>
      {/* Mobile Fixed Bottom Bar (Only visible on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-alabaster-300 p-2.5 sm:hidden shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-3 bg-charcoal-900 text-amber-400 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <Phone size={14} className="fill-amber-400" />
          <span>Call Alfredo</span>
        </a>

        <a
          href={`sms:${BUSINESS_INFO.phoneRaw}?body=Hi%20Alfredo,%20I%20need%20help%20with%20a%20window%20treatment%20repair/install.`}
          className="flex-1 py-2.5 px-3 bg-amber-100 text-bronze-800 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border border-amber-300"
        >
          <MessageSquare size={14} />
          <span>Text Photos</span>
        </a>

        <button
          onClick={onOpenEstimate}
          className="py-2.5 px-3 bg-bronze-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 shadow"
        >
          <Sparkles size={14} />
          <span>Quote</span>
        </button>
      </div>

      {/* Desktop Floating Action Dock (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        <div className="flex items-center gap-2 bg-charcoal-900/95 backdrop-blur-md text-white p-1.5 pl-3 rounded-full shadow-2xl border border-charcoal-700 hover:border-amber-400/50 transition-all">
          <div className="flex items-center gap-1.5 text-xs font-semibold pr-2 border-r border-charcoal-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-charcoal-300">Alfredo Direct:</span>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 hover:underline">
              {BUSINESS_INFO.phone}
            </a>
          </div>

          <a
            href={`sms:${BUSINESS_INFO.phoneRaw}?body=Hi%20Alfredo,%20I%20have%20a%20question%20about%20a%20blind/shutter%20repair.`}
            title="Text Photos to Alfredo"
            className="p-2 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-amber-400 transition-colors"
          >
            <MessageSquare size={15} />
          </a>

          <button
            onClick={onOpenEstimate}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-bronze-600 hover:bg-bronze-700 text-white text-xs font-bold rounded-full transition-all shadow hover:shadow-md"
          >
            <Sparkles size={13} className="text-amber-200" />
            <span>Instant Quote</span>
          </button>
        </div>
      </div>
    </>
  );
}
