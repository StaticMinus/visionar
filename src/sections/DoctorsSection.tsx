import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MapPin, Users, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { doctorsConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function DoctorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const doctors = doctorsConfig.doctors;

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

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
    }, section);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <section
      id="doctors"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-forest overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={contentRef} className="text-center mb-16">
          <span className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-brand-sage/20 rounded-full text-sm font-medium text-brand-linen mb-6">
            <Users className="w-4 h-4" />
            Medical Partners
          </span>
          <h2 className="animate-item font-display text-4xl md:text-5xl lg:text-6xl text-brand-linen mb-4">
            {doctorsConfig.sectionTitle}
          </h2>
          <p className="animate-item text-xl text-brand-linen/70 max-w-2xl mx-auto">
            {doctorsConfig.sectionSubtitle}
          </p>
        </div>

        {/* Doctors Carousel */}
        <div ref={carouselRef} className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Rating badge */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-brand-gold rounded-full">
                        <Star className="w-4 h-4 text-brand-forest fill-current" />
                        <span className="font-bold text-brand-forest">{doctor.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 text-brand-sage text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        {doctor.hospital}
                      </div>
                      <h3 className="font-display text-3xl text-brand-linen mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-brand-gold font-medium mb-2">
                        {doctor.title}
                      </p>
                      <p className="text-brand-linen/60 text-sm mb-6">
                        {doctor.specialty}
                      </p>

                      {/* Quote */}
                      <div className="relative p-6 bg-white/5 rounded-xl mb-6">
                        <Quote className="absolute top-4 left-4 w-6 h-6 text-brand-sage/30" />
                        <p className="text-brand-linen/80 italic pl-8">
                          "{doctor.quote}"
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="font-display text-2xl text-brand-linen">
                            {doctor.patients}
                          </div>
                          <div className="text-sm text-brand-linen/50">Patients Treated</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-brand-linen transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {doctors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? 'w-8 bg-brand-gold'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-brand-linen transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <MagneticButton
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-forest rounded-full font-bold hover:bg-brand-linen transition-colors"
          >
            {doctorsConfig.ctaText}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
