"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Mail, Mic, Users, BriefcaseBusiness, Menu} from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName?.toLowerCase() === 'a' || target.tagName?.toLowerCase() === 'button' || target.closest('a')) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white pb-0 overflow-x-hidden cursor-none">
      
      {/* Custom Pointer */}
      <motion.div 
        className="fixed top-0 left-0 z-[100] w-5 h-5 bg-white rounded-full mix-blend-difference pointer-events-none"
        style={{
          x: springX,
          y: springY,
          scale: isHoveringLink ? 2.5 : 1,
        }}
      />

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter uppercase relative group">
            Danar Rais Alhakim.
          </div>
          <div className="hidden md:flex items-center space-x-10 font-bold uppercase text-sm tracking-widest">
            <a href="#about" className="hover:line-through transition-all cursor-none">About</a>
            <a href="#projects" className="hover:line-through transition-all cursor-none">Projects</a>
            <a href="#experience" className="hover:line-through transition-all cursor-none">Experience</a>
            <a href="#" className="px-5 py-2 border-2 border-black font-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-none">
              Download CV
            </a>
          </div>
          <div className="md:hidden text-black">
            <Menu className="w-8 h-8" />
          </div>
        </div>
      </nav>

      {/* Marquee Background */}
      <div className="overflow-hidden whitespace-nowrap border-b-2 border-black py-3 bg-black text-white flex">
        <motion.div 
          className="flex space-x-8 font-black uppercase tracking-widest text-sm"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span>WEB TECHNOLOGY</span>
          <span>•</span>
          <span>BUSINESS STRATEGY</span>
          <span>•</span>
          <span>DATA ANALYTICS</span>
          <span>•</span>
          <span>DIGITAL BRANDING</span>
          <span>•</span>
          <span>WEB TECHNOLOGY</span>
          <span>•</span>
          <span>BUSINESS STRATEGY</span>
          <span>•</span>
          <span>DATA ANALYTICS</span>
          <span>•</span>
          <span>DIGITAL BRANDING</span>
        </motion.div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-28 space-y-32">
        
        {/* Hero Section */}
        <motion.section 
          id="about" 
          className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 pt-10"
          initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="flex-1 space-y-8 text-center md:text-left z-10">
            <motion.div variants={fadeInUp} className="inline-block border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-wider font-mono bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Based in Malang, Indonesia 🇮🇩
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05]">
              Bridging <br className="hidden md:block"/> Business Strategy <br className="hidden md:block"/> With Web Technology.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
              Mahasiswa Teknologi Informasi Universitas Brawijaya yang berfokus pada pengembangan sistem website, analitik data, dan digital branding.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-4 font-bold uppercase tracking-widest text-sm">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group cursor-none">
                View My Work
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all duration-300 cursor-none">
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="flex-1 flex justify-center md:justify-end w-full">
            <div className="relative w-full max-w-sm aspect-[4/5] md:max-w-md bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/ppp.jpeg" 
                alt="Danar Rais" 
                className="w-full h-full object-cover border-2 border-black absolute -top-4 -left-4 hover:top-0 hover:left-0 transition-all duration-300 z-10"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section id="projects" className="space-y-12"
          initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} variants={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeInUp} className="border-b-4 border-black pb-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Featured Projects</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.a href="#" variants={fadeInUp} className="group flex flex-col bg-white border-2 border-black p-8 hover:bg-black hover:text-white transition-colors duration-300 cursor-none relative overflow-hidden">
              <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black group-hover:border-white transition-colors">Laravel</span>
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black group-hover:border-white transition-colors">MySQL</span>
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black group-hover:border-white transition-colors">Tailwind CSS</span>
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black group-hover:border-white transition-colors">UML</span>
              </div>
              <div className="flex-1 flex flex-col justify-end mt-12">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tight leading-[1.1] group-hover:text-white transition-colors">Web-Based Sponsorship Marketplace</h3>
                  <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
                <p className="text-lg font-medium max-w-md text-gray-600 group-hover:text-gray-300 transition-colors">
                  Sistem informasi untuk memfasilitasi kolaborasi antara perusahaan dan penyelenggara event.
                </p>
              </div>
            </motion.a>

            {/* Project 2 */}
            <motion.a href="#" variants={fadeInUp} className="group flex flex-col bg-white border-2 border-black p-8 hover:bg-black hover:text-white transition-colors duration-300 cursor-none relative overflow-hidden">
              <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black group-hover:border-white transition-colors">Social Media Strategy</span>
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black group-hover:border-white transition-colors">Content Design</span>
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black group-hover:border-white transition-colors">Copywriting</span>
              </div>
              <div className="flex-1 flex flex-col justify-end mt-12">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tight leading-[1.1] group-hover:text-white transition-colors">Merakids Agency Wuffy Space</h3>
                  <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
                <p className="text-lg font-medium max-w-md text-gray-600 group-hover:text-gray-300 transition-colors">
                  Strategi pemasaran media sosial dan manajemen konten pilar komprehensif untuk kafe & perpustakaan anak.
                </p>
              </div>
            </motion.a>
          </div>
        </motion.section>

        {/* Experience & Leadership */}
        <motion.section id="experience" className="space-y-12"
          initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} variants={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeInUp} className="border-b-4 border-black pb-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Experience & Leadership</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card A */}
            <motion.div variants={fadeInUp} className="group border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between">
              <div className="w-16 h-16 border-2 border-black rounded-none flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <Mic className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-black text-2xl uppercase tracking-tighter">Public Speaking</h3>
                <p className="font-medium mt-3 text-gray-600 group-hover:text-gray-300 transition-colors">MC & Moderator showreel. Mampu memandu jalannya acara dengan dinamis.</p>
              </div>
            </motion.div>

            {/* Card B */}
            <motion.div variants={fadeInUp} className="md:col-span-2 group border-2 border-black bg-black text-white hover:bg-white hover:text-black p-8 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <Users className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="w-16 h-16 border-2 border-white rounded-none flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all relative z-10">
                <Users className="w-8 h-8" />
              </div>
              <div className="relative z-10">
                <h3 className="font-black text-3xl uppercase tracking-tighter">Organizational Leadership</h3>
                <div className="inline-block border-2 border-white px-3 py-1 font-bold text-xs uppercase tracking-widest mt-4 mb-4 group-hover:border-black">Ketua Pelaksana FORMAPI</div>
                <p className="font-medium max-w-md text-gray-400 group-hover:text-gray-600 transition-colors">
                  Memimpin tim dan strategi operasional studi banding lintas institusi dengan sukses.
                </p>
              </div>
            </motion.div>

            {/* Card C */}
            <motion.div variants={fadeInUp} className="md:col-span-3 group border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 border-4 border-black rounded-none flex items-center justify-center shrink-0 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  <BriefcaseBusiness className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-black text-3xl uppercase tracking-tighter">Business Operations</h3>
                  <div className="inline-block border-2 border-black px-3 py-1 font-bold text-xs uppercase tracking-widest mt-3 group-hover:border-white transition-colors">Pisang Kukus</div>
                  <p className="font-medium mt-3 max-w-xl text-gray-600 group-hover:text-gray-300 transition-colors">
                    Pengembangan model bisnis dari nol. Merancang strategi pemasaran, manajemen keuangan, hingga operasional profitabilitas.
                  </p>
                </div>
              </div>
              <ArrowUpRight className="hidden md:block w-16 h-16 opacity-0 -translate-x-8 translate-y-8 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t-4 border-black bg-white mt-16 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            Let's Build <br/> Something Great.
          </motion.h2>
          
          <div className="flex space-x-6">
            <a href="mailto:danarraisa@gmail.com" className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-none group">
              <span className="sr-only">Email</span>
              <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/danar-rais-alhakim/" className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-none group">
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/yasrtcha" className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-none group">
              <span className="sr-only">GitHub</span>
              <FiGithub className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com/danarraisal" className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-none group">
              <span className="sr-only">Instagram</span>
              <FiInstagram className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://wa.me/085747784405" className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-none group">
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <div className="w-full border-t border-black pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500">
            <p>© 2026 DANAR RAIS ALHHAKIM.</p>
            <p className="mt-4 md:mt-0">CRAFTED WITH NEXT.JS & FRAMER MOTION</p>
          </div>
        </div>
      </footer>
    </div>
  );
}