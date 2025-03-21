import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Movement Cave',
  description: 'Professionelles Training im Herzen des Stubaitals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* Preload critical images */}
        <link
          rel="preload"
          href="/images/hero-mobile.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/images/hero-desktop.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/images/logo.png"
          as="image"
        />
        
        {/* Prefetch important images that will be needed soon */}
        <link
          rel="prefetch"
          href="/images/about-gym.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="prefetch"
          href="/images/trainer.jpg"
          as="image"
          type="image/jpeg"
        />
        
        {/* Add proper viewport meta tag for mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}