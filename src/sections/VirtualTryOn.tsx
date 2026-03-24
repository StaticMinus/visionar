import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scan, Ruler, Sparkles, Share2, Camera, ArrowRight } from 'lucide-react';
import { virtualTryOnConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  scan: Scan,
  ruler: Ruler,
  sparkles: Sparkles,
  share: Share2,
};

export default function VirtualTryOn() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const steps = stepsRef.current;
    const phone = phoneRef.current;
    const video = videoRef.current;
    if (!section || !content || !steps || !phone || !video) return;

    const ctx = gsap.context(() => {
      // Content animation with scroll trigger
      gsap.fromTo(
        content.querySelectorAll('.animate-item'),
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 75%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Features animation with scroll trigger
      gsap.fromTo(
        content.querySelectorAll('.feature-item'),
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Phone 3D animation with scroll trigger
      gsap.fromTo(
        phone,
        { x: 100, opacity: 0, rotateY: 45, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          rotateY: -10,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: phone,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Phone floating animation
      gsap.to(phone, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Steps animation with scroll trigger
      const stepItems = steps.querySelectorAll('.step-item');
      stepItems.forEach((step, index) => {
        gsap.fromTo(
          step,
          { y: 60, opacity: 0, rotateX: 30 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.7,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Video parallax
      gsap.to(video, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="virtual-tryon"
      ref={sectionRef}
      className="relative min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-forest/85" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <span className="animate-item inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-gold/20 rounded-full text-xs sm:text-sm font-medium text-brand-gold mb-4 sm:mb-6">
              <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
              AI-Powered Technology
            </span>
            
            <h2 className="animate-item font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-linen mb-3 sm:mb-4">
              {virtualTryOnConfig.sectionTitle}
            </h2>
            
            <p className="animate-item text-lg sm:text-xl text-brand-linen/80 mb-2 sm:mb-4">
              {virtualTryOnConfig.sectionSubtitle}
            </p>
            
            <p className="animate-item text-base sm:text-lg text-brand-linen/60 mb-6 sm:mb-8 max-w-lg">
              {virtualTryOnConfig.description}
            </p>

            {/* Features Grid - Responsive */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {virtualTryOnConfig.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Sparkles;
                return (
                  <div
                    key={index}
                    className="feature-item flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                  >
                    <div className="p-1.5 sm:p-2 bg-brand-gold/20 rounded-lg flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-brand-linen text-xs sm:text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-brand-linen/60 mt-0.5 hidden sm:block">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <MagneticButton
              className="animate-item inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-brand-gold text-brand-forest rounded-full font-bold text-sm sm:text-lg hover:bg-brand-linen transition-colors"
            >
              {virtualTryOnConfig.ctaText}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </MagneticButton>
          </div>

          {/* 3D Phone Mockup - Responsive */}
          <div ref={phoneRef} className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-full max-w-[420px]">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 sm:top-4 sm:right-4 w-16 h-16 sm:w-20 sm:h-20 bg-brand-gold/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 sm:bottom-8 sm:left-0 w-20 h-20 sm:w-32 sm:h-32 bg-brand-sage/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Phone frame */}
              <div 
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl"
                style={{ 
                  transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)',
                }}
              >
                <div className="w-full bg-black rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden relative aspect-[9/18]">
                  {/* Screen content */}
                  <img
                    src="/app-screen-1.jpg"
                    alt="AR Try-On Interface"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay UI */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-32 h-32 sm:w-48 sm:h-48 border-2 border-brand-gold/50 rounded-full animate-ping" />
                  </div>
                  
                  {/* Face scan lines */}
                  <div className="absolute inset-x-0 top-1/3 h-px bg-brand-gold/50 animate-scan" />
                </div>
                
                {/* Notch */}
                <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-black rounded-full" />
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-brand-gold/20 rounded-full animate-spin pointer-events-none" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-2 sm:inset-4 border border-brand-sage/20 rounded-full animate-spin pointer-events-none" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>

        {/* Steps - Responsive */}
        <div ref={stepsRef} className="mt-16 sm:mt-20 lg:mt-24">
          <h3 className="text-center font-display text-xl sm:text-2xl text-brand-linen mb-8 sm:mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {virtualTryOnConfig.steps.map((step, index) => (
              <div
                key={index}
                className="step-item relative p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl text-center group hover:bg-white/20 transition-colors"
                style={{ perspective: '1000px' }}
              >
                <span className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 font-display text-2xl sm:text-4xl text-brand-gold/30 group-hover:text-brand-gold/50 transition-colors">
                  {step.number}
                </span>
                <h4 className="font-medium text-brand-linen mt-2 sm:mt-4 mb-1 sm:mb-2 text-sm sm:text-base">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-linen/60">
                  {step.description}
                </p>
                
                {/* Connector line - hidden on mobile */}
                {index < virtualTryOnConfig.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-brand-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 20%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 80%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
