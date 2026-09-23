import type { AnchorHTMLAttributes, MouseEvent } from 'react';

export function RouteLink({ href, onClick, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !href || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const destination = new URL(href, window.location.origin);
    if (destination.origin !== window.location.origin) return;

    event.preventDefault();
    window.history.pushState({}, '', `${destination.pathname}${destination.search}${destination.hash}`);
    window.dispatchEvent(new PopStateEvent('popstate'));

    if (destination.hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(destination.hash.slice(1)))?.scrollIntoView();
      });
    }
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
