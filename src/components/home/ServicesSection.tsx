'use client';

import React, { useState } from 'react';
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
  Check, 
  AlertCircle 
} from 'lucide-react';
import { SERVICES } from '@/data/siteData';

interface ServicesSectionProps {
  onOpenEstimate?: (serviceName?: string) => void;
}

export function ServicesSection({ onOpenEstimate }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench size={18} />;
      case 'ShieldCheck': return <ShieldCheck size={18} />;
      case 'Cog': return <Cog size={18} />;
      case 'Maximize2': return <Maximize2 size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-alabaster-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench size={13} className="text-bronze-600" />
              <span>Full Spectrum Window Treatment Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Our Specialized Repair & Installation Services
            </h2>
            <p className="text-base text-charcoal-600 mt-2 max-w-2xl">
              From restoring delicate antique plantation shutter staples to hoisting heavy custom drapery up 22-foot great room walls, every job is personally executed by Alfredo Juarez.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-bronze-600 hover:text-bronze-700 transition-colors shrink-0"
          >
            <span>Explore In-Depth Service Guides</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Tab Buttons (Horizontal scroll on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                activeTab === s.id
                  ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-md'
                  : 'bg-white text-charcoal-700 border-alabaster-300 hover:border-alabaster-400 hover:bg-alabaster-50'
              }`}
            >
              <span className={activeTab === s.id ? 'text-amber-400' : 'text-bronze-600'}>
                {getIcon(s.iconName)}
              </span>
              <span>{s.title.split('&')[0]}</span>
              {s.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-extrabold ${
                  activeTab === s.id 
                    ? 'bg-amber-400 text-charcoal-900' 
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {s.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-white rounded-3xl border border-alabaster-300 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Media Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[480px]">
              <Image
                src={activeService.heroImage}
                alt={activeService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>

              {/* Badges on image */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-charcoal-900 shadow">
                  {activeService.badge || 'Alfredo Direct Master Service'}
                </span>
              </div>

              {/* Savings callout box overlaid */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-charcoal-900/90 backdrop-blur-md border border-white/10 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Economic Advantage
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-charcoal-400 block">Typical Repair:</span>
                    <span className="font-bold text-emerald-300 text-sm">
                      {activeService.repairVsReplaceSummary.avgRepairCost}
                    </span>
                  </div>
                  <div>
                    <span className="text-charcoal-400 block">Replacement:</span>
                    <span className="font-bold text-rose-300 text-sm">
                      {activeService.repairVsReplaceSummary.avgReplacementCost}
                    </span>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-charcoal-700/60 text-[11px] text-charcoal-300 flex justify-between">
                  <span>Turnaround: {activeService.repairVsReplaceSummary.turnaround}</span>
                  <span className="text-amber-400 font-semibold">{activeService.repairVsReplaceSummary.typicalSavings}</span>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-bronze-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    Precision Technique
                  </span>
                  <span className="text-xs text-charcoal-400 font-medium">
                    29 Years Proven in Henderson & Vegas
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900">
                  {activeService.title}
                </h3>

                <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                  {activeService.fullDescription}
                </p>

                {/* Common Issues Diagnosed */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 flex items-center gap-1.5">
                    <AlertCircle size={14} className="text-amber-600" />
                    <span>Common Failure Points We Fix On-Site:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.commonIssues.slice(0, 4).map((issue, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands Supported */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                    Brands & Hardware Serviced:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.supportedBrands.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] bg-alabaster-100 border border-alabaster-300 text-charcoal-700 px-2.5 py-1 rounded-md font-medium"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-alabaster-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <Link
                  href={`/services/${activeService.slug}`}
                  className="text-xs font-bold text-charcoal-700 hover:text-bronze-600 transition-colors flex items-center gap-1"
                >
                  <span>Read full {activeService.title} specs</span>
                  <ArrowRight size={13} />
                </Link>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenEstimate && onOpenEstimate(activeService.title)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Sparkles size={14} className="text-amber-200" />
                    <span>Request Estimate</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
