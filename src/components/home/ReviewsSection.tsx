'use client';

import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  ExternalLink, 
  Quote, 
  MapPin, 
  CheckCircle,
  ThumbsUp
} from 'lucide-react';
import { BUSINESS_INFO, REVIEWS } from '@/data/siteData';

export function ReviewsSection() {
  const [filter, setFilter] = useState('All');

  const filteredReviews = filter === 'All' 
    ? REVIEWS 
    : REVIEWS.filter(r => r.service.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Card with Thumbtack Badge */}
        <div className="bg-charcoal-900 text-white rounded-3xl p-6 sm:p-10 mb-12 border border-charcoal-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>Verified Thumbtack Top Pro</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                5.0 Stars Across 25 Verified Local Reviews
              </h2>
              <p className="text-charcoal-300 text-sm sm:text-base leading-relaxed">
                96% of homeowners award Alfredo a perfect 5.0 rating. With 41+ verified hires in Henderson and the Las Vegas Valley, our reputation for honest pricing, punctuality, and master repairs speaks for itself.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={BUSINESS_INFO.thumbtackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-charcoal-950 rounded-xl font-bold text-xs transition-colors shadow"
                >
                  <span>View Official Thumbtack Profile</span>
                  <ExternalLink size={13} />
                </a>

                <div className="flex items-center gap-2 text-xs text-charcoal-300">
                  <CheckCircle size={14} className="text-emerald-400" />
                  <span>100% Background Checked & Verified</span>
                </div>
              </div>
            </div>

            {/* Scorecard Box */}
            <div className="lg:col-span-4 bg-charcoal-800/80 rounded-2xl p-6 border border-charcoal-700/80 text-center space-y-3">
              <div className="text-5xl font-extrabold text-amber-400 leading-none">
                5.0
              </div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-charcoal-300 font-medium">
                Overall Thumbtack Rating ({BUSINESS_INFO.stats.reviewCount} Reviews)
              </div>

              <div className="pt-3 border-t border-charcoal-700/60 space-y-1.5 text-xs text-left">
                <div className="flex justify-between text-charcoal-300">
                  <span>5 Stars</span>
                  <span className="font-bold text-white">96%</span>
                </div>
                <div className="w-full bg-charcoal-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[96%]"></div>
                </div>

                <div className="flex justify-between text-charcoal-400">
                  <span>4 Stars</span>
                  <span className="font-bold text-charcoal-300">4%</span>
                </div>
                <div className="w-full bg-charcoal-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400/50 h-full w-[4%]"></div>
                </div>

                <div className="flex justify-between text-charcoal-500">
                  <span>1 - 3 Stars</span>
                  <span className="font-bold text-charcoal-500">0%</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 shrink-0">Filter:</span>
          {['All', 'Shutter', 'Drapery', 'Roller Shade', 'Blind', 'Motorized'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                filter === cat
                  ? 'bg-charcoal-900 text-white'
                  : 'bg-alabaster-100 text-charcoal-600 hover:bg-alabaster-200'
              }`}
            >
              {cat === 'All' ? 'All Reviews' : `${cat} Work`}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-alabaster-50 border border-alabaster-300 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle size={10} />
                    <span>Verified Thumbtack Hire</span>
                  </span>
                </div>

                <div className="text-xs font-bold text-bronze-700 uppercase tracking-wider">
                  {rev.service}
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-alabaster-200 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-charcoal-900">{rev.author}</div>
                  <div className="text-charcoal-500 flex items-center gap-1 text-[11px]">
                    <MapPin size={11} className="text-bronze-600" />
                    <span>{rev.location}</span>
                  </div>
                </div>
                <div className="text-[10px] text-charcoal-400">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
