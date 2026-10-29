'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  max?: number;
  size?: number;
  showText?: boolean;
  count?: number;
  className?: string;
}

export function StarRating({
  rating = 5.0,
  max = 5,
  size = 18,
  showText = false,
  count,
  className = '',
}: StarRatingProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center text-amber-500">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className="fill-amber-400 text-amber-500"
            strokeWidth={1.5}
          />
        ))}
      </div>
      {showText && (
        <span className="font-semibold text-charcoal-800 text-sm">
          {rating.toFixed(1)}
          {count && <span className="text-charcoal-500 font-normal"> ({count} reviews)</span>}
        </span>
      )}
    </div>
  );
}
