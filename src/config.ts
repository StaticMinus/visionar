// ============================================================
// Site Configuration - VisionAR 3D Eyewear Platform
// Designed & Engineered by David Ola - Nigerian Full Stack AI Developer
// "Bringing African Innovation to Global Technology"
// ============================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  developer: {
    name: string;
    title: string;
    nationality: string;
    tagline: string;
  };
}

export const siteConfig: SiteConfig = {
  title: "VisionAR Medical Eyewear | AI-Powered Virtual Try-On & E-Commerce",
  description: "Nigeria's first AI-powered medical eyewear platform. Doctor-recommended prescription glasses with AR virtual try-on. Shop 10,000+ medically certified frames. Download our iOS & Android app for the perfect fit.",
  language: "en",
  developer: {
    name: "David Ola",
    title: "Full Stack AI Developer",
    nationality: "Nigerian",
    tagline: "Proudly Built in Nigeria 🇳🇬 | Engineering the Future of Eyewear"
  }
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  links: NavLink[];
  searchPlaceholder: string;
  searchHint: string;
  searchAriaLabel: string;
  closeSearchAriaLabel: string;
  cartLabel: string;
  downloadAppLabel: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "VisionAR",
  links: [
    { label: "Shop", href: "#shop" },
    { label: "Virtual Try-On", href: "#virtual-tryon" },
    { label: "Medical Grade", href: "#medical" },
    { label: "Mobile App", href: "#mobile-app" },
    { label: "Collections", href: "#collections" },
    { label: "Doctors", href: "#doctors" },
  ],
  searchPlaceholder: "Search medical frames, prescriptions, brands...",
  searchHint: "Press Enter to search or ESC to close",
  searchAriaLabel: "Search",
  closeSearchAriaLabel: "Close search",
  cartLabel: "Cart",
  downloadAppLabel: "Get App",
};

// ============================================================
// Hero Section - Video/Animation with 3D Effects
// ============================================================

export interface HeroConfig {
  date: string;
  titleLine1: string;
  titleLine2: string;
  readTime: string;
  description: string;
  ctaText: string;
  ctaSecondary: string;
  image: string;
  videoSrc: string;
  imageAlt: string;
  stats: { label: string; value: string }[];
}

export const heroConfig: HeroConfig = {
  date: "2026",
  titleLine1: "Medical Grade",
  titleLine2: "Eyewear Reimagined",
  readTime: "AI-Powered",
  description: "Nigeria's first doctor-recommended eyewear platform with real-time AR virtual try-on. 50,000+ medically certified frames. Precise prescription matching. Download our app for iOS & Android.",
  ctaText: "Try AR Now",
  ctaSecondary: "Download App",
  image: "/hero-eyewear.jpg",
  videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27611-large.mp4",
  imageAlt: "Person wearing medical-grade smart glasses with AR interface",
  stats: [
    { label: "Happy Customers", value: "50K+" },
    { label: "Medical Frames", value: "10K+" },
    { label: "Partner Doctors", value: "500+" },
    { label: "Prescription Accuracy", value: "99.9%" },
  ],
};

// ============================================================
// E-Commerce Shop Section
// ============================================================

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface ShopConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  categories: string[];
  products: Product[];
  viewAllText: string;
  addToCartText: string;
  quickViewText: string;
}

