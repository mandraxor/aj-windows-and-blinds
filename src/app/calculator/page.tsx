'use client';

import React from 'react';
import { RepairVsReplaceCalculator } from '@/components/home/RepairVsReplaceCalculator';
import { 
  Calculator, 
  HelpCircle, 
  Leaf, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';
import { useEstimateModal } from '@/context/EstimateModalContext';

export default function CalculatorPage() {
  const { openEstimate } = useEstimateModal();

  return (
    <div className="py-12 bg-alabaster-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <DollarSign size={13} className="text-emerald-700" />
            <span>Honest Transparent Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Repair vs. Replace Savings Calculator
          </h1>
          <p className="text-base text-charcoal-600 leading-relaxed">
            See the exact financial breakdown. In 90% of cases, a failed blind or shutter only needs an internal replacement gear, pin, or clutch costing a fraction of a full retail unit.
          </p>
        </div>

        {/* The Calculator Engine */}
        <RepairVsReplaceCalculator onOpenEstimate={openEstimate} />

        {/* Deep Dive: Why Big Boxes Push Replacement */}
        <div className="bg-white rounded-3xl border border-alabaster-300 p-8 sm:p-10 shadow-card space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">The Industry Secret</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mt-1">
              Why Massive Retail Chains Won&apos;t Tell You About Repair
            </h2>
            <p className="text-sm text-charcoal-600 mt-2 leading-relaxed">
              When you call Lowe&apos;s, Home Depot, or retail blind franchises, you are speaking to commissioned sales representatives. Their business model relies on selling brand-new units, charging expensive measurement fees, and collecting freight commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-alabaster-50 border border-alabaster-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-base font-bold text-charcoal-900">
                They Don&apos;t Carry Parts
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Big box stores do not train technicians or stock replacement tilt gears, shutter staples, or tension pins. If an item breaks, their only catalog solution is selling you an entirely new custom product.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-alabaster-50 border border-alabaster-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-base font-bold text-charcoal-900">
                Hidden Measurement & Install Fees
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                The advertised &ldquo;50% off sales&rdquo; often conceal $150+ in-home measuring trip charges, freight surcharges, removal fees, and subcontractor labor markups that inflate your final bill.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-alabaster-50 border border-alabaster-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-base font-bold text-charcoal-900">
                Alfredo&apos;s Craftsmanship Alternative
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Alfredo has been rebuilding window treatments since 1997. If a $45 mechanical gear or $85 restringing fixes the unit, that&apos;s all you pay. You preserve your existing woodwork and pocket the difference.
              </p>
            </div>
          </div>
        </div>

        {/* Environmental & Landfill Impact */}
        <div className="bg-charcoal-900 text-white rounded-3xl p-8 sm:p-10 border border-charcoal-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Leaf size={15} />
              <span>Eco-Conscious Desert Living</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Preventing Tons of Plastic & Wood Frame Waste in Apex Landfill
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed">
              Every year, thousands of heavy plantation shutter frames and aluminum blind headrails are dumped into Southern Nevada landfills simply because of a single sheared staple or worn gear. Extending their functional life through precision repair is the smartest environmental choice.
            </p>
          </div>

          <button
            onClick={() => openEstimate()}
            className="px-6 py-3.5 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl shadow-lg shrink-0 flex items-center gap-2"
          >
            <Sparkles size={14} className="text-amber-200" />
            <span>Schedule Your Evaluation</span>
          </button>
        </div>

      </div>
    </div>
  );
}
