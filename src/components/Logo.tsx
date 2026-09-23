import { useLandingPage } from '../context/LandingPageContext';

export function Logo({ inverse = false, label }: { inverse?: boolean; label?: string }) {
  const { brand } = useLandingPage();

  return (
    <span className={`logo ${inverse ? 'logo-inverse' : ''}`}>
      <img src={brand.logoSrc} alt="" aria-hidden="true" />
      <span>{label ?? brand.name}</span>
    </span>
  );
}