export const shopConfig: ShopConfig = {
  sectionTitle: "Medical Eyewear Shop",
  sectionSubtitle: "Doctor-recommended frames with prescription lenses",
  categories: ["All", "Prescription", "Reading", "Blue Light", "Sunglasses", "Kids", "Sports"],
  products: [
    {
      id: 1,
      name: "Titanium Pro Medical",
      category: "Prescription",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 1247,
      image: "/shop-1.jpg",
      badge: "Doctor's Choice",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Heritage Classic RX",
      category: "Prescription",
      price: 189,
      rating: 4.8,
      reviews: 892,
      image: "/shop-2.jpg",
      isNew: true,
    },
    {
      id: 3,
      name: "Blue Shield Pro",
      category: "Blue Light",
      price: 149,
      rating: 4.7,
      reviews: 2156,
      image: "/shop-3.jpg",
      badge: "Best Seller",
      isBestseller: true,
    },
    {
      id: 4,
      name: "Kids Flex Medical",
      category: "Kids",
      price: 129,
      rating: 4.9,
      reviews: 567,
      image: "/shop-4.jpg",
      isNew: true,
    },
    {
      id: 5,
      name: "Sport Vision Pro",
      category: "Sports",
      price: 249,
      rating: 4.8,
      reviews: 723,
      image: "/shop-5.jpg",
    },
    {
      id: 6,
      name: "Reading Elite Plus",
      category: "Reading",
      price: 99,
      rating: 4.6,
      reviews: 1845,
      image: "/shop-6.jpg",
      badge: "Most Affordable",
    },
    {
      id: 7,
      name: "SunMed Polarized",
      category: "Sunglasses",
      price: 199,
      rating: 4.8,
      reviews: 934,
      image: "/shop-7.jpg",
    },
    {
      id: 8,
      name: "Smart AR Vision X",
      category: "Prescription",
      price: 499,
      rating: 5.0,
      reviews: 312,
      image: "/shop-8.jpg",
      badge: "Premium",
      isNew: true,
    },
  ],
  viewAllText: "View All Products",
  addToCartText: "Add to Cart",
  quickViewText: "Quick View",
};

// ============================================================
// Virtual Try-On Section
// ============================================================

export interface VirtualTryOnConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  ctaText: string;
  videoSrc: string;
  features: { icon: string; title: string; description: string }[];
  steps: { number: string; title: string; description: string }[];
}

export const virtualTryOnConfig: VirtualTryOnConfig = {
  sectionTitle: "Virtual Try-On",
  sectionSubtitle: "See how glasses fit your face in real-time",
  description: "Our AI-powered AR technology maps your facial features with millimeter precision. Try on thousands of frames instantly without leaving your home.",
  ctaText: "Start Virtual Try-On",
  videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4",
  features: [
    { icon: "scan", title: "Face Scan", description: "3D facial mapping in seconds" },
    { icon: "ruler", title: "Perfect Fit", description: "Pupillary distance measurement" },
    { icon: "sparkles", title: "AI Recommendations", description: "Frames matched to your face shape" },
    { icon: "share", title: "Share & Compare", description: "Get opinions from friends" },
  ],
  steps: [
    { number: "01", title: "Allow Camera", description: "Grant camera access for AR experience" },
    { number: "02", title: "Face Scan", description: "Our AI maps your facial features" },
    { number: "03", title: "Try Frames", description: "Browse and try thousands of glasses" },
    { number: "04", title: "Get Prescription", description: "Upload or get new prescription" },
  ],
};

// ============================================================
// Mobile App Download Section
// ============================================================

export interface MobileAppConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  iosDownloadText: string;
  androidDownloadText: string;
  appStoreLink: string;
  playStoreLink: string;
  features: { icon: string; title: string; description: string }[];
  screenshots: string[];
  stats: { label: string; value: string }[];
}

export const mobileAppConfig: MobileAppConfig = {
  sectionTitle: "Download Our App",
  sectionSubtitle: "The complete eyewear experience in your pocket",
  description: "Get the full VisionAR experience on iOS and Android. Virtual try-on, prescription management, doctor consultations, and exclusive app-only discounts.",
  iosDownloadText: "Download on App Store",
  androidDownloadText: "Get it on Google Play",
  appStoreLink: "#",
  playStoreLink: "#",
  features: [
    { icon: "camera", title: "AR Try-On", description: "Try frames anywhere, anytime" },
    { icon: "file-text", title: "Prescription Vault", description: "Store all your prescriptions" },
    { icon: "stethoscope", title: "Doctor Chat", description: "Consult with eye specialists" },
    { icon: "truck", title: "Track Orders", description: "Real-time delivery tracking" },
    { icon: "bell", title: "Reminders", description: "Eye checkup notifications" },
    { icon: "tag", title: "App Exclusives", description: "Special discounts only on app" },
  ],
  screenshots: [
    "/app-screen-1.jpg",
    "/app-screen-2.jpg",
    "/app-screen-3.jpg",
    "/app-screen-4.jpg",
  ],
  stats: [
    { label: "App Downloads", value: "100K+" },
    { label: "App Rating", value: "4.9★" },
    { label: "Daily Users", value: "25K+" },
  ],
};

