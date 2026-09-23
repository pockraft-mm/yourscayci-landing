import type { HTMLAttributes, ReactNode } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`card ${className}`.trim()} {...props} />;
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="card-header">{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="card-content">{children}</div>;
}
