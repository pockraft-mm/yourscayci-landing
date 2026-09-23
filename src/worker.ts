import { productBySlug } from './data/products';

interface Env {
  ASSETS: {
    fetch(input: Request | string): Promise<Response>;
  };
}

interface RewriterElement {
  setAttribute(name: string, value: string): void;
  setInnerContent(content: string): void;
}

interface Rewriter {
  on(selector: string, handler: { element(element: RewriterElement): void }): Rewriter;
  transform(response: Response): Response;
}

declare const HTMLRewriter: new () => Rewriter;

const replaceContent = (value: string) => ({
  element(element: RewriterElement) {
    element.setAttribute('content', value);
  },
});

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const match = /^\/product\/([^/]+)\/?$/.exec(url.pathname);
    const product = match && productBySlug(match[1]);

    if (!product) return env.ASSETS.fetch(request);

    const canonicalUrl = `${url.origin}/product/${encodeURIComponent(product.tone.toLowerCase())}`;
    const imageUrl = `${url.origin}/data/${encodeURIComponent(product.images[0])}`;
    const title = `${product.name} Stockings | Yours CayCi`;
    const description = `${product.description} — Yours CayCi stockings.`;
    const assetHeaders = new Headers(request.headers);
    assetHeaders.delete('if-none-match');
    assetHeaders.delete('if-modified-since');
    const page = await env.ASSETS.fetch(new Request(new URL('/index.html', url), {
      headers: assetHeaders,
      method: 'GET',
    }));

    const transformed = new HTMLRewriter()
      .on('title', {
        element(element) {
          element.setInnerContent(title);
        },
      })
      .on('meta[name="description"]', replaceContent(description))
      .on('meta[property="og:type"]', replaceContent('product'))
      .on('meta[property="og:title"]', replaceContent(title))
      .on('meta[property="og:description"]', replaceContent(description))
      .on('meta[property="og:url"]', replaceContent(canonicalUrl))
      .on('meta[property="og:image"]', replaceContent(imageUrl))
      .on('meta[name="twitter:card"]', replaceContent('summary_large_image'))
      .on('meta[name="twitter:title"]', replaceContent(title))
      .on('meta[name="twitter:description"]', replaceContent(description))
      .on('meta[name="twitter:image"]', replaceContent(imageUrl))
      .transform(page);

    const headers = new Headers(transformed.headers);
    headers.delete('content-length');
    headers.delete('etag');
    return new Response(transformed.body, { headers, status: transformed.status });
  },
};
