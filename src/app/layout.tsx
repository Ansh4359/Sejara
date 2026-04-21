import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Sejara Industries — Disposable Plates, Cups & Packaging Manufacturer | India",
    template: "%s | Sejara Industries",
  },
  description:
    "Leading manufacturer of disposable plates, cups, bowls & food packaging in India. Eco-friendly, bulk supply, PAN India delivery. Get best wholesale prices!",
  keywords: [
    "disposable plates manufacturer India",
    "paper cups wholesale",
    "food packaging supplier",
    "eco-friendly disposable plates",
    "areca leaf plates",
    "bulk disposable cups",
    "wedding plates supplier",
    "party cups manufacturer",
    "Gujarat packaging company",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sejaraindustries.in",
    siteName: "Sejara Industries",
    title:
      "Sejara Industries — Disposable Plates, Cups & Packaging Manufacturer",
    description:
      "India's trusted manufacturer of disposable plates, cups, bowls & food packaging. Eco-friendly, bulk supply, PAN India delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sejara Industries — Disposable Packaging Manufacturer",
    description:
      "Leading manufacturer of disposable plates, cups, bowls & food packaging in India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.sejaraindustries.in",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sejara Industries",
    url: "https://www.sejaraindustries.in",
    logo: "https://www.sejaraindustries.in/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 42, GIDC Industrial Estate, Halol",
      addressLocality: "Halol",
      addressRegion: "Gujarat",
      postalCode: "389350",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/sejaraindustries",
      "https://www.instagram.com/sejaraindustries",
      "https://www.youtube.com/@sejaraindustries",
      "https://www.linkedin.com/company/sejaraindustries",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sejara Industries",
    image: "https://www.sejaraindustries.in/logo.png",
    telephone: "+91-98765-43210",
    email: "sales@sejaraindustries.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 42, GIDC Industrial Estate, Halol",
      addressLocality: "Halol",
      addressRegion: "Gujarat",
      postalCode: "389350",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.4967,
      longitude: 73.4722,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    priceRange: "$",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the minimum order quantity (MOQ)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our standard MOQ is 500 pieces per product. For custom printed items, the MOQ is 5,000 pieces. Wedding/party combos have no MOQ — order for even 10 people!",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver across all of India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We deliver to all 28 states and 8 Union Territories. Delivery is free for orders above ₹50,000. Standard delivery takes 3-7 days depending on your location.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get samples before placing a bulk order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We provide free samples for serious buyers. You just pay the shipping cost (typically ₹100-200). Samples are dispatched within 24 hours.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept Bank Transfer (NEFT/RTGS), UPI (GPay, PhonePe, Paytm), Cheque, and Cash. For regular business clients, we also offer credit terms (30 days) after the first 3 successful orders.",
        },
      },
      {
        "@type": "Question",
        name: "Are your products eco-friendly and government compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our areca leaf, bagasse, and paper products are 100% biodegradable and comply with the government's single-use plastic ban. All food-contact products are FSSAI approved.",
        },
      },
      {
        "@type": "Question",
        name: "Can you print my brand logo on the products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer custom branding on cups, plates, containers, and packaging. Min order for custom printing: 5,000 pieces. One-time printing plate charges apply.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-gray-900 bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
