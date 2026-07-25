"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';

export default function Footer() {
  const { lang } = useLanguage();
  const t = dictionary[lang];

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8 mt-12">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex flex-col gap-4 max-w-sm">
            <Link href="/" className="font-medium text-2xl tracking-tight text-primary">
              Danar Rais.
            </Link>
            <p className="text-secondary leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-primary">Navigation</span>
              <div className="flex flex-col gap-3 text-secondary text-sm font-medium">
                <Link href="/#about" className="hover:text-primary transition-colors">{t.nav.about}</Link>
                <Link href="/project" className="hover:text-primary transition-colors">{t.nav.projects}</Link>
                <Link href="/cv.pdf" target="_blank" className="hover:text-primary transition-colors flex items-center gap-1">
                  Resume <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-semibold text-primary">Socials</span>
              <div className="flex flex-col gap-3 text-secondary text-sm font-medium">
                <Link href="https://github.com/yasrtcha" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                  <FiGithub className="w-4 h-4" /> GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/danar-rais-alhakim/" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                  <FiLinkedin className="w-4 h-4" /> LinkedIn
                </Link>
                <Link href="https://instagram.com/danarraisal" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                  <FiInstagram className="w-4 h-4" /> Instagram
                </Link>
                <Link href="mailto:danarraisa@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-divider text-sm font-medium text-muted">
          <p>© {new Date().getFullYear()} Danar Rais Alhakim. {t.footer.rights}</p>
          <p>Designed with intentionally minimal aesthetics.</p>
        </div>
      </div>
    </footer>
  );
}
