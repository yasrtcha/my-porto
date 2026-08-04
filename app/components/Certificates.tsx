"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "BNSP Certificate-Junior Web Development",
    issuer: "Udemy",
    year: "2024",
    image: "/sertifikat/JuniorWebDev-1.webp",
  },
  {
    id: "cert-2",
    title: "Certificate of ResponsibleAI by AI Opportunity",
    issuer: "Vercel",
    year: "2024",
    image: "/sertifikat/AI.webp",
  },
  {
    id: "cert-3",
    title: " Brawijaya English Proficiency Test (BEPT)",
    issuer: "Frontend Masters",
    year: "2023",
    image: "/sertifikat/BLC.webp",
  },
];

interface AccordionItemProps {
  cert: Certificate;
  isOpen: boolean;
  onClick: () => void;
  onImageClick: (image: string) => void;
}

const AccordionItem = ({ cert, isOpen, onClick, onImageClick }: AccordionItemProps) => {
  return (
    <div className="border-t border-border">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 px-0 hover:bg-transparent transition-colors"
      >
        <h3 className="text-lg font-medium text-primary text-left">{cert.title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-secondary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 flex flex-col gap-4">
              <div 
                className="relative w-2/5 aspect-[3/2] bg-transparent cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => cert.image && onImageClick(cert.image)}
              >
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted font-mono text-sm">
                    No Image
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 text-left">
                <p className="text-sm text-secondary">
                  <span className="font-medium">Issued by:</span> {cert.issuer}
                </p>
                <p className="text-sm text-secondary">
                  <span className="font-medium">Year:</span> {cert.year}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Certificates() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { lang } = useLanguage();
  const t = dictionary[lang].about;

  return (
    <section className="flex flex-col gap-8 -mx-5 md:-mx-8">
      <div className="flex flex-col gap-4 px-5 md:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          {t.certificates}
        </span>
        <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight text-primary max-w-[640px]">
          {t.sertif}
        </h2>
      </div>

      <div className="">
        <div className="px-5 md:px-8 flex flex-col">
          {certificates.map((cert, index) => (
            <div key={cert.id}>
              <AccordionItem
                cert={cert}
                isOpen={openId === cert.id}
                onClick={() => setOpenId(openId === cert.id ? null : cert.id)}
                onImageClick={setSelectedImage}
              />
              {index === certificates.length - 1 && (
                <div className="border-b border-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[3/2] max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Certificate"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
