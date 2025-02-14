// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, GraduationCap, Trophy } from 'lucide-react';

export default function AboutPage() {
  const education = [
    {
      title: 'BSc Sportwissenschaft',
      year: '2019'
    },
    {
      title: 'BEd Lehramt Bewegung und Sport/Inklusionspädagogik',
      year: '2022'
    },
    {
      title: 'Dipl. Functional Strength Master Trainer',
      year: '2022'
    }
  ];

  const achievements = [
    'Brazilian Jiu Jitsu Braungurt',
    'Umfassende Wettkampferfahrung in verschiedenen Kampfsportarten',
    'Jahrelange Erfahrung in Personal Training',
    'Spezialist für Leistungs- und Gesundheitsport'
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Movement Cave
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Die Geschichte einer Leidenschaft für funktionelles Training im Herzen des Stubaitals.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Die Movement Cave Story</h2>
            <p className="text-gray-600 mb-4">
              Die Movement Cave entstand aus meiner Vision, ein einzigartiges Trainingskonzept 
              ins Stubaital zu bringen. Mit einem fundierten sportwissenschaftlichen Hintergrund 
              und jahrelanger Erfahrung im Kampfsport war es mein Ziel, einen Ort zu schaffen, 
              der professionelles Training mit persönlicher Betreuung verbindet.
            </p>
            <p className="text-gray-600">
              Mein Ansatz basiert auf wissenschaftlichen Erkenntnissen und praktischer Erfahrung, 
              kombiniert mit individueller Betreuung. In der Movement Cave vereinen wir 
              funktionelles Training mit modernen Trainingsmethoden, angepasst an Ihre 
              persönlichen Ziele und Bedürfnisse.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-gym.jpg"
              alt="Movement Cave Studio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Coach Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Ihr Coach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/trainer.jpg"
                alt="Clemens Pichler"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Clemens Pichler</h3>
              <p className="text-gray-600 mb-8">
                Als Sportwissenschaftler und erfahrener Personal Trainer verbinde ich 
                wissenschaftliche Expertise mit praktischer Erfahrung. Mein Hintergrund 
                im Kampfsport und die intensive Arbeit im Leistungs- und Gesundheitssport 
                ermöglichen es mir, ein breites Spektrum an Trainingsmethoden anzubieten.
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="mr-2 text-red-600" />
                  Ausbildung
                </h4>
                <ul className="space-y-3">
                  {education.map((edu, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-600 flex-shrink-0" />
                      <span>
                        {edu.title}
                        <span className="text-gray-500 ml-2">({edu.year})</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Trophy className="mr-2 text-red-600" />
                  Qualifikationen & Erfahrung
                </h4>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-600 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Bereit für Ihr persönliches Training?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie ein kostenloses Erstgespräch und lassen Sie uns gemeinsam 
            Ihre Fitnessziele erreichen.
          </p>
          <Link
            href="/contact#contact-form"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Termin vereinbaren
          </Link>
        </div>
      </div>
    </main>
  );
}