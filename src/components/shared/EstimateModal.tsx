'use client';

import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Camera, 
  Phone, 
  Calendar, 
  MapPin,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, SERVICES } from '@/data/siteData';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function EstimateModal({ isOpen, onClose, defaultService }: EstimateModalProps) {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState(defaultService || 'Plantation Shutter Repair');
  const [issueDescription, setIssueDescription] = useState('Detached tilt rod or loose louvers');
  const [windowCount, setWindowCount] = useState('1 to 3 windows');
  const [urgency, setUrgency] = useState('Within 24-48 hours');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    neighborhood: 'Henderson (Anthem / Seven Hills)',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // Ignore if confetti fails
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-alabaster-300 overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-charcoal-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Sparkles size={14} />
              <span>Fast Diagnostic & Free Quote</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Get an Honest Estimate from Alfredo
            </h3>
            <p className="text-xs text-charcoal-300 mt-1">
              Direct master evaluation • No sales reps • 90-day guarantee
            </p>
          </div>

          <button
            onClick={resetForm}
            aria-label="Close modal"
            className="text-charcoal-400 hover:text-white p-1 rounded-lg hover:bg-charcoal-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
            {/* Step Progress indicators */}
            <div className="flex items-center justify-between pb-3 border-b border-alabaster-200 text-xs">
              <span className={`font-semibold ${step >= 1 ? 'text-bronze-600' : 'text-charcoal-400'}`}>
                1. Issue Type
              </span>
              <span className="text-charcoal-300">→</span>
              <span className={`font-semibold ${step >= 2 ? 'text-bronze-600' : 'text-charcoal-400'}`}>
                2. Details & Scope
              </span>
              <span className="text-charcoal-300">→</span>
              <span className={`font-semibold ${step >= 3 ? 'text-bronze-600' : 'text-charcoal-400'}`}>
                3. Contact Info
              </span>
            </div>

            {/* Step 1: Issue Category */}
            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-sm font-bold text-charcoal-800">
                  What kind of window treatment needs attention?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { label: 'Plantation Shutters', sub: 'Broken staples, tilt bar, loose louvers' },
                    { label: 'Wood & Faux Wood Blinds', sub: 'Won’t tilt, broken gears, restringing' },
                    { label: 'Roller & Solar Shades', sub: 'Jammed clutch, broken bead chain' },
                    { label: 'Motorized / Smart Shades', sub: 'Remote sync, battery wands, limits' },
                    { label: 'High-Ceiling Drapery (15-25ft)', sub: 'Hanging heavy rods, rings & hooks' },
                    { label: 'Custom New Window Treatments', sub: 'New sales & measurement consultation' },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.label}
                      onClick={() => setServiceType(opt.label)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        serviceType === opt.label
                          ? 'border-bronze-500 bg-amber-50/70 shadow-sm ring-1 ring-bronze-400'
                          : 'border-alabaster-300 hover:border-alabaster-400 hover:bg-alabaster-50'
                      }`}
                    >
                      <div className="text-xs font-bold text-charcoal-900">{opt.label}</div>
                      <div className="text-[11px] text-charcoal-500 mt-0.5">{opt.sub}</div>
                    </button>
                  ))}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-sm rounded-xl transition-all shadow-md"
                  >
                    <span>Next: Details</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Scope & Issue Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-1.5">
                    What best describes the issue?
                  </label>
                  <select
                    value={issueDescription}
                    onChange={(e) => setIssueDescription(e.target.value)}
                    className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                  >
                    <option>Detached tilt rod or loose louvers (Shutters)</option>
                    <option>Blinds won't tilt open or closed (Stripped gear)</option>
                    <option>Snapped or frayed lift cord (Needs restringing)</option>
                    <option>Roller shade jammed / chain slipping off teeth</option>
                    <option>Motorized shade not responding to remote</option>
                    <option>Tall 18ft - 24ft high ceiling installation needed</option>
                    <option>General consultation / multiple issues</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-1.5">
                    How many windows or openings?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['1 to 2 windows', '3 to 5 windows', '6+ whole house'].map((c) => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => setWindowCount(c)}
                        className={`p-2.5 text-xs font-bold rounded-xl border text-center transition-all ${
                          windowCount === c
                            ? 'border-bronze-500 bg-amber-50 text-bronze-700 font-extrabold ring-1 ring-bronze-400'
                            : 'border-alabaster-300 bg-white text-charcoal-700 hover:bg-alabaster-50'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-1.5">
                    How soon do you need this resolved?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Emergency (Today)', 'Next 24-48 Hours', 'Flexible this week'].map((u) => (
                      <button
                        type="button"
                        key={u}
                        onClick={() => setUrgency(u)}
                        className={`p-2 text-xs font-semibold rounded-xl border text-center transition-all ${
                          urgency === u
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                            : 'border-alabaster-300 bg-white text-charcoal-700 hover:bg-alabaster-50'
                        }`}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-charcoal-500 hover:text-charcoal-900 font-semibold"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-sm rounded-xl transition-all shadow-md"
                  >
                    <span>Next: Your Contact Info</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Submit */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Phone Number (For Text / Call) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(702) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">
                    Neighborhood / Zip Code in Greater Las Vegas *
                  </label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                  >
                    <option>Henderson (Anthem, Seven Hills, Inspirada)</option>
                    <option>Henderson (Green Valley, Cadence, MacDonald Highlands)</option>
                    <option>Summerlin (North, South, The Ridges)</option>
                    <option>Lake Las Vegas</option>
                    <option>Centennial Hills / Northwest Las Vegas</option>
                    <option>Spring Valley / Rhodes Ranch / Mountain's Edge</option>
                    <option>North Las Vegas / Aliante</option>
                    <option>Other Las Vegas Valley</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">
                    Describe any details (or note if you can text photos)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 2 shutter louvers broke off when door slammed. Can text photos to Alfredo directly."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                  />
                </div>

                {/* Estimate Preview Callout */}
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-2.5">
                  <Wrench size={16} className="text-bronze-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-charcoal-700">
                    <span className="font-bold text-charcoal-900">Alfredo's Direct Diagnostic Promise:</span> We carry hundreds of parts in our mobile van. If it can be repaired safely, we'll give you an honest quote on the spot without pushing overpriced replacements.
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-charcoal-500 hover:text-charcoal-900 font-semibold"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Sparkles size={16} className="text-amber-200" />
                    <span>Send Request Directly to Alfredo</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : (
          /* Confirmation Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-bold text-charcoal-900">
                Diagnostic Request Received!
              </h4>
              <p className="text-sm text-charcoal-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-charcoal-900">{formData.name || 'valued customer'}</span>. Alfredo Juarez has received your request for <span className="font-semibold text-charcoal-900">{serviceType}</span> in <span className="font-semibold text-charcoal-900">{formData.neighborhood}</span>.
              </p>
            </div>

            <div className="p-4 bg-alabaster-100 rounded-xl border border-alabaster-200 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="font-bold text-charcoal-900 flex items-center gap-1.5">
                <Clock size={14} className="text-bronze-600" />
                <span>Next Steps for Fastest Service:</span>
              </div>
              <p className="text-charcoal-600 leading-relaxed">
                Alfredo typically responds within <strong>15 to 45 minutes</strong> during business hours (7:30 AM – 6:30 PM).
              </p>
              <div className="pt-1">
                <p className="text-charcoal-500 font-medium">Want an instant quote? Text a quick photo of the damaged blind or shutter directly to Alfredo's phone:</p>
                <a
                  href={`sms:${BUSINESS_INFO.phoneRaw}?body=Hi%20Alfredo,%20I%20just%20submitted%20a%20request%20on%20your%20website%20for%20${encodeURIComponent(serviceType)}.`}
                  className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-bronze-700 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Camera size={13} />
                  <span>Text Photos to (702) 582-8226</span>
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={resetForm}
                className="px-6 py-2.5 bg-charcoal-900 text-white font-bold text-xs rounded-xl hover:bg-charcoal-800 transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
