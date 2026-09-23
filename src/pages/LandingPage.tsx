import { useState } from 'react';
import { ArrowRight, Check, Copy, MessageCircle, Phone, QrCode, Share2, Sparkles, Star, X } from 'lucide-react';
import { products, type Product } from '../data/products';
import { RouteLink } from '../components/RouteLink';

const asset = (name: string) => `/data/${name}`;

const sizes = [
  ['S', '140–156 cm', '35–50 kg', "4'59\"–5'1\"", '77–110 lbs'],
  ['M', '149–161 cm', '38–56 kg', "4'9\"–5'3\"", '85–125 lbs'],
  ['L', '155–170 cm', '40–61 kg', "4'10\"–5'6\"", '90–135 lbs'],
  ['XL', '164–182 cm', '58–79 kg', "5'4\"–6'0\"", '130–175 lbs'],
  ['2XL', '170–182 cm', '77–102 kg', "5'6\"–6'0\"", '170–225 lbs'],
];

function qrUrl(value: string) { return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(value)}`; }

function findSize(height: number, weight: number) {
  const match = sizes.find(([, h, w]) => {
    const [h1, h2] = h.match(/\d+/g)!.map(Number);
    const [w1, w2] = w.match(/\d+/g)!.map(Number);
    return height >= h1 && height <= h2 && weight >= w1 && weight <= w2;
  });
  return match?.[0] ?? (weight >= 77 ? '2XL' : weight >= 58 ? 'XL' : weight >= 40 ? 'L' : weight >= 38 ? 'M' : 'S');
}

function ShareQr({ title, url, onClose }: { title: string; url: string; onClose: () => void }) {
  const copy = async () => { await navigator.clipboard?.writeText(url); };
  return <div className="share-overlay" role="dialog" aria-modal="true" aria-label={`Share ${title}`} onClick={onClose}><div className="share-card" onClick={(e) => e.stopPropagation()}><button className="close-button" onClick={onClose} aria-label="Close"><X size={18} /></button><span className="eyebrow lavender-eyebrow">Scan to share</span><h3>{title}</h3><img src={qrUrl(url)} alt={`QR code for ${title}`} /><p>Open on any phone.</p><button className="copy-link" onClick={copy}><Copy size={14} /> Copy link</button></div></div>;
}

function OrderPanel({ product, selection, onClose }: { product: Product; selection: string | null; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const productLink = `${window.location.href.split('#')[0]}#product-${product.tone.toLowerCase()}`;
  const copyProduct = async () => { await navigator.clipboard?.writeText(productLink); setCopied(true); window.setTimeout(() => setCopied(false), 1600); };
  return <div className="share-overlay" role="dialog" aria-modal="true" aria-label={`Order ${product.name}`} onClick={onClose}><div className="order-card" onClick={(event) => event.stopPropagation()}><button className="close-button" onClick={onClose} aria-label="Close"><X size={18} /></button><span className="eyebrow lavender-eyebrow">Order {product.name}</span><h3>Choose your channel.</h3>{selection && <p className="order-choice">{selection}</p>}<img src={qrUrl(productLink)} alt={`${product.name} product QR code`} /><p className="order-note">Scan or copy this product.</p><div className="order-links"><a href="https://t.me/YOURSCAYCI2" target="_blank" rel="noreferrer"><MessageCircle size={15} /> Telegram</a><a href="https://www.tiktok.com/@yourscaycistocking" target="_blank" rel="noreferrer"><span>♪</span> TikTok</a><a href="tel:+959254104004"><Phone size={15} /> +959 254 104 004</a><a href="viber://chat?number=%2B959254104004"><span>✦</span> Viber</a></div><button className="copy-product" onClick={copyProduct}><Copy size={14} /> {copied ? 'Product link copied' : 'Copy product link'}</button></div></div>;
}

function ReviewCard({ image, name, quote }: { image: string; name: string; quote: string }) {
  const [open, setOpen] = useState(false);
  return <><button className="chat-card" onClick={() => setOpen(true)}><span className="chat-top"><span className="chat-avatar">YC</span><span><strong>{name}</strong><small>Customer note · tap to zoom</small></span><span className="chat-time">♥</span></span><img src={asset(image)} alt="Yours CayCi customer review" /><span className="review-quote">{quote}</span></button>{open && <div className="share-overlay review-overlay" role="dialog" aria-modal="true" aria-label="Customer review" onClick={() => setOpen(false)}><div className="review-lightbox" onClick={(event) => event.stopPropagation()}><button className="close-button" onClick={() => setOpen(false)} aria-label="Close"><X size={18} /></button><img src={asset(image)} alt="Yours CayCi customer review enlarged" /></div></div>}</>;
}

