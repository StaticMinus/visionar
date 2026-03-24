import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Eye, Rotate3d, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const grid = gridRef.current;
    if (!section || !content || !grid) return;

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

      // Gallery items animation with 3D effect
      const items = grid.querySelectorAll('.gallery-item');
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { 
            y: 100, 
            opacity: 0, 
            rotateX: 45,
            scale: 0.8 
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const newIndex = direction === 'next'
      ? (selectedImage + 1) % galleryConfig.items.length
      : (selectedImage - 1 + galleryConfig.items.length) % galleryConfig.items.length;
    setSelectedImage(newIndex);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-forest overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-forest via-brand-forest to-brand-forest/95" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={contentRef} className="text-center mb-16">
          <span className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-brand-sage/20 rounded-full text-sm font-medium text-brand-linen mb-6">
            <Box className="w-4 h-4" />
            3D Experience
          </span>
          <h2 className="animate-item font-display text-4xl md:text-5xl lg:text-6xl text-brand-linen mb-4">
            {galleryConfig.sectionTitle}
          </h2>
          <p className="animate-item text-xl text-brand-linen/70 max-w-2xl mx-auto">
            {galleryConfig.sectionSubtitle}
          </p>
        </div>

        {/* 3D Gallery Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{ perspective: '1000px' }}
        >
          {galleryConfig.items.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item group relative cursor-pointer ${
                index === 0 || index === 7 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
              style={{ 
                transformStyle: 'preserve-3d',
                transform: `rotateY(${(index % 2 === 0 ? -1 : 1) * 2}deg)`
              }}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-forest/50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-brand-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs text-brand-gold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg text-brand-linen mt-1">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* 3D View button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-brand-linen text-sm hover:bg-white/30 transition-colors">
                      <Rotate3d className="w-4 h-4" />
                      {galleryConfig.view3dText}
                    </button>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-3 right-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-brand-linen" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="max-w-5xl max-h-[80vh] px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryConfig.items[selectedImage].image}
              alt={galleryConfig.items[selectedImage].title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <span className="text-sm text-brand-gold uppercase tracking-wider">
                {galleryConfig.items[selectedImage].category}
              </span>
              <h3 className="font-display text-2xl text-white mt-2">
                {galleryConfig.items[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
