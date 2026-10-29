export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
  source: 'Thumbtack' | 'Google' | 'Direct';
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  iconName: string;
  badge?: string;
  commonIssues: string[];
  repairsOffered: string[];
  repairVsReplaceSummary: {
    avgReplacementCost: string;
    avgRepairCost: string;
    typicalSavings: string;
    turnaround: string;
  };
  supportedBrands: string[];
  features: string[];
}

export interface ServiceArea {
  name: string;
  zipCodes: string[];
  region: 'Henderson' | 'Las Vegas' | 'Summerlin' | 'North Las Vegas';
  description: string;
  popularServices: string[];
  responseSpeed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Repairs' | 'Pricing' | 'Installation' | 'Service Area' | 'About Alfredo';
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: 'Shutters' | 'Blinds' | 'Roller Shades' | 'Drapery' | 'Motorized';
  problem: string;
  solution: string;
  savings: string;
  beforeImage: string;
  afterImage: string;
  details: string;
}

export interface CalculatorOption {
  treatmentType: string;
  issueType: string;
  repairPriceEst: number;
  replacementPriceEst: number;
  timeToFix: string;
  complexity: 'Simple' | 'Moderate' | 'Complex';
  note: string;
}
