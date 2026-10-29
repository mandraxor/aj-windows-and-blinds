'use client';

import React from 'react';
import { Star, ShieldCheck, Phone, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';

export function TopBanner() {
  return (
    <div className="bg-charcoal-900 text-alabaster-100 text-xs py-2 px-4 border-b border-charcoal-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-white font-semibold">5.0 Star Thumbtack Top Pro</span>
            <span className="hidden md:inline text-charcoal-400">({BUSINESS_INFO.stats.reviewCount} Verified Reviews)</span>
          </div>

          <span className="hidden sm:inline text-charcoal-600">•</span>

          <div className="flex items-center gap-1 text-alabaster-300">
            <ShieldCheck size={13} className="text-emerald-400" />
            <span>Background Checked</span>
          </div>

          <span className="hidden md:inline text-charcoal-600">•</span>

          <div className="hidden lg:flex items-center gap-1 text-alabaster-300">
            <Clock size={13} className="text-amber-400" />
            <span>29 Years in Business (Since 1997)</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 text-alabaster-300">
            <MapPin size={13} className="text-amber-400" />
            <span>Henderson & Las Vegas Valley</span>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <Phone size={13} className="fill-amber-400" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
