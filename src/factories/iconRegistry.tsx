import {
  ArrowRight,
  Check,
  Layers3,
  Play,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '../types/landingPage';

export const iconRegistry: Record<IconName, LucideIcon> = {
  arrowRight: ArrowRight,
  check: Check,
  layers: Layers3,
  play: Play,
  rocket: Rocket,
  search: Search,
  sparkles: Sparkles,
  target: Target,
  trending: TrendingUp,
  users: Users,
  wrench: Wrench,
  zap: Zap,
};

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const IconComponent = iconRegistry[name];
  return <IconComponent size={size} aria-hidden="true" />;
}
