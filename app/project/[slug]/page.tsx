import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Navbar from '../../components/navbar'; // Sesuaikan path jika perlu

// 1. Data Structure Definition
type KeyFeature = {
    title: string;
    description: string;
};

type ProjectDetail = {
    slug: string;
    title: string;
    tagline: string;
    meta: {
        role: string;
        timeline: string;
        team: string;
    };
    techStack: string[];
    content: {
        problem: string;
        solution: string;
        keyFeatures: KeyFeature[];
        result: string;
    };
    links: {
        liveUrl: string;
        githubUrl: string;
    };
};

// 2. Mock Data (Sponsorea & Merakids)
const projectDetails: Record<string, ProjectDetail> = {
    sponsorea: {
        slug: 'sponsorea',
        title: 'Sponsorea',
        tagline: 'Sistem informasi marketplace sponsorship yang dikembangkan sebagai proyek Tugas Akhir yang digunakan sebagai syarat kelulusan untuk memfasilitasi kolaborasi antara perusahaan dan penyelenggara event di Kota Malang.',
        meta: {
            role: 'Project Manager & Developer',
            timeline: 'Feb - May 2026',
            team: 'Project Team',
        },
        techStack: ['Laravel', 'MySQL', 'Tailwind CSS', 'Figma'],
        content: {
            problem: 'Tim mahasiswa seringkali kesulitan dan menghabiskan banyak waktu melakukan proses manual dalam pencarian sponsor. Di sisi lain, perusahaan tidak memiliki platform terpusat untuk memfilter proposal acara yang masuk.',
            solution: 'Merancang dan mengembangkan flow digital berupa listing event, detail proposal, validasi kebutuhan sponsor, dan dashboard monitoring status agar kedua belah pihak dapat berkolaborasi lebih cepat dan transparan.',
            keyFeatures: [
                {
                    title: 'Centralized Listing',
                    description: 'Halaman khusus yang menampilkan katalog event mahasiswa yang sedang mencari pendanaan.'
                },
                {
                    title: 'Status Dashboard',
                    description: 'Memungkinkan panitia melacak progress proposal mereka secara real-time (Diproses, Diterima, Ditolak).'
                },
                {
                    title: 'Sponsor Evaluation',
                    description: 'Struktur data yang memudahkan pihak perusahaan dalam menilai kecocokan event dengan target market mereka.'
                }
            ],
            result: 'Alur pengajuan sponsorship menjadi jauh lebih ringkas. Tersedia database terstruktur yang memudahkan proses evaluasi untuk kolaborasi di masa depan.',
        },
        links: { liveUrl: '#', githubUrl: '#' }
    },
    merakids: {
        slug: 'merakids',
        title: 'Merakids Agency',
        tagline: 'Strategi pemasaran media sosial dan manajemen konten pilar komprehensif untuk kafe & perpustakaan anak.',
        meta: {
            role: 'Project Lead',
            timeline: 'Mar - Apr 2026',
            team: 'Merakids Team',
        },
        techStack: ['Social Media Strategy', 'Copywriting', 'Content Design', 'Analytics'],
        content: {
            problem: 'Wuffy Space memiliki fasilitas yang sangat baik sebagai children\'s library and cafe, namun membutuhkan pijakan digital branding yang kuat untuk menjangkau target pasar utamanya secara lebih efektif.',
            solution: 'Mengembangkan strategi Integrated Marketing Communication (IMC) melalui penyusunan content pillar yang edukatif, redesain identitas visual media sosial, dan penawaran kemitraan strategis.',
            keyFeatures: [
                {
                    title: 'Content Pillars',
                    description: 'Merancang pilar konten yang menyeimbangkan antara edukasi anak, promosi cafe, dan interaksi komunitas.'
                },
                {
                    title: 'Visual Guideline',
                    description: 'Menetapkan standar desain yang ramah anak, rapi, namun tetap estetik untuk feed media sosial.'
                },
                {
                    title: 'Partnership Strategy',
                    description: 'Menyusun draf proposal kolaborasi yang menonjolkan nilai unik Wuffy Space sebagai perpustakaan anak.'
                }
            ],
            result: 'Terbentuknya blueprint digital marketing yang solid untuk Wuffy Space, meningkatkan konsistensi brand dan interaksi audiens secara organik.',
        },
        links: { liveUrl: '#', githubUrl: '#' }
    }
};

