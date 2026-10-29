'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Wrench, 
  ShieldCheck, 
  Cog, 
  Maximize2, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  DollarSign, 
  Clock 
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '@/data/siteData';
import { useEstimateModal } from '@/context/EstimateModalContext';

export default function ServicesPage() {
  const { openEstimate } = useEstimateModal();

  return (
    <div className="py-12 bg-alabaster-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider">
            <Wrench size={13} className="text-bronze-600" />
            <span>Master Window Treatment Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Specialized Blind, Shutter & Drapery Services
          </h1>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Alfredo Juarez provides master-level repairs, custom installations, and honest evaluations. Our mobile service van is fully stocked with universal gears, tension pins, restringing cords, and clutches.
          </p>
        </div>

        {/* Mobile Van Stock Highlights */}
        <div className="bg-charcoal-900 text-white rounded-3xl p-6 sm:p-8 border border-charcoal-800 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-bronze-600/30 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
                <Truck size={30} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Our Fully Equipped Mobile Workshop</h3>
                <p className="text-xs text-charcoal-300 mt-1 max-w-xl">
                  Unlike retail sales reps who only carry tape measures and sales brochures, Alfredo arrives with an active workshop equipped to rebuild mechanisms right on site.
                </p>
              </div>
            </div>

            <button
              onClick={() => openEstimate()}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-charcoal-950 font-bold text-xs rounded-xl transition-all shadow shrink-0"
            >
              Request On-Site Diagnostic
            </button>
          </div>
        </div>

        {/* Services Full List */}
        <div className="space-y-12">
          {SERVICES.map((s, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={s.id}
                id={s.slug}
                className="bg-white rounded-3xl border border-alabaster-300 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image */}
                <div className={`lg:col-span-5 relative min-h-[280px] lg:min-h-[420px] ${!isEven ? 'lg:order-2' : ''}`}>
                  <Image
                    src={s.heroImage}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent"></div>
                  
                  {s.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow">
                        {s.badge}
                      </span>
                    </div>
                  )}

                  {/* Savings pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-charcoal-900/90 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                    <div>
                      <span className="text-charcoal-400 block text-[10px]">Typical Repair Cost:</span>
                      <span className="font-bold text-emerald-300">{s.repairVsReplaceSummary.avgRepairCost}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-charcoal-400 block text-[10px]">Savings vs New:</span>
                      <span className="font-bold text-amber-400">{s.repairVsReplaceSummary.typicalSavings}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-bronze-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        Service 0{index + 1}
                      </span>
                      <span className="text-xs text-charcoal-400">
                        Turnaround: {s.repairVsReplaceSummary.turnaround}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900">
                      {s.title}
                    </h2>

                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {s.fullDescription}
                    </p>

                    {/* Common failure points */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                        Common Problems Solved:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {s.commonIssues.map((issue, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-charcoal-700">
                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brands */}
                    <div className="pt-2">
                      <span className="text-xs font-bold text-charcoal-500 mr-2">Brands Serviced:</span>
                      <span className="text-xs text-charcoal-700 font-medium">
                        {s.supportedBrands.join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-alabaster-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-xs font-bold text-bronze-600 hover:text-bronze-700 flex items-center gap-1"
                    >
                      <span>View Technical Details & Pricing</span>
                      <ArrowRight size={13} />
                    </Link>

                    <button
                      onClick={() => openEstimate(s.title)}
                      className="w-full sm:w-auto px-5 py-2.5 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl transition-all shadow flex items-center justify-center gap-1.5"
                    >
                      <Sparkles size={14} className="text-amber-200" />
                      <span>Book Diagnostic</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
