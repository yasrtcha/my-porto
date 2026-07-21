"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Mic, Users, BriefcaseBusiness, Menu, X } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/navbar';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projectItems = [
    {
      slug: 'sponsorea',
      title: 'Sponsorea',
      description: 'Sistem informasi marketplace sponsorship untuk memfasilitasi kolaborasi antara perusahaan dan penyelenggara event.',
      tags: ['Laravel', 'MySQL', 'Tailwind CSS']
    },
    {
      slug: 'merakids',
      title: 'Merakids Agency Wuffy Space',
      description: 'Strategi pemasaran media sosial dan manajemen konten pilar komprehensif untuk kafe & perpustakaan anak.',
      tags: ['Social Media Strategy', 'Content Design']
    },
    {
      title: 'E-Commerce Admin Dashboard',
      description: 'Dashboard dummy untuk monitoring penjualan, stok produk, dan performa campaign harian.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Company Profile Revamp',
      description: 'Redesign website profil perusahaan dengan fokus struktur informasi yang lebih jelas dan modern.',
      tags: ['UI Audit', 'Information Architecture']
    },
    {
      title: 'Simple Booking Platform',
      description: 'Prototype sistem pemesanan layanan dengan alur booking cepat untuk validasi kebutuhan pengguna.',
      tags: ['Product Discovery', 'Wireframing']
    }
  ];


  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white pb-0 overflow-x-hidden">
      
      <Navbar />

      {/* Marquee Background */}
      <div className="overflow-hidden whitespace-nowrap border-b-2 border-black py-2 md:py-3 bg-black text-white flex">
        <motion.div 
          className="flex space-x-8 font-black uppercase tracking-widest text-xs md:text-sm"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span>WEB TECHNOLOGY</span><span>•</span>
          <span>BUSINESS STRATEGY</span><span>•</span>
          <span>DATA ANALYTICS</span><span>•</span>
          <span>DIGITAL BRANDING</span><span>•</span>
          <span>WEB TECHNOLOGY</span><span>•</span>
          <span>BUSINESS STRATEGY</span><span>•</span>
          <span>DATA ANALYTICS</span><span>•</span>
          <span>DIGITAL BRANDING</span>
        </motion.div>
      </div>

      {/* Global Spacing disesuaikan agar tidak terlalu renggang di HP */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-24 space-y-16 md:space-y-32">
        
        {/* Hero Section */}
        <motion.section 
          id="about" 
          className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 pt-4 md:pt-10"
          initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left z-10">
            <motion.div variants={fadeInUp} className="inline-block border-2 border-black px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold uppercase tracking-wider font-mono bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Based in Malang, Indonesia 🇮🇩
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05]">
              Bridging <br className="hidden md:block"/> Business Strategy <br className="hidden md:block"/> With Web Tech.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base sm:text-xl md:text-2xl font-medium max-w-xl mx-auto md:mx-0 leading-relaxed text-gray-700">
              Mahasiswa Lulusan Teknologi Informasi Universitas Brawijaya yang berfokus pada pengembangan sistem web, analitik data, dan digital branding.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 pt-2 md:pt-4 font-bold uppercase tracking-widest text-xs md:text-sm">
              <a href="#projects" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group">
                View My Work
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all duration-300">
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="flex-1 flex justify-center md:justify-end w-full px-4 md:px-0">
            <div className="relative w-full max-w-[280px] aspect-[4/5] md:max-w-md bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/ppp.jpeg" 
                alt="Danar Rais" 
                className="w-full h-full object-cover border-2 border-black absolute -top-3 -left-3 md:-top-4 md:-left-4 hover:top-0 hover:left-0 transition-all duration-300 z-10"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          id="projects"
          className="space-y-8 md:space-y-12"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div variants={fadeInUp} className="border-b-2 md:border-b-4 border-black pb-4 md:pb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter">Featured Projects</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projectItems.slice(0, 2).map((item) => {
              const content = (
                <motion.article
                  key={item.title}
                  variants={fadeInUp}
                  className="group relative overflow-hidden border-2 border-black p-5 md:p-8 flex flex-col gap-4 md:gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-full"
                >
                  <ArrowUpRight className="absolute top-4 right-4 w-6 h-6 md:w-7 md:h-7 text-black opacity-0 translate-y-2 -translate-x-2 rotate-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider border-2 border-black">{tag}</span>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter">{item.title}</h3>
                    <p className="font-medium mt-2 md:mt-3 text-sm md:text-base text-gray-600">{item.description}</p>
                  </div>
                </motion.article>
              );

              if (item.slug) {
                return (
                  <Link key={item.title} href={`/project/${item.slug}`} className="block h-full" aria-label={`Buka detail project ${item.title}`}>
                    {content}
                  </Link>
                );
              }

              return content;
            })}
          </div>

          <div className="flex justify-center pt-2">
            <Link href="/project" className="px-6 py-3 border-2 border-black font-black uppercase tracking-widest text-xs md:text-sm hover:bg-black hover:text-white transition-colors duration-300">
              See All Project
            </Link>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer id="contact" className="border-t-2 md:border-t-4 border-black bg-white mt-8 md:mt-16 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-8 md:space-y-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            Let's Build <br/> Something Great.
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <a href="mailto:danarraisa@gmail.com" className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/danar-rais-alhakim/" className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/yasrtcha" className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
              <span className="sr-only">GitHub</span>
              <FiGithub className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com/danarraisal" className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
              <span className="sr-only">Instagram</span>
              <FiInstagram className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://wa.me/085747784405" className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <div className="w-full border-t border-black pt-6 md:pt-8 mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 text-center md:text-left gap-4 md:gap-0">
            <p>© 2026 DANAR RAIS ALHAKIM.</p>
            <p>CRAFTED WITH NEXT.JS & FRAMER MOTION</p>
          </div>
        </div>
      </footer>
    </div>
  );
}