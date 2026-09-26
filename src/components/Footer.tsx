import { MessageCircle, Phone } from 'lucide-react';
import { RouteLink } from './RouteLink';

export function Footer() {
  return <footer className="footer"><div className="container footer-main"><div><RouteLink className="brand-mark footer-brand" href="/#top"><span>Yours CayCi<small>STOCKING</small></span></RouteLink><p>Soft stockings. Easy confidence.</p></div><div className="footer-links"><span>Explore</span><RouteLink href="/#shop">Shop colors</RouteLink><RouteLink href="/#pair">Find My Fit</RouteLink><RouteLink href="/#feedback">Reviews</RouteLink></div><div className="footer-links"><span>Contact</span><a href="tel:+959254104004"><Phone size={14} /> +959 254 104 004</a><a href="https://t.me/YOURSCAYCI2" target="_blank" rel="noreferrer"><MessageCircle size={14} /> @YOURSCAYCI2</a><a href="https://www.tiktok.com/@yourscaycistocking" target="_blank" rel="noreferrer">♪ @yourscaycistocking</a></div></div><div className="container footer-bottom"><span>© 2026 Yours CayCi Stocking</span><a href="https://pockraft-studio-landing.moriartylink.workers.dev" target="_blank" rel="noreferrer">Craft with Care by Pockraft</a><span>Be you. Be elegant.</span></div></footer>;
}
