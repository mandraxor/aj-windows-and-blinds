'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  TrendingDown, 
  Leaf, 
  ShieldCheck 
} from 'lucide-react';
import { CALCULATOR_DATA } from '@/data/siteData';
import { formatCurrency } from '@/lib/utils';

interface RepairVsReplaceCalculatorProps {
  onOpenEstimate?: (serviceName?: string) => void;
}

export function RepairVsReplaceCalculator({ onOpenEstimate }: RepairVsReplaceCalculatorProps) {
  const [selectedIndex, setSelectedIndex] = useState(2); // Default to Plantation Shutter Staples
  const [quantity, setQuantity] = useState(2);

  const currentOption = CALCULATOR_DATA[selectedIndex] || CALCULATOR_DATA[0];

  const totalReplacementCost = currentOption.replacementPriceEst * quantity;
  const totalRepairCost = currentOption.repairPriceEst * quantity;
  const totalSavings = totalReplacementCost - totalRepairCost;
  const savingsPercent = Math.round((totalSavings / totalReplacementCost) * 100);

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white border-y border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200 mb-3">
            <TrendingDown size={14} className="text-emerald-600" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Repair vs. Full Replacement Comparison
          </h2>
          <p className="text-base text-charcoal-600 mt-3 leading-relaxed">
            See exactly how much you save by having Alfredo rebuild the mechanical components instead of tearing out the entire window frame.
          </p>
        </div>

        {/* Calculator Interface Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 bg-alabaster-50 p-6 sm:p-8 rounded-2xl border border-alabaster-300 shadow-sm space-y-6">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2.5">
                1. Select Common Window Treatment & Failure Point:
              </label>
              <div className="space-y-2">
                {CALCULATOR_DATA.map((item, idx) => (
                  <button
                    key={`${item.treatmentType}-${item.issueType}`}
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                      selectedIndex === idx
                        ? 'bg-white border-bronze-600 shadow-md ring-1 ring-bronze-500'
                        : 'bg-white/80 border-alabaster-300 hover:bg-white hover:border-alabaster-400'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-bronze-700 uppercase tracking-wider">
                        {item.treatmentType}
                      </div>
                      <div className="text-sm font-semibold text-charcoal-900 mt-0.5">
                        {item.issueType}
                      </div>
                      <div className="text-xs text-charcoal-500 mt-1">
                        {item.note}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        ~{formatCurrency(item.repairPriceEst)} / ea
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Window Quantity Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-700">
                  2. Number of Windows / Panels:
                </label>
                <span className="text-base font-extrabold text-charcoal-900 bg-white px-3 py-1 rounded-lg border border-alabaster-300 shadow-sm">
                  {quantity} {quantity === 1 ? 'window' : 'windows'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-alabaster-300 rounded-lg appearance-none cursor-pointer accent-bronze-600"
              />
              <div className="flex justify-between text-[11px] text-charcoal-400 mt-1 font-medium">
                <span>1 window</span>
                <span>3 windows</span>
                <span>5 windows</span>
                <span>10 windows</span>
              </div>
            </div>

            {/* Direct Tech Note */}
            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 flex items-start gap-2.5">
              <ShieldCheck size={16} className="text-bronze-700 shrink-0 mt-0.5" />
              <div className="text-xs text-charcoal-700">
                <span className="font-bold text-charcoal-900">Truck-Stocked Parts:</span> Alfredo stocks the exact stainless staples, gears, and clutches required for this fix in his van for <strong>immediate resolution</strong>.
              </div>
            </div>

          </div>

          {/* Right Column: Comparative Visual Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The Big Savings Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white shadow-xl border border-charcoal-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Calculated Homeowner Savings
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {formatCurrency(totalSavings)}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-500/30">
                    {savingsPercent}% Lower Cost
                  </span>
                </div>
              </div>

              {/* Head-to-Head Comparison Grid */}
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-charcoal-800">
                
                {/* Big Box Replace */}
                <div className="p-4 rounded-xl bg-charcoal-800/60 border border-charcoal-700/60 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                    <XCircle size={14} />
                    <span>Big-Box Replacement</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {formatCurrency(totalReplacementCost)}
                  </div>
                  <ul className="text-xs text-charcoal-400 space-y-1">
                    <li>• 4 to 8 week manufacturing wait</li>
                    <li>• Costly measurement & freight fees</li>
                    <li>• Unskilled 3rd party installers</li>
                    <li>• Entire old frame dumped in landfill</li>
                  </ul>
                </div>

                {/* AJ Precision Repair */}
                <div className="p-4 rounded-xl bg-bronze-900/30 border border-amber-500/40 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                    <CheckCircle2 size={14} />
                    <span>Alfredo&apos;s Precision Repair</span>
                  </div>
                  <div className="text-xl font-bold text-amber-300">
                    ~{formatCurrency(totalRepairCost)}
                  </div>
                  <ul className="text-xs text-charcoal-300 space-y-1">
                    <li>• On-site fix in {currentOption.timeToFix}</li>
                    <li>• Master Alfredo Juarez (29 yrs exp)</li>
                    <li>• Upgraded heavy-duty hardware</li>
                    <li>• 90-Day Craftsmanship Warranty</li>
                  </ul>
                </div>

              </div>

              {/* Eco & Landfill Impact */}
              <div className="pt-4 flex items-center justify-between text-xs text-charcoal-400">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Leaf size={14} />
                  <span>Landfill Diverted: {quantity * 12} lbs of architectural waste spared</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-amber-400" />
                  <span>Turnaround: Same Day – 48 Hours</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  onClick={() => onOpenEstimate && onOpenEstimate(currentOption.treatmentType)}
                  className="w-full py-3.5 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Sparkles size={16} className="text-amber-200" />
                  <span>Lock in This Repair Estimate with Alfredo</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>

            {/* Reassurance text */}
            <div className="text-xs text-charcoal-500 text-center">
              *Estimates based on typical retail pricing for Hunter Douglas, Norman, and Graber blinds & shutters in Clark County, NV vs AJ Blind truck-service rates.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
