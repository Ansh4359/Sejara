"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const t = language === "en" ? en : hi;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-11 h-11 bg-gradient-to-br from-saffron to-green rounded-[10px] flex items-center justify-center text-white text-xl font-black font-display">
              SP
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-navy">
                Sejara<span className="text-saffron">Industries</span>
              </div>
              <div className="text-[11px] text-gray-500 tracking-widest uppercase">
                {t.header.subtitle}
              </div>
            </div>
          </a>

          <div
            className={`${
              open ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 border-b md:border-0 border-gray-200 z-50`}
          >
            <a
              href="#products"
              className="text-[15px] font-medium text-gray-700 hover:text-saffron transition-colors relative group"
              onClick={() => setOpen(false)}
            >
              {t.header.products}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full" />
            </a>
            <a
              href="#why-us"
              className="text-[15px] font-medium text-gray-700 hover:text-saffron transition-colors relative group"
              onClick={() => setOpen(false)}
            >
              {t.header.whyUs}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full" />
            </a>
            <a
              href="https://my-site-o8j8h9vj-sanjeevsinghfrm.wix-vibe-site.com" target="_blank"
              className="text-[15px] font-medium text-gray-700 hover:text-saffron transition-colors relative group"
              onClick={() => setOpen(false)}
            >
              {t.header.exportSejara}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full" />
            </a>
            <a
              href="#eco"
              className="text-[15px] font-medium text-gray-700 hover:text-saffron transition-colors relative group"
              onClick={() => setOpen(false)}
            >
              {t.header.eco}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full" />
            </a>
            <a
              href="#bulk"
              className="text-[15px] font-medium text-gray-700 hover:text-saffron transition-colors relative group"
              onClick={() => setOpen(false)}
            >
              {t.header.bulk}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full" />
            </a>
    
            <a
              href="#faq"
              className="text-[15px] font-medium text-gray-700 hover:text-saffron transition-colors relative group"
              onClick={() => setOpen(false)}
            >
              {t.header.faq}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full" />
            </a>
            <a
              href="#bulk"
              className="bg-saffron text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] hover:bg-saffron-dark transition-all hover:-translate-y-px"
              onClick={() => setOpen(false)}
            >
              {t.header.cta}
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-[2.5px] bg-navy rounded-sm transition-all" />
            <span className="w-6 h-[2.5px] bg-navy rounded-sm transition-all" />
            <span className="w-6 h-[2.5px] bg-navy rounded-sm transition-all" />
          </button>
        </nav>
      </div>
    </header>
  );
}
