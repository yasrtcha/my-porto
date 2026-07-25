"use client";

import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = dictionary[lang].about;

  return (
    <section id="about" className="pt-8 pb-8 md:pt-10 md:pb-8 px-5 md:px-8 max-w-[1280px] mx-auto">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-col gap-16 md:gap-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div variants={revealVariants} className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {t.tag}
            </span>
            <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight text-primary max-w-[640px]">
              {t.heading}
            </h2>
            <div className="text-lg text-secondary leading-relaxed flex flex-col gap-4">
              <p>
                {t.para1}
              </p>
              <p>
                {t.para2}
              </p>
            </div>
          </motion.div>

          <motion.div variants={revealVariants} className="grid grid-cols-2 gap-8 md:gap-12 content-center">
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-semibold text-primary">15+</span>
              <span className="text-sm font-medium text-secondary">{t.stats.projects}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-semibold text-primary">4+</span>
              <span className="text-sm font-medium text-secondary">{t.stats.years}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-semibold text-primary">20+</span>
              <span className="text-sm font-medium text-secondary">{t.stats.tech}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-semibold text-primary">12+</span>
              <span className="text-sm font-medium text-secondary">{t.stats.cert}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}