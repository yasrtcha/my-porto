"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../components/navbar';
const fadeInUp = {
	initial: { opacity: 0, y: 50 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-50px" },
	transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const projectItems = [
	{
		slug: 'sponsorea',
		title: 'Sponsorea',
		description: 'Sistem informasi marketplace sponsorship untuk memfasilitasi kolaborasi antara perusahaan dan penyelenggara event.',
		tags: ['Laravel', 'MySQL', 'Tailwind CSS',]
	},
	{
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

export default function ProjectPage() {
	return (
		<main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-0 overflow-x-hidden">
				<Navbar />

				<motion.section
					className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-10"
					initial="initial"
					whileInView="whileInView"
					viewport={{ once: true, margin: "-120px" }}
					variants={{
						initial: { opacity: 0 },
						whileInView: { opacity: 1, transition: { staggerChildren: 0.15 } }
					}}
				>
				<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b-4 border-black pb-6">
					<div className="space-y-3">
						<p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Project Archive</p>
						<h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">All Projects</h1>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{projectItems.map((item) => {
						const content = (
							<motion.article key={item.title} variants={fadeInUp} className="group relative overflow-hidden border-2 border-black p-5 md:p-8 flex flex-col gap-4 md:gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
								<ArrowUpRight className="absolute top-4 right-4 w-6 h-6 md:w-7 md:h-7 text-black opacity-0 translate-y-2 -translate-x-2 rotate-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
								<div className="flex flex-wrap gap-2">
									{item.tags.map((tag) => (
										<span key={tag} className="px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider border-2 border-black">{tag}</span>
									))}
								</div>
								<div>
									<h2 className="font-black text-xl md:text-2xl uppercase tracking-tighter">{item.title}</h2>
									<p className="font-medium mt-2 md:mt-3 text-sm md:text-base text-gray-600">{item.description}</p>
								</div>
							</motion.article>
						);

						if (item.slug) {
							return (
								<Link key={item.title} href={`/project/${item.slug}`} className="block" aria-label={`Buka detail project ${item.title}`}>
									{content}
								</Link>
							);
						}

						return content;
					})}
				</div>
			</motion.section>
		</main>
	);
}