// ============================================================
// Medical Grade Section
// ============================================================

export interface MedicalGradeConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  certifications: { name: string; logo: string; description: string }[];
  features: { title: string; description: string; image: string }[];
  trustBadges: { icon: string; title: string }[];
}

export const medicalGradeConfig: MedicalGradeConfig = {
  sectionTitle: "Doctor Recommended",
  sectionSubtitle: "Medical-grade eyewear you can trust",
  description: "All our frames meet international medical standards. Partnered with 500+ ophthalmologists across Africa and globally. Every prescription is verified by licensed optometrists.",
  certifications: [
    { name: "FDA Approved", logo: "/cert-fda.jpg", description: "US Food & Drug Administration" },
    { name: "CE Marked", logo: "/cert-ce.jpg", description: "European Conformity" },
    { name: "ISO 9001", logo: "/cert-iso.jpg", description: "Quality Management" },
    { name: "WHO Certified", logo: "/cert-who.jpg", description: "World Health Organization" },
  ],
  features: [
    {
      title: "Prescription Accuracy",
      description: "99.9% accuracy guarantee on all prescriptions. Verified by licensed optometrists.",
      image: "/medical-1.jpg",
    },
    {
      title: "Medical Grade Lenses",
      description: "Anti-reflective, UV protection, blue light filtering. All medically certified.",
      image: "/medical-2.jpg",
    },
    {
      title: "Doctor Partnership",
      description: "500+ partner ophthalmologists. Book consultations directly through our platform.",
      image: "/medical-3.jpg",
    },
  ],
  trustBadges: [
    { icon: "shield-check", title: "Certified Safe" },
    { icon: "award", title: "Award Winning" },
    { icon: "users", title: "Doctor Trusted" },
    { icon: "globe", title: "Globally Recognized" },
  ],
};

// ============================================================
// Latest Collections (Horizontal Scroll)
// ============================================================

export interface ArticleItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

export interface LatestArticlesConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  articles: ArticleItem[];
}

export const latestArticlesConfig: LatestArticlesConfig = {
  sectionTitle: "Premium Collections",
  sectionSubtitle: "Curated medical eyewear for every need",
  articles: [
    {
      id: 1,
      title: "Titanium Medical Elite",
      subtitle: "Hypoallergenic aerospace-grade frames",
      image: "/collection-titanium.jpg",
      category: "Medical Grade",
    },
    {
      id: 2,
      title: "Heritage Classic RX",
      subtitle: "Timeless designs, modern prescriptions",
      image: "/collection-heritage.jpg",
      category: "Prescription",
    },
    {
      id: 3,
      title: "Sport Vision Pro",
      subtitle: "Impact-resistant athletic eyewear",
      image: "/collection-sport.jpg",
      category: "Sports Medical",
    },
    {
      id: 4,
      title: "Eco Bio-Compatible",
      subtitle: "Sustainable, skin-friendly materials",
      image: "/collection-eco.jpg",
      category: "Eco Medical",
    },
    {
      id: 5,
      title: "Smart AR Medical X",
      subtitle: "The future of prescription eyewear",
      image: "/collection-smart.jpg",
      category: "Smart Tech",
    },
    {
      id: 6,
      title: "Kids Pediatric Line",
      subtitle: "Durable, safe frames for children",
      image: "/collection-kids.jpg",
      category: "Pediatric",
    },
  ],
};

