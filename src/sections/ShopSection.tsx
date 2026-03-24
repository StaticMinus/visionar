import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Star, Eye, BadgeCheck, Sparkles, TrendingUp, Play } from 'lucide-react';
import { shopConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function ShopSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showVideo, setShowVideo] = useState(false);

  const categories = shopConfig.categories;
  
  const filteredProducts = activeCategory === 'All' 
    ? shopConfig.products 
    : shopConfig.products.filter(p => p.category === activeCategory);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const products = productsRef.current;
    const scroller = scrollerRef.current;
    if (!section || !title || !products || !scroller) return;

    const ctx = gsap.context(() => {
      // Title animation with scroll trigger
      gsap.fromTo(
        title.querySelectorAll('.animate-item'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Products animation with scroll trigger
      const cards = products.querySelectorAll('.product-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, rotateY: -15, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Horizontal scroller animation
      const scrollerItems = scroller.querySelectorAll('.scroller-item');
      gsap.to(scroller, {
        x: -scroller.scrollWidth + scroller.parentElement!.clientWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Scroller items parallax
      scrollerItems.forEach((item, index) => {
        gsap.to(item, {
          y: (index % 2 === 0 ? -30 : 30),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, [filteredProducts]);

  return (
    <section
      id="shop"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <span className="animate-item inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-sage/20 rounded-full text-xs sm:text-sm font-medium text-brand-forest mb-4 sm:mb-6">
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
            Medical Eyewear Store
          </span>
          <h2 className="animate-item font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-forest mb-3 sm:mb-4">
            {shopConfig.sectionTitle}
          </h2>
          <p className="animate-item text-base sm:text-lg text-brand-forest/70 max-w-2xl mx-auto">
            {shopConfig.sectionSubtitle}
          </p>
        </div>

        {/* Category Filter - Horizontal Scroller */}
        <div className="overflow-x-auto pb-4 mb-8 md:mb-12 scrollbar-hide">
          <div className="flex gap-2 sm:gap-3 min-w-max px-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-brand-forest text-brand-linen shadow-lg'
                    : 'bg-white/50 text-brand-forest hover:bg-brand-forest/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div
          ref={productsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ perspective: '1000px' }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-brand-gold text-brand-forest text-[10px] sm:text-xs font-bold rounded-full">
                  {product.isBestseller && <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                  {product.isNew && <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                  {!product.isBestseller && !product.isNew && <BadgeCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-linen to-brand-sage/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-forest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-3">
                  <MagneticButton
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-brand-forest rounded-full text-xs sm:text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />
                    {shopConfig.quickViewText}
                  </MagneticButton>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <span className="text-[10px] sm:text-xs text-brand-forest/50 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-display text-base sm:text-lg text-brand-forest mt-0.5 sm:mt-1 mb-1.5 sm:mb-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-brand-gold text-brand-gold'
                            : 'text-brand-forest/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs text-brand-forest/60">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-display text-lg sm:text-xl text-brand-forest">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-brand-forest/40 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <MagneticButton
                    className="p-2 sm:p-2.5 bg-brand-forest text-brand-linen rounded-full hover:bg-brand-sage transition-colors"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <MagneticButton
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-brand-forest text-brand-linen rounded-full font-medium hover:bg-brand-sage transition-colors"
          >
            {shopConfig.viewAllText}
          </MagneticButton>
        </div>

        {/* Video Showcase */}
        <div className="mt-16 sm:mt-24 relative">
          <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-eyeglasses-on-a-white-surface-21857-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-brand-forest/40 flex items-center justify-center">
              <div className="text-center text-brand-linen px-4">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">See How It Works</h3>
                <p className="text-sm sm:text-base text-brand-linen/80 mb-4 sm:mb-6">Watch our AR technology in action</p>
                <button 
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-brand-gold text-brand-forest rounded-full font-medium hover:bg-brand-linen transition-colors"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scroller - Featured Collections */}
        <div className="mt-16 sm:mt-24 overflow-hidden">
          <h3 className="font-display text-xl sm:text-2xl text-brand-forest mb-6 sm:mb-8 text-center">Featured Collections</h3>
          <div className="overflow-hidden">
            <div 
              ref={scrollerRef}
              className="flex gap-4 sm:gap-6"
              style={{ width: 'max-content' }}
            >
              {['Titanium Elite', 'Heritage Classic', 'Sport Pro', 'Eco Sustainable', 'Kids Fun', 'Smart Vision', 'Blue Light Pro', 'Reading Plus'].map((collection) => (
                <div 
                  key={collection}
                  className="scroller-item flex-shrink-0 w-48 sm:w-64 h-32 sm:h-40 bg-gradient-to-br from-brand-sage/20 to-brand-gold/20 rounded-xl sm:rounded-2xl flex items-center justify-center p-4"
                >
                  <span className="font-display text-base sm:text-lg text-brand-forest text-center">{collection}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <video
              autoPlay
              controls
              className="w-full h-full"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-eyeglasses-on-a-white-surface-21857-large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
