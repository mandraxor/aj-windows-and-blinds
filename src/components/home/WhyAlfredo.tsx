'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Check, 
  X, 
  Star, 
  Award, 
  Wrench, 
  Clock, 
  Users, 
  Truck, 
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';

export function WhyAlfredo() {
  const comparisonRows = [
    {
      feature: "Primary Business Goal",
      alfredo: "Diagnose & fix the exact component to save you money",
      bigBox: "Push brand-new replacements to hit store sales quotas",
    },
    {
      feature: "Who Performs the Work?",
      alfredo: "Alfredo Juarez (29 yrs exp) & dedicated assistant",
      bigBox: "Random lowest-bid subcontracted third parties",
    },
    {
      feature: "Mobile Van Parts Stock",
      alfredo: "Hundreds of tilt gears, strings, clutches & shutter pins",
      bigBox: "Zero repair parts carried on site (replacement only)",
    },
    {
      feature: "Turnaround Time",
      alfredo: "Same-Day to 48 Hours for most standard repairs",
      bigBox: "4 to 8 weeks for custom manufacturing & freight",
    },
    {
      feature: "High Ceilings (15ft - 25ft)",
      alfredo: "Scaffold, tall ladders & laser leveling equipment ready",
      bigBox: "Refuse high installations or charge excessive surcharges",
    },
    {
      feature: "Customer Rating",
      alfredo: "5.0-Star Perfect Rating (25 Thumbtack Top Pro Reviews)",
      bigBox: "Inconsistent store reviews with disjointed customer service",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-bronze-800 text-xs font-bold uppercase tracking-wider border border-amber-200 mb-3">
            <Award size={14} className="text-bronze-600" />
            <span>The Master Craftsman Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Why Henderson & Las Vegas Homeowners Choose Alfredo
          </h2>
          <p className="text-base text-charcoal-600 mt-3 leading-relaxed">
            When you hire AJ Blind Installations & Repair, you work directly with Alfredo Juarez—a seasoned technician with 29 years of hands-on mechanical window treatment mastery.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-2xl bg-alabaster-50 border border-alabaster-300 hover:border-amber-400 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-charcoal-900 text-amber-400 flex items-center justify-center mb-4 shadow">
              <Clock size={22} />
            </div>
            <h3 className="text-base font-bold text-charcoal-900 mb-2">
              29 Years in Business
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Serving the Las Vegas Valley since 1997. Alfredo has encountered and solved every mechanism, brand quirk, and desert sun failure mode in existence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-alabaster-50 border border-alabaster-300 hover:border-amber-400 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-bronze-600 text-white flex items-center justify-center mb-4 shadow">
              <Users size={22} />
            </div>
            <h3 className="text-base font-bold text-charcoal-900 mb-2">
              2-Person Dedicated Master Team
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              No junior trainees or revolving subcontracted handymen. Alfredo and his partner arrive together, work quietly and respectfully, and leave your home spotless.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-alabaster-50 border border-alabaster-300 hover:border-amber-400 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4 shadow">
              <Truck size={22} />
            </div>
            <h3 className="text-base font-bold text-charcoal-900 mb-2">
              Fully Stocked Mobile Shop
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Our service van carries hundreds of specialty tilt mechanisms, stainless steel shutter staples, UV restringing cords, and Rollease clutches for instant fixes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-alabaster-50 border border-alabaster-300 hover:border-amber-400 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-charcoal-900 flex items-center justify-center mb-4 shadow">
              <Star size={22} className="fill-charcoal-900" />
            </div>
            <h3 className="text-base font-bold text-charcoal-900 mb-2">
              Thumbtack Top Pro (5.0 ★)
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              41+ verified hires, 100% background-checked, and a flawless 5.0-star rating across 25 reviews (96% 5-star) reflecting total customer satisfaction.
            </p>
          </div>

        </div>

        {/* Comparison Table Box */}
        <div className="rounded-2xl border border-alabaster-300 overflow-hidden shadow-card">
          <div className="p-5 sm:p-6 bg-charcoal-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Direct Comparison</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                AJ Blind Installations vs. Big-Box Retail Chains
              </h3>
            </div>
            <div className="text-xs text-charcoal-300">
              Honest repairs vs. high-pressure replacement quotes
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-alabaster-200 bg-alabaster-50 text-charcoal-500 uppercase tracking-wider text-[11px] font-bold">
                  <th className="p-4 sm:p-5 w-1/3">Factor</th>
                  <th className="p-4 sm:p-5 w-1/3 bg-amber-50/70 text-bronze-800 border-x border-amber-200">
                    Alfredo Juarez (AJ Blinds)
                  </th>
                  <th className="p-4 sm:p-5 w-1/3 text-charcoal-600">
                    Big-Box Stores (Lowe&apos;s, Home Depot, Bugsy&apos;s)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-alabaster-200">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-alabaster-50/60 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-charcoal-900">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 bg-amber-50/40 text-charcoal-900 font-semibold border-x border-amber-100 flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.alfredo}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-charcoal-500">
                      <div className="flex items-start gap-2">
                        <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.bigBox}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner */}
          <div className="p-4 bg-alabaster-100 text-center text-xs text-charcoal-600 border-t border-alabaster-200">
            Have a quote from another company? <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-bronze-700 font-bold underline">Call Alfredo directly at {BUSINESS_INFO.phone}</a> for a free second opinion before signing an expensive replacement contract.
          </div>
        </div>

      </div>
    </section>
  );
}
