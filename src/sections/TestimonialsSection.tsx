import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { testimonialsConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = testimonialsConfig.testimonials;

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const scroller = scrollerRef.current;
    if (!section || !content || !scroller) return;

    const ctx = gsap.context(() => {
      // Content animation with scroll trigger
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
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation with scroll trigger
      gsap.fromTo(
        section.querySelectorAll('.testimonial-card'),
        { y: 80, opacity: 0, rotateY: -15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.testimonials-grid'),
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Horizontal scroller animation
      gsap.to(scroller, {
        x: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
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
      className="relative py-20 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div ref={contentRef} className="text-center mb-12 sm:mb-16">
          <span className="animate-item inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-gold/20 rounded-full text-xs sm:text-sm font-medium text-brand-forest mb-4 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            Customer Reviews
          </span>
          <h2 className="animate-item font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-forest mb-3 sm:mb-4">
            {testimonialsConfig.sectionTitle}
          </h2>
          <p className="animate-item text-lg sm:text-xl text-brand-forest/70 max-w-2xl mx-auto">
            {testimonialsConfig.sectionSubtitle}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="testimonials-grid hidden lg:grid grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${
                index === 1 ? 'lg:-translate-y-8' : ''
              }`}
              style={{ perspective: '1000px' }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 text-brand-sage/20 group-hover:text-brand-sage/40 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-brand-forest/80 mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Product */}
              <div className="inline-block px-2.5 sm:px-3 py-1 bg-brand-sage/10 rounded-full text-xs sm:text-sm text-brand-forest/70 mb-4 sm:mb-6">
                Purchased: {testimonial.framesPurchased}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-brand-forest text-sm sm:text-base truncate">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-brand-forest/50">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative mb-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-brand-gold text-brand-gold"
                        />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-brand-forest/80 mb-3 sm:mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="inline-block px-2.5 py-1 bg-brand-sage/10 rounded-full text-xs text-brand-forest/70 mb-3 sm:mb-4">
                      {testimonial.framesPurchased}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-brand-forest text-sm truncate">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-brand-forest/50">
                          <MapPin className="w-3 h-3" />
                          <span className="truncate">{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-2.5 bg-brand-forest/10 hover:bg-brand-forest/20 rounded-full text-brand-forest transition-colors"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? 'w-4 sm:w-6 bg-brand-forest'
                      : 'w-1.5 sm:w-2 bg-brand-forest/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 sm:p-2.5 bg-brand-forest/10 hover:bg-brand-forest/20 rounded-full text-brand-forest transition-colors"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroller */}
        <div className="overflow-hidden mt-12 sm:mt-16">
          <div 
            ref={scrollerRef}
            className="flex gap-4 sm:gap-6"
            style={{ width: 'max-content' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={`scroll-${index}`}
                className="flex-shrink-0 w-64 sm:w-80 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-2 sm:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-brand-forest/80 mb-3 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-brand-forest text-xs sm:text-sm truncate">{testimonial.name}</h4>
                    <p className="text-[10px] sm:text-xs text-brand-forest/50 truncate">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
