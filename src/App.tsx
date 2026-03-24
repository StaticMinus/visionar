import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { siteConfig } from '@/config';
import { useLenis } from '@/hooks/useLenis';
import CustomCursor from '@/components/CustomCursor';
import NoiseOverlay from '@/components/NoiseOverlay';
import Navigation from '@/sections/Navigation';
import HeroSection from '@/sections/HeroSection';
import ShopSection from '@/sections/ShopSection';
import VirtualTryOn from '@/sections/VirtualTryOn';
import MobileApp from '@/sections/MobileApp';
import MedicalGrade from '@/sections/MedicalGrade';
import LatestArticles from '@/sections/LatestArticles';
import DoctorsSection from '@/sections/DoctorsSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import GallerySection from '@/sections/GallerySection';
import LifestyleSection from '@/sections/LifestyleSection';
import DesignSection from '@/sections/DesignSection';
import GreenTribe from '@/sections/GreenTribe';
import AuthorsSection from '@/sections/AuthorsSection';
import InstagramGallery from '@/sections/InstagramGallery';
import DeveloperCredit from '@/sections/DeveloperCredit';
import Footer from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    // Set document title and language from config
    if (siteConfig.title) {
      document.title = siteConfig.title;
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
    if (siteConfig.description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', siteConfig.description);
      }
    }
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger on load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    // Handle resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-linen cursor-custom">
      {/* Noise texture overlay */}
      <NoiseOverlay />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        {/* Hero Section - Split Screen Perspective Theater */}
        <HeroSection />

        {/* Shop Section - E-Commerce */}
        <ShopSection />

        {/* Virtual Try-On Section */}
        <VirtualTryOn />

        {/* Mobile App Download Section */}
        <MobileApp />

        {/* Medical Grade Section */}
        <MedicalGrade />

        {/* Latest Collections - Horizontal Dynamic Flow */}
        <LatestArticles />

        {/* Doctors Section */}
        <DoctorsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* 3D Gallery Section */}
        <GallerySection />

        {/* Lifestyle - Scattered Polaroid Chaos */}
        <LifestyleSection />

        {/* Design - Mosaic Wall */}
        <DesignSection />

        {/* Green Tribe - Parallax Video Background */}
        <GreenTribe />

        {/* Authors - Orbital Avatar System */}
        <AuthorsSection />

        {/* Instagram Gallery - 3D Tunnel */}
        <InstagramGallery />

        {/* Developer Credit - David Ola */}
        <DeveloperCredit />
      </main>

      {/* Footer - Curtain Reveal */}
      <Footer />
    </div>
  );
}

export default App;
