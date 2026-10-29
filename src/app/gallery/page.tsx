'use client';

import React from 'react';
import { BeforeAfterShowcase } from '@/components/home/BeforeAfterShowcase';
import { Sparkles, Camera, MapPin, CheckCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';
import { useEstimateModal } from '@/context/EstimateModalContext';

export default function GalleryPage() {
  const { openEstimate } = useEstimateModal();

  return (
    <div className="py-12 bg-alabaster-100 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider">
            <Camera size={13} className="text-bronze-600" />
            <span>Master Work In Action</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Before & After Repair Gallery
          </h1>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Real window treatment repairs and high-ceiling installations completed by Alfredo Juarez across Henderson, Summerlin, and Lake Las Vegas.
          </p>
        </div>

        {/* Gallery Showcase */}
        <BeforeAfterShowcase />

        {/* Text a photo banner */}
        <div className="bg-charcoal-900 text-white rounded-3xl p-8 sm:p-10 border border-charcoal-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-white">Have a Broken Window Treatment Like One of These?</h3>
            <p className="text-xs sm:text-sm text-charcoal-300">
              Snap a quick photo with your phone and text it directly to Alfredo. He will review the failure mechanism and give you an immediate verbal estimate.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openEstimate()}
              className="px-6 py-3.5 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-2 shrink-0"
            >
              <Sparkles size={14} className="text-amber-200" />
              <span>Get Estimate</span>
            </button>
            <a
              href={`sms:${BUSINESS_INFO.phoneRaw}?body=Hi%20Alfredo,%20I'm%20attaching%20photos%20of%20my%20broken%20window%20treatment%20for%20a%20repair%20estimate.`}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-charcoal-950 font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-2 shrink-0"
            >
              <Camera size={15} />
              <span>Text Photos</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
