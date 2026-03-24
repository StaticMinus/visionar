// ============================================================
// Site Configuration - VisionAR 3D Eyewear Platform
// Designed by David Olagbenro - Full Stack AI/Web Developer
// ============================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "VisionAR - 3D Eyewear Platform | Virtual Try-On Experience",
  description: "Experience the future of eyewear shopping with VisionAR. Try on glasses virtually using AR technology, explore 3D models, and get AI-powered frame recommendations.",
  language: "en",
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
}

export const navigationConfig: NavigationConfig = {
  brandName: "VisionAR",
  links: [
    { label: "Collections", href: "#collections" },
    { label: "AR Try-On", href: "#ar-tryon" },
    { label: "3D Viewer", href: "#design" },
    { label: "Technology", href: "#technology" },
    { label: "About", href: "#about" },
  ],
  searchPlaceholder: "Search frames, styles, collections...",
  searchHint: "Press Enter to search or ESC to close",
  searchAriaLabel: "Search",
  closeSearchAriaLabel: "Close search",
};

// ============================================================
// Hero Section
// ============================================================

export interface HeroConfig {
  date: string;
  titleLine1: string;
  titleLine2: string;
  readTime: string;
  description: string;
  ctaText: string;
  image: string;
  imageAlt: string;
}

export const heroConfig: HeroConfig = {
  date: "March 2026",
  titleLine1: "The Future of",
  titleLine2: "Eyewear Shopping",
  readTime: "AR Powered",
  description: "Experience eyewear like never before. Our revolutionary AR technology lets you try on glasses virtually with photorealistic precision. Explore 3D models, get AI-powered recommendations, and find your perfect fit from anywhere in the world.",
  ctaText: "Try AR Now",
  image: "/hero-eyewear.jpg",
  imageAlt: "Person wearing stylish AR-enabled smart glasses with holographic interface",
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
  articles: ArticleItem[];
}

export const latestArticlesConfig: LatestArticlesConfig = {
  sectionTitle: "Latest Collections",
  articles: [
    {
      id: 1,
      title: "Titanium Elite",
      subtitle: "Ultra-lightweight aerospace-grade frames",
      image: "/collection-titanium.jpg",
      category: "Premium",
    },
    {
      id: 2,
      title: "Heritage Classic",
      subtitle: "Timeless designs reimagined for today",
      image: "/collection-heritage.jpg",
      category: "Classic",
    },
    {
      id: 3,
      title: "Sport Pro Series",
      subtitle: "Performance eyewear for active lifestyles",
      image: "/collection-sport.jpg",
      category: "Sport",
    },
    {
      id: 4,
      title: "Eco Sustainable",
      subtitle: "Bio-acetate frames, zero waste mission",
      image: "/collection-eco.jpg",
      category: "Sustainable",
    },
    {
      id: 5,
      title: "Smart Vision X",
      subtitle: "AR-enabled smart glasses of tomorrow",
      image: "/collection-smart.jpg",
      category: "Technology",
    },
  ],
};

// ============================================================
// AR Technology Section
// ============================================================

export interface EventItem {
  date: string;
  title: string;
  location: string;
}

export interface GridArticle {
  id: number;
  title: string;
  category: string;
  readTime: string;
}

export interface ArtCategoryConfig {
  sectionTitle: string;
  categoriesLabel: string;
  eventsLabel: string;
  categories: string[];
  events: EventItem[];
  featuredImage: string;
  featuredImageAlt: string;
  featuredLabel: string;
  featuredTitle: string;
  featuredDescription: string;
  featuredCtaText: string;
  gridArticles: GridArticle[];
  readSuffix: string;
}

export const artCategoryConfig: ArtCategoryConfig = {
  sectionTitle: "AR Technology",
  categoriesLabel: "Features",
  eventsLabel: "Upcoming",
  categories: ["Virtual Try-On", "3D Viewer", "AI Recommendations", "Face Mapping", "Size Guide"],
  events: [
    { date: "Apr 15", title: "VisionAR 2.0 Launch", location: "Global" },
    { date: "May 22", title: "AR Developer Summit", location: "San Francisco" },
  ],
  featuredImage: "/ar-technology.jpg",
  featuredImageAlt: "AR face mapping technology showing virtual glasses overlay",
  featuredLabel: "Featured Technology",
  featuredTitle: "Real-Time Face Tracking & 3D Overlay",
  featuredDescription: "Our proprietary AR engine uses advanced computer vision and machine learning to map your facial features in real-time. The technology accounts for lighting conditions, head movements, and depth perception to deliver the most accurate virtual try-on experience available. With sub-millimeter precision, you'll see exactly how each frame fits your unique face shape.",
  featuredCtaText: "Experience the Demo",
  gridArticles: [
    { id: 1, title: "WebXR Browser Integration", category: "Technology", readTime: "No app needed" },
    { id: 2, title: "Pupillary Distance Measurement", category: "Precision", readTime: "Auto-detect" },
    { id: 3, title: "Frame Size Recommendations", category: "AI Powered", readTime: "Instant" },
    { id: 4, title: "Social Sharing Features", category: "Community", readTime: "One-click" },
  ],
  readSuffix: "",
};

