import { Icon } from '../factories/iconRegistry';
import type { LandingPageAction } from '../types/landingPage';
import { RouteLink } from './RouteLink';
import type { MouseEventHandler } from 'react';

export function ActionLink({ action, className = '', showArrow = false, onClick }: {
  action: LandingPageAction;
  className?: string;
  showArrow?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const classes = `button button-${action.variant ?? 'default'} ${className}`.trim();
  const content = <>{action.label}{showArrow && <Icon name="arrowRight" size={16} />}</>;

  if (action.external) {
    return <a className={classes} href={action.href} target="_blank" rel="noreferrer" onClick={onClick}>{content}</a>;
  }

  return <RouteLink className={classes} href={action.href} onClick={onClick}>{content}</RouteLink>;
}
