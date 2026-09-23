import { defineConfig, loadEnv } from 'vite';
import { getLandingPagePreset } from './src/content';

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');
  const preset = getLandingPagePreset(env.VITE_LANDING_PAGE_ID || 'pockraft');

  return {
    plugins: [
      {
        name: 'landing-page-metadata',
        transformIndexHtml(html) {
          return html
            .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(preset.brand.metaTitle)}</title>`)
            .replace(
              /<meta name="description" content=".*?" \/>/,
              `<meta name="description" content="${escapeHtml(preset.brand.metaDescription)}" />`,
            );
        },
      },
    ],
  };
});
