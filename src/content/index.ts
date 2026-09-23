import type { LandingPageConfig } from '../types/landingPage';
import { pockraftLandingPage } from './pockraft';

/**
 * Register every product preset here. The key becomes its build-time id.
 * Example: VITE_LANDING_PAGE_ID=pockraft npm run build
 */
export const landingPagePresets = {
  pockraft: pockraftLandingPage,
} satisfies Record<string, LandingPageConfig>;

export type LandingPagePresetId = keyof typeof landingPagePresets;

export function getLandingPagePreset(id: string = 'pockraft'): LandingPageConfig {
  if (id in landingPagePresets) {
    return landingPagePresets[id as LandingPagePresetId];
  }

  const available = Object.keys(landingPagePresets).join(', ');
  throw new Error(`Unknown landing-page preset "${id}". Available presets: ${available}.`);
}
