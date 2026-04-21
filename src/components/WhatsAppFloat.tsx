"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

export default function WhatsAppFloat() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <a
      href={`https://wa.me/919876543210?text=${encodeURIComponent(t.whatsapp.message)}`}
      className="whatsapp-float fixed bottom-6 right-6 z-[200] w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-[30px] text-white cursor-pointer animate-float-whatsapp hover:scale-110 transition-transform"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  );
}
