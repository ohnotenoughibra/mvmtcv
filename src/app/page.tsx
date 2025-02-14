// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Dumbbell, Users, Shield, Notebook } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Personal Training',
      description: 'Individuelles Training, maßgeschneidert auf Ihre Ziele.',
      icon: <Dumbbell className="w-6 h-6" />
    },
    {
      title: 'Gruppentraining',
      description: 'Motivierendes Training in der Gruppe.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Trainingsplanung',
      description: 'IProfessionelle Erstellung von individuellen Trainingsplänen für Ihre Ziele.',
      icon: <Notebook className="w-6 h-6" />
    },
    {
      title: 'Selbstverteidigung',
      description: 'Effektive Techniken für mehr Sicherheit.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[150vh]">
        <Image
          src="/images/hero.jpg"
          alt="Movement Cave Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Hero Content */}
        <div className="relative pt-32 flex items-start justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Movement Cave
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professionelles Training im Herzen des Stubaitals
            </p>
            <Link 
              href="/contact#contact-form"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all"
            >
              Kostenlose Probestunde
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Unsere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all"
            >
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-gym.jpg"
                alt="Movement Cave Gym"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Willkommen bei Movement Cave
              </h2>
              <p className="text-gray-600 mb-6">
                Im Herzen des Stubaitals bieten wir professionelles Training in einer 
                motivierenden Atmosphäre. Unser erfahrenes Team unterstützt Sie dabei, 
                Ihre persönlichen Fitnessziele zu erreichen.
              </p>
              <Link 
                href="/about"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all"
              >
                Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-black to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Starten Sie Ihre Fitness-Journey mit einem kostenlosen Erstgespräch.
          </p>
          <Link 
            href="/contact#contact-form"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Jetzt Termin vereinbaren
          </Link>
        </div>
      </div>

      {/* Gallery Preview */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Einblicke in unser Studio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={`/images/gallery/gym-${num}.jpg`}
                  alt={`Gym Preview ${num}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/gallery"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all"
            >
              Galerie ansehen
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}