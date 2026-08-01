"use client";
import { use, useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Lock } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects } from "@/content/projects";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import TechStackIcon from "@/app/components/TechStackIcon";
import { useLanguage } from '../../context/LanguageContext';
import { dictionary } from '@/content/dictionary';
import { CldImage } from 'next-cloudinary';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  const [activeImage, setActiveImage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useLanguage();

  const { t, sections } = (() => {
    if (!project) return { t: null, sections: [] as { id: string; num: string; label: string }[] };
    const t = dictionary[lang].projectDetail;
    return {
      t,
      sections: [
        { id: "overview", num: "01", label: t.overview },
        { id: "problem-solution", num: "02", label: `${t.problem} & ${t.solution}` },
        { id: "approach", num: "03", label: t.myRole },
        { id: "gallery", num: "04", label: t.gallery },
        { id: "outcome", num: "05", label: t.results },
      ],
    };
  })();

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project?.slug]);

  if (!project || !t) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-[120px] pb-[72px] px-5 md:px-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,400px)_1fr] gap-x-16 gap-y-12">
          {/* ================= LEFT: sticky identity panel ================= */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)]"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                {project.category}
              </span>
              <h1 className="text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight text-primary">
                {project.title}
              </h1>
              <p className="text-base text-secondary leading-relaxed">
                {project.shortDescription[lang]}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-6">
              <dl className="flex flex-col divide-y divide-divider border-t border-b border-divider text-sm">
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted">{t.role}</dt>
                  <dd className="font-medium text-primary text-right">{project.role}</dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted">{t.duration}</dt>
                  <dd className="font-medium text-primary text-right">{project.duration[lang]}</dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted">{t.platform}</dt>
                  <dd className="font-medium text-primary text-right">{project.platform}</dd>
                </div>
                {project.techStack.length > 0 && (
                  <div className="flex items-center justify-between py-3 gap-4">
                    <dt className="text-muted shrink-0">{t.techStack}</dt>
                    <dd className="flex flex-wrap justify-end gap-2">
                      {project.techStack.flatMap((stack) => stack.items).map((item, j) => (
                        <TechStackIcon key={j} name={item.name} icon={item.icon} />
                      ))}
                    </dd>
                  </div>
                )}
              </dl>

              <div className="flex flex-wrap items-center gap-3">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="px-5 py-2.5 bg-accent text-background rounded-[14px] text-sm font-medium hover:-translate-y-0.5 hover:shadow-hover transition-all flex items-center gap-2"
                  >
                    {t.liveDemo} <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="px-5 py-2.5 bg-surface border border-border text-primary rounded-[14px] text-sm font-medium hover:bg-background transition-all flex items-center gap-2"
                  >
                    <FiGithub className="w-4 h-4" /> {t.github}
                  </Link>
                )}
                {project.isPrivate && (
                  <div className="px-4 py-2 bg-surface border border-border text-secondary rounded-[14px] text-sm font-medium flex items-center gap-2 cursor-not-allowed">
                    <Lock className="w-4 h-4" /> {t.privateRepo}
                  </div>
                )}
              </div>
            </div>

            {/* Reading position — replaces a separate top nav entirely.
                Only meaningful because the sections really are a sequence. */}
            <div className="hidden lg:flex items-center gap-3 pt-6 mt-auto border-t border-divider text-xs font-mono text-muted">
              <span className="text-primary">{sections[activeIndex]?.num}</span>
              <span>/ {sections.length.toString().padStart(2, "0")}</span>
              <span className="w-1 h-1 rounded-full bg-muted" />
              <span className="truncate">{sections[activeIndex]?.label}</span>
            </div>
          </motion.aside>

          {/* ================= RIGHT: flowing narrative ================= */}
          <div className="flex flex-col">
            {/* Hero image opens the right column instead of sitting beside the title */}
            <motion.div {...fadeUp} className="relative w-full bg-surface rounded-[24px] border border-border overflow-hidden mb-16">
              {project.heroImage ? (
                <CldImage
                  src={project.heroImage}
                  alt={project.title}
                  width={1280}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted font-mono text-sm bg-gradient-to-tr from-surface to-background/50 p-6 text-center">
                  [Hero Image: {project.heroImage}]
                </div>
              )}
            </motion.div>

            {/* ---- 01 Overview ---- */}
            <motion.section
              {...fadeUp}
              id="overview"
              ref={(el) => { sectionRefs.current["overview"] = el; }}
              className="flex flex-col gap-6 py-14 border-b border-divider scroll-mt-32"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-muted">01</span>
                <h2 className="text-[28px] md:text-[34px] font-semibold text-primary">{t.overview}</h2>
              </div>
              <div className="flex flex-col gap-4 text-lg text-secondary leading-relaxed max-w-[680px]">
                {project.overview[lang].map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.section>

            {/* ---- 02 Problem & Solution ----
                Editorial pairing instead of twin cards: problem is quieter,
                solution is called out with a left accent rule. */}
            <motion.section
              {...fadeUp}
              id="problem-solution"
              ref={(el) => { sectionRefs.current["problem-solution"] = el; }}
              className="flex flex-col gap-8 py-14 border-b border-divider scroll-mt-32"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-muted">02</span>
                <h2 className="text-[28px] md:text-[34px] font-semibold text-primary">
                  {t.problem} &amp; {t.solution}
                </h2>
              </div>
              <div className="flex flex-col gap-8 max-w-[680px]">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{t.problem}</span>
                  <p className="text-lg text-secondary leading-relaxed">{project.problem[lang]}</p>
                </div>
                <div className="flex flex-col gap-2 border-l-2 border-accent pl-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t.solution}</span>
                  <p className="text-lg text-primary font-medium leading-relaxed">{project.solution[lang]}</p>
                </div>
              </div>
            </motion.section>

            {/* ---- 03 Approach: role breakdown (tech stack now lives in the sidebar) ---- */}
            {project.rolesDetails.length > 0 && (
              <motion.section
                {...fadeUp}
                id="approach"
                ref={(el) => { sectionRefs.current["approach"] = el; }}
                className="flex flex-col gap-10 py-14 border-b border-divider scroll-mt-32"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-muted">03</span>
                  <h2 className="text-[28px] md:text-[34px] font-semibold text-primary">{t.myRole}</h2>
                </div>

                {project.rolesDetails.length > 0 && (
                  <div className="flex flex-col divide-y divide-divider border-t border-divider">
                    {project.rolesDetails.map((r, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-6">
                        <h3 className="text-base font-medium text-primary">{r.title[lang]}</h3>
                        <ul className="flex flex-col gap-3">
                          {r.tasks[lang].map((task, j) => (
                            <li key={j} className="flex items-start gap-3 text-secondary">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            )}

            {/* ---- 04 Gallery ---- */}
            {project.gallery.length > 0 && (
              <motion.section
                {...fadeUp}
                id="gallery"
                ref={(el) => { sectionRefs.current["gallery"] = el; }}
                className="flex flex-col gap-6 py-14 border-b border-divider scroll-mt-32"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-muted">04</span>
                  <h2 className="text-[28px] md:text-[34px] font-semibold text-primary">{t.gallery}</h2>
                </div>
                
                {/* 1. Tambahkan aspect-[16/10] di sini agar kotaknya tetap seukuran layar web */}
                <div className="relative w-full aspect-video bg-surface rounded-[24px] border border-border overflow-hidden">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative flex items-center justify-center"
                  >
                    {project.gallery[activeImage] ? (
                      <img
                        src={project.gallery[activeImage]}
                        alt={`Gallery ${activeImage + 1}`}
                        className={
                          project.gallery[activeImage].toLowerCase().includes("mobile")
                            ? "w-full h-full object-contain drop-shadow-md p-6 md:p-10 bg-primary/5" // Tampilan Mobile (Diberi padding & sedikit background beda agar terlihat seperti frame)
                            : "w-full h-full object-contain scale-[1.03]" // Tampilan Web (Lebar penuh, 100% utuh tidak terpotong)
                        }
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted font-mono">
                        [Gallery Image {activeImage + 1}: {project.gallery[activeImage]}]
                      </div>
                    )}
                  </motion.div>
                </div>

                {project.gallery.length > 1 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {project.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`relative w-full aspect-video rounded-[12px] overflow-hidden border-2 transition-all ${
                          activeImage === i ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        {img ? (
                          <img
                            src={img}
                            alt={`Gallery thumbnail ${i + 1}`}
                            // Opsional: Untuk thumbnail, biarkan object-cover tapi arahkan fokus ke atas (object-top)
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-surface flex items-center justify-center text-[10px] text-muted font-mono break-all p-2 text-center">
                            {img}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </motion.section>
            )}

            {/* ---- 05 Outcome: challenges + results ---- */}
            <motion.section
              {...fadeUp}
              id="outcome"
              ref={(el) => { sectionRefs.current["outcome"] = el; }}
              className="flex flex-col gap-10 py-14 scroll-mt-32"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-muted">05</span>
                <h2 className="text-[28px] md:text-[34px] font-semibold text-primary">{t.results}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.challenges.length > 0 && (
                  <div className="flex flex-col gap-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{t.challenges}</span>
                    <div className="flex flex-col divide-y divide-divider border-t border-divider">
                      {project.challenges.map((c, i) => (
                        <div key={i} className="flex gap-4 py-5">
                          <span className="text-secondary font-mono text-sm mt-1">0{i + 1}</span>
                          <div className="flex flex-col gap-2">
                            <h4 className="font-medium text-primary">{c.challenge[lang]}</h4>
                            <p className="text-secondary leading-relaxed">{c.solution[lang]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.results[lang].length > 0 && (
                  <div className="flex flex-col gap-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{t.results}</span>
                    <div className="flex flex-col divide-y divide-divider border-t border-divider">
                      {project.results[lang].map((r, i) => (
                        <div key={i} className="flex items-center gap-3 py-4">
                          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="font-medium text-primary">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}