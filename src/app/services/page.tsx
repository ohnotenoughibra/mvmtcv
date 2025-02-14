import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Personal Training',
      description: 'Individuelles Training, maßgeschneidert auf Ihre persönlichen Ziele.',
      image: '/images/services/personal-training.jpg',
      features: [
        'Individueller Trainingsplan',
        'Ernährungsberatung',
        'Fortschrittskontrolle',
        'Flexible Terminplanung'
      ]
    },
    {
      title: 'Gruppentraining',
      description: 'Motivierendes Training in der Gruppe für mehr Spaß und Erfolg.',
      image: '/images/services/group-training.jpg',
      features: [
        'Kleine Gruppengrößen',
        'Verschiedene Fitnesslevel',
        'Team-Motivation',
        'Flexible Zeiten'
      ]
    },
    {
      title: 'Ernährungscoaching',
      description: 'Optimale Ernährung für Ihre Fitnessziele.',
      image: '/images/services/nutrition.jpg',
      features: [
        'Ernährungsanalyse',
        'Personalisierte Pläne',
        'Einkaufslisten',
        'Regelmäßige Anpassung'
      ]
    },
    {
      title: 'Selbstverteidigung',
      description: 'Effektive Techniken für mehr Sicherheit im Alltag.',
      image: '/images/services/self-defense.jpg',
      features: [
        'Grundtechniken',
        'Praxisnahe Übungen',
        'Mentales Training',
        'Alle Fitnesslevel'
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Entdecken Sie unsere vielfältigen Trainingsangebote und finden Sie das
            perfekte Programm für Ihre Fitnessziele.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image Container with 9:16 aspect ratio */}
              <div className="relative w-full" style={{ paddingTop: '177.78%' }}> {/* 9:16 aspect ratio */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2} // Load first two images immediately
                  />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t">
                <Link 
                  href="/contact#contact-form"
                  className="block w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-center"
                >
                  Jetzt Buchen
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt ein kostenloses Erstgespräch und lassen Sie uns
            gemeinsam Ihre Fitnessziele erreichen.
          </p>
          <Link 
            href="/contact#contact-form"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </main>
  );
}