function ProductCard({ product, index, onOrder }: { product: Product; index: number; onOrder: (product: Product, selection: string | null) => void }) {
  const [active, setActive] = useState(0);
  const [sizeOption, setSizeOption] = useState<'Free Size' | 'Large' | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const moveImage = (direction: number) => setActive((current) => (current + direction + product.images.length) % product.images.length);
  const detailLink = `/product/${product.tone.toLowerCase()}${sizeOption ? `?size=${encodeURIComponent(sizeOption)}` : ''}`;
  const selected = sizeOption === 'Free Size' ? 'Free Size · S / M / L · 25,000 MMK' : sizeOption === 'Large' ? 'Large · L / XL · 30,000 MMK' : null;
  return <article className="product-card" id={`product-${product.tone.toLowerCase()}`}><div className="product-image" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={(event) => { if (touchStart === null) return; const distance = event.changedTouches[0].clientX - touchStart; if (Math.abs(distance) > 35) moveImage(distance < 0 ? 1 : -1); setTouchStart(null); }}><img src={asset(product.images[active])} alt={`${product.name} stockings view ${active + 1}`} /><span className="product-index">0{index + 1}</span><div className="product-dots" aria-label={`${product.name} gallery`}>{product.images.map((image, imageIndex) => <button key={image} className={active === imageIndex ? 'active' : ''} onClick={() => setActive(imageIndex)} aria-label={`View image ${imageIndex + 1}`} />)}</div></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.description}</p></div></div><div className="price-options"><button className={sizeOption === 'Free Size' ? 'selected' : ''} onClick={() => setSizeOption('Free Size')}><small>Free Size</small><b>S · M · L</b><strong>25,000 MMK</strong></button><button className={sizeOption === 'Large' ? 'selected' : ''} onClick={() => setSizeOption('Large')}><small>Large</small><b>L · XL</b><strong>30,000 MMK</strong></button></div><div className="product-actions"><RouteLink className="product-link" href={detailLink}>Details <ArrowRight size={15} /></RouteLink><button className="product-link" onClick={() => onOrder(product, selected)}>Order this <ArrowRight size={15} /></button></div></article>;
}

