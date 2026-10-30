import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName);
  };

  const handleSelectProject = (projectTitle) => {
    setSelectedService(`Website similar to ${projectTitle}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Why Choose Me */}
        <WhyChooseMe />

        {/* 4. Portfolio / Projects */}
        <Portfolio onSelectProject={handleSelectProject} />

        {/* 5. How It Works / Process */}
        <Process />

        {/* 6. Simple & Flexible Pricing */}
        <Pricing onSelectPackage={handleSelectPackage} />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. Pre-Footer Call To Action */}
        <CallToAction />

        {/* 10. Contact / Get a Free Quote */}
        <Contact
          preselectedService={selectedService}
          preselectedPackage={selectedPackage}
        />
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
