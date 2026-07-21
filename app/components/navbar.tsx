"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const aboutHref = pathname === '/' ? '#about' : '/#about';

	return (
		<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black font-sans antialiased">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex justify-between items-center">
				<Link href="/" className="font-black text-xl md:text-2xl tracking-tighter uppercase relative group leading-none">
					Danar Rais.
				</Link>
				<div className="hidden md:flex items-center space-x-10 font-bold uppercase text-sm tracking-widest leading-none">
					<Link href={aboutHref} className="hover:line-through transition-all">About</Link>
					<Link href="/project" className="hover:line-through transition-all">Projects</Link>
					<Link href="/" className="px-5 py-2 border-2 border-black font-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-2 group leading-none">
						Download CV
						<ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
					</Link>
				</div>
				<div className="md:hidden text-black">
					<button
						type="button"
						aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
						onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						className="cursor-pointer"
					>
						<span className="text-2xl leading-none">{isMobileMenuOpen ? '×' : '☰'}</span>
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="md:hidden border-t-2 border-black px-4 py-4 bg-white flex flex-col gap-4 font-bold uppercase text-xs sm:text-sm tracking-widest leading-none">
					<Link href={aboutHref} onClick={() => setIsMobileMenuOpen(false)} className="w-fit">About</Link>
					<Link href="/project" onClick={() => setIsMobileMenuOpen(false)} className="w-fit">Projects</Link>
					<Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="w-fit px-4 py-2 mt-2 border-2 border-black font-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-2 leading-none">
						Download CV
						<ArrowUpRight className="w-4 h-4" />
					</Link>
				</div>
			)}
		</nav>
	);
}
