import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { RouteLink } from './RouteLink';

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><RouteLink className="brand-mark" href="/#top" onClick={() => setOpen(false)}><span>Yours CayCi<small>STOCKING</small></span></RouteLink><nav className={open ? 'nav nav-open' : 'nav'}><RouteLink href="/#shop" onClick={() => setOpen(false)}>Shop</RouteLink><RouteLink href="/#pair" onClick={() => setOpen(false)}>Find My Fit</RouteLink><RouteLink href="/#feedback" onClick={() => setOpen(false)}>Reviews</RouteLink><RouteLink href="/#order" className="nav-order" onClick={() => setOpen(false)}>Order <span>↗</span></RouteLink></nav><button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></header>;
}
