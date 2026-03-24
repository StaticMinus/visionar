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

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const steps = stepsRef.current;
    const video = videoRef.current;
    if (!section || !content || !steps || !video) return;

    const ctx = gsap.context(() => {
      // Content animation
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
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Features animation
      gsap.fromTo(
        content.querySelectorAll('.feature-item'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

      // Steps animation
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
              start: 'top 85%',
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
      className="relative min-h-screen py-24 md:py-32 overflow-hidden"
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
          poster={virtualTryOnConfig.videoSrc}
        >
          <source src={virtualTryOnConfig.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-forest/80" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <span className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full text-sm font-medium text-brand-gold mb-6">
              <Camera className="w-4 h-4" />
              AI-Powered Technology
            </span>
            
            <h2 className="animate-item font-display text-4xl md:text-5xl lg:text-6xl text-brand-linen mb-4">
              {virtualTryOnConfig.sectionTitle}
            </h2>
            
            <p className="animate-item text-xl text-brand-linen/80 mb-4">
              {virtualTryOnConfig.sectionSubtitle}
            </p>
            
            <p className="animate-item text-lg text-brand-linen/60 mb-8 max-w-lg">
              {virtualTryOnConfig.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {virtualTryOnConfig.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Sparkles;
                return (
                  <div
                    key={index}
                    className="feature-item flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                  >
                    <div className="p-2 bg-brand-gold/20 rounded-lg">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-linen text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-brand-linen/60 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <MagneticButton
              className="animate-item inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-brand-forest rounded-full font-bold text-lg hover:bg-brand-linen transition-colors"
            >
              {virtualTryOnConfig.ctaText}
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </div>

          {/* 3D Phone Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Floating elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-brand-gold/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-sage/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Phone frame */}
              <div 
                className="absolute inset-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl"
                style={{ 
                  transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen content */}
                  <img
                    src="/app-screen-1.jpg"
                    alt="AR Try-On Interface"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay UI */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-brand-gold/50 rounded-full animate-ping" />
                  </div>
                  
                  {/* Face scan lines */}
                  <div className="absolute inset-x-0 top-1/3 h-px bg-brand-gold/50 animate-scan" />
                </div>
                
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-brand-gold/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 border border-brand-sage/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="mt-24">
          <h3 className="text-center font-display text-2xl text-brand-linen mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {virtualTryOnConfig.steps.map((step, index) => (
              <div
                key={index}
                className="step-item relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center group hover:bg-white/20 transition-colors"
                style={{ perspective: '1000px' }}
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-display text-4xl text-brand-gold/30 group-hover:text-brand-gold/50 transition-colors">
                  {step.number}
                </span>
                <h4 className="font-medium text-brand-linen mt-4 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-brand-linen/60">
                  {step.description}
                </p>
                
                {/* Connector line */}
                {index < virtualTryOnConfig.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-brand-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(0); }
          50% { transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(-20px); }
        }
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
