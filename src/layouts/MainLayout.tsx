import type { CSSProperties, ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useLandingPage } from '../context/LandingPageContext';

type ThemeProperties = CSSProperties & Record<`--${string}`, string>;

export function MainLayout({ children }: { children: ReactNode }) {
  const { theme } = useLandingPage();
  const themeProperties: ThemeProperties = {
    '--background': theme.background,
    '--foreground': theme.foreground,
    '--card': theme.card,
    '--muted': theme.muted,
    '--muted-foreground': theme.mutedForeground,
    '--border': theme.border,
    '--radius': theme.radius,
  };

  return (
    <div className="site-shell" style={themeProperties}>
      <Header />
      <main id="top">{children}</main>
      <Footer />
    </div>
  );
}
