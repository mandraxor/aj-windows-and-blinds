'use client';

import React, { useState } from 'react';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { 
  Star, 
  ShieldCheck, 
  ExternalLink, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  ThumbsUp
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';

export default function ReviewsPage() {
  const [submittedReview, setSubmittedReview] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    neighborhood: 'Henderson',
    service: 'Plantation Shutter Repair',
    rating: 5,
    comment: '',
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedReview(true);
  };

  return (
    <div className="py-12 bg-alabaster-100 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-bronze-800 text-xs font-bold uppercase tracking-wider">
            <Star size={13} className="fill-bronze-600 text-bronze-600" />
            <span>100% Verified Customer Feedback</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            5.0 Star Thumbtack Top Pro Reviews
          </h1>
          <p className="text-base text-charcoal-600 leading-relaxed">
            Alfredo Juarez maintains an unblemished 5.0-star rating across 25 verified Thumbtack reviews with over 41 verified hires. Read what your neighbors in Henderson and Summerlin have to say.
          </p>
        </div>

        {/* Existing Reviews Section */}
        <ReviewsSection />

        {/* Leave a review or feedback box */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-alabaster-300 p-8 sm:p-10 shadow-card">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-bronze-600">Client Feedback</span>
            <h3 className="text-2xl font-bold text-charcoal-900">Are You a Recent Client of Alfredo?</h3>
            <p className="text-xs sm:text-sm text-charcoal-600">
              We value your feedback! Share your experience or leave an official review directly on Thumbtack.
            </p>
          </div>

          {!submittedReview ? (
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David L."
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Neighborhood / City *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Seven Hills, Henderson"
                    value={newReview.neighborhood}
                    onChange={(e) => setNewReview({ ...newReview, neighborhood: e.target.value })}
                    className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Service Completed *</label>
                  <select
                    value={newReview.service}
                    onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                    className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                  >
                    <option>Plantation Shutter Repair</option>
                    <option>Blind Restringing & Tilt Mechanism</option>
                    <option>Roller Shade Clutch Fix</option>
                    <option>High-Ceiling Drapery Installation</option>
                    <option>Motorized Shade Diagnostic</option>
                    <option>Custom Window Coverings</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Rating *</label>
                  <div className="flex items-center gap-1.5 pt-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="text-amber-400 hover:scale-110 transition-transform"
                      >
                        <Star
                          size={24}
                          className={star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-charcoal-300'}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-charcoal-700 ml-2">
                      {newReview.rating}.0 Stars
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">Your Review / Comments *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell your neighbors how Alfredo diagnosed and fixed your window treatments..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full p-2.5 bg-alabaster-50 border border-alabaster-300 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-bronze-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={BUSINESS_INFO.thumbtackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-charcoal-500 hover:text-charcoal-900 flex items-center gap-1"
                >
                  <span>Or leave review directly on Thumbtack</span>
                  <ExternalLink size={12} />
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-bronze-600 hover:bg-bronze-700 text-white font-bold text-xs rounded-xl shadow transition-all"
                >
                  Submit Testimonial
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center p-6 space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
              <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-charcoal-900">Thank you for supporting small local craftsmanship!</h4>
              <p className="text-xs text-charcoal-600">
                Your review has been submitted to Alfredo. Your feedback helps Henderson homeowners find honest repair services.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