export async function generateStaticParams() {
    return Object.values(projectDetails).map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projectDetails[slug];

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-24 overflow-x-hidden">
            <Navbar />

            {/* Layout diubah menjadi max-w-7xl agar lebih lebar (rata kanan-kiri tidak terlalu dalam) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 md:space-y-20">

                {/* Header / Hero Section */}
                <div className="flex flex-col gap-8 md:gap-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-2xl font-medium text-gray-700 leading-relaxed max-w-4xl border-l-4 border-black pl-4 md:pl-6">
                            {project.tagline}
                        </p>
                    </div>

                    {/* Actionable Links */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href={project.links.liveUrl}
                            className="group relative overflow-hidden border-2 border-black px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#DFFF00]"
                        >
                            <span className="font-black uppercase text-sm md:text-base tracking-wider">Visit Live Project</span>
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
                        </a>
                        <a
                            href={project.links.githubUrl}
                            className="group relative overflow-hidden border-2 border-black px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white"
                        >
                            <span className="font-black uppercase text-sm md:text-base tracking-wider">View Repository</span>
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
                        </a>
                    </div>

                    {/* Cover Image Placeholder */}
                    <div className="w-full h-64 sm:h-[400px] md:h-[550px] bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-black flex items-center justify-center relative overflow-hidden group">
                        <span className="text-gray-400 font-black text-xl md:text-3xl uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">
                            [ Project Cover Image ]
                        </span>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* KOLOM KIRI (Sidebar Meta) */}
                    <aside className="lg:col-span-3 flex flex-col gap-8 lg:sticky lg:top-24">
                        {/* Meta Info */}
                        <div className="space-y-5 bg-gray-50 border-2 border-black p-5 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Role</p>
                                <p className="font-black text-base md:text-lg">{project.meta.role}</p>
                            </div>
                            <div className="w-full h-[2px] bg-black/10"></div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Timeline</p>
                                <p className="font-black text-base md:text-lg">{project.meta.timeline}</p>
                            </div>
                            <div className="w-full h-[2px] bg-black/10"></div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Team</p>
                                <p className="font-black text-base md:text-lg">{project.meta.team}</p>
                            </div>
                            <div className="w-full h-[2px] bg-black/10"></div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Tech Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(stack => (
                                        <span key={stack} className="text-[10px] md:text-xs font-bold uppercase tracking-wider border-2 border-black bg-white px-2 py-1">
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* KOLOM KANAN (Konten Detail) */}
                    <div className="lg:col-span-9 space-y-12 md:space-y-16">

                        {/* Text Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-2 inline-block mb-2">
                                    The Challenge
                                </h2>
                                <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                                    {project.content.problem}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-2 inline-block mb-2">
                                    The Solution
                                </h2>
                                <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                                    {project.content.solution}
                                </p>
                            </div>
                        </div>

                        {/* Key Features Cards */}
                        <div className="space-y-8">
                            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-2 inline-block">
                                Key Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {project.content.keyFeatures.map((feature, idx) => (
                                    <article
                                        key={idx}
                                        className="group relative overflow-hidden border-2 border-black p-5 md:p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white"
                                    >
                                        <ArrowUpRight className="absolute top-4 right-4 w-6 h-6 text-black opacity-0 translate-y-2 -translate-x-2 rotate-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />

                                        <h3 className="font-black text-lg md:text-xl uppercase tracking-tight pr-8">
                                            {feature.title}
                                        </h3>
                                        <p className="font-medium text-sm md:text-base text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Result Section */}
                        <div className="space-y-6 bg-black text-white p-8 md:p-12 border-2 border-black relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFFF00] opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

                            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#DFFF00] relative z-10">
                                Result & Impact
                            </h2>
                            <p className="text-base md:text-xl font-medium leading-relaxed max-w-4xl relative z-10">
                                {project.content.result}
                            </p>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
}