'use client';

import Link from 'next/link';
import { Instagram as InstagramIcon, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative inline-block">
              Movement Cave
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600"></div>
            </h3>
            <p className="text-neutral-400 leading-relaxed mt-6">
              Professionelles Training im Herzen des Stubaitals.
            </p>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center text-red-400 group mt-2"
            >
              <span>Kontakt aufnehmen</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600"></div>
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <Link 
                  href="/about" 
                  className="text-neutral-400 hover:text-red-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  <span>Über uns</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-neutral-400 hover:text-red-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  <span>Leistungen</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-neutral-400 hover:text-red-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  <span>Galerie</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-neutral-400 hover:text-red-400 transition-colors inline-flex items-center group"
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  <span>Kontakt</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative inline-block">
              Kontakt
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600"></div>
            </h3>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start text-neutral-400">
                <MapPin className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                <span>Stubaital, Österreich</span>
              </li>
              <li className="flex items-start text-neutral-400">
                <Mail className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                <a href="mailto:movementcave123@gmail.com" className="hover:text-red-400 transition-colors">
                  movementcave123@gmail.com
                </a>
              </li>
              <li className="flex items-start text-neutral-400">
                <Phone className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-1" />
                <a href="tel:+43676682139" className="hover:text-red-400 transition-colors">
                  +43 676 6821139
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold relative inline-block">
              Social Media
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600"></div>
            </h3>
            <div className="mt-6">
              <a 
                href="https://instagram.com/movementcave_training" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
              >
                <div className="bg-neutral-800 hover:bg-red-900/30 p-4 rounded-lg inline-flex items-center space-x-3 transition-colors">
                  <InstagramIcon size={24} className="text-red-400" />
                  <span className="text-neutral-400 group-hover:text-white transition-colors">@movementcave_training</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Movement Cave. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/impressum" className="hover:text-red-400 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-red-400 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}