// ============================================================
// Doctor Partners Section
// ============================================================

export interface Doctor {
  id: number;
  name: string;
  title: string;
  specialty: string;
  hospital: string;
  image: string;
  quote: string;
  rating: number;
  patients: string;
}

export interface DoctorsConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  doctors: Doctor[];
  ctaText: string;
}

export const doctorsConfig: DoctorsConfig = {
  sectionTitle: "Our Medical Partners",
  sectionSubtitle: "Trusted by leading ophthalmologists across Africa",
  doctors: [
    {
      id: 1,
      name: "Dr. Amara Okafor",
      title: "Chief Ophthalmologist",
      specialty: "Cornea & Refractive Surgery",
      hospital: "Lagos University Teaching Hospital",
      image: "/doctor-1.jpg",
      quote: "VisionAR has revolutionized how my patients find the perfect frames. The AR try-on is remarkably accurate.",
      rating: 5.0,
      patients: "10,000+",
    },
    {
      id: 2,
      name: "Dr. Kwame Asante",
      title: "Pediatric Eye Specialist",
      specialty: "Children's Vision Care",
      hospital: "Korle Bu Teaching Hospital, Ghana",
      image: "/doctor-2.jpg",
      quote: "The pediatric collection is exceptional. Parents love seeing how frames look on their kids before buying.",
      rating: 4.9,
      patients: "8,500+",
    },
    {
      id: 3,
      name: "Dr. Fatima Al-Hassan",
      title: "Retina Specialist",
      specialty: "Diabetic Eye Care",
      hospital: "Aminu Kano Teaching Hospital",
      image: "/doctor-3.jpg",
      quote: "I recommend VisionAR to all my patients. The prescription accuracy is unmatched in the industry.",
      rating: 5.0,
      patients: "12,000+",
    },
    {
      id: 4,
      name: "Dr. James Mwangi",
      title: "Glaucoma Specialist",
      specialty: "Eye Pressure Management",
      hospital: "Kenyatta National Hospital",
      image: "/doctor-4.jpg",
      quote: "Finally, a platform that understands medical eyewear. The quality and service are exceptional.",
      rating: 4.9,
      patients: "9,200+",
    },
  ],
  ctaText: "Book a Consultation",
};

// ============================================================
// 3D Product Gallery
// ============================================================

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  model3d?: string;
}

export interface GalleryConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  items: GalleryItem[];
  view3dText: string;
  tryOnText: string;
}

export const galleryConfig: GalleryConfig = {
  sectionTitle: "3D Frame Gallery",
  sectionSubtitle: "Explore every detail in immersive 3D",
  items: [
    { id: 1, title: "Aero Titanium Pro", category: "Medical Grade", image: "/gallery-1.jpg" },
    { id: 2, title: "Heritage Gold RX", category: "Prescription", image: "/gallery-2.jpg" },
    { id: 3, title: "Cyber Medical Noir", category: "Specialty", image: "/gallery-3.jpg" },
    { id: 4, title: "Eco Bio-Frame", category: "Sustainable", image: "/gallery-4.jpg" },
    { id: 5, title: "Sport Velocity Med", category: "Athletic", image: "/gallery-5.jpg" },
    { id: 6, title: "Luxe Crystal Clear", category: "Designer", image: "/gallery-6.jpg" },
    { id: 7, title: "Kids Rainbow Flex", category: "Pediatric", image: "/gallery-7.jpg" },
    { id: 8, title: "Smart AR Vision", category: "Technology", image: "/gallery-8.jpg" },
    { id: 9, title: "Classic Reader Pro", category: "Reading", image: "/gallery-9.jpg" },
    { id: 10, title: "SunMed Polarized", category: "Sunglasses", image: "/gallery-10.jpg" },
    { id: 11, title: "Blue Shield Elite", category: "Blue Light", image: "/gallery-11.jpg" },
    { id: 12, title: "Flexi Memory Fit", category: "Comfort", image: "/gallery-12.jpg" },
  ],
  view3dText: "View in 3D",
  tryOnText: "Try On",
};

