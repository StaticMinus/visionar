import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Cpu, Globe, Sparkles, ExternalLink, Heart, MapPin } from 'lucide-react';
import { developerCreditConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const skillIcons: Record<string, React.ElementType> = {
  React: Code2,
  TypeScript: Code2,
  'Three.js': Cpu,
  TensorFlow: Cpu,
  'AR/VR': Cpu,
  'Node.js': Code2,
  AWS: Globe,
};

export default function DeveloperCredit() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const flag = flagRef.current;
    if (!section || !content || !flag) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        content.querySelectorAll('.animate-item'),
        { y: 60, opacity: 0 },
        {
          y: 0,
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

      // Flag wave animation
      gsap.to(flag, {
        rotateY: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Skills animation
      gsap.fromTo(
        content.querySelectorAll('.skill-item'),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: content.querySelector('.skills-grid'),
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Quote animation
      gsap.fromTo(
        content.querySelector('.quote-block'),
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content.querySelector('.quote-block'),
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="developer"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-br from-brand-linen via-brand-sage/5 to-brand-gold/10 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
        
        {/* Nigerian flag colors subtle background */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-green-600/20 via-white/20 to-green-600/20" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        <div ref={contentRef} className="text-center">
          {/* Section Label */}
          <span className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-brand-forest/10 rounded-full text-sm font-medium text-brand-forest mb-8">
            <Sparkles className="w-4 h-4" />
            {developerCreditConfig.sectionTitle}
          </span>

          {/* Nigerian Flag */}
          <div 
            ref={flagRef}
            className="animate-item inline-block mb-8"
            style={{ perspective: '500px', transformStyle: 'preserve-3d' }}
          >
            <div className="text-8xl md:text-9xl filter drop-shadow-lg">
              {developerCreditConfig.flag}
            </div>
          </div>

          {/* Name & Title */}
          <h2 className="animate-item font-display text-5xl md:text-6xl lg:text-7xl text-brand-forest mb-4">
            {developerCreditConfig.name}
          </h2>
          
          <div className="animate-item flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-brand-sage" />
            <span className="text-xl text-brand-forest/80">
              {developerCreditConfig.nationality} {developerCreditConfig.flag}
            </span>
          </div>
          
          <p className="animate-item text-2xl text-brand-forest/70 mb-4">
            {developerCreditConfig.title}
          </p>

          <p className="animate-item text-lg text-brand-forest/60 max-w-2xl mx-auto mb-10">
            {developerCreditConfig.description}
          </p>

          {/* Quote */}
          <div className="quote-block relative max-w-3xl mx-auto mb-12 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-brand-sage/20">
            <div className="absolute -top-4 left-8 text-6xl text-brand-gold/30 font-serif">"</div>
            <p className="text-xl md:text-2xl text-brand-forest/80 italic leading-relaxed">
              {developerCreditConfig.quote}
            </p>
            <div className="absolute -bottom-4 right-8 text-6xl text-brand-gold/30 font-serif rotate-180">"</div>
          </div>

          {/* Skills */}
          <div className="skills-grid flex flex-wrap justify-center gap-3 mb-12">
            {developerCreditConfig.skills.map((skill, index) => {
              const Icon = skillIcons[skill] || Code2;
              return (
                <div
                  key={index}
                  className="skill-item flex items-center gap-2 px-4 py-2 bg-brand-forest text-brand-linen rounded-full text-sm font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {skill}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <MagneticButton
            className="animate-item inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-forest rounded-full font-bold hover:bg-brand-forest hover:text-brand-linen transition-colors"
          >
            {developerCreditConfig.ctaText}
            <ExternalLink className="w-5 h-5" />
          </MagneticButton>

          {/* Footer note */}
          <div className="animate-item mt-16 pt-8 border-t border-brand-forest/10">
            <p className="flex items-center justify-center gap-2 text-brand-forest/50">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