export function LandingPage() {
  const [share, setShare] = useState<{ title: string; url: string } | null>(null);
  const [order, setOrder] = useState<{ product: Product; selection: string | null } | null>(null);
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(52);
  const [occasion, setOccasion] = useState('Everyday');
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const [showResult, setShowResult] = useState(false);
  const occasionColor = { Everyday: 'Skin', Work: 'Brown', 'Night out': 'Black' }[occasion as 'Everyday' | 'Work' | 'Night out'];
  const recommended = products.find((product) => product.tone === occasionColor)!;
  const size = findSize(height, weight);
  const heightInches = Math.round(height / 2.54);
  const heightLabel = units === 'metric' ? `${height} cm` : `${Math.floor(heightInches / 12)}'${heightInches % 12}\"`;
  const weightLabel = units === 'metric' ? `${weight} kg` : `${Math.round(weight * 2.20462)} lbs`;
  const shareSite = () => setShare({ title: 'Yours CayCi Stocking', url: window.location.href.split('#')[0] });

  return <>
    <section className="shop-hero section-border"><div className="container hero-layout"><div className="hero-copy"><span className="eyebrow"><Sparkles size={14} /> Yours CayCi Stocking</span><h1>Be you.<br /><em>Be elegant.</em></h1><p>Soft stockings. Easy confidence.</p><div className="hero-actions"><a className="button button-primary" href="#shop">Shop <ArrowRight size={16} /></a><button className="text-button" onClick={shareSite}><Share2 size={15} /> Share</button></div></div><div className="hero-visual"><div className="hero-orb" /><img className="hero-product-cutout" src={asset('product-stocking-skincolor-2.png')} alt="Yours CayCi Skin Tone stockings" /><span className="vertical-word">YOURS CAYCI</span></div></div></section>

    <section className="micro-strip"><div className="container"><span>Soft. Sheer. Strong.</span><span>Everyday elegance.</span><a href="#pair">Find My Fit <ArrowRight size={14} /></a></div></section>

    <section className="products section-border" id="shop"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow lavender-eyebrow">The collection</span><h2>Pick your <em>color.</em></h2></div></div><div className="product-grid">{products.map((product, index) => <ProductCard product={product} index={index} key={product.name} onOrder={(selectedProduct, selection) => setOrder({ product: selectedProduct, selection })} />)}</div></div></section>

    <section className="fit-section section-border" id="pair"><div className="container pair-grid"><div><span className="eyebrow lavender-eyebrow">Find My Fit</span><h2>Made for <em>you.</em></h2><p>A little help for your perfect pair.</p></div><div className="pair-form"><div className="unit-toggle"><button className={units === 'metric' ? 'active' : ''} onClick={() => setUnits('metric')}>cm · kg</button><button className={units === 'imperial' ? 'active' : ''} onClick={() => setUnits('imperial')}>ft · in · lbs</button></div><label>Height <output>{heightLabel}</output><input type="range" min={units === 'metric' ? 140 : 55} max={units === 'metric' ? 182 : 72} value={units === 'metric' ? height : heightInches} onChange={(e) => { setHeight(units === 'metric' ? Number(e.target.value) : Math.round(Number(e.target.value) * 2.54)); setShowResult(false); }} /></label><label>Weight <output>{weightLabel}</output><input type="range" min={units === 'metric' ? 35 : 77} max={units === 'metric' ? 102 : 225} value={units === 'metric' ? weight : Math.round(weight * 2.20462)} onChange={(e) => { setWeight(units === 'metric' ? Number(e.target.value) : Math.round(Number(e.target.value) / 2.20462)); setShowResult(false); }} /></label><div className="tone-picks"><span>What is the occasion?</span><small>Tell us where you’re going. We’ll pick the color.</small><div>{['Everyday', 'Work', 'Night out'].map((choice) => <button className={occasion === choice ? 'tone-choice selected' : 'tone-choice'} onClick={() => { setOccasion(choice); setShowResult(false); }} key={choice}>{choice}</button>)}</div></div><button className="button button-dark" onClick={() => setShowResult(true)}>Find My Fit <ArrowRight size={16} /></button>{showResult && <div className="pair-result"><span><Check size={15} /> Your match</span><strong>{size} · {recommended.name}</strong><a href={`#product-${recommended.tone.toLowerCase()}`}>See your color <ArrowRight size={14} /></a></div>}</div></div>

    <div className="container size-guide-panel" id="size-guide"><div className="size-heading"><div><span className="eyebrow lavender-eyebrow">Size guide</span><h2>A good <em>fit.</em></h2></div><p>Use height and weight together.</p></div><div className="size-table-wrap"><table><thead><tr><th>Size</th><th>Height</th><th>Weight</th></tr></thead><tbody>{sizes.map(([label, cm, kg, feet, lbs]) => <tr key={label}><td>{label}</td><td>{units === 'metric' ? cm : feet}</td><td>{units === 'metric' ? kg : lbs}</td></tr>)}</tbody></table></div><div className="wear-notes"><span>1. Smooth nails.</span><span>2. Roll from toe.</span><span>3. Adjust heel.</span><span>4. Pull up gently.</span></div></div></section>

    <section className="feedback section-border" id="feedback"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow lavender-eyebrow">Customer notes</span><h2>Lovely Customers’ <em>feedbacks.</em></h2></div><div className="rating"><Star size={14} fill="currentColor" /> 5.0 <span>from our girls</span></div></div><div className="chat-grid">{['customer-review-1.png', 'customer-review-2.png', 'customer-review-3.png', 'customer-review-4.png', 'customer-review-5.png'].map((image, index) => <ReviewCard image={image} name={['May', 'Customer', 'Corn', 'Customer', 'Linn'][index]} quote={['“So soft. So pretty.”', '“Received with love.”', '“The fit is beautiful.”', '“A must-have.”', '“I really love it.”'][index]} key={image} />)}</div></div></section>

    <section className="contact-section" id="order"><div className="container contact-panel"><div><span className="eyebrow">Say hello</span><h2>Order your <em>pair.</em></h2><p>Message us anytime.</p></div><div className="contact-links"><a href="tel:+959254104004"><Phone size={17} /> +959 254 104 004</a><a href="https://t.me/YOURSCAYCI2" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Telegram · @YOURSCAYCI2</a><a href="https://www.tiktok.com/@yourscaycistocking" target="_blank" rel="noreferrer"><span className="tiktok-icon">♪</span> @yourscaycistocking</a></div><button className="button button-light" onClick={shareSite}><QrCode size={16} /> Share QR</button></div></section>
    <button className="floating-qr" onClick={shareSite} aria-label="Share Yours CayCi Stocking QR"><QrCode size={19} /><span>Share QR</span></button>
    {order && <OrderPanel {...order} onClose={() => setOrder(null)} />}
    {share && <ShareQr {...share} onClose={() => setShare(null)} />}
  </>;
}
