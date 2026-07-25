"use client";

import { use, useState } from "react";
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

const staggerVariants = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};



export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  const [activeImage, setActiveImage] = useState(0);
  const { lang } = useLanguage();

  if (!project) {
    notFound();
  }

  const t = dictionary[lang].projectDetail;



  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[120px] pb-[72px] px-5 md:px-8 max-w-[1280px] mx-auto">
        <motion.article
          variants={staggerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-10 md:gap-14"
        >

          {/* Project Hero */}

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <motion.div variants={itemVariants} className="flex flex-col gap-5 order-2 lg:order-1">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">

                {project.category}

              </span>

             

              <h1 className="text-[40px] md:text-[56px] font-semibold leading-tight tracking-tight text-primary">

                {project.title}

              </h1>

             

              <p className="text-xl text-secondary leading-relaxed">

                {project.shortDescription[lang]}

              </p>



              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-border my-2">

                <div className="flex flex-col gap-1">

                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">{t.role}</span>

                  <span className="font-medium text-primary">{project.role}</span>

                </div>

                <div className="flex flex-col gap-1">

                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">{t.duration}</span>

                  <span className="font-medium text-primary">{project.duration[lang]}</span>

                </div>

                <div className="flex flex-col gap-1">

                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">{t.platform}</span>

                  <span className="font-medium text-primary">{project.platform}</span>

                </div>

              </div>



              <div className="flex flex-wrap items-center gap-4">

                {project.demoUrl && (

                  <Link

                    href={project.demoUrl}

                    target="_blank"

                    className="px-6 py-3 bg-accent text-background rounded-[14px] font-medium hover:-translate-y-0.5 hover:shadow-hover transition-all flex items-center gap-2"

                  >

                    {t.liveDemo} <ArrowUpRight className="w-4 h-4" />

                  </Link>

                )}

                {project.githubUrl && (

                  <Link

                    href={project.githubUrl}

                    target="_blank"

                    className="px-6 py-3 bg-surface border border-border text-primary rounded-[14px] font-medium hover:bg-background transition-all flex items-center gap-2"

                  >

                    <FiGithub className="w-4 h-4" /> {t.github}

                  </Link>

                )}

                {project.isPrivate && (

                  <div className="px-5 py-2.5 bg-surface border border-border text-secondary rounded-[14px] font-medium flex items-center gap-2 cursor-not-allowed">

                    <Lock className="w-4 h-4" /> {t.privateRepo}

                  </div>

                )}

              </div>

            </motion.div>



            <motion.div variants={itemVariants} className="order-1 lg:order-2">

              <div className="relative w-full aspect-[16/9] bg-surface rounded-[24px] border border-border overflow-hidden">

                <div className="absolute inset-0 flex items-center justify-center text-muted font-mono text-sm bg-gradient-to-tr from-surface to-background/50 p-6 text-center">

                  [Hero Image: {project.heroImage}]

                </div>

              </div>

            </motion.div>

          </section>



          {/* Overview */}

          <motion.section variants={itemVariants} className="flex flex-col gap-4 max-w-[800px]">

            <h2 className="text-[32px] md:text-[40px] font-semibold text-primary">{t.overview}</h2>

            <div className="flex flex-col gap-4 text-lg text-secondary leading-relaxed">

              {project.overview[lang].map((para, i) => (

                <p key={i}>{para}</p>

              ))}

            </div>

          </motion.section>



          {/* Problem & Solution */}

          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-surface p-8 rounded-[24px] border border-border flex flex-col gap-4 h-full">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{t.problem}</span>

              <p className="text-lg text-primary font-medium leading-relaxed">{project.problem[lang]}</p>

            </div>

            <div className="bg-primary/5 p-8 rounded-[24px] border border-border flex flex-col gap-4 h-full">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t.solution}</span>

              <p className="text-lg text-primary font-medium leading-relaxed">{project.solution[lang]}</p>

            </div>

          </motion.section>



          {/* My Role */}

          {project.rolesDetails.length > 0 && (

            <motion.section variants={itemVariants} className="flex flex-col gap-6">

              <h2 className="text-[32px] md:text-[40px] font-semibold text-primary">{t.myRole}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {project.rolesDetails.map((r, i) => (

                  <div key={i} className="p-6 bg-card rounded-[20px] border border-border">

                    <h3 className="text-xl font-medium text-primary mb-4">{r.title[lang]}</h3>

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

            </motion.section>

          )}



          {/* Tech Stack */}

          {project.techStack.length > 0 && (

            <motion.section variants={itemVariants} className="flex flex-col gap-6">

              <h2 className="text-[32px] md:text-[40px] font-semibold text-primary">{t.techStack}</h2>

              <div className="flex flex-col gap-5">

                {project.techStack.map((stack, i) => (

                  <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-b border-divider pb-5 last:border-0">

                    <span className="text-sm font-semibold text-secondary w-[120px] uppercase tracking-wider">{stack.category}</span>

                    <div className="flex flex-wrap gap-3">

                      {stack.items.map((item, j) => (

                        <TechStackIcon key={j} name={item.name} icon={item.icon} />

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </motion.section>

          )}



          {/* Gallery */}

          {project.gallery.length > 0 && (

            <motion.section variants={itemVariants} className="flex flex-col gap-6">

              <h2 className="text-[32px] md:text-[40px] font-semibold text-primary mb-2">{t.gallery}</h2>

             

              <div className="relative w-full aspect-[16/9] bg-surface rounded-[24px] border border-border overflow-hidden">

                <motion.div

                  key={activeImage}

                  initial={{ opacity: 0 }}

                  animate={{ opacity: 1 }}

                  transition={{ duration: 0.3 }}

                  className="absolute inset-0 flex items-center justify-center text-muted font-mono"

                >

                  [Gallery Image {activeImage + 1}: {project.gallery[activeImage]}]

                </motion.div>

              </div>



              {project.gallery.length > 1 && (

                <div className="grid grid-cols-4 gap-4 mt-2">

                  {project.gallery.map((img, i) => (

                    <button

                      key={i}

                      onClick={() => setActiveImage(i)}

                      className={`relative w-full aspect-video rounded-[12px] overflow-hidden border-2 transition-all ${activeImage === i ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}

                    >

                      <div className="absolute inset-0 bg-surface flex items-center justify-center text-[10px] text-muted font-mono break-all p-2 text-center">

                        {img}

                      </div>

                    </button>

                  ))}

                </div>

              )}

            </motion.section>

          )}



          {/* Challenges & Results */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

            {project.challenges.length > 0 && (

              <motion.section variants={itemVariants} className="flex flex-col gap-6">

                <h2 className="text-[32px] font-semibold text-primary">{t.challenges}</h2>

                <div className="flex flex-col gap-6">

                  {project.challenges.map((c, i) => (

                    <div key={i} className="flex flex-col gap-3">

                      <div className="flex gap-4">

                        <span className="text-secondary font-mono text-sm mt-1">0{i+1}</span>

                        <div className="flex flex-col gap-2">

                          <h4 className="font-medium text-primary">{c.challenge[lang]}</h4>

                          <p className="text-secondary leading-relaxed">{c.solution[lang]}</p>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </motion.section>

            )}



            {project.results[lang].length > 0 && (

              <motion.section variants={itemVariants} className="flex flex-col gap-6">

                <h2 className="text-[32px] font-semibold text-primary">{t.results}</h2>

                <div className="flex flex-col gap-4">

                  {project.results[lang].map((r, i) => (

                    <div key={i} className="flex items-center gap-4 bg-surface p-4 rounded-[16px] border border-border">

                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />

                      <span className="font-medium text-primary">{r}</span>

                    </div>

                  ))}

                </div>

              </motion.section>

            )}

          </div>



          <motion.div variants={itemVariants} className="flex justify-center pt-8 border-t border-divider">

            <Link

              href="/project"

              className="px-8 py-4 bg-surface border border-border text-primary rounded-[14px] font-medium hover:bg-background hover:shadow-sm transition-all"

            >

              {t.back}

            </Link>

          </motion.div>

        </motion.article>

      </main>

      <Footer />

    </>

  );

}