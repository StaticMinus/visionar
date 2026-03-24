import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Award, Users, Globe, CheckCircle } from 'lucide-react';
import { medicalGradeConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  'shield-check': ShieldCheck,
  award: Award,
  users: Users,
  globe: Globe,
};

export default function MedicalGrade() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const certs = certsRef.current;
    const features = featuresRef.current;
    if (!section || !content || !certs || !features) return;

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

      // Certifications animation
      gsap.fromTo(
        certs.querySelectorAll('.cert-item'),
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: certs,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Features animation
      const featureItems = features.querySelectorAll('.feature-card');
      featureItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: index % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Trust badges animation
      gsap.fromTo(
        section.querySelectorAll('.trust-badge'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.trust-badges'),
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="medical"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-brand-linen to-brand-sage/10 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={contentRef} className="text-center mb-16">
          <span className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-brand-forest/10 rounded-full text-sm font-medium text-brand-forest mb-6">
            <ShieldCheck className="w-4 h-4" />
            Medical Certified
          </span>
          <h2 className="animate-item font-display text-4xl md:text-5xl lg:text-6xl text-brand-forest mb-4">
            {medicalGradeConfig.sectionTitle}
          </h2>
          <p className="animate-item text-xl text-brand-forest/80 mb-4">
            {medicalGradeConfig.sectionSubtitle}
          </p>
          <p className="animate-item text-lg text-brand-forest/60 max-w-3xl mx-auto">
            {medicalGradeConfig.description}
          </p>
        </div>

        {/* Certifications */}
        <div ref={certsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {medicalGradeConfig.certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-item group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="font-display text-lg text-brand-forest mb-1">
                {cert.name}
              </h4>
              <p className="text-sm text-brand-forest/60">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div ref={featuresRef} className="space-y-8">
          {medicalGradeConfig.features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/40 to-transparent" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-brand-sage/20 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-brand-forest" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-brand-forest">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-brand-forest/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="trust-badges mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {medicalGradeConfig.trustBadges.map((badge, index) => {
              const Icon = iconMap[badge.icon] || ShieldCheck;
              return (
                <div
                  key={index}
                  className="trust-badge flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm"
                >
                  <div className="p-3 bg-brand-gold/20 rounded-lg">
                    <Icon className="w-6 h-6 text-brand-forest" />
                  </div>
                  <span className="font-medium text-brand-forest">
                    {badge.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
