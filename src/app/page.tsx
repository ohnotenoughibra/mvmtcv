'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dumbbell, Users, Shield, Notebook } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  // Add state to track image loading
  const [imagesLoaded, setImagesLoaded] = useState({
    mobile: false,
    desktop: false
  });

  // State to track viewport width for responsive behavior testing
  const [isMobile, setIsMobile] = useState(false);

  // Update mobile state on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check immediately
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: 'Personal Training',
      description: 'Individuelles Training, maßgeschneidert auf Ihre Ziele.',
      icon: <Dumbbell className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Gruppentraining',
      description: 'Motivierendes Training in der Gruppe.',
      icon: <Users className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Trainingsplanung',
      description: 'Professionelle Erstellung von individuellen Trainingsplänen für Ihre Ziele.',
      icon: <Notebook className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Selbstverteidigung',
      description: 'Effektive Techniken für mehr Sicherheit.',
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  // Function to handle image load complete
  const handleImageLoad = (type) => {
    setImagesLoaded(prev => ({
      ...prev,
      [type]: true
    }));
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-red-600 selection:text-white">
      {/* Hero Section - Full height with parallax effect */}
      <div className="relative h-screen overflow-hidden">
        {/* Mobile Hero Image - With direct visibility control and simplified placeholder */}
        <div className={`absolute inset-0 scale-[1.02] ${isMobile ? 'block' : 'hidden'}`}>
          <div className="absolute inset-0 bg-neutral-800" /> {/* Placeholder background */}
          <Image
            src="/images/hero-mobile.jpg"
            alt="Movement Cave Hero"
            fill
            priority={true}
            sizes="100vw"
            quality={85}
            onLoadingComplete={() => handleImageLoad('mobile')}
            className="object-cover transition-transform duration-1000 transform-gpu"
          />
        </div>
        
        {/* Desktop Hero Image - With direct visibility control and simplified placeholder */}
        <div className={`absolute inset-0 scale-[1.02] ${!isMobile ? 'block' : 'hidden'}`}>
          <div className="absolute inset-0 bg-neutral-800" /> {/* Placeholder background */}
          <Image
            src="/images/hero-desktop.jpg"
            alt="Movement Cave Hero"
            fill
            priority={true}
            sizes="100vw"
            quality={85}
            onLoadingComplete={() => handleImageLoad('desktop')}
            className="object-cover transition-transform duration-1000 transform-gpu"
          />
        </div>
        
        {/* Gradient overlay with softer blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
        
        {/* Hero Content with animated fade-in */}
        <div className="relative h-full flex items-center justify-center z-20">
          <div className="text-center text-white px-6 max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Movement Cave
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto">
              Professionelles Training im Herzen des Stubaitals
            </p>
            <Link 
              href="/contact#contact-form"
              className="group inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Kostenlose Probestunde</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Rest of your content remains the same */}
      {/* Services Section */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Unsere Leistungen
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-16">
            Professionelle Trainingsmöglichkeiten, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-neutral-800 text-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-700 hover:-translate-y-1"
              >
                <div className="bg-red-900/30 p-4 rounded-lg inline-flex mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-300">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/services"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group"
            >
              <span>Alle Leistungen ansehen</span>
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        {/* Rest of your component remains unchanged */}
      </div>
    </main>
  );
}