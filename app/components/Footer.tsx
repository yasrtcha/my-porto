"use client";

import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';

export default function Footer() {
  const { lang } = useLanguage();
  const t = dictionary[lang];

  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex justify-center items-center">
        <p className="text-sm font-medium text-muted text-center">
          © {new Date().getFullYear()} Danar Rais Alhakim. {t.footer?.rights || 'All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
