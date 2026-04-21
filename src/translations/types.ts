export interface ProductTranslation {
  name: string;
  hindi: string;
  features: readonly string[];
  sizes: string;
  price: string;
  unit: string;
  badge?: string;
}

export interface WhyItem {
  title: string;
  desc: string;
}

export interface IndustryItem {
  name: string;
  desc: string;
}

export interface EcoCard {
  title: string;
  desc: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Translations {
  topBar: {
    hours: string;
    whatsapp: string;
    toggleLabel: string;
  };
  header: {
    subtitle: string;
    products: string;
    whyUs: string;
    eco: string;
    bulk: string;
    faq: string;
    cta: string;
  };
  hero: {
    badge: string;
    line1: string;
    highlight: string;
    line2: string;
    hindiLine: string;
    description: string;
    cta1: string;
    cta2: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  trustBar: {
    items: readonly string[];
  };
  products: {
    tag: string;
    heading: string;
    description: string;
    sizes: string;
    includes: string;
    enquire: string;
    eco: string;
    items: readonly ProductTranslation[];
  };
  whyUs: {
    tag: string;
    heading: string;
    description: string;
    items: readonly WhyItem[];
  };
  bulkOrder: {
    headline1: string;
    headlineHighlight: string;
    headline2: string;
    description: string;
    features: readonly string[];
    form: {
      title: string;
      subtitle: string;
      alertMsg: string;
      fullName: string;
      fullNamePlaceholder: string;
      mobile: string;
      mobilePlaceholder: string;
      businessName: string;
      businessPlaceholder: string;
      city: string;
      cityPlaceholder: string;
      product: string;
      selectProduct: string;
      productOptions: readonly string[];
      quantity: string;
      selectQuantity: string;
      quantityOptions: readonly string[];
      timeline: string;
      selectTimeline: string;
      timelineOptions: readonly string[];
      details: string;
      detailsPlaceholder: string;
      submit: string;
      note: string;
    };
  };
  industries: {
    tag: string;
    heading: string;
    description: string;
    items: readonly IndustryItem[];
  };
  eco: {
    headline1: string;
    headlineHighlight: string;
    description: string;
    certs: readonly string[];
    cards: readonly EcoCard[];
  };
  testimonials: {
    tag: string;
    heading: string;
    description: string;
    items: readonly TestimonialItem[];
  };
  process: {
    tag: string;
    heading: string;
    description: string;
    steps: readonly ProcessStep[];
  };
  faq: {
    tag: string;
    heading: string;
    description: string;
    items: readonly FaqItem[];
  };
  footer: {
    description: string;
    productsTitle: string;
    products: readonly string[];
    companyTitle: string;
    company: readonly string[];
    contactTitle: string;
    hours: string;
    copyright: string;
    links: string;
  };
  whatsapp: {
    message: string;
  };
}
