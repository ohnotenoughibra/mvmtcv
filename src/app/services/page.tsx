'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

// ServiceCard Component (Modernized with improved image loading)
const ServiceCard = ({ service }: { service: Service }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-neutral-800 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {/* Image Container with background placeholder */}
      <div className="relative w-full aspect-video">
        {/* Dark background placeholder while image loads */}
        <div className="absolute inset-0 bg-neutral-700"></div>
        
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          onLoadingComplete={() => setImageLoaded(true)}
          loading="eager" // Force eager loading for visibility
          className={`object-cover group-hover:scale-105 transition-transform duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-bold">{service.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-neutral-300 mb-6 leading-relaxed">{service.description}</p>
        <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
        <ul className="space-y-4 mb-6">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start text-neutral-300">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact#contact-form"
          className="inline-flex items-center text-red-400 group"
        >
          <span>Mehr erfahren</span>
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// ServicesPage Component with improved image handling
export default function ServicesPage() {
  const services = [
    {
      title: 'Personal Training',
      description: 'Individuelles Training, maßgeschneidert auf deine persönlichen Ziele.',
      image: '/images/services/personal-training.jpg',
      features: [
        'Professionelles Coaching und Beratung',
        'Individueller Trainingsplan',
        'Fortschrittskontrolle',
        'Flexible Terminplanung',
      ],
    },
    {
      title: 'Gruppentraining',
      description: 'Motivierendes Training in der Gruppe für mehr Spaß und Erfolg.',
      image: '/images/services/group-training.jpg',
      features: [
        'Kleine Gruppengrößen',
        'Verschiedene Fitnesslevel',
        'Teamtraining',
        'Flexible Zeiten',
      ],
    },
    {
      title: 'Trainingsplanung',
      description: 'Professionelle Erstellung von individuellen Trainingsplänen für deine Ziele.',
      image: '/images/services/trainingsplanung.jpg',
      features: [
        'Individuelle Trainingspläne',
        'Zielorientierte Planung',
        'Regelmäßige Anpassungen',
        'Unterstützung für alle Fitnesslevel',
      ],
    },
    {
      title: 'Selbstverteidigung',
      description: 'Effektive Techniken für mehr Selbstvertrauen im Alltag und Sicherheit in Konfliktsituationen.',
      image: '/images/services/self-defense.jpg',
      features: [
        'Grundtechniken',
        'Praxisnahe Übungen',
        'Mentales Training',
        'Alle Fitnesslevel',
      ],
    },
  ];

  // Fixed preloading function that uses the browser's Image constructor properly
  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      services.forEach(service => {
        const imgLoader = document.createElement('img');
        imgLoader.src = service.image;
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero Section with skewed background */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-red-800 skew-y-[-3deg] origin-top-left transform-gpu -translate-y-16"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Leistungen
            </h1>
            <div className="w-24 h-1 bg-red-400 mb-8"></div>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Lerne meine vielfältigen Trainingsangebote kennen und finde das passende Programm für deine Fitnessziele!
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid with improved spacing */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* CTA Section with perspective design */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-neutral-900 skew-y-[-3deg] origin-top-right transform-gpu -translate-y-16"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/80">
            Vereinbare jetzt ein kostenloses Erstgespräch und lass uns gemeinsam deine Fitnessziele erreichen.
          </p>
          <Link 
            href="/contact#contact-form"
            className="inline-flex items-center bg-white hover:bg-neutral-100 text-red-600 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-xl group"
          >
            <span>Kontakt aufnehmen</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}