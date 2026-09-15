'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import logo from '../assets/images/logo-full.webp';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Areas We Cover', href: '/#areas-we-cover' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const currentPath = pathname.replace(/\/$/, '') || '/';

  function isActive(href: string) {
    const hrefPath = href.split('#')[0].replace(/\/$/, '') || '/';
    return hrefPath === currentPath;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-inverse-surface text-inverse-on-surface py-2 px-margin-mobile lg:px-margin shadow-sm text-xs font-label-tech">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-tertiary text-on-tertiary px-2 py-0.5 rounded">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>24/7 UK Emergency Recovery
              Dispatch Active
            </span>
            <span className="hidden sm:inline text-outline-variant">|</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">speed</span>Average ETA 25
              Mins
            </span>
            <span className="hidden md:inline text-outline-variant">|</span>
            <span className="hidden md:flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-outline-variant">warehouse</span>Depot: 25
              Kingsway, Birmingham, B4 7SL
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-inverse-on-surface/80">Immediate Support:</span>
            <a
              className="font-bold text-on-tertiary-container hover:text-tertiary-fixed transition-colors"
              href="tel:07881241835"
            >
              07881 241835
            </a>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_2px_12px_rgba(23,28,34,0.08)] border-b border-surface-container-high">
        <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-4">
          <Link className="flex items-center group" href="/">
            <Image src={logo} alt="The Road Rescue Guys — UK Breakdown & Recovery" className="h-10 w-auto sm:h-12" priority />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={`font-label-md text-label-md py-2 transition-colors ${
                  isActive(item.href)
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              className="hidden sm:flex items-center gap-2 text-on-surface hover:text-primary transition-colors"
              href="tel:07881241835"
            >
              <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">call</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-label-tech text-label-tech text-on-surface-variant uppercase leading-none">
                  24hr Dispatch
                </span>
                <span className="font-headline-sm text-label-lg font-bold">07881 241835</span>
              </div>
            </a>
            <a
              className="hidden md:inline-flex items-center justify-center px-space-lg py-3 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded shadow-sm hover:shadow transition-all"
              href="tel:07881241835"
            >
              <span className="material-symbols-outlined mr-2 text-[18px]">e911_emergency</span>Call Now
            </a>
            <button
              aria-label="Toggle Navigation"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              className="lg:hidden w-11 h-11 flex items-center justify-center text-on-surface rounded hover:bg-surface-container"
              type="button"
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              <span className="material-symbols-outlined text-[26px]">{mobileNavOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        <nav
          id="mobile-nav"
          hidden={!mobileNavOpen}
          className="lg:hidden border-t border-surface-container-high bg-surface-container-lowest px-margin-mobile py-3"
        >
          <ul className="flex flex-col divide-y divide-surface-container-high">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={`block py-3.5 font-label-md text-label-md ${
                    isActive(item.href) ? 'text-primary font-bold' : 'text-on-surface-variant'
                  }`}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
