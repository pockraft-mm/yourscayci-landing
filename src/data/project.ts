import { getLandingPagePreset } from '../content';

const requestedPreset = import.meta.env.VITE_LANDING_PAGE_ID || 'pockraft';

export const landingPage = getLandingPagePreset(requestedPreset);
export const project = landingPage.brand;
