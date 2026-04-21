"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

const icons = ["🏆", "🌿", "🚛", "💰", "⚡"];

export default function TrustBar() {
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <div className="bg-navy py-6 text-white">
      <div className="max-w-[1280px] mx-auto px-6 flex justify-center gap-12 flex-wrap">
        {t.trustBar.items.map((text, i) => (
          <div key={text} className="flex items-center gap-2.5 text-sm font-medium">
            <div className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center text-lg">
              {icons[i]}
            </div>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