// ============================================================
// Testimonials Section
// ============================================================

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  framesPurchased: string;
}

export interface TestimonialsConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  sectionTitle: "What Our Customers Say",
  sectionSubtitle: "Real stories from 50,000+ happy customers",
  testimonials: [
    {
      id: 1,
      name: "Chioma Nwosu",
      location: "Lagos, Nigeria",
      image: "/testimonial-1.jpg",
      rating: 5,
      text: "The AR try-on feature is incredible! I found the perfect frames without leaving my house. My prescription was spot on.",
      framesPurchased: "Titanium Pro Medical",
    },
    {
      id: 2,
      name: "Oluwaseun Adeyemi",
      location: "Abuja, Nigeria",
      image: "/testimonial-2.jpg",
      rating: 5,
      text: "As someone with a strong prescription, I was skeptical. But VisionAR delivered perfectly. The doctor consultation was a game-changer.",
      framesPurchased: "Heritage Classic RX",
    },
    {
      id: 3,
      name: "Amina Ibrahim",
      location: "Kano, Nigeria",
      image: "/testimonial-3.jpg",
      rating: 5,
      text: "My daughter loves her new pediatric frames. The virtual try-on helped her choose confidently. Excellent quality!",
      framesPurchased: "Kids Rainbow Flex",
    },
    {
      id: 4,
      name: "Emmanuel Osei",
      location: "Accra, Ghana",
      image: "/testimonial-4.jpg",
      rating: 5,
      text: "The app is fantastic! Ordered in minutes, delivered in 3 days. The blue light glasses have helped my eye strain tremendously.",
      framesPurchased: "Blue Shield Elite",
    },
    {
      id: 5,
      name: "Ngozi Okonkwo",
      location: "Enugu, Nigeria",
      image: "/testimonial-5.jpg",
      rating: 5,
      text: "Finally, a Nigerian company doing world-class eyewear! Proud to support David Ola's innovation. The quality rivals international brands.",
      framesPurchased: "Smart AR Vision X",
    },
  ],
};

// ============================================================
// AR Technology Section
// ============================================================

export interface ArtCategoryConfig {
  sectionTitle: string;
  categoriesLabel: string;
  eventsLabel: string;
  categories: string[];
  events: { date: string; title: string; location: string }[];
  featuredImage: string;
  featuredImageAlt: string;
  featuredLabel: string;
  featuredTitle: string;
  featuredDescription: string;
  featuredCtaText: string;
  gridArticles: { id: number; title: string; category: string; readTime: string }[];
  readSuffix: string;
}

export const artCategoryConfig: ArtCategoryConfig = {
  sectionTitle: "AI & AR Technology",
  categoriesLabel: "Features",
  eventsLabel: "Coming Soon",
  categories: ["Face Mapping", "3D Rendering", "AI Recommendations", "Prescription AI", "Size Prediction"],
  events: [
    { date: "Apr 2026", title: "VisionAR 3.0 Launch", location: "Global" },
    { date: "May 2026", title: "AI Doctor Assistant", location: "Nigeria First" },
  ],
  featuredImage: "/ar-technology.jpg",
  featuredImageAlt: "AR face mapping technology with virtual glasses overlay",
  featuredLabel: "Powered by Nigerian Innovation",
  featuredTitle: "Real-Time Face Tracking & AI Matching",
  featuredDescription: "Built with cutting-edge machine learning algorithms developed by David Ola and team. Our proprietary technology maps 68 facial landmarks in real-time, ensuring every frame fits perfectly. The AI analyzes your face shape, skin tone, and style preferences to recommend the ideal medical eyewear.",
  featuredCtaText: "Experience the Technology",
  gridArticles: [
    { id: 1, title: "WebXR Browser Integration", category: "Technology", readTime: "No download" },
    { id: 2, title: "PD Measurement AI", category: "Precision", readTime: "Auto-detect" },
    { id: 3, title: "Frame Size Predictor", category: "AI Powered", readTime: "99% accuracy" },
    { id: 4, title: "Style DNA Matching", category: "Personalization", readTime: "Instant" },
  ],
  readSuffix: "",
};

