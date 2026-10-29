'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  CheckCircle, 
  Phone, 
  Navigation, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { SERVICE_AREAS, BUSINESS_INFO } from '@/data/siteData';

interface ServiceAreasSectionProps {
  onOpenEstimate?: () => void;
}

export function ServiceAreasSection({ onOpenEstimate }: ServiceAreasSectionProps) {
  const [selectedArea, setSelectedArea] = useState(SERVICE_AREAS[0]);

  return (
    <section id="service-areas" className="py-16 lg:py-24 bg-alabaster-100/60 border-t border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin size={13} className="text-bronze-600" />
            <span>Local Nevada Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Serving Henderson & The Greater Las Vegas Valley
          </h2>
          <p className="text-base text-charcoal-600 mt-3 leading-relaxed">
            Based centrally in Henderson, NV 89012, Alfredo provides fully equipped mobile repair service across Clark County with fast turnaround times.
          </p>
        </div>

        {/* Interactive Neighborhood Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Neighborhood Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 block px-1">
              Select Your Community:
            </span>
            {SERVICE_AREAS.map((area) => (
              <button
                key={area.name}
                onClick={() => setSelectedArea(area)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  selectedArea.name === area.name
                    ? 'bg-white border-bronze-600 shadow-md ring-1 ring-bronze-500'
                    : 'bg-white/70 border-alabaster-300 hover:bg-white hover:border-alabaster-400'
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-charcoal-900 flex items-center gap-2">
                    <span>{area.name}</span>
                    <span className="text-[10px] bg-alabaster-200 text-charcoal-700 px-2 py-0.5 rounded-full font-semibold">
                      {area.region}
                    </span>
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                    <Clock size={11} />
                    <span>{area.responseSpeed}</span>
                  </div>
                </div>

                <div className="text-right text-xs text-charcoal-400">
                  {area.zipCodes.length} Zip Codes
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Selected Area Details Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-alabaster-300 shadow-card space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-alabaster-200 gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">
                  Active Service Hub
                </span>
                <h3 className="text-2xl font-bold text-charcoal-900 mt-0.5">
                  {selectedArea.name}, Nevada
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>{selectedArea.responseSpeed}</span>
              </div>
            </div>

            <p className="text-sm text-charcoal-700 leading-relaxed">
              {selectedArea.description}
            </p>

            {/* Popular Repairs in this area */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2.5">
                Most Frequent Requests in {selectedArea.name}:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {selectedArea.popularServices.map((srv, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-alabaster-50 border border-alabaster-200 text-xs font-bold text-charcoal-800 flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-600 shrink-0" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zip Codes list */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2">
                Zip Codes Serviced:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedArea.zipCodes.map((zip) => (
                  <span key={zip} className="px-2.5 py-1 bg-alabaster-100 border border-alabaster-300 text-charcoal-700 rounded-md text-xs font-mono font-medium">
                    {zip}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA inside area card */}
            <div className="pt-4 border-t border-alabaster-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-charcoal-300 hover:bg-alabaster-50 text-charcoal-900 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone size={14} className="text-bronze-600 fill-bronze-600" />
                <span>Call for {selectedArea.name} Dispatch</span>
              </a>

              <button
                onClick={onOpenEstimate}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <Sparkles size={14} className="text-amber-200" />
                <span>Request Free Quote</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
