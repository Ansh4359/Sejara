"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

export default function TopBar() {
  const { language, toggleLanguage } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <div className="bg-navy text-white py-2 text-[13px]">
      <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center flex-wrap gap-2">
        <span>
          📞{" "}
          <a href="tel:+919876543210" className="text-gold">
            +91 85128 17739
          </a>{" "}
          &nbsp;|&nbsp; 🕐 {t.topBar.hours}
        </span>
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/918512817739?text=${encodeURIComponent(t.whatsapp.message)}`}
            className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1 rounded-full font-semibold text-xs transition-transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 {t.topBar.whatsapp}
          </a>
          <button
            onClick={toggleLanguage}
            className="border border-gold text-gold px-2.5 py-0.5 rounded cursor-pointer text-xs bg-transparent transition-colors hover:bg-gold hover:text-navy"
          >
            {t.topBar.toggleLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