// ============================================================
// Lifestyle Section
// ============================================================

export interface LifestyleArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  rotation: number;
  position: { x: number; y: number };
  baseZIndex?: number;
}

export interface LifestyleConfig {
  sectionTitle: string;
  viewMoreText: string;
  articles: LifestyleArticle[];
}

export const lifestyleConfig: LifestyleConfig = {
  sectionTitle: "Customer Stories",
  viewMoreText: "View More Stories",
  articles: [
    {
      id: 1,
      title: "Chioma's Perfect Fit",
      excerpt: "Found my dream medical frames from Lagos",
      image: "/lifestyle-1.jpg",
      rotation: -6,
      position: { x: 0, y: 0 },
      baseZIndex: 5,
    },
    {
      id: 2,
      title: "Seun's Digital Journey",
      excerpt: "AR try-on saved me hours of shopping",
      image: "/lifestyle-2.jpg",
      rotation: 4,
      position: { x: 180, y: 40 },
      baseZIndex: 4,
    },
    {
      id: 3,
      title: "Amina's Family Choice",
      excerpt: "Kids love their new pediatric frames",
      image: "/lifestyle-3.jpg",
      rotation: -3,
      position: { x: 80, y: -20 },
      baseZIndex: 3,
    },
    {
      id: 4,
      title: "Emmanuel's Active Life",
      excerpt: "Sport frames that actually stay put",
      image: "/lifestyle-4.jpg",
      rotation: 7,
      position: { x: 220, y: -10 },
      baseZIndex: 2,
    },
    {
      id: 5,
      title: "The Nwosu Family",
      excerpt: "Everyone found their perfect match",
      image: "/lifestyle-5.jpg",
      rotation: -5,
      position: { x: 40, y: 30 },
      baseZIndex: 1,
    },
  ],
};

// ============================================================
// Design Section - 3D Product Showcase
// ============================================================

export interface DesignItem {
  id: number;
  title: string;
  quote: string;
  image: string;
  size: string;
  gridColumn?: number;
}

export interface DesignConfig {
  sectionTitle: string;
  viewMoreText: string;
  items: DesignItem[];
}

export const designConfig: DesignConfig = {
  sectionTitle: "3D Product Showcase",
  viewMoreText: "Explore All Designs",
  items: [
    {
      id: 1,
      title: "Aero Titanium Medical",
      quote: "360° rotation, zoom, inspect every detail",
      image: "/design-1.jpg",
      size: "wide",
    },
    {
      id: 2,
      title: "Heritage Gold RX",
      quote: "See the craftsmanship up close",
      image: "/design-2.jpg",
      size: "normal",
    },
    {
      id: 3,
      title: "Cyber Medical Noir",
      quote: "Futuristic aesthetics meet medical grade",
      image: "/design-3.jpg",
      size: "tall",
    },
    {
      id: 4,
      title: "Eco Bio-Compatible",
      quote: "Sustainable materials, medical standards",
      image: "/design-4.jpg",
      size: "normal",
    },
    {
      id: 5,
      title: "Sport Velocity Med",
      quote: "Engineered for peak performance",
      image: "/design-5.jpg",
      size: "normal",
    },
    {
      id: 6,
      title: "Luxe Crystal Medical",
      quote: "Transparent elegance, medical grade",
      image: "/design-6.jpg",
      size: "wide",
    },
  ],
};

// ============================================================
// Green Tribe Section - VisionAR Community
// ============================================================

export interface TribeMember {
  id: number;
  name: string;
  role: string;
  title: string;
  excerpt: string;
  avatar: string;
}

