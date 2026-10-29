'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Wrench, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  DollarSign, 
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { ServiceItem } from '@/types';
import { BUSINESS_INFO } from '@/data/siteData';
import { useEstimateModal } from '@/context/EstimateModalContext';

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const { openEstimate } = useEstimateModal();

  return (
    <div className="py-10 bg-alabaster-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-charcoal-500">
          <Link href="/" className="hover:text-charcoal-900">Home</Link>
          <ChevronRight size={12} />
          <Link href="/services" className="hover:text-charcoal-900">Services</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal-900 font-semibold">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-charcoal-950 text-white min-h-[380px] flex flex-col justify-end p-6 sm:p-10 border border-charcoal-800">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent"></div>

          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <span>{service.badge || 'Alfredo Direct Craftsmanship'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openEstimate(service.title)}
                className="px-6 py-3 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 transition-all"
              >
                <Sparkles size={14} className="text-amber-200" />
                <span>Book This Repair</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs rounded-xl flex items-center gap-2 transition-colors"
              >
                <Phone size={14} className="text-amber-400 fill-amber-400" />
                <span>Call (702) 582-8226</span>
              </a>
            </div>
          </div>
        </div>

        {/* Economics Card */}
        <div className="bg-white rounded-2xl border border-alabaster-300 p-6 sm:p-8 shadow-sm">
          <h3 className="text-base font-bold text-charcoal-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign size={18} className="text-emerald-600" />
            <span>Repair vs. Replacement Cost Breakdown</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-alabaster-50 border border-alabaster-200">
              <span className="text-xs text-charcoal-500 block">Our Average Repair:</span>
              <span className="text-xl font-extrabold text-emerald-700 mt-1 block">
                {service.repairVsReplaceSummary.avgRepairCost}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-alabaster-50 border border-alabaster-200">
              <span className="text-xs text-charcoal-500 block">Store Replacement:</span>
              <span className="text-xl font-extrabold text-rose-700 mt-1 block">
                {service.repairVsReplaceSummary.avgReplacementCost}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-alabaster-50 border border-alabaster-200">
              <span className="text-xs text-charcoal-500 block">Typical Savings:</span>
              <span className="text-xl font-extrabold text-amber-600 mt-1 block">
                {service.repairVsReplaceSummary.typicalSavings}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-alabaster-50 border border-alabaster-200">
              <span className="text-xs text-charcoal-500 block">Turnaround:</span>
              <span className="text-xl font-extrabold text-charcoal-900 mt-1 block">
                {service.repairVsReplaceSummary.turnaround}
              </span>
            </div>
          </div>
        </div>

        {/* In-Depth Overview */}
        <div className="bg-white rounded-2xl border border-alabaster-300 p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-charcoal-900">
            About This Service & Technical Approach
          </h2>
          <p className="text-sm text-charcoal-700 leading-relaxed">
            {service.fullDescription}
          </p>

          {/* Common issues */}
          <div>
            <h3 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <AlertTriangle size={15} className="text-amber-600" />
              <span>Recognize Any of These Symptoms?</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.commonIssues.map((issue, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-rose-50/50 border border-rose-100 text-xs text-charcoal-800 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exact Repairs We Perform */}
          <div className="pt-4 border-t border-alabaster-200">
            <h3 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Wrench size={15} className="text-bronze-600" />
              <span>Exact Procedures Performed by Alfredo:</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.repairsOffered.map((rep, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-charcoal-800 flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>{rep}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features and warranty */}
          <div className="pt-4 border-t border-alabaster-200">
            <h3 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider mb-3">
              Service Safeguards & Inclusions:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-600">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-bronze-600 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Booking Action Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Need an urgent diagnostic for your window treatments?</h3>
            <p className="text-xs text-charcoal-300">
              Alfredo carries all standard parts in his van for same-day resolution in Henderson & Summerlin.
            </p>
          </div>

          <button
            onClick={() => openEstimate(service.title)}
            className="px-6 py-3 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl shadow-lg shrink-0"
          >
            Request Free Estimate
          </button>
        </div>

      </div>
    </div>
  );
}
