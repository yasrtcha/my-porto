"use client";

import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';

interface EducationItem {
  id: string;
  institution: {
    EN: string;
    ID: string;
  };
  degree: {
    EN: string;
    ID: string;
  };
  year: string;
  description: {
    EN: string;
    ID: string;
  };
}

const educationData: EducationItem[] = [
  {
    id: "edu-1",
    institution: {
      EN: "Brawijaya University",
      ID: "Universitas Brawijaya"
    },
    degree: {
      EN: "Associate Degree in Information Technology",
      ID: "Ahli Madya (D3) Teknologi Informasi"
    },
    year: "2023 - 2026",
    description: {
      EN: "Graduated with a strong foundation in software engineering, web development, and digital product design. Active in various academic projects and organizations.",
      ID: "Lulus dengan dasar yang kuat dalam rekayasa perangkat lunak, pengembangan web, dan desain produk digital. Aktif dalam berbagai proyek akademik dan organisasi."
    }
  },
  {
    id: "edu-2",
    institution: {
      EN: "State Senior High School 2 Wonogiri",
      ID: "SMA Negeri 2 Wonogiri"
    },
    degree: {
      EN: "Science Major",
      ID: "Jurusan Ilmu Pengetahuan Alam (IPA)"
    },
    year: "2019 - 2022",
    description: {
      EN: "Built a strong foundation in science, mathematics, and analytical thinking.",
      ID: "Membangun dasar yang kuat dalam sains, matematika, dan pemikiran analitis."
    }
  }
];

export default function Education() {
  const { lang } = useLanguage();
  const t = dictionary[lang].about;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          {t.education}
        </span>
        <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight text-primary max-w-[640px]">
          {t.myEducation}
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {educationData.map((edu) => (
          <div key={edu.id} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-t border-border pt-6">
            <div className="md:w-[200px] flex-shrink-0 mt-1">
              <span className="text-sm font-mono text-secondary px-3 py-1 bg-surface rounded-full border border-border inline-block">
                {edu.year}
              </span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-primary leading-tight">{edu.institution[lang]}</h3>
              <span className="text-base text-secondary font-medium leading-tight mb-1.5">{edu.degree[lang]}</span>
              <p className="text-secondary leading-relaxed">
                {edu.description[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
