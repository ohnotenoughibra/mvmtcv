'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dumbbell, Users, Shield, Notebook } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
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
      icon: <Dumbbell className="w-6 h-6 text-red-400" />,
      slug: 'personal-training'
    },
    {
      title: 'Gruppentraining',
      description: 'Motivierendes Training in der Gruppe.',
      icon: <Users className="w-6 h-6 text-red-400" />,
      slug: 'gruppentraining'
    },
    {
      title: 'Trainingsplanung',
      description: 'Professionelle Erstellung von individuellen Trainingsplänen für Ihre Ziele.',
      icon: <Notebook className="w-6 h-6 text-red-400" />,
      slug: 'trainingsplanung'
    },
    {
      title: 'Selbstverteidigung',
      description: 'Effektive Techniken für mehr Sicherheit.',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      slug: 'selbstverteidigung'
    }
  ];

  // Function to handle image load
  const handleImageLoad = (type: string) => {
    console.log(`Image loaded: ${type}`);
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

      {/* Services Section with card hover effects and links */}
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
              <Link 
                key={index} 
                href={`/services#${service.slug}`}
                className="block h-full"
              >
                <div 
                  className="bg-neutral-800 text-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-700 hover:-translate-y-1 cursor-pointer h-full group"
                >
                  <div className="bg-red-900/30 p-4 rounded-lg inline-flex mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-neutral-300 mb-4">{service.description}</p>
                  <div className="text-red-400 inline-flex items-center mt-auto group">
                    <span>Details</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
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

      {/* About Section with staggered design - Optimized Image */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[550px] shadow-2xl order-2 md:order-1">
              <Image
                src="/images/about-gym.jpg"
                alt="Movement Cave Gym"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAgEDBQAAAAAAAAAAAAABAgMRBAASITFBUWGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AcZDkdNJFLGVQB3brSCvd0O/9rlJ45FjYqwlK1YB4N++upM4xrFimlrEUY27VNn5pSlAb1ztbR2//2Q=="
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Willkommen bei Movement Cave
              </h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>
              <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
                Im Herzen des Stubaitals biete ich professionelles Training in einer 
                motivierenden Atmosphäre. Unser erfahrenes Team unterstützt Sie dabei, 
                Ihre persönlichen Fitnessziele zu erreichen.
              </p>
              <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
                Mit modernster Ausstattung und individuellen Trainingskonzepten 
                begleiten wir Sie auf Ihrem Weg zu mehr Fitness und Wohlbefinden.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center group"
              >
                <span className="bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors">Mehr über uns</span>
                <svg className="ml-2 w-4 h-4 text-neutral-900 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with perspective design */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-neutral-900 skew-y-[-3deg] origin-top-right transform-gpu -translate-y-16"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/80">
            Starten Sie Ihre Fitness-Journey mit einem kostenlosen Erstgespräch.
          </p>
          <Link 
            href="/contact#contact-form"
            className="inline-flex items-center bg-white hover:bg-neutral-100 text-red-600 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-xl"
          >
            <span>Jetzt Termin vereinbaren</span>
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Gallery Preview with modern grid and hover effects - Optimized Images */}
      <div className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Einblicke in unser Studio
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-16">
            Entdecken Sie unsere moderne Trainingsumgebung und professionelle Ausstattung.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md">
                <div className="absolute inset-0 bg-neutral-800"></div> {/* Placeholder background */}
                <Image
                  src={`/images/gallery/gym-${num}.jpg`}
                  alt={`Gym Preview ${num}`}
                  fill
                  loading="eager" // Changed from lazy to eager
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  quality={75}
                  onLoadingComplete={() => handleImageLoad(`gallery-${num}`)}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10v4m4-4v4m-7-2h10" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/gallery"
              className="inline-flex items-center bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors group"
            >
              <span>Galerie ansehen</span>
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}