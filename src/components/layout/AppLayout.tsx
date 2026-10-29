'use client';

import React from 'react';
import { TopBanner } from './TopBanner';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingQuickContact } from '../shared/FloatingQuickContact';
import { EstimateModalProvider, useEstimateModal } from '@/context/EstimateModalContext';

function LayoutInner({ children }: { children: React.ReactNode }) {
  const { openEstimate } = useEstimateModal();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <Navbar onOpenEstimate={() => openEstimate()} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingQuickContact onOpenEstimate={() => openEstimate()} />
    </div>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <EstimateModalProvider>
      <LayoutInner>{children}</LayoutInner>
    </EstimateModalProvider>
  );
}