// ============================================================
// Lifestyle Section - Customer Experiences
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
      title: "Sarah's Perfect Fit",
      excerpt: "Found my dream frames without leaving home",
      image: "/lifestyle-1.jpg",
      rotation: -6,
      position: { x: 0, y: 0 },
      baseZIndex: 5,
    },
    {
      id: 2,
      title: "Marcus Goes Digital",
      excerpt: "The AR try-on saved me hours of shopping",
      image: "/lifestyle-2.jpg",
      rotation: 4,
      position: { x: 180, y: 40 },
      baseZIndex: 4,
    },
    {
      id: 3,
      title: "Elena's Style Journey",
      excerpt: "AI recommendations knew my taste better than me",
      image: "/lifestyle-3.jpg",
      rotation: -3,
      position: { x: 80, y: -20 },
      baseZIndex: 3,
    },
    {
      id: 4,
      title: "James' Sport Upgrade",
      excerpt: "Performance frames that actually stay put",
      image: "/lifestyle-4.jpg",
      rotation: 7,
      position: { x: 220, y: -10 },
      baseZIndex: 2,
    },
    {
      id: 5,
      title: "The Chen Family",
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
      title: "Aero Titanium",
      quote: "360° rotation, zoom, and inspect every detail",
      image: "/design-1.jpg",
      size: "wide",
    },
    {
      id: 2,
      title: "Heritage Gold",
      quote: "See the craftsmanship up close",
      image: "/design-2.jpg",
      size: "normal",
    },
    {
      id: 3,
      title: "Cyber Noir",
      quote: "Futuristic aesthetics meet functionality",
      image: "/design-3.jpg",
      size: "tall",
    },
    {
      id: 4,
      title: "Eco Natural",
      quote: "Sustainable materials, stunning design",
      image: "/design-4.jpg",
      size: "normal",
    },
    {
      id: 5,
      title: "Sport Velocity",
      quote: "Engineered for peak performance",
      image: "/design-5.jpg",
      size: "normal",
    },
    {
      id: 6,
      title: "Luxe Crystal",
      quote: "Transparent elegance redefined",
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
  sectionDescription: "Join thousands of eyewear enthusiasts who have transformed their shopping experience with our AR technology.",
  readMoreText: "Read Full Story",
  joinTitle: "Join the Community",
  joinDescription: "Get exclusive early access to new collections, AR features, and special member discounts.",
  emailPlaceholder: "Your email address",
  subscribeText: "Join Now",
  memberCountText: "50,000+ members have joined",
  videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27611-large.mp4",
  videoPoster: "/video-poster.jpg",
  members: [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "Fashion Blogger",
      title: "Revolutionized My Reviews",
      excerpt: "VisionAR has completely changed how I review eyewear. My followers love seeing realistic try-ons before they buy.",
      avatar: "/avatar-1.jpg",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Tech Enthusiast",
      title: "The Future is Here",
      excerpt: "As someone who tests AR apps professionally, VisionAR's accuracy and performance are unmatched in the industry.",
      avatar: "/avatar-2.jpg",
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      role: "Optician",
      title: "Professional Grade",
      excerpt: "I recommend VisionAR to all my clients. The pupillary distance measurement is surprisingly accurate.",
      avatar: "/avatar-3.jpg",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Designer",
      title: "Design Excellence",
      excerpt: "The 3D viewer lets me appreciate frame craftsmanship in ways that photos simply cannot capture.",
      avatar: "/avatar-4.jpg",
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Lifestyle Influencer",
      title: "Game Changer",
      excerpt: "No more guessing if frames will suit my face. The AI recommendations are spot on every time.",
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
  sectionTitle: "Meet Our Experts",
  sectionSubtitle: "Drag or click to explore our team",
  articlesSuffix: "projects",
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
// Instagram Gallery Section - Social Proof
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
  handle: "@visionar_official",
  handleUrl: "https://instagram.com/visionar_official",
  description: "Follow us for daily AR try-ons, new collections, and behind-the-scenes content",
  followText: "Follow Us",
  likesSuffix: "likes",
  images: [
    { id: 1, image: "/social-1.jpg", likes: 12453 },
    { id: 2, image: "/social-2.jpg", likes: 8921 },
    { id: 3, image: "/social-3.jpg", likes: 15678 },
    { id: 4, image: "/social-4.jpg", likes: 7234 },
    { id: 5, image: "/social-5.jpg", likes: 18902 },
    { id: 6, image: "/social-6.jpg", likes: 9456 },
    { id: 7, image: "/social-7.jpg", likes: 11234 },
    { id: 8, image: "/social-8.jpg", likes: 6789 },
    { id: 9, image: "/social-9.jpg", likes: 14321 },
    { id: 10, image: "/social-10.jpg", likes: 10234 },
  ],
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
}

export const footerConfig: FooterConfig = {
  brandWatermark: "VisionAR",
  newsletterTitle: "Stay Ahead of the Curve",
  newsletterDescription: "Subscribe for exclusive access to new collections, AR features, and member-only discounts.",
  emailPlaceholder: "Your email address",
  subscribeText: "Subscribe",
  subscribeSuccessMessage: "Welcome to the future of eyewear! Check your inbox.",
  categoriesLabel: "Collections",
  categories: ["Titanium Elite", "Heritage Classic", "Sport Pro", "Eco Sustainable", "Smart Vision X"],
  pagesLabel: "Company",
  pages: ["About Us", "Technology", "Careers", "Press Kit", "Contact"],
  legalLabel: "Legal",
  legalLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
  socialLabel: "Follow Us",
  socialLinks: {
    instagram: "https://instagram.com/visionar_official",
    twitter: "https://twitter.com/visionar",
    youtube: "https://youtube.com/visionar",
  },
  backToTopText: "Back to Top",
  copyright: "© 2026 VisionAR. All rights reserved.",
  credit: "Designed by David Olagbenro - Full Stack AI/Web Developer",
};
