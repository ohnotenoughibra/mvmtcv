'use client';

import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const formRef = useRef(null);
  
  // Improved form submission with better error handling and feedback
  const handleSubmit = async (e: { preventDefault: () => void; currentTarget: any; }) => {
    e.preventDefault();
    
    // Reset previous status
    setSubmitStatus('idle');
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Convert FormData to URL encoded string
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, value.toString());
      });
      
      // Add form name for Netlify
      params.append('form-name', 'contact');
      
      // Submit with timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }
      
      form.reset();
      setSubmitStatus('success');
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        if (setSubmitStatus) {
          setSubmitStatus('idle');
        }
      }, 5000);
      
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
                  <p className="text-neutral-300">Habichtsgasse 2 6167 Neustift im Stubaital, Tirol Österreich</p>
                </div>
              </div>

              <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md flex items-start space-x-6 hover:shadow-xl transition-all duration-300">
                <div className="bg-red-900/30 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telefon</h3>
                  <a href="tel:+436766821139" className="text-neutral-300 hover:text-red-400 transition-colors">
                    +43 676 682 1139
                  </a>
                </div>
              </div>

              <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md flex items-start space-x-6 hover:shadow-xl transition-all duration-300">
                <div className="bg-red-900/30 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:movementcave123@gmail.com" className="text-neutral-300 hover:text-red-400 transition-colors">
                    movementcave123@gmail.com
                  </a>
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
                    href="https://wa.me/436766821139?text=Hello%20Movement%20Cave%21%20I%20have%20a%20question."
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
          <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Schreib mir</h2>
            <div className="w-16 h-1 bg-red-600 mb-8"></div>
            
            <form 
              ref={formRef}
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
                  Name <span className="text-red-600">*</span>
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
                  Email <span className="text-red-600">*</span>
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
                  Betreff <span className="text-red-600">*</span>
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
                  Nachricht <span className="text-red-600">*</span>
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
                className={`w-full mt-4 bg-red-600 text-white py-4 rounded-lg transition-all duration-300 shadow-md ${
                  isSubmitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-red-700 hover:shadow-lg active:transform active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wird gesendet...
                  </span>
                ) : 'Nachricht senden'}
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
                    Es gab einen Fehler beim Senden deiner Nachricht. Bitte versuche es später noch einmal oder kontaktiere mich direkt per Telefon.
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