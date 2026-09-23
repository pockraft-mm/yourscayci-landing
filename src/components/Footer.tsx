import { MessageCircle, Phone } from 'lucide-react';

export function Footer() {
  return <footer className="footer"><div className="container footer-main"><div><a className="brand-mark footer-brand" href="#top"><span>Yours CayCi<small>STOCKING</small></span></a><p>Soft stockings. Easy confidence.</p></div><div className="footer-links"><span>Explore</span><a href="#shop">Shop colors</a><a href="#pair">Find My Fit</a><a href="#feedback">Reviews</a></div><div className="footer-links"><span>Contact</span><a href="tel:+959254104004"><Phone size={14} /> +959 254 104 004</a><a href="https://t.me/YOURSCAYCI2" target="_blank" rel="noreferrer"><MessageCircle size={14} /> @YOURSCAYCI2</a><a href="https://www.tiktok.com/@yourscaycistocking" target="_blank" rel="noreferrer">♪ @yourscaycistocking</a></div></div><div className="container footer-bottom"><span>© 2026 Yours CayCi Stocking</span><span>Be you. Be elegant.</span></div></footer>;
}
