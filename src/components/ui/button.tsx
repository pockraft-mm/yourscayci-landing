import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'default' | 'outline' | 'ghost' | 'inverse';

const classes = (variant: Variant, className = '') =>
  `button button-${variant} ${className}`.trim();

export function Button({ variant = 'default', className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={classes(variant, className)} {...props} />;
}

export function ButtonLink({ variant = 'default', className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return <a className={classes(variant, className)} {...props}>{children}</a>;
}
