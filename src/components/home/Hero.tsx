'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Wrench, 
  CheckCircle, 
  Sparkles, 
  Clock,
  DollarSign,
  Maximize2
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';

interface HeroProps {
  onOpenEstimate: () => void;
}

export function Hero({ onOpenEstimate }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-alabaster-100 desert-pattern">
      {/* Subtle architectural decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 shadow-sm">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-500" />
                ))}
              </span>
              <span className="text-xs font-bold text-charcoal-900">
                Thumbtack Top Pro • 5.0 Stars (25 Reviews)
              </span>
              <span className="hidden sm:inline text-charcoal-400">•</span>
              <span className="hidden sm:inline text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                41+ Verified Hires
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-[1.15]">
              Don&apos;t Throw Away Broken Blinds & Shutters.
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-bronze-600 via-amber-600 to-bronze-700">
                Save Hundreds With Precision Repair.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl">
              Big-box retailers push overpriced $600+ replacements for a $45 snapped gear. With <strong>29 years of master craftsmanship</strong> in Henderson and the Las Vegas Valley, Alfredo Juarez diagnoses and fixes the exact failure point—from snapped shutter tilt bars to jammed roller shade clutches and 20ft high-ceiling drapery.
            </p>

            {/* Quick Proof Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-alabaster-300 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <DollarSign size={15} />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">Save 70% – 85%</div>
                  <div className="text-[10px] text-charcoal-500">vs. Replacement</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-alabaster-300 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-bronze-700 flex items-center justify-center shrink-0">
                  <Clock size={15} />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">29 Years Experience</div>
                  <div className="text-[10px] text-charcoal-500">Master Alfredo Juarez</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-white border border-alabaster-300 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <ShieldCheck size={15} />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">2-Man Master Crew</div>
                  <div className="text-[10px] text-charcoal-500">Never Subcontractors</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={onOpenEstimate}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Sparkles size={18} className="text-amber-200" />
                <span>Get Free Repair Diagnostic</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-alabaster-50 border border-charcoal-300 text-charcoal-900 font-bold text-base transition-all shadow-sm hover:shadow"
              >
                <Phone size={17} className="text-bronze-600 fill-bronze-600" />
                <span>Call (702) 582-8226</span>
              </a>
            </div>

            {/* Trust reassurance notice */}
            <div className="flex items-center gap-2 text-xs text-charcoal-500 pt-1">
              <CheckCircle size={14} className="text-emerald-600 shrink-0" />
              <span>
                <strong>Mobile van fully stocked</strong> with universal tilt gears, cords, shutter pins, and Rollease clutches for same-day service.
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Architectural Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[5/4] bg-charcoal-900">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Alfredo Juarez master window treatment repair and plantation shutter restoration in Henderson NV"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-black/20"></div>

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel-dark text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Typical Homeowner Savings
                    </span>
                    <span className="text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Saved $1,420
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    3 Plantation Shutters Re-pinned & Leveled
                  </div>
                  <div className="text-xs text-charcoal-300 mt-0.5">
                    Big-box quoted $1,900 for complete tear-out. Alfredo restored the louvers in 90 minutes on-site.
                  </div>
                </div>
              </div>

              {/* Floating Stat Card: 29 Years Master Experience */}
              <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 bg-white rounded-xl shadow-floating border border-alabaster-200">
                <div className="w-12 h-12 rounded-lg bg-charcoal-900 text-amber-400 flex flex-col items-center justify-center font-extrabold leading-none">
                  <span className="text-lg">29</span>
                  <span className="text-[9px] uppercase tracking-tighter">YRS</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">Master Craftsman</div>
                  <div className="text-[11px] text-charcoal-500">Alfredo Juarez & Team</div>
                </div>
              </div>

              {/* Floating Stat Card: High Ceilings & Ladders */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-3 bg-white rounded-xl shadow-floating border border-alabaster-200">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-bronze-700 flex items-center justify-center">
                  <Maximize2 size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">Tall 15ft – 25ft Ceilings</div>
                  <div className="text-[11px] text-charcoal-500">Laser Leveling & Scaffolding</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
