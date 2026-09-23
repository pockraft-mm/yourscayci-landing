import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a className="brand-mark" href="#top" onClick={() => setOpen(false)}><span>Yours CayCi<small>STOCKING</small></span></a><nav className={open ? 'nav nav-open' : 'nav'}><a href="#shop" onClick={() => setOpen(false)}>Shop</a><a href="#pair" onClick={() => setOpen(false)}>Find My Fit</a><a href="#feedback" onClick={() => setOpen(false)}>Reviews</a><a href="#order" className="nav-order" onClick={() => setOpen(false)}>Order <span>↗</span></a></nav><button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></header>;
}
