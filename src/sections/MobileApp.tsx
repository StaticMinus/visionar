import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Apple, Play, Camera, FileText, Stethoscope, Truck, Bell, Tag, Star, Download, Users, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const phones = phonesRef.current;
    const scroller = scrollerRef.current;
    if (!section || !content || !phones || !scroller) return;

    const ctx = gsap.context(() => {
      // Content animation with scroll trigger
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
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Features animation with scroll trigger
      gsap.fromTo(
        content.querySelectorAll('.feature-item'),
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
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

      // Phone animation with scroll trigger
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
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Horizontal scroller animation
      gsap.to(scroller, {
        x: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Stats animation with scroll trigger
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
            start: 'top 90%',
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % mobileAppConfig.screenshots.length);
  };

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + mobileAppConfig.screenshots.length) % mobileAppConfig.screenshots.length);
  };

  return (
    <section
      id="mobile-app"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-sage/10 to-transparent" />
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <span className="animate-item inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-sage/20 rounded-full text-xs sm:text-sm font-medium text-brand-forest mb-4 sm:mb-6">
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              Download Now
            </span>
            
            <h2 className="animate-item font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-forest mb-3 sm:mb-4">
              {mobileAppConfig.sectionTitle}
            </h2>
            
            <p className="animate-item text-lg sm:text-xl text-brand-forest/80 mb-2 sm:mb-4">
              {mobileAppConfig.sectionSubtitle}
            </p>
            
            <p className="animate-item text-base sm:text-lg text-brand-forest/60 mb-6 sm:mb-8 max-w-lg">
              {mobileAppConfig.description}
            </p>

            {/* Download Buttons */}
            <div className="animate-item flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              <MagneticButton
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-brand-forest text-brand-linen rounded-xl hover:bg-brand-sage transition-colors"
              >
                <Apple className="w-5 h-5 sm:w-7 sm:h-7" />
                <div className="text-left">
                  <span className="text-[10px] sm:text-xs opacity-70 block">Download on the</span>
                  <span className="font-semibold text-sm sm:text-base">App Store</span>
                </div>
              </MagneticButton>
              
              <MagneticButton
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-brand-forest text-brand-linen rounded-xl hover:bg-brand-sage transition-colors"
              >
                <Play className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" />
                <div className="text-left">
                  <span className="text-[10px] sm:text-xs opacity-70 block">Get it on</span>
                  <span className="font-semibold text-sm sm:text-base">Google Play</span>
                </div>
              </MagneticButton>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {mobileAppConfig.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Star;
                return (
                  <div
                    key={index}
                    className="feature-item flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-1.5 sm:p-2 bg-brand-sage/20 rounded-lg flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-forest" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-brand-forest text-xs sm:text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-brand-forest/60 mt-0.5 hidden sm:block">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phone Mockups */}
          <div ref={phonesRef} className="relative order-1 lg:order-2 flex justify-center" style={{ perspective: '1000px' }}>
            <div className="relative w-full max-w-[300px] sm:max-w-[360px]">
              {/* Main Phone */}
              <div 
                className="relative z-10 bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl"
                style={{ transform: 'rotateY(-10deg) rotateX(5deg)' }}
              >
                <div className="bg-black rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <img
                    src={mobileAppConfig.screenshots[activeScreen]}
                    alt="App Screenshot"
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-black rounded-full" />
                
                {/* Navigation arrows */}
                <button 
                  onClick={prevScreen}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button 
                  onClick={nextScreen}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Secondary Phone (behind) */}
              <div 
                className="absolute top-4 sm:top-8 -right-4 sm:-right-8 w-2/3 bg-gray-800 rounded-[1.5rem] sm:rounded-[2.5rem] p-2 sm:p-2.5 shadow-xl opacity-60"
                style={{ transform: 'rotateY(-20deg) rotateX(8deg) translateZ(-50px)' }}
              >
                <div className="bg-black rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <img
                    src={mobileAppConfig.screenshots[(activeScreen + 1) % mobileAppConfig.screenshots.length]}
                    alt="App Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Screen indicators */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                {mobileAppConfig.screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreen(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                      activeScreen === index
                        ? 'w-4 sm:w-6 bg-brand-forest'
                        : 'w-1.5 sm:w-2 bg-brand-forest/30'
                    }`}
                  />
                ))}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-brand-gold/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-brand-sage/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Horizontal Scroller - App Screens */}
        <div className="mt-16 sm:mt-20 overflow-hidden">
          <div 
            ref={scrollerRef}
            className="flex gap-4 sm:gap-6"
            style={{ width: 'max-content' }}
          >
            {mobileAppConfig.screenshots.map((screen, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 sm:w-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={screen} alt={`App screen ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
            {mobileAppConfig.screenshots.map((screen, index) => (
              <div 
                key={`dup-${index}`}
                className="flex-shrink-0 w-32 sm:w-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={screen} alt={`App screen ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-container grid grid-cols-3 gap-3 sm:gap-6 mt-12 sm:mt-20 max-w-2xl mx-auto">
          {mobileAppConfig.stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm"
            >
              <div className="flex justify-center mb-1 sm:mb-2">
                {index === 0 && <Download className="w-5 h-5 sm:w-6 sm:h-6 text-brand-sage" />}
                {index === 1 && <Star className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold" fill="currentColor" />}
                {index === 2 && <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-forest" />}
              </div>
              <div className="font-display text-xl sm:text-2xl md:text-3xl text-brand-forest">{stat.value}</div>
              <div className="text-xs sm:text-sm text-brand-forest/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
