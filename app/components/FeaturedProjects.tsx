"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import TechStackIcon from "./TechStackIcon";
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

export default function FeaturedProjects() {
  const { lang } = useLanguage();
  const t = dictionary[lang].projects;
  const featured = projects.slice(0, 4);

  return (
    <section id="projects" className="pt-8 pb-8 md:pt-10 md:pb-8 px-5 md:px-8 max-w-[1280px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-col gap-12 md:gap-16"
      >
        <motion.div variants={revealVariants} className="flex flex-col gap-4 max-w-[640px]">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            {t.tag}
          </span>
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight text-primary">
            {t.heading}
          </h2>
          <p className="text-lg text-secondary">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <motion.div key={project.slug} variants={revealVariants}>
              <Link
                href={`/project/${project.slug}`}
                // Ditambahkan class 'relative' agar absolute icon mengikuti pojok card
                className="group block bg-card rounded-[24px] p-6 border border-border hover:border-muted hover:-translate-y-2 hover:shadow-floating transition-all duration-300 h-full flex flex-col relative"
              >
                {/* Icon panah diletakkan di pojok kanan atas dengan animasi hover */}
                <div className="absolute top-6 right-6 opacity-0 translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 z-10">
                  <ArrowUpRight className="w-6 h-6 text-primary" />
                </div>

                <div className="flex flex-col flex-1 pr-8"> {/* Tambahan pr-8 untuk memberi ruang ikon */}
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
                    {project.techStack.flatMap(stack => stack.items).slice(0, 3).map((item, idx) => (
                      <TechStackIcon key={idx} name={item.name} icon={item.icon} />
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={revealVariants} className="flex justify-center mt-4">
          <Link
            href="/project"
            className="px-8 py-4 bg-surface border border-border text-primary rounded-[14px] font-medium hover:bg-background hover:shadow-sm transition-all"
          >
            {t.viewAll}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}