export interface GreenTribeConfig {
  sectionTitle: string;
  sectionDescription: string;
  readMoreText: string;
  joinTitle: string;
  joinDescription: string;
  emailPlaceholder: string;
  subscribeText: string;
  memberCountText: string;
  videoSrc: string;
  videoPoster: string;
  members: TribeMember[];
}

export const greenTribeConfig: GreenTribeConfig = {
  sectionTitle: "The VisionAR Community",
  sectionDescription: "Join 50,000+ Africans who have transformed their eyewear experience with our medical-grade AR technology.",
  readMoreText: "Read Full Story",
  joinTitle: "Join the Movement",
  joinDescription: "Get exclusive early access to new medical collections, AR features, and member-only health discounts.",
  emailPlaceholder: "Your email address",
  subscribeText: "Join Now",
  memberCountText: "50,000+ members across Africa",
  videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27611-large.mp4",
  videoPoster: "/video-poster.jpg",
  members: [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "Health Blogger",
      title: "Revolutionized My Reviews",
      excerpt: "VisionAR has completely changed how I review medical eyewear. My followers love the AR demonstrations.",
      avatar: "/avatar-1.jpg",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Tech Enthusiast",
      title: "The Future is Here",
      excerpt: "As someone who tests health tech apps, VisionAR's accuracy and medical focus are unmatched.",
      avatar: "/avatar-2.jpg",
    },
    {
      id: 3,
      name: "Dr. Sofia Rodriguez",
      role: "Optometrist",
      title: "Professional Grade",
      excerpt: "I recommend VisionAR to all my patients. The prescription accuracy is medically sound.",
      avatar: "/avatar-3.jpg",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Designer",
      title: "Design Excellence",
      excerpt: "The 3D viewer lets me appreciate medical frame craftsmanship like never before.",
      avatar: "/avatar-4.jpg",
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Health Influencer",
      title: "Game Changer",
      excerpt: "No more guessing if frames will suit my face. The AI recommendations are medically informed.",
      avatar: "/avatar-5.jpg",
    },
  ],
};

// ============================================================
// Authors Section - Team & Experts
// ============================================================

export interface Author {
  id: number;
  name: string;
  role: string;
  avatar: string;
  articles: number;
  social: { instagram: string; twitter: string };
}

export interface AuthorsConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  articlesSuffix: string;
  authors: Author[];
}

export const authorsConfig: AuthorsConfig = {
  sectionTitle: "Meet Our Medical Experts",
  sectionSubtitle: "Drag or click to explore our team of specialists",
  articlesSuffix: "consultations",
  authors: [
    {
      id: 1,
      name: "Dr. Lisa Park",
      role: "Chief Optometrist",
      avatar: "/expert-1.jpg",
      articles: 127,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 2,
      name: "James Wright",
      role: "AR Engineer Lead",
      avatar: "/expert-2.jpg",
      articles: 89,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 3,
      name: "Maria Santos",
      role: "Head of Design",
      avatar: "/expert-3.jpg",
      articles: 156,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 4,
      name: "Robert Chen",
      role: "AI Research Director",
      avatar: "/expert-4.jpg",
      articles: 203,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 5,
      name: "Anna Kowalski",
      role: "Product Manager",
      avatar: "/expert-5.jpg",
      articles: 74,
      social: { instagram: "#", twitter: "#" },
    },
  ],
};

// ============================================================
// Instagram Gallery Section
// ============================================================

export interface InstagramImage {
  id: number;
  image: string;
  likes: number;
}

export interface InstagramGalleryConfig {
  handle: string;
  handleUrl: string;
  description: string;
  followText: string;
  likesSuffix: string;
  images: InstagramImage[];
}

