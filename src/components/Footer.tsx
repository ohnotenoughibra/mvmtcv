// src/components/Footer.tsx
import Link from 'next/link';
import { Instagram as InstagramIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Movement Cave</h3>
            <p className="text-gray-400">
              Professionelles Training im Herzen des Stubaitals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-500 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Stubaital, Österreich</li>
              <li>movementcave123@gmail.com</li>
              <li>+43 123 456 789</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <a 
              href="https://instagram.com/movementcave_training" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <InstagramIcon size={20} />
              <span>@movementcave_training</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/impressum" className="hover:text-red-500 transition-colors">
              Impressum
            </Link>
            <span>|</span>
            <Link href="/datenschutz" className="hover:text-red-500 transition-colors">
              Datenschutz
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Movement Cave. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}