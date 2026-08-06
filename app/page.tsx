import Navbar from './components/navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col overflow-x-hidden">
        <Hero />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}