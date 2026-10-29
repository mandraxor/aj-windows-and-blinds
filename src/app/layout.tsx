import type { Metadata } from 'next';
import './globals.css';
import { AppLayout } from '@/components/layout/AppLayout';
import { BUSINESS_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'AJ Blind Installations & Repair | Henderson & Las Vegas Window Treatment Specialist',
  description: 'Thumbtack Top Pro Alfredo Juarez brings 29 years of master window treatment repair, plantation shutter restoration, roller shade clutch replacement, and 20ft high-ceiling drapery installation across Henderson, Summerlin, and Las Vegas NV.',
  keywords: [
    'blind repair Henderson NV',
    'shutter repair Las Vegas',
    'plantation shutter louver staple repair',
    'roller shade clutch replacement',
    'high ceiling drapery installation Henderson',
    'window blind restringing Las Vegas',
    'Alfredo Juarez AJ Blinds',
    'Thumbtack top pro window treatments',
    'motorized shade repair Sommerlin NV',
  ],
  authors: [{ name: 'Alfredo Juarez' }],
  creator: 'AJ Blind Installations and Repair',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajblindrepairs.com',
    title: 'AJ Blind Installations & Repair | Henderson & Las Vegas NV',
    description: 'Save hundreds with precision blind & shutter repair. 29 years experience, 5.0-star Thumbtack Top Pro, 2-person dedicated master team.',
    siteName: 'AJ Blind Installations & Repair',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FAF8F5" />
      </head>
      <body className="min-h-screen bg-alabaster-100 text-charcoal-900 antialiased selection:bg-amber-200 selection:text-charcoal-900">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
