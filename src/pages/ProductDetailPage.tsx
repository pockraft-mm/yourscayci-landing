import { useState } from 'react';
import { ArrowLeft, ArrowRight, Copy, MessageCircle, Phone, X } from 'lucide-react';
import { productBySlug } from '../data/products';
import { RouteLink } from '../components/RouteLink';

const asset = (name: string) => `/data/${name}`;
const qrUrl = (value: string) => `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(value)}`;

export function ProductDetailPage({ slug }: { slug: string }) {
  const product = productBySlug(slug);
  const [active, setActive] = useState(0);
  const requestedSize = new URLSearchParams(window.location.search).get('size');
  const [option, setOption] = useState<'Free Size' | 'Large' | null>(requestedSize === 'Free Size' || requestedSize === 'Large' ? requestedSize : null);
  const [orderOpen, setOrderOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!product) return <section className="product-detail"><div className="container detail-empty"><h1>Product not found.</h1><RouteLink className="text-link" href="/#shop"><ArrowLeft size={15} /> Back to shop</RouteLink></div></section>;

  const productLink = `${window.location.origin}/product/${product.tone.toLowerCase()}`;
  const selection = option === 'Free Size' ? 'Free Size · S / M / L · 25,000 MMK' : option === 'Large' ? 'Large · L / XL · 30,000 MMK' : null;
  const copyLink = async () => { await navigator.clipboard?.writeText(productLink); setCopied(true); window.setTimeout(() => setCopied(false), 1600); };

  return <><section className="product-detail"><div className="container"><RouteLink className="detail-back" href="/#shop"><ArrowLeft size={15} /> Shop</RouteLink><div className="detail-grid"><div className="detail-image"><img src={asset(product.images[active])} alt={`${product.name} stockings view ${active + 1}`} /><div className="detail-dots">{product.images.map((image, index) => <button key={image} className={active === index ? 'active' : ''} onClick={() => setActive(index)} aria-label={`View image ${index + 1}`} />)}</div></div><div className="detail-copy"><span className="eyebrow lavender-eyebrow">Yours CayCi Stocking</span><h1>{product.name}</h1><p>{product.description}</p><div className="detail-prices"><button className={option === 'Free Size' ? 'selected' : ''} onClick={() => setOption('Free Size')}><small>Free Size</small><b>S · M · L</b><strong>25,000 MMK</strong></button><button className={option === 'Large' ? 'selected' : ''} onClick={() => setOption('Large')}><small>Large</small><b>L · XL</b><strong>30,000 MMK</strong></button></div><button className="button button-primary" onClick={() => setOrderOpen(true)}>Order this <ArrowRight size={16} /></button></div></div></div></section>{orderOpen && <div className="share-overlay" role="dialog" aria-modal="true" aria-label={`Order ${product.name}`} onClick={() => setOrderOpen(false)}><div className="order-card" onClick={(event) => event.stopPropagation()}><button className="close-button" onClick={() => setOrderOpen(false)} aria-label="Close"><X size={18} /></button><span className="eyebrow lavender-eyebrow">Order {product.name}</span><h3>Choose your channel.</h3>{selection && <p className="order-choice">{selection}</p>}<img src={qrUrl(productLink)} alt={`${product.name} product QR code`} /><p className="order-note">Scan or copy this product.</p><div className="order-links"><a href="https://t.me/YOURSCAYCI2" target="_blank" rel="noreferrer"><MessageCircle size={15} /> Telegram</a><a href="https://www.tiktok.com/@yourscaycistocking" target="_blank" rel="noreferrer"><span>♪</span> TikTok</a><a href="tel:+959254104004"><Phone size={15} /> +959 254 104 004</a><a href="viber://chat?number=%2B959254104004"><span>✦</span> Viber</a></div><button className="copy-product" onClick={copyLink}><Copy size={14} /> {copied ? 'Product link copied' : 'Copy product link'}</button></div></div>}</>;
}
