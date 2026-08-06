"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import Navbar from "@/app/components/navbar";
import TechStackIcon from "@/app/components/TechStackIcon";
import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';
import Footer from "@/app/components/Footer";

const staggerVariants = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

export default function ProjectList() {
  const { lang } = useLanguage();
  const t = dictionary[lang].projects;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[96px] pb-[72px] px-5 md:px-8 max-w-[1280px] mx-auto">
        <motion.div variants={staggerVariants} initial="initial" animate="animate" className="flex flex-col gap-16">
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {t.tag}
            </span>
            <div className="flex flex-col gap-4 max-w-[640px]">
              <h1 className="text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight text-primary">
                {t.allProjects}
              </h1>
              <p className="text-lg text-secondary">
                {t.allDesc}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link
                  href={`/project/${project.slug}`}
                  // Ditambahkan class 'relative' di sini agar absolute icon mengikuti ukuran card
                  className="group block bg-card rounded-[24px] p-6 border border-border hover:border-muted hover:-translate-y-2 hover:shadow-floating transition-all duration-300 h-full flex flex-col relative"
                >
                  {/* Icon diletakkan di pojok kanan atas dengan animasi hover */}
                  <div className="absolute top-6 right-6 opacity-0 translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 z-10">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex flex-col flex-1 pr-8"> {/* Tambahan pr-8 agar teks tidak bertumpuk dengan icon */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 bg-divider rounded-full" />
                      <span className="text-xs font-medium text-muted">
                        {project.role}
                      </span>
                    </div>

                    <h3 className="text-2xl font-medium text-primary mb-3">
                      {project.title}
                    </h3>

                    <p className="text-secondary mb-6 line-clamp-2">
                      {project.shortDescription[lang]}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-divider">
                      {project.techStack.flatMap(stack => stack.items).map((item, idx) => (
                        <TechStackIcon key={idx} name={item.name} icon={item.icon} />
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}