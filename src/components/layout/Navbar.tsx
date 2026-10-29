'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Menu, 
  X, 
  Wrench, 
  Calculator, 
  ShieldCheck, 
  ChevronDown, 
  Sparkles,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '@/data/siteData';

interface NavbarProps {
  onOpenEstimate?: () => void;
}

export function Navbar({ onOpenEstimate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Repair vs Replace', href: '/calculator', badge: 'Save 70%' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Before & After', href: '/gallery' },
    { name: 'Reviews (5.0★)', href: '/reviews' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'About Alfredo', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-alabaster-50/95 backdrop-blur-md shadow-sm border-b border-alabaster-300/80 py-2.5' 
        : 'bg-alabaster-100/90 backdrop-blur-sm border-b border-alabaster-200/60 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-charcoal-900 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-bronze-700 transition-colors">
              AJ
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-charcoal-900 text-lg leading-tight">
                  AJ BLIND
                </span>
                <span className="bg-amber-100 text-bronze-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-200">
                  29 YRS
                </span>
              </div>
              <span className="text-[11px] font-medium uppercase tracking-wider text-charcoal-500">
                Installations & Repair • Henderson, NV
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive 
                          ? 'text-bronze-600 bg-amber-50/80' 
                          : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-alabaster-200/60'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className="text-charcoal-400 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Services Dropdown */}
                    <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-card border border-alabaster-300 p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 px-3 py-1.5">
                        Our Specialized Services
                      </div>
                      <div className="space-y-1">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            href={`/services/${s.slug}`}
                            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-alabaster-100 transition-colors"
                          >
                            <div className="w-7 h-7 rounded-md bg-amber-50 text-bronze-600 flex items-center justify-center shrink-0 mt-0.5">
                              <Wrench size={14} />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-charcoal-800 flex items-center gap-1.5">
                                {s.title}
                                {s.badge && (
                                  <span className="text-[9px] bg-emerald-50 text-emerald-700 font-bold px-1 rounded">
                                    {s.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-charcoal-500 line-clamp-1">
                                {s.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-alabaster-200 mt-2 pt-2 px-2">
                        <Link
                          href="/services"
                          className="flex items-center justify-between text-xs font-semibold text-bronze-600 hover:text-bronze-700 p-1.5"
                        >
                          <span>View All Services & Brands</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                    isActive 
                      ? 'text-bronze-600 bg-amber-50/80 font-semibold' 
                      : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-alabaster-200/60'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {link.badge && (
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-alabaster-300 bg-white hover:border-bronze-300 text-charcoal-800 font-semibold text-sm transition-all shadow-sm hover:shadow"
            >
              <div className="w-6 h-6 rounded-full bg-amber-100 text-bronze-600 flex items-center justify-center">
                <Phone size={13} />
              </div>
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenEstimate}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bronze-600 hover:bg-bronze-700 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Sparkles size={14} className="text-amber-200" />
              <span>Get Free Estimate</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call Alfredo"
              className="w-9 h-9 rounded-lg bg-amber-100 text-bronze-700 flex items-center justify-center"
            >
              <Phone size={18} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-charcoal-700 hover:bg-alabaster-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-alabaster-200 bg-alabaster-50 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-alabaster-300 mb-2">
            <div>
              <div className="text-xs font-semibold text-charcoal-500">Need Immediate Advice?</div>
              <div className="text-sm font-bold text-charcoal-900">Talk directly with Alfredo</div>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-3 py-1.5 bg-bronze-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
            >
              <Phone size={12} />
              <span>Call Now</span>
            </a>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-charcoal-800 hover:bg-alabaster-200"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenEstimate) onOpenEstimate();
              }}
              className="w-full py-3 bg-charcoal-900 hover:bg-charcoal-800 text-amber-400 font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles size={16} />
              <span>Request Diagnostic / Free Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
