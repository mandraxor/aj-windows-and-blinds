'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  DollarSign, 
  SlidersHorizontal 
} from 'lucide-react';
import { BEFORE_AFTER_CASES } from '@/data/siteData';

export function BeforeAfterShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAfterMap, setShowAfterMap] = useState<{ [key: string]: boolean }>({});

  const categories = ['All', 'Shutters', 'Blinds', 'Roller Shades', 'Drapery'];

  const filteredCases = activeCategory === 'All'
    ? BEFORE_AFTER_CASES
    : BEFORE_AFTER_CASES.filter((c) => c.category === activeCategory);

  const toggleImage = (id: string) => {
    setShowAfterMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-alabaster-50 border-t border-alabaster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-bronze-600" />
            <span>Real Local Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Before & After: Restored to Perfection
          </h2>
          <p className="text-base text-charcoal-600 mt-3 leading-relaxed">
            Click any project to toggle between the original broken failure state and Alfredo&apos;s restored master finish.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-charcoal-900 text-amber-400 shadow-sm'
                    : 'bg-white border border-alabaster-300 text-charcoal-600 hover:bg-alabaster-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item) => {
            const isShowingAfter = showAfterMap[item.id] !== false; // Default to showing After image

            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border border-alabaster-300 overflow-hidden shadow-card hover:shadow-floating transition-all flex flex-col justify-between"
              >
                {/* Image Container with Toggle */}
                <div className="relative aspect-[16/10] bg-charcoal-900 group cursor-pointer" onClick={() => toggleImage(item.id)}>
                  <Image
                    src={isShowingAfter ? item.afterImage : item.beforeImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent"></div>

                  {/* Toggle Mode Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow ${
                      isShowingAfter 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-rose-600 text-white'
                    }`}>
                      {isShowingAfter ? 'AFTER: Restored' : 'BEFORE: Broken'}
                    </span>
                    <span className="bg-charcoal-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-full border border-white/20">
                      Click to toggle view
                    </span>
                  </div>

                  {/* Savings pill */}
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-charcoal-900/90 text-amber-400 font-bold text-xs px-3 py-1.5 rounded-lg border border-amber-400/30 flex items-center gap-1 shadow">
                      <DollarSign size={13} className="text-emerald-400" />
                      <span>{item.savings}</span>
                    </span>
                  </div>

                  {/* Category tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-charcoal-900 font-bold text-xs px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal-900">
                      {item.title}
                    </h3>
                    <div className="text-xs text-charcoal-500 mt-1 font-medium">
                      {item.details}
                    </div>

                    <div className="mt-4 space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200/60 text-charcoal-800 flex items-start gap-2">
                        <AlertTriangle size={14} className="text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-rose-900">Failure: </strong>
                          {item.problem}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200/60 text-charcoal-800 flex items-start gap-2">
                        <CheckCircle size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-emerald-900">Alfredo&apos;s Fix: </strong>
                          {item.solution}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button to toggle */}
                  <div className="pt-2 flex items-center justify-between border-t border-alabaster-200">
                    <button
                      type="button"
                      onClick={() => toggleImage(item.id)}
                      className="text-xs font-bold text-bronze-600 hover:text-bronze-700 flex items-center gap-1.5"
                    >
                      <SlidersHorizontal size={13} />
                      <span>Switch to {isShowingAfter ? 'Before (Broken)' : 'After (Restored)'}</span>
                    </button>

                    <span className="text-[11px] text-charcoal-500 font-semibold">
                      Completed On-Site
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
