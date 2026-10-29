'use client';

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { RepairVsReplaceCalculator } from '@/components/home/RepairVsReplaceCalculator';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyAlfredo } from '@/components/home/WhyAlfredo';
import { BeforeAfterShowcase } from '@/components/home/BeforeAfterShowcase';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { ServiceAreasSection } from '@/components/home/ServiceAreasSection';
import { FaqSection } from '@/components/home/FaqSection';
import { Phone, Sparkles, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';
import { useEstimateModal } from '@/context/EstimateModalContext';

export default function HomePage() {
  const { openEstimate } = useEstimateModal();

  return (
    <>
      {/* 1. Hero Section */}
      <Hero onOpenEstimate={() => openEstimate()} />

      {/* 2. Interactive Repair vs. Replace Value Calculator */}
      <RepairVsReplaceCalculator onOpenEstimate={openEstimate} />

      {/* 3. Core Specialized Services */}
      <ServicesSection onOpenEstimate={openEstimate} />

      {/* 4. Why Alfredo (2-Man Master Team Edge vs Big Box) */}
      <WhyAlfredo />

      {/* 5. Before & After Interactive Showcase */}
      <BeforeAfterShowcase />

      {/* 6. Authentic Reviews & Thumbtack Top Pro Social Proof */}
      <ReviewsSection />

      {/* 7. Local Clark County Service Areas Coverage */}
      <ServiceAreasSection onOpenEstimate={() => openEstimate()} />

      {/* 8. Frequently Asked Questions */}
      <FaqSection onOpenEstimate={() => openEstimate()} />

      {/* 9. Final High-Impact Conversion Banner */}
      <section className="py-16 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            <span>Honest Nevada Craftsmanship Since 1997</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Ready to Fix Your Blinds or Shutters Without Overpaying?
          </h2>

          <p className="text-base sm:text-lg text-charcoal-300 max-w-2xl mx-auto leading-relaxed">
            Alfredo Juarez is ready to evaluate your window treatments. Send a photo for an immediate diagnosis or schedule a fast truck visit in Henderson, Summerlin, or anywhere in the Las Vegas Valley.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openEstimate()}
              className="w-full sm:w-auto px-8 py-4 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-sm rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Sparkles size={16} className="text-amber-200" />
              <span>Get Your Free Diagnostic Quote</span>
              <ArrowRight size={15} />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone size={16} className="text-amber-400 fill-amber-400" />
              <span>Call Alfredo: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>90-Day Craftsmanship Warranty</span>
            </div>
            <span>•</span>
            <div>Zero High-Pressure Sales</div>
            <span>•</span>
            <div>Direct Master Craftsman Dispatch</div>
          </div>
        </div>
      </section>
    </>
  );
}
