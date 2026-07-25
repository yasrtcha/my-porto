"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
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

export default function Contact() {
  const { lang } = useLanguage();
  const t = dictionary[lang].contact;

  return (
    <section id="contact" className="pt-8 pb-8 md:pt-10 md:pb-8 px-5 md:px-8 max-w-[1280px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-col gap-16 md:gap-20"
      >
        <motion.div variants={revealVariants} className="flex flex-col gap-6 max-w-[640px] mx-auto text-center items-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            {t.tag}
          </span>
          <h2 className="text-[32px] md:text-[56px] font-semibold leading-tight tracking-tight text-primary">
            {t.heading}
          </h2>
          <p className="text-lg text-secondary">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start max-w-[1024px] mx-auto w-full">
          {/* Form Section */}
          <motion.div variants={revealVariants} className="flex flex-col gap-8 w-full order-2 md:order-1">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-secondary">{t.form.name}</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder={t.form.namePlaceholder}
                  className="w-full px-5 py-4 rounded-[14px] bg-surface border border-border text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-secondary">{t.form.email}</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder={t.form.emailPlaceholder}
                  className="w-full px-5 py-4 rounded-[14px] bg-surface border border-border text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-secondary">{t.form.message}</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full px-5 py-4 rounded-[14px] bg-surface border border-border text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-accent text-background rounded-[14px] font-medium text-[15px] hover:-translate-y-0.5 hover:shadow-hover transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                {t.form.send}
              </button>
            </form>
          </motion.div>

          {/* Direct Contact */}
          <motion.div variants={revealVariants} className="flex flex-col gap-10 order-1 md:order-2">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-medium text-primary">{t.direct.heading}</h3>
              <p className="text-secondary leading-relaxed">
                {t.direct.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:danarraisa@gmail.com" className="flex items-center gap-4 p-4 rounded-[16px] border border-border hover:bg-surface hover:scale-[1.02] transition-all group">
                <div className="p-3 bg-surface group-hover:bg-background rounded-full transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-primary">Email</span>
              </a>
              <a href="https://wa.me/085747784405" target="_blank" className="flex items-center gap-4 p-4 rounded-[16px] border border-border hover:bg-surface hover:scale-[1.02] transition-all group">
                <div className="p-3 bg-surface group-hover:bg-background rounded-full transition-colors">
                  <FaWhatsapp className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-primary">WhatsApp</span>
              </a>
              <a href="https://www.linkedin.com/in/danar-rais-alhakim/" target="_blank" className="flex items-center gap-4 p-4 rounded-[16px] border border-border hover:bg-surface hover:scale-[1.02] transition-all group">
                <div className="p-3 bg-surface group-hover:bg-background rounded-full transition-colors">
                  <FiLinkedin className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-primary">LinkedIn</span>
              </a>
              <a href="https://github.com/yasrtcha" target="_blank" className="flex items-center gap-4 p-4 rounded-[16px] border border-border hover:bg-surface hover:scale-[1.02] transition-all group">
                <div className="p-3 bg-surface group-hover:bg-background rounded-full transition-colors">
                  <FiGithub className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-primary">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
