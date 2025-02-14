'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Haben Sie Fragen? Wir sind hier, um Ihnen zu helfen.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Kontaktinformationen</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-gray-600">Stubaital, Österreich</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <p className="text-gray-600">+43 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@movementcave.at</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Öffnungszeiten</h2>
              <div className="space-y-2 text-gray-600">
                <p>Montag - Freitag: 06:00 - 22:00</p>
                <p>Samstag: 08:00 - 18:00</p>
                <p>Sonntag: 09:00 - 14:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Schreiben Sie uns</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}