'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Sparkles } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '@/data/siteData';

interface FaqSectionProps {
  onOpenEstimate?: () => void;
}

export function FaqSection({ onOpenEstimate }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-t border-alabaster-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle size={13} className="text-bronze-600" />
            <span>Got Questions? We Have Honest Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-charcoal-600 mt-2">
            Everything you need to know about our repair process, pricing, high-ceiling installations, and warranties.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-alabaster-300 rounded-2xl overflow-hidden transition-all bg-alabaster-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-alabaster-100/60 transition-colors"
                >
                  <span className="font-bold text-charcoal-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-white border border-alabaster-300 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-amber-50 text-bronze-600 border-amber-300' : 'text-charcoal-400'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-alabaster-200/60 bg-white">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-bold text-bronze-700">
                      <span>Category: {faq.category}</span>
                      <span>•</span>
                      <span>90-Day Craftsmanship Warranty Included</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-charcoal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Have a unique window treatment failure?</h4>
            <p className="text-xs text-charcoal-300">
              Alfredo answers his phone directly. Call or send a photo for an immediate verbal diagnosis.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2.5 rounded-xl bg-white text-charcoal-900 font-bold text-xs flex items-center gap-2 hover:bg-alabaster-100 transition-colors"
            >
              <Phone size={14} className="text-bronze-600 fill-bronze-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenEstimate}
              className="px-5 py-2.5 rounded-xl bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
            >
              <Sparkles size={14} className="text-amber-200" />
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
