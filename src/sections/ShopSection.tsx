import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Star, Eye, BadgeCheck, Sparkles, TrendingUp } from 'lucide-react';
import { shopConfig } from '@/config';
import { MagneticButton } from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function ShopSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = shopConfig.categories;
  
  const filteredProducts = activeCategory === 'All' 
    ? shopConfig.products 
    : shopConfig.products.filter(p => p.category === activeCategory);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const products = productsRef.current;
    if (!section || !title || !products) return;

    const ctx = gsap.context(() => {
      // Title animation
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

      // Products animation
      const cards = products.querySelectorAll('.product-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, rotateY: -15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [filteredProducts]);

  return (
    <section
      id="shop"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-linen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-brand-sage/20 rounded-full text-sm font-medium text-brand-forest mb-6">
            <ShoppingCart className="w-4 h-4" />
            Medical Eyewear Store
          </span>
          <h2 className="animate-item font-display text-4xl md:text-5xl lg:text-6xl text-brand-forest mb-4">
            {shopConfig.sectionTitle}
          </h2>
          <p className="animate-item text-lg text-brand-forest/70 max-w-2xl mx-auto">
            {shopConfig.sectionSubtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-forest text-brand-linen shadow-lg'
                  : 'bg-white/50 text-brand-forest hover:bg-brand-forest/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          ref={productsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ perspective: '1000px' }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold text-brand-forest text-xs font-bold rounded-full">
                  {product.isBestseller && <TrendingUp className="w-3 h-3" />}
                  {product.isNew && <Sparkles className="w-3 h-3" />}
                  {!product.isBestseller && !product.isNew && <BadgeCheck className="w-3 h-3" />}
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
                <div className="absolute inset-0 bg-brand-forest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <MagneticButton
                    className="px-4 py-2 bg-white text-brand-forest rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2 inline" />
                    {shopConfig.quickViewText}
                  </MagneticButton>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-brand-forest/50 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-display text-lg text-brand-forest mt-1 mb-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-brand-gold text-brand-gold'
                            : 'text-brand-forest/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-brand-forest/60">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xl text-brand-forest">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-brand-forest/40 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <MagneticButton
                    className="p-2.5 bg-brand-forest text-brand-linen rounded-full hover:bg-brand-sage transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <MagneticButton
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-forest text-brand-linen rounded-full font-medium hover:bg-brand-sage transition-colors"
          >
            {shopConfig.viewAllText}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
