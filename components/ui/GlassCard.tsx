import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function GlassCard({ children, className, as: Component = 'div' }: GlassCardProps) {
  return (
    <Component className={cn('glass rounded-2xl p-6', className)}>
      {children}
    </Component>
  );
}
