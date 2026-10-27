import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 grain-overlay" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-champagne-500/[0.06] blur-[140px]"
      />
      <div className="relative z-10">
        <Header />
        <main className="pb-10">
          <Hero />
          <VideoSection />
          <LeadForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}
