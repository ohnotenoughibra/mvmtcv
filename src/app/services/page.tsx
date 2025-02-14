import Image from 'next/image';
import Link from 'next/link';

// ServiceCard Component (Modular)
const ServiceCard = ({ service }: { service: any }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image Container */}
      <div className="relative w-full aspect-[9/16]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

// ServicesPage Component
export default function ServicesPage() {
  const services = [
    {
      title: 'Personal Training',
      description: 'Individuelles Training, maßgeschneidert auf Ihre persönlichen Ziele.',
      image: '/images/services/personal-training.jpg',
      features: [
        'Individueller Trainingsplan',
        'Trainingsplanung',
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
        'Team-Motivation',
        'Flexible Zeiten',
      ],
    },
    {
      title: 'Trainingsplanung',
      description: 'Professionelle Erstellung von individuellen Trainingsplänen für Ihre Ziele.',
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
      description: 'Effektive Techniken für mehr Sicherheit im Alltag.',
      image: '/images/services/self-defense.jpg',
      features: [
        'Grundtechniken',
        'Praxisnahe Übungen',
        'Mentales Training',
        'Alle Fitnesslevel',
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Entdecken Sie unsere vielfältigen Trainingsangebote und finden Sie das perfekte Programm
            für Ihre Fitnessziele.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt ein kostenloses Erstgespräch und lassen Sie uns gemeinsam Ihre
            Fitnessziele erreichen.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </main>
  );
}