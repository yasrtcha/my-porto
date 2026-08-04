"use client";

import Navbar from '@/app/components/navbar';
import About from '@/app/components/About';
import Footer from '@/app/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[96px] pb-[72px]">
        <About />
      </main>
      <Footer />
    </>
  );
}
