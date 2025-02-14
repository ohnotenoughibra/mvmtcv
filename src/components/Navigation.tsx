'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'; // Import the Image component

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Über uns', href: '/about' },
    { name: 'Leistungen', href: '/services' },
    { name: 'Galerie', href: '/gallery' },
    { name: 'Kontakt', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png" // Path to your logo in the public folder
              alt="Movement Cave Logo"
              width={64} // Adjust width as needed
              height={15} // Adjust height as needed
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-red-600 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-red-600"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}