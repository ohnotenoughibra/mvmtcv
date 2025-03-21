'use client';

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero Section with skewed background */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-red-800 skew-y-[-3deg] origin-top-left transform-gpu -translate-y-16"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Datenschutzerklärung
            </h1>
            <div className="w-24 h-1 bg-red-400 mb-8"></div>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Informationen zur Verarbeitung Ihrer Daten
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">1. Datenschutz auf einen Blick</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
              <p className="text-neutral-300 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">2. Verantwortlicher</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <p className="text-neutral-300 leading-relaxed">
                Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <span className="text-white">Movement Cave</span><br />
                Clemens Pichler<br />
                Dorfstraße 12<br />
                6167 Stubaital<br />
                Österreich<br /><br />
                Telefon: <span className="text-red-400">+43 664 1234567</span><br />
                E-Mail: <span className="text-red-400">movementcave123@gmail.com</span>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">3. Datenerfassung auf unserer Website</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            
            <div className="mb-6 bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Kontaktformular</h3>
              <p className="text-neutral-300 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">Cookies</h3>
              <p className="text-neutral-300 leading-relaxed">
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem 
                Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver 
                und sicherer zu machen.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">4. Ihre Rechte</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <p className="text-neutral-300 leading-relaxed mb-4">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="space-y-3">
                {[
                  'Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten',
                  'Die Berichtigung unrichtiger personenbezogener Daten zu verlangen',
                  'Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen',
                  'Die Einschränkung der Datenverarbeitung zu verlangen',
                  'Der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen',
                  'Ihr Recht auf Datenübertragbarkeit geltend zu machen'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">5. SSL- bzw. TLS-Verschlüsselung</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <p className="text-neutral-300 leading-relaxed flex items-start">
                <svg className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>
                  Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. 
                  Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers 
                  von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </span>
              </p>
            </div>
          </section>

          <div className="text-sm text-neutral-500 mt-16 pt-6 border-t border-neutral-200">
            Stand: {new Date().toLocaleDateString('de-AT')}
          </div>
        </div>
      </div>
    </main>
  );
}