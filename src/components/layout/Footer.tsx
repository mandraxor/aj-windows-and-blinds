'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  CheckCircle, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '@/data/siteData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-alabaster-200 border-t border-charcoal-800">
      {/* Pre-footer trust banner */}
      <div className="border-b border-charcoal-800/80 bg-charcoal-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
              <Star size={20} className="fill-amber-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">5.0 Star Thumbtack Top Pro</div>
              <div className="text-xs text-charcoal-400">96% 5-Star Rating Across 25+ Reviews</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
              <Clock size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">29 Years Master Experience</div>
              <div className="text-xs text-charcoal-400">Serving Nevada Homes Since 1997</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Background Checked & Insured</div>
              <div className="text-xs text-charcoal-400">Two-Person Dedicated Master Team</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-bronze-500/10 text-bronze-400 flex items-center justify-center shrink-0 border border-bronze-500/20">
              <CheckCircle size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">90-Day Craftsmanship Warranty</div>
              <div className="text-xs text-charcoal-400">Guaranteed Precision on Every Job</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-bronze-600 text-white flex items-center justify-center font-bold text-xl shadow">
                AJ
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight block">
                  AJ BLIND INSTALLATIONS
                </span>
                <span className="text-xs text-amber-400 tracking-wider font-semibold uppercase">
                  & REPAIR • HENDERSON, NV
                </span>
              </div>
            </div>

            <p className="text-sm text-charcoal-400 leading-relaxed max-w-sm">
              Founded by master technician Alfredo Juarez, AJ Blind Installations and Repair is the premier honest alternative to overpriced big-box replacement stores. We extend the life of your existing blinds and shutters with commercial-grade parts and master craftsmanship.
            </p>

            {/* Direct Thumbtack Link Badge */}
            <div className="pt-2">
              <a 
                href={BUSINESS_INFO.thumbtackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-charcoal-900 border border-charcoal-700 hover:border-amber-400/50 text-xs text-alabaster-300 hover:text-white transition-colors group"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span>Verified Thumbtack Top Pro Profile (41+ Hires)</span>
                <ExternalLink size={12} className="text-charcoal-400 group-hover:text-amber-400" />
              </a>
            </div>

            <div className="pt-2 space-y-2 text-sm text-charcoal-400">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-amber-400 shrink-0" />
                <span>Based in Henderson, NV 89012 (Valley-Wide Mobile Service)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-amber-400 shrink-0" />
                <span>Mon – Sat: 7:30 AM – 6:30 PM | Sun: By Appt</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-amber-400 font-semibold">
                  {BUSINESS_INFO.phone} (Direct to Alfredo)
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Repair & Install Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link 
                    href={`/services/${s.slug}`}
                    className="text-charcoal-400 hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tools & Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Helpful Tools
            </h4>
            <ul className="space-y-2 text-sm text-charcoal-400">
              <li>
                <Link href="/calculator" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Repair vs. Replace Calculator</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-800">
                    Popular
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors">
                  Before & After Transformations
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-amber-400 transition-colors">
                  Verified Thumbtack Reviews (5.0★)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Alfredo & Our 2-Man Crew
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-amber-400 transition-colors">
                  Neighborhood Coverage Map
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Request Photo Diagnostic
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-charcoal-400">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  <Link 
                    href={`/service-areas#${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {area.name} ({area.region})
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-charcoal-900 border border-charcoal-800 text-xs text-charcoal-400">
              <span className="text-amber-400 font-semibold block mb-0.5">Need Same-Day Service?</span>
              Call early morning for same-day dispatch in Henderson and Summerlin.
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="border-t border-charcoal-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <div>
            © {currentYear} {BUSINESS_INFO.legalName}. All rights reserved. Master window treatment craftsmanship in Nevada.
          </div>
          <div className="flex items-center gap-4">
            <span>Henderson & Las Vegas, NV</span>
            <span>•</span>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 hover:underline">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
