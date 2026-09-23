import { createContext, useContext, useEffect, type ReactNode } from 'react';
import type { LandingPageConfig } from '../types/landingPage';

const LandingPageContext = createContext<LandingPageConfig | null>(null);

export function LandingPageProvider({ config, children }: { config: LandingPageConfig; children: ReactNode }) {
  useEffect(() => {
    document.title = config.brand.metaTitle;

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.append(description);
    }
    description.content = config.brand.metaDescription;
  }, [config]);

  return <LandingPageContext.Provider value={config}>{children}</LandingPageContext.Provider>;
}

export function useLandingPage() {
  const config = useContext(LandingPageContext);

  if (!config) {
    throw new Error('useLandingPage must be used inside LandingPageProvider.');
  }

  return config;
}
