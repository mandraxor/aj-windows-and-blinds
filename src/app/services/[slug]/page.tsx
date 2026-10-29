import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { ServiceDetailClient } from '@/components/services/ServiceDetailClient';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found | AJ Blind Installations & Repair',
    };
  }

  return {
    title: `${service.title} | AJ Blind Installations & Repair Henderson NV`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
