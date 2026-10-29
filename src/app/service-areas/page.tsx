'use client';

import React from 'react';
import { ServiceAreasSection } from '@/components/home/ServiceAreasSection';
import { 
  MapPin, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Sun,
  Wind
} from 'lucide-react';
import { SERVICE_AREAS, BUSINESS_INFO } from '@/data/siteData';
import { useEstimateModal } from '@/context/EstimateModalContext';

export default function ServiceAreasPage() {
  const { openEstimate } = useEstimateModal();

  return (
    <div className="py-12 bg-alabaster-100 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider">
            <MapPin size={13} className="text-bronze-600" />
            <span>Southern Nevada Service Map</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Henderson & Las Vegas Valley Service Areas
          </h1>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Alfredo Juarez operates an active mobile window treatment workshop providing rapid dispatch across Clark County. We bring parts directly to your driveway.
          </p>
        </div>

        {/* Desert Climate Alert Callout */}
        <div className="bg-amber-50 rounded-3xl border border-amber-200/80 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-700">
            <Sun size={15} />
            <span>Why Window Treatments Fail Rapidly in Clark County, NV</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900">
            The Harsh Mojave Desert Climate & Your Blinds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <div className="flex items-start gap-2.5">
              <Sun size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-charcoal-900">Extreme Heat & UV Rays:</strong> 115°F+ summer heat superheats window panes, making factory plastic tilt gears brittle and snapping cheap nylon lift cords within 3 to 5 years. We replace them with high-tensile braided UV cord and brass gears.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Wind size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-charcoal-900">Valley Winds & Settling Frames:</strong> Spring gusts through open patio doors slam plantation shutters, shearing off louver staples and loosening frame hinges. Alfredo re-anchors frames with heavy-duty tension pins and stainless steel staples.
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Neighborhood Hub */}
        <ServiceAreasSection onOpenEstimate={() => openEstimate()} />

        {/* All Areas Directory */}
        <div className="bg-white rounded-3xl border border-alabaster-300 p-8 sm:p-10 shadow-card space-y-6">
          <h3 className="text-xl font-bold text-charcoal-900">
            Full Neighborhood & Community Coverage Directory
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <div key={area.name} className="p-5 rounded-2xl bg-alabaster-50 border border-alabaster-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-charcoal-900 text-base">{area.name}</h4>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    {area.region}
                  </span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {area.description}
                </p>
                <div className="text-[11px] text-charcoal-500 font-mono">
                  Zips: {area.zipCodes.join(', ')}
                </div>
                <div className="pt-2 border-t border-alabaster-200">
                  <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <Clock size={11} />
                    <span>{area.responseSpeed}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency or fast dispatch */}
        <div className="bg-charcoal-900 text-white rounded-3xl p-8 sm:p-10 border border-charcoal-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Don&apos;t See Your Exact Neighborhood Listed?</h3>
            <p className="text-xs text-charcoal-300">
              If your home is in Clark County, Alfredo can likely dispatch to you. Call to verify travel time.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="px-6 py-3.5 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2 shrink-0"
          >
            <Phone size={14} className="fill-white" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
