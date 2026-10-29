'use client';

import React, { createContext, useContext, useState } from 'react';
import { EstimateModal } from '@/components/shared/EstimateModal';

interface EstimateModalContextType {
  openEstimate: (serviceName?: string) => void;
  closeEstimate: () => void;
}

const EstimateModalContext = createContext<EstimateModalContextType>({
  openEstimate: () => {},
  closeEstimate: () => {},
});

export function EstimateModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string | undefined>(undefined);

  const openEstimate = (serviceName?: string) => {
    setDefaultService(serviceName);
    setIsOpen(true);
  };

  const closeEstimate = () => {
    setIsOpen(false);
    setDefaultService(undefined);
  };

  return (
    <EstimateModalContext.Provider value={{ openEstimate, closeEstimate }}>
      {children}
      <EstimateModal
        isOpen={isOpen}
        onClose={closeEstimate}
        defaultService={defaultService}
      />
    </EstimateModalContext.Provider>
  );
}

export function useEstimateModal() {
  return useContext(EstimateModalContext);
}
