
export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  backgroundOverlay: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Offer {
  id: string;
  title: string;
  img: string;
  short: string;
  desc: string;
  bullets: string[];
  url: string;
  url2: string;
}

export interface Category {
  id: string;
  title: string;
  navTitle?: string; // Specific title for the header navigation
  offers: Offer[];
}

export interface AppConfig {
  siteName: string;
  siteTagline: string;
  logoUrl: string;
  bgImageUrl: string;
  noticeText: string;
  whatsappNumber: string;
  
  // Header & Hero Customization
  featuredRewardText: string; 
  featuredRewardUrl: string;
  featuredOfferLabel: string;
  bannerButtonText: string; // Dynamic text for the main banner button
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroButtonText: string;

  theme: Theme;
  socials: SocialLink[];
  categories: Category[];
}
