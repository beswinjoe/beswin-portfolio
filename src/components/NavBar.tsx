'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'NOTES', href: '#notes' },
    { name: 'SPEAKING', href: '#speaking' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-[#F9F6F0]/90 backdrop-blur-sm border-b border-border-beige py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Initials */}
        <Link href="/" className="font-serif text-2xl tracking-tighter text-foreground hover:text-accent-burgundy transition-colors">
          BJ
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-sans text-xs uppercase tracking-widest text-foreground/80">
          {navLinks.map((link, idx) => (
            <span key={link.name} className="flex items-center gap-6">
              <Link href={link.href} className="hover:text-accent-burgundy transition-colors">
                {link.name}
              </Link>
              {idx < navLinks.length - 1 && <span className="text-border-beige font-serif text-lg leading-none">·</span>}
            </span>
          ))}
        </nav>

        {/* Mobile Nav (Simplified) */}
        <div className="md:hidden">
          <Link href="#contact" className="font-sans text-[10px] uppercase tracking-widest text-foreground/80 hover:text-accent-burgundy border border-border-beige px-3 py-1.5 rounded-sm">
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
}
