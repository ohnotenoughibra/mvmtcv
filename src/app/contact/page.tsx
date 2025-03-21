'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, value.toString());
      });
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      });
      
      form.reset();
      setSubmitStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero Section with skewed background */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-red-800 skew-y-[-3deg] origin-top-left transform-gpu -translate-y-16"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Kontaktiere mich
            </h1>
            <div className="w-24 h-1 bg-red-400 mb-8"></div>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Hast du Fragen? Ich bin hier, um dir zu helfen.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information with dark-themed cards */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Kontaktinformationen</h2>
            <div className="w-16 h-1 bg-red-600 mb-8"></div>
            <div className="space-y-6">
              <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md flex items-start space-x-6 hover:shadow-xl transition-all duration-300">
                <div className="bg-red-900/30 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                  <p className="text-neutral-300">Stubaital, Österreich</p>
                </div>
              </div>

              <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md flex items-start space-x-6 hover:shadow-xl transition-all duration-300">
                <div className="bg-red-900/30 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telefon</h3>
                  <p className="text-neutral-300">+43 676 682 1139</p>
                </div>
              </div>

              <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md flex items-start space-x-6 hover:shadow-xl transition-all duration-300">
                <div className="bg-red-900/30 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-neutral-300">movementcave123@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp Link */}
              <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md flex items-start space-x-6 hover:shadow-xl transition-all duration-300">
                <div className="bg-red-900/30 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/436606309501?text=Hello%20Movement%20Cave%21%20I%20have%20a%20question."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-red-400 transition-colors"
                  >
                    +43 676 682 1139
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with modern styling */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Schreib mir</h2>
            <div className="w-16 h-1 bg-red-600 mb-8"></div>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Hidden field for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field to prevent spam */}
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  placeholder="deine-email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  placeholder="+43 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  placeholder="Grund deiner Anfrage"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  placeholder="Deine Nachricht hier..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-4 bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 mt-4 bg-green-100 text-green-700 rounded-lg border border-green-200 animate-fade-in">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Deine Nachricht wurde erfolgreich gesendet. Ich melde mich bald bei dir.
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 mt-4 bg-red-100 text-red-700 rounded-lg border border-red-200 animate-fade-in">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Es gab einen Fehler beim Senden deiner Nachricht. Bitte versuche es später noch einmal.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}