'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Über uns', href: '/about' },
    { name: 'Leistungen', href: '/services' },
    { name: 'Galerie', href: '/gallery' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-neutral-900 shadow-xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-10">
            <Image
              src="/images/logo.png"
              alt="Movement Cave Logo"
              width={45}
              height={7}
              className={`object-contain transition-opacity duration-300 ${
                scrolled ? 'opacity-100' : 'opacity-90'
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group ${
                  isActive(link.href)
                    ? 'text-red-400 font-medium'
                    : 'text-white hover:text-red-400'
                } transition-colors`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button on Desktop */}
          <Link 
            href="/contact#contact-form"
            className="hidden md:flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg"
          >
            <span>Kostenlose Probestunde</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="md:hidden text-white hover:text-red-400 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-neutral-900 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 border-t border-neutral-800' : 'max-h-0'
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block transition-colors ${
                  isActive(link.href)
                    ? 'text-red-400 font-medium'
                    : 'text-white hover:text-red-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link 
                href="/contact#contact-form"
                className="inline-block w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg text-sm font-medium text-center transition-colors"
              >
                Kostenlose Probestunde
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}