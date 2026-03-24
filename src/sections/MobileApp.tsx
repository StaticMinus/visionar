import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Apple, Play, Camera, FileText, Stethoscope, Truck, Bell, Tag, Star, Download, Users } from 'lucide-react';
import { mobileAppConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  camera: Camera,
  'file-text': FileText,
  stethoscope: Stethoscope,
  truck: Truck,
  bell: Bell,
  tag: Tag,
};

export default function MobileApp() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const phones = phonesRef.current;
    if (!section || !content || !phones) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        content.querySelectorAll('.animate-item'),
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Features animation
      gsap.fromTo(
        content.querySelectorAll('.feature-item'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Phone animation
      gsap.fromTo(
        phones,
        { x: 100, opacity: 0, rotateY: 30 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: phones,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        section.querySelectorAll('.stat-item'),
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: section.querySelector('.stats-container'),
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Auto-rotate screens
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % mobileAppConfig.screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="mobile-app"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-sage/10 to-transparent" />
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <span className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-brand-sage/20 rounded-full text-sm font-medium text-brand-forest mb-6">
              <Download className="w-4 h-4" />
              Download Now
            </span>
            
            <h2 className="animate-item font-display text-4xl md:text-5xl lg:text-6xl text-brand-forest mb-4">
              {mobileAppConfig.sectionTitle}
            </h2>
            
            <p className="animate-item text-xl text-brand-forest/80 mb-4">
              {mobileAppConfig.sectionSubtitle}
            </p>
            
            <p className="animate-item text-lg text-brand-forest/60 mb-8 max-w-lg">
              {mobileAppConfig.description}
            </p>

            {/* Download Buttons */}
            <div className="animate-item flex flex-wrap gap-4 mb-10">
              <MagneticButton
                className="flex items-center gap-3 px-6 py-4 bg-brand-forest text-brand-linen rounded-xl hover:bg-brand-sage transition-colors"
              >
                <Apple className="w-7 h-7" />
                <div className="text-left">
                  <span className="text-xs opacity-70 block">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </MagneticButton>
              
              <MagneticButton
                className="flex items-center gap-3 px-6 py-4 bg-brand-forest text-brand-linen rounded-xl hover:bg-brand-sage transition-colors"
              >
                <Play className="w-7 h-7" fill="currentColor" />
                <div className="text-left">
                  <span className="text-xs opacity-70 block">Get it on</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </MagneticButton>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mobileAppConfig.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Star;
                return (
                  <div
                    key={index}
                    className="feature-item flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 bg-brand-sage/20 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-forest" />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-forest text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-brand-forest/60 mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phone Mockups */}
          <div ref={phonesRef} className="relative" style={{ perspective: '1000px' }}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Phone */}
              <div 
                className="relative z-10 bg-gray-900 rounded-[3rem] p-3 shadow-2xl"
                style={{ transform: 'rotateY(-10deg) rotateX(5deg)' }}
              >
                <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <img
                    src={mobileAppConfig.screenshots[activeScreen]}
                    alt="App Screenshot"
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
              </div>

              {/* Secondary Phone (behind) */}
              <div 
                className="absolute top-8 -right-8 w-3/4 bg-gray-800 rounded-[2.5rem] p-2.5 shadow-xl opacity-60"
                style={{ transform: 'rotateY(-20deg) rotateX(8deg) translateZ(-50px)' }}
              >
                <div className="bg-black rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <img
                    src={mobileAppConfig.screenshots[(activeScreen + 1) % mobileAppConfig.screenshots.length]}
                    alt="App Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Screen indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {mobileAppConfig.screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreen(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeScreen === index
                        ? 'w-6 bg-brand-forest'
                        : 'bg-brand-forest/30'
                    }`}
                  />
                ))}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-gold/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-sage/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-container grid grid-cols-3 gap-6 mt-20 max-w-2xl mx-auto">
          {mobileAppConfig.stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="flex justify-center mb-2">
                {index === 0 && <Download className="w-6 h-6 text-brand-sage" />}
                {index === 1 && <Star className="w-6 h-6 text-brand-gold" fill="currentColor" />}
                {index === 2 && <Users className="w-6 h-6 text-brand-forest" />}
              </div>
              <div className="font-display text-3xl text-brand-forest">{stat.value}</div>
              <div className="text-sm text-brand-forest/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
