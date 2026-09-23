import { useEffect, useState } from 'react';
import { LandingPageProvider } from './context/LandingPageContext';
import { MainLayout } from './layouts/MainLayout';
import { DemoPage } from './pages/DemoPage';
import { LandingPage } from './pages/LandingPage';
import type { LandingPageConfig } from './types/landingPage';

export default function App({ config }: { config: LandingPageConfig }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(window.location.pathname);
      window.requestAnimationFrame(() => {
        const target = window.location.hash
          ? document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
          : null;

        if (target) target.scrollIntoView();
        else window.scrollTo({ top: 0, behavior: 'instant' });
      });
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const page = pathname === '/demo' ? <DemoPage /> : <LandingPage />;

  return (
    <LandingPageProvider config={config}>
      <MainLayout>{page}</MainLayout>
    </LandingPageProvider>
  );
}
