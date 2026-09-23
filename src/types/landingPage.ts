export type IconName =
  | 'arrowRight'
  | 'check'
  | 'layers'
  | 'play'
  | 'rocket'
  | 'search'
  | 'sparkles'
  | 'target'
  | 'trending'
  | 'users'
  | 'wrench'
  | 'zap';

export interface LandingPageLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface LandingPageAction extends LandingPageLink {
  variant?: 'default' | 'outline' | 'inverse';
}

export interface BrandProfile {
  /** Stable key used by the preset registry and VITE_LANDING_PAGE_ID. */
  id: string;
  name: string;
  category: string;
  logoSrc: string;
  copyrightYear: string;
  metaTitle: string;
  metaDescription: string;
}

export interface LandingPageTheme {
  background: string;
  foreground: string;
  card: string;
  muted: string;
  mutedForeground: string;
  border: string;
  radius: string;
}

export interface HeroSection {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: LandingPageAction;
  secondaryAction: LandingPageAction;
  trustSignals: Array<{
    icon: IconName;
    label: string;
  }>;
}

export interface FeatureCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: IconName;
  label: string;
  title: string;
  description: string;
}

export interface PricingTier {
  icon: IconName;
  label: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  action: LandingPageAction;
}

export interface DemoSection {
  eyebrow: string;
  title: string;
  description: string;
  frameUrl: string;
  frameNote: string;
}

export interface ContactSection {
  eyebrow: string;
  title: string;
  description: string;
  form: {
    action?: string;
    method?: 'get' | 'post';
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
}

export interface FooterConfig {
  description: string;
  columns: Array<{
    title: string;
    links: LandingPageLink[];
  }>;
  acknowledgements: Array<{
    label: string;
    href: string;
  }>;
  tagline: string;
}

export interface LandingPageConfig {
  brand: BrandProfile;
  theme: LandingPageTheme;
  navigation: LandingPageLink[];
  hero: HeroSection;
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureCard[];
  };
  process: {
    eyebrow: string;
    title: string;
    items: ProcessStep[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    tiers: PricingTier[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    action: LandingPageAction;
  };
  demo: DemoSection;
  contact: ContactSection;
  footer: FooterConfig;
}

type OptionalBrandFields = 'id' | 'copyrightYear';

export type LandingPageFactoryInput = Omit<LandingPageConfig, 'brand' | 'theme'> & {
  brand: Omit<BrandProfile, OptionalBrandFields> & Partial<Pick<BrandProfile, OptionalBrandFields>>;
  theme?: Partial<LandingPageTheme>;
};
