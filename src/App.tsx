import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-10">
        <Hero />
        <VideoSection />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

function FreeWardrobeConsultation() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main className="pb-10">
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/free-wardrobe-consultation"
          element={<FreeWardrobeConsultation />}
        />
      </Routes>
    </BrowserRouter>
  );
}