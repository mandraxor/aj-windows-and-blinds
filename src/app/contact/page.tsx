'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Camera, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '@/data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    neighborhood: 'Henderson (Anthem / Seven Hills)',
    serviceType: 'Plantation Shutter Repair',
    urgency: 'Standard (Next 24-48 Hours)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {}
  };

  return (
    <div className="py-12 bg-alabaster-100 space-y-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider">
            <MessageSquare size={13} className="text-bronze-600" />
            <span>Direct Access to Alfredo Juarez</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Contact & Photo Diagnostic Request
          </h1>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Need an urgent repair or an honest second opinion? Reach out directly to master technician Alfredo Juarez. Text photos of the damage for an immediate verbal diagnostic.
          </p>
        </div>

        {/* 3 Quick Contact Methods Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="p-6 rounded-2xl bg-white border border-alabaster-300 hover:border-bronze-500 shadow-sm transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-bronze-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone size={22} className="fill-bronze-700" />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">Direct Phone Call</h3>
              <p className="text-xs text-charcoal-500">
                Speak directly with Alfredo. No corporate automated phone trees.
              </p>
            </div>
            <div className="mt-4 text-sm font-extrabold text-bronze-700">
              {BUSINESS_INFO.phone} →
            </div>
          </a>

          <a
            href={`sms:${BUSINESS_INFO.phoneRaw}?body=Hi%20Alfredo,%20I%20have%20photos%20of%20a%20broken%20blind/shutter%20for%20an%20estimate.`}
            className="p-6 rounded-2xl bg-white border border-alabaster-300 hover:border-emerald-500 shadow-sm transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Camera size={22} />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">Text Photos for Quote</h3>
              <p className="text-xs text-charcoal-500">
                Snap a picture of the failure point and text it for a 15-minute estimate.
              </p>
            </div>
            <div className="mt-4 text-sm font-extrabold text-emerald-700">
              Text Photos Now →
            </div>
          </a>

          <div className="p-6 rounded-2xl bg-white border border-alabaster-300 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-charcoal-100 text-charcoal-800 flex items-center justify-center">
                <Clock size={22} />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">Operating Hours</h3>
              <p className="text-xs text-charcoal-500">
                Monday – Saturday: 7:30 AM – 6:30 PM<br />
                Sunday: Emergency & By Appointment
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-emerald-700 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Dispatch</span>
            </div>
          </div>

        </div>

        {/* Diagnostic Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-alabaster-300 shadow-card">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">Online Diagnostic Form</span>
              <h2 className="text-2xl font-bold text-charcoal-900">
                Request an In-Home Diagnostic & Estimate
              </h2>
              <p className="text-xs text-charcoal-500">
                Fill in the details below. Alfredo will reach out promptly with an honest estimate.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(725) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">Neighborhood / Area *</label>
                    <select
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                    >
                      <option>Henderson (Anthem, Seven Hills, Inspirada)</option>
                      <option>Henderson (Green Valley, MacDonald Ranch, Cadence)</option>
                      <option>Summerlin (North / South / The Ridges)</option>
                      <option>Lake Las Vegas</option>
                      <option>Centennial Hills / Northwest Las Vegas</option>
                      <option>Spring Valley / Rhodes Ranch</option>
                      <option>North Las Vegas / Aliante</option>
                      <option>Other Clark County Area</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">Service Needed *</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                    >
                      <option>Plantation Shutter Repair (Staples, Tilt Bar, Louvers)</option>
                      <option>Blind Restringing & Tilt Mechanism Fix</option>
                      <option>Roller Shade Clutch & Spring Service</option>
                      <option>High-Ceiling Drapery Installation (15-25ft)</option>
                      <option>Motorized Shade Diagnostic & Limits</option>
                      <option>Custom Window Coverings Measurement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Urgency</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Emergency (Today)', 'Next 24-48 Hours', 'Flexible this week'].map((u) => (
                      <button
                        type="button"
                        key={u}
                        onClick={() => setFormData({ ...formData, urgency: u })}
                        className={`p-2 text-xs font-semibold rounded-xl border text-center transition-all ${
                          formData.urgency === u
                            ? 'border-bronze-600 bg-amber-50 text-bronze-800 font-bold'
                            : 'border-alabaster-300 bg-white text-charcoal-600 hover:bg-alabaster-50'
                        }`}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">
                    Describe Damage or Window Treatment Dimensions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 2 faux wood blinds won't tilt closed, and 1 shutter tilt rod detached from louvers."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-charcoal-500">
                    🔒 Zero spam guarantee • Direct to Alfredo
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <Sparkles size={14} className="text-amber-200" />
                    <span>Submit Diagnostic Request</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 size={40} className="text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-900">Diagnostic Request Received!</h3>
                <p className="text-xs text-charcoal-600 max-w-md mx-auto">
                  Thank you, {formData.name}. Alfredo Juarez has received your request and will contact you via phone or SMS at {formData.phone} shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-charcoal-900 text-white text-xs font-bold rounded-xl"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Master Service Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-charcoal-900 text-white p-6 sm:p-8 rounded-3xl border border-charcoal-800 shadow-xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Master Guarantees</span>
              <h3 className="text-xl font-bold text-white">
                What to Expect When Alfredo Arrives
              </h3>
              
              <ul className="space-y-3 text-xs text-charcoal-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>On-Time Arrival:</strong> We respect your schedule and provide a 30-minute arrival window text.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Stocked Mobile Workshop:</strong> We carry universal tilt gears, restringing cords, shutter staples, and Rollease clutches on our truck.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Spotless Cleanliness:</strong> Shoe covers, drop cloths, and full cleanup upon completion.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>90-Day Craftsmanship Warranty:</strong> If any repaired component fails within 90 days, we fix it at no charge.</span>
                </li>
              </ul>
            </div>

            {/* Address & Licensing */}
            <div className="bg-white p-6 rounded-2xl border border-alabaster-300 space-y-3 text-xs text-charcoal-600">
              <div className="font-bold text-charcoal-900 text-sm">
                AJ Blind Installations & Repair LLC
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-bronze-600 shrink-0" />
                <span>Henderson, NV 89012 (Valley-Wide Mobile Service)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                <span>Verified Thumbtack Top Pro • Background Checked • Insured</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
