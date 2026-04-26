"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import ExportSejara from "@/components/ExportSejara";
import BulkOrder from "@/components/BulkOrder";
import Industries from "@/components/Industries";
import EcoFriendly from "@/components/EcoFriendly";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <LanguageProvider>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <WhyUs />
        <ExportSejara />
        <BulkOrder />
        <Industries />
        <EcoFriendly />
        <Testimonials />
        <Process />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
