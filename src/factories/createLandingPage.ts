import type { LandingPageConfig, LandingPageFactoryInput, LandingPageTheme } from '../types/landingPage';

const defaultTheme: LandingPageTheme = {
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.145 0 0)',
  card: 'oklch(1 0 0)',
  muted: 'oklch(0.97 0 0)',
  mutedForeground: 'oklch(0.50 0 0)',
  border: 'oklch(0.90 0 0)',
  radius: '0.75rem',
};

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function deepFreeze<T>(value: T): T {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.freeze(value);
    Object.values(value).forEach(deepFreeze);
  }

  return value;
}

/**
 * Turns product content into an immutable, normalized landing-page preset.
 * Shared components consume the resulting object through LandingPageProvider.
 */
export function createLandingPage(input: LandingPageFactoryInput): LandingPageConfig {
  const config: LandingPageConfig = structuredClone({
    ...input,
    brand: {
      ...input.brand,
      id: input.brand.id ?? slugify(input.brand.name),
      copyrightYear: input.brand.copyrightYear ?? String(new Date().getFullYear()),
    },
    theme: {
      ...defaultTheme,
      ...input.theme,
    },
  });

  if (!config.brand.id) {
    throw new Error('A landing-page preset requires a brand name or id.');
  }

  return deepFreeze(config);
}
