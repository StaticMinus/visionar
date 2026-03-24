import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { testimonialsConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = testimonialsConfig.testimonials;

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

      // Cards animation
      gsap.fromTo(
        section.querySelectorAll('.testimonial-card'),
        { y: 80, opacity: 0, rotateY: -15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.testimonials-grid'),
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={contentRef} className="text-center mb-16">
          <span className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full text-sm font-medium text-brand-forest mb-6">
            <Star className="w-4 h-4 fill-current" />
            Customer Reviews
          </span>
          <h2 className="animate-item font-display text-4xl md:text-5xl lg:text-6xl text-brand-forest mb-4">
            {testimonialsConfig.sectionTitle}
          </h2>
          <p className="animate-item text-xl text-brand-forest/70 max-w-2xl mx-auto">
            {testimonialsConfig.sectionSubtitle}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="testimonials-grid hidden lg:grid grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${
                index === 1 ? 'lg:-translate-y-8' : ''
              }`}
              style={{ perspective: '1000px' }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-sage/20 group-hover:text-brand-sage/40 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-brand-forest/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Product */}
              <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full text-sm text-brand-forest/70 mb-6">
                Purchased: {testimonial.framesPurchased}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-brand-forest">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 text-sm text-brand-forest/50">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-brand-gold text-brand-gold"
                        />
                      ))}
                    </div>

                    <p className="text-brand-forest/80 mb-4">
                      "{testimonial.text}"
                    </p>

                    <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full text-sm text-brand-forest/70 mb-4">
                      {testimonial.framesPurchased}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-forest text-sm">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-brand-forest/50">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 bg-brand-forest/10 hover:bg-brand-forest/20 rounded-full text-brand-forest transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? 'w-6 bg-brand-forest'
                      : 'bg-brand-forest/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 bg-brand-forest/10 hover:bg-brand-forest/20 rounded-full text-brand-forest transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* More testimonials row (desktop) */}
        <div className="hidden lg:grid grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <p className="text-brand-forest/80 text-sm mb-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-brand-forest text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-brand-forest/50">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
