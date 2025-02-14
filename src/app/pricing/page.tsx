import { Check } from 'lucide-react';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface Plan {
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  highlight?: boolean;
}

interface Service {
  name: string;
  description: string;
  price: number;
  period: string;
}

const PricingPage = () => {
  const plans: Plan[] = [
    // ... (same as before)
  ];

  const services: Service[] = [
    // ... (same as before)
  ];

  return (
    <main className="min-h-screen pt-16">
      <Head>
        <title>Preise & Mitgliedschaften - Fitnessstudio</title>
        <meta name="description" content="Transparente Preise für Ihr individuelles Fitnessziel. Entdecken Sie unsere Mitgliedschaften und Einzelleistungen." />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Preise & Mitgliedschaften
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Transparente Preise für Ihr individuelles Fitnessziel.
          </p>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Mitgliedschaften</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden ${
                plan.highlight
                  ? 'ring-2 ring-red-600 shadow-xl scale-105'
                  : 'border border-gray-200'
              }`}
            >
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  aria-label={`Start ${plan.name} membership`}
                  className={`w-full py-3 rounded-lg transition-colors ${
                    plan.highlight
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Jetzt starten
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Individual Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Einzelleistungen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-red-600">
                  €{service.price}
                  <span className="text-base font-normal text-gray-600">
                    {service.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Häufige Fragen</h2>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="font-bold mb-2">Gibt es eine Mindestlaufzeit?</h3>
            <p className="text-gray-600">
              Unsere Mitgliedschaften haben eine Mindestlaufzeit von 3 Monaten. Danach können Sie monatlich kündigen.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="font-bold mb-2">Kann ich meine Mitgliedschaft pausieren?</h3>
            <p className="text-gray-600">
              Ja, Sie können Ihre Mitgliedschaft bis zu 2 Monate pro Jahr pausieren.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Bereit durchzustarten?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie ein kostenloses Beratungsgespräch und finden Sie Ihr passendes Paket.
          </p>
          <button
            aria-label="Termin vereinbaren"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Termin vereinbaren
          </button>
        </div>
      </div>
    </main>
  );
};

export default Pricing;