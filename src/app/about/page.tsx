'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, 
  ShieldCheck, 
  Clock, 
  Star, 
  Users, 
  Wrench, 
  CheckCircle2, 
  Sparkles, 
  Phone,
  ExternalLink,
  HeartHandshake
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';
import { useEstimateModal } from '@/context/EstimateModalContext';

export default function AboutPage() {
  const { openEstimate } = useEstimateModal();

  return (
    <div className="py-12 bg-alabaster-100 space-y-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider">
            <Award size={13} className="text-bronze-600" />
            <span>29 Years of Master Craftsmanship</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Meet Alfredo Juarez & The AJ Blinds Story
          </h1>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Preserving existing window treatments, saving homeowners thousands of dollars, and delivering honest master craftsmanship to Henderson and the Las Vegas Valley since 1997.
          </p>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-alabaster-300 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[460px] bg-charcoal-900">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
              alt="Alfredo Juarez master window treatment craftsman"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel-dark text-white">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Founder & Lead Craftsman
              </div>
              <div className="text-lg font-bold text-white mt-0.5">
                Alfredo Juarez
              </div>
              <div className="text-xs text-charcoal-300 mt-1">
                29 Years Hands-On Experience • 100% Background Checked Thumbtack Top Pro
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-bronze-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Our Founding Philosophy
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-900">
                &ldquo;Never throw away what can be masterfully restored.&rdquo;
              </h2>

              <p className="text-sm text-charcoal-700 leading-relaxed">
                In 1997, Alfredo Juarez started repairing window treatments in Southern Nevada after witnessing large retail stores constantly forcing homeowners to replace high-end custom wood blinds and plantation shutters over minor, fixable mechanical problems.
              </p>

              <p className="text-sm text-charcoal-700 leading-relaxed">
                Whether it was a stripped 50-cent plastic worm tilter or a popped staple on a plantation shutter, retail stores would declare the entire window unit &ldquo;unrepairable&rdquo; to lock in thousands of dollars in new product sales. Alfredo built his business on the exact opposite promise: <strong>integrity, technical mastery, and honest diagnosis.</strong>
              </p>

              <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-alabaster-50 border border-alabaster-200">
                  <span className="font-bold text-charcoal-900 block">41+ Verified Hires</span>
                  <span className="text-charcoal-500">100% 5-Star Track Record</span>
                </div>
                <div className="p-3 rounded-xl bg-alabaster-50 border border-alabaster-200">
                  <span className="font-bold text-charcoal-900 block">2-Person Crew</span>
                  <span className="text-charcoal-500">No Subcontractors Ever</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-alabaster-200 flex items-center justify-between">
              <a
                href={BUSINESS_INFO.thumbtackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-bronze-600 hover:text-bronze-700 flex items-center gap-1.5"
              >
                <span>View Alfredo&apos;s Thumbtack Profile</span>
                <ExternalLink size={13} />
              </a>

              <button
                onClick={() => openEstimate()}
                className="px-4 py-2 bg-bronze-600 text-white rounded-xl text-xs font-bold hover:bg-bronze-700 transition-colors"
              >
                Get Free Estimate
              </button>
            </div>

          </div>

        </div>

        {/* The 2-Person Master Crew Advantage */}
        <div className="bg-white rounded-3xl border border-alabaster-300 p-8 sm:p-10 shadow-card space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-600">
            <Users size={16} />
            <span>The Master Team Advantage</span>
          </div>

          <h3 className="text-2xl font-bold text-charcoal-900">
            Why Our Two-Person Crew Beats Big Box Subcontractors
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            <div className="p-5 rounded-2xl bg-alabaster-50 border border-alabaster-200 space-y-2">
              <div className="font-bold text-charcoal-900 text-base flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Direct Accountability</span>
              </div>
              <p className="text-charcoal-600">
                You work directly with Alfredo from the first phone call or photo text to the final test-pull of the cord. No corporate phone trees, no service dispatch runarounds.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-alabaster-50 border border-alabaster-200 space-y-2">
              <div className="font-bold text-charcoal-900 text-base flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Spotless Home Care</span>
              </div>
              <p className="text-charcoal-600">
                We treat your home like a showroom. We wear shoe covers, lay clean canvas drop cloths across travertine, hardwood, and carpet, and leave zero dust or debris behind.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-alabaster-50 border border-alabaster-200 space-y-2">
              <div className="font-bold text-charcoal-900 text-base flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Tall Ceiling Competence</span>
              </div>
              <p className="text-charcoal-600">
                Hanging heavy drapery or shades on 18-to-24-foot ceilings requires two coordinated craftsmen, heavy commercial A-frames, scaffolding, and precision dual-axis laser leveling.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-charcoal-900 text-white rounded-3xl p-8 sm:p-10 border border-charcoal-800 shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Experience Master Window Treatment Care</h3>
          <p className="text-sm text-charcoal-300 max-w-xl mx-auto">
            Get an honest diagnosis for your blinds or shutters today. Alfredo will tell you straight whether repair or replacement makes the most sense.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openEstimate()}
              className="px-6 py-3 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl shadow transition-all"
            >
              Get Free Estimate
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs rounded-xl transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