export const instagramGalleryConfig: InstagramGalleryConfig = {
  handle: "@visionar_medical",
  handleUrl: "https://instagram.com/visionar_medical",
  description: "Follow us for daily AR try-ons, medical tips, and behind-the-scenes from Nigeria to the world",
  followText: "Follow Us",
  likesSuffix: "likes",
  images: [
    { id: 1, image: "/social-1.jpg", likes: 24553 },
    { id: 2, image: "/social-2.jpg", likes: 18921 },
    { id: 3, image: "/social-3.jpg", likes: 31678 },
    { id: 4, image: "/social-4.jpg", likes: 15234 },
    { id: 5, image: "/social-5.jpg", likes: 28902 },
    { id: 6, image: "/social-6.jpg", likes: 19456 },
    { id: 7, image: "/social-7.jpg", likes: 22234 },
    { id: 8, image: "/social-8.jpg", likes: 16789 },
    { id: 9, image: "/social-9.jpg", likes: 28321 },
    { id: 10, image: "/social-10.jpg", likes: 20134 },
    { id: 11, image: "/gallery-1.jpg", likes: 25678 },
    { id: 12, image: "/gallery-5.jpg", likes: 19876 },
  ],
};

// ============================================================
// Developer Credit Section
// ============================================================

export interface DeveloperCreditConfig {
  sectionTitle: string;
  name: string;
  title: string;
  nationality: string;
  flag: string;
  description: string;
  skills: string[];
  quote: string;
  ctaText: string;
  ctaLink: string;
}

export const developerCreditConfig: DeveloperCreditConfig = {
  sectionTitle: "Engineered By",
  name: "David Ola",
  title: "Full Stack AI Developer",
  nationality: "Nigerian",
  flag: "🇳🇬",
  description: "Proudly built in Lagos, Nigeria. VisionAR represents the future of African innovation in healthcare technology.",
  skills: ["React", "TypeScript", "Three.js", "TensorFlow", "AR/VR", "Node.js", "AWS"],
  quote: "Bringing African innovation to global healthcare technology. Every line of code is crafted with passion to improve lives across our continent and beyond.",
  ctaText: "Let's Build Together",
  ctaLink: "#contact",
};

// ============================================================
// Footer
// ============================================================

export interface FooterConfig {
  brandWatermark: string;
  newsletterTitle: string;
  newsletterDescription: string;
  emailPlaceholder: string;
  subscribeText: string;
  subscribeSuccessMessage: string;
  categoriesLabel: string;
  categories: string[];
  pagesLabel: string;
  pages: string[];
  legalLabel: string;
  legalLinks: string[];
  socialLabel: string;
  socialLinks: {
    instagram: string;
    twitter: string;
    youtube: string;
  };
  backToTopText: string;
  copyright: string;
  credit: string;
  developerCredit: string;
}

export const footerConfig: FooterConfig = {
  brandWatermark: "VisionAR",
  newsletterTitle: "Join the VisionAR Family",
  newsletterDescription: "Subscribe for exclusive medical eyewear drops, health tips, and African innovation stories.",
  emailPlaceholder: "Your email address",
  subscribeText: "Subscribe",
  subscribeSuccessMessage: "Welcome to the future of African healthcare tech! 🇳🇬",
  categoriesLabel: "Medical Collections",
  categories: ["Prescription", "Reading Glasses", "Blue Light", "Sunglasses", "Kids", "Sports"],
  pagesLabel: "Company",
  pages: ["About Us", "Our Doctors", "Technology", "Careers", "Press", "Contact"],
  legalLabel: "Legal",
  legalLinks: ["Privacy Policy", "Terms of Service", "Medical Disclaimer", "Cookie Policy"],
  socialLabel: "Follow Us",
  socialLinks: {
    instagram: "https://instagram.com/visionar_medical",
    twitter: "https://twitter.com/visionar_medical",
    youtube: "https://youtube.com/visionar_medical",
  },
  backToTopText: "Back to Top",
  copyright: "© 2026 VisionAR Medical Eyewear. All rights reserved.",
  credit: "Proudly Built in Nigeria 🇳🇬",
  developerCredit: "Engineered by David Ola - Nigerian Full Stack AI Developer",
};
