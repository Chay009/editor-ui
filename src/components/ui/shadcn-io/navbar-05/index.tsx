'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 324 323' fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...(props as any)}>
      <rect
        x='88.1023'
        y='144.792'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 88.1023 144.792)'
        fill='currentColor'
      />
      <rect
        x='85.3459'
        y='244.537'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 85.3459 244.537)'
        fill='currentColor'
      />
    </svg>
  );
};

export interface Navbar05NavItem {
  href?: string;
  label: string;
}

export interface Navbar05Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar05NavItem[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const defaultNavigationLinks: Navbar05NavItem[] = [
  { href: '#', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#showcase', label: 'Showcase' },
];

export const Navbar05 = React.forwardRef<HTMLElement, Navbar05Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      ctaText = 'Get Started',
      ctaHref = '#get-started',
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768);
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl',
          className
        )}
        {...(props as any)}
      >
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          <a
            href={logoHref}
            className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors"
          >
            <div className="text-2xl">
              {logo}
            </div>
            <span className="hidden font-bold text-lg sm:inline-block">VideoEditor</span>
          </a>

          {!isMobile && (
            <nav className="flex items-center gap-1">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          <button
            className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
            onClick={(e) => {
              e.preventDefault();
              if (onCtaClick) onCtaClick();
            }}
          >
            {ctaText}
          </button>
        </div>
      </header>
    );
  }
);

Navbar05.displayName = 'Navbar05';

export { Logo };
