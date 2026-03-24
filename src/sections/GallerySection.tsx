import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Eye, Rotate3d, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { galleryConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const grid = gridRef.current;
    const video = videoRef.current;
    if (!section || !content || !grid || !video) return;

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

      // Gallery items animation with 3D effect and scroll trigger
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
            delay: index * 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 95%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Video parallax
      gsap.to(video, {
        yPercent: 15,
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
      className="relative py-20 md:py-32 bg-brand-forest overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-forest via-brand-forest to-brand-forest/95" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div ref={contentRef} className="text-center mb-12 sm:mb-16">
          <span className="animate-item inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-sage/20 rounded-full text-xs sm:text-sm font-medium text-brand-linen mb-4 sm:mb-6">
            <Box className="w-3 h-3 sm:w-4 sm:h-4" />
            3D Experience
          </span>
          <h2 className="animate-item font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-linen mb-3 sm:mb-4">
            {galleryConfig.sectionTitle}
          </h2>
          <p className="animate-item text-lg sm:text-xl text-brand-linen/70 max-w-2xl mx-auto">
            {galleryConfig.sectionSubtitle}
          </p>
        </div>

        {/* Video Showcase */}
        <div className="mb-12 sm:mb-16 relative rounded-xl sm:rounded-3xl overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-rotating-3d-glasses-21858-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-brand-forest/50 flex items-center justify-center">
            <button 
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-2.5 sm:py-4 bg-brand-gold text-brand-forest rounded-full font-bold hover:bg-brand-linen transition-colors"
            >
              <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
              <span className="text-sm sm:text-base">Watch 3D Showcase</span>
            </button>
          </div>
        </div>

        {/* 3D Gallery Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4"
          style={{ perspective: '1000px' }}
        >
          {galleryConfig.items.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item group relative cursor-pointer ${
                index === 0 || index === 7 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
              style={{ 
                transformStyle: 'preserve-3d',
                transform: `rotateY(${(index % 2 === 0 ? -1 : 1) * 2}deg)`
              }}
            >
              <div className={`relative overflow-hidden rounded-lg sm:rounded-xl bg-brand-forest/50 ${
                index === 0 || index === 7 ? 'aspect-square' : 'aspect-square'
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-brand-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <span className="text-[10px] sm:text-xs text-brand-gold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-display text-sm sm:text-lg text-brand-linen mt-0.5 sm:mt-1">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* 3D View button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
                    <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-brand-linen text-xs sm:text-sm hover:bg-white/30 transition-colors">
                      <Rotate3d className="w-3 h-3 sm:w-4 sm:h-4" />
                      {galleryConfig.view3dText}
                    </button>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-brand-linen" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 sm:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-2 sm:left-6 p-2 sm:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-2 sm:right-6 p-2 sm:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div 
            className="max-w-5xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryConfig.items[selectedImage].image}
              alt={galleryConfig.items[selectedImage].title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4 sm:mt-6">
              <span className="text-xs sm:text-sm text-brand-gold uppercase tracking-wider">
                {galleryConfig.items[selectedImage].category}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-white mt-1 sm:mt-2">
                {galleryConfig.items[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 sm:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden">
            <video
              autoPlay
              controls
              className="w-full h-full"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-rotating-3d-glasses-21858-large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
