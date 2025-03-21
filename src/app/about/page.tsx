'use client';

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
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero Section with skewed background */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-red-800 skew-y-[-3deg] origin-top-left transform-gpu -translate-y-16"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Movement Cave
            </h1>
            <div className="w-24 h-1 bg-red-400 mb-8"></div>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Der Treffpunkt für alle mit einer Leidenschaft für Bewegung, körperliche und mentale Fitness im Herzen des Stubaitals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Story Section with improved typography and spacing */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Movement Cave - die Idee...</h2>
            <div className="w-16 h-1 bg-red-600 mb-8"></div>
            <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
              mit persönlicher Betreuung verbindet und dabei auch ein Augenmerk auf natürliche Bewegungsformen und das Erkunden neuer Bewegungen legt.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Mein Ansatz basiert auf wissenschaftlichen Erkenntnissen und praktischer Erfahrung verpackt in spannende Trainingseinheiten. In der Movement Cave vereine ich
              funktionelles Training mit modernen Trainingsmethoden, angepasst an Ihre 
              persönlichen Ziele und Bedürfnisse.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about-gym.jpg"
              alt="Movement Cave Studio"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAgEDBQAAAAAAAAAAAAABAgMRBAASITFBUWGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AcZDkdNJFLGVQB3brSCvd0O/9rlJ45FjYqwlK1YB4N++upM4xrFimlrEUY27VNn5pSlAb1ztbR2//2Q=="
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Coach Section - Fixed layout to prevent image overlay */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ihr Coach</h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-16">
            Erfahrung, Fachwissen und Leidenschaft für effektives Training.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Image column - kept separate from text content */}
            <div className="w-full h-full">
              <div className="relative aspect-square md:aspect-[3/4] w-full h-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/trainer.jpg"
                  alt="Clemens Pichler"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAgEDBQAAAAAAAAAAAAABAgMRBAASITFBUWGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AcZDkdNJFLGVQB3brSCvd0O/9rlJ45FjYqwlK1YB4N++upM4xrFimlrEUY27VNn5pSlAb1ztbR2//2Q=="
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Text content column - completely separate from image */}
            <div className="w-full h-full flex flex-col">
              <h3 className="text-3xl font-bold mb-4">Clemens Pichler</h3>
              <div className="w-12 h-1 bg-red-600 mb-8"></div>
              <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
                Als Sportwissenschaftler und erfahrener Personal Trainer verbinde ich 
                wissenschaftliche Expertise mit praktischer Erfahrung. Mein Background
                im Kampfsport und die intensive Arbeit im Leistungs- und Gesundheitssport 
                ermöglichen es mir, ein breites Spektrum an Trainingsmethoden anzubieten.
              </p>

              <div className="mb-10 bg-neutral-800 text-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <GraduationCap className="mr-3 text-red-400 w-6 h-6" />
                  Ausbildung
                </h4>
                <ul className="space-y-4">
                  {education.map((edu, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">
                          {edu.title}
                        </span>
                        <span className="text-neutral-300 ml-2 text-sm">({edu.year})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <Trophy className="mr-3 text-red-400 w-6 h-6" />
                  Qualifikationen & Erfahrung
                </h4>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-red-400 flex-shrink-0 mt-1" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with visual depth */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-red-800 skew-y-[-3deg] origin-top-right transform-gpu -translate-y-16"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Bereit für Ihr persönliches Training?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Vereinbaren Sie ein kostenloses Erstgespräch und lassen Sie uns gemeinsam 
            Ihre Fitnessziele erreichen.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center bg-white hover:bg-neutral-100 text-red-600 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-xl group"
          >
            <span>Termin vereinbaren</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}