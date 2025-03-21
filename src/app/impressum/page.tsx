'use client';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero Section with skewed background */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-red-800 skew-y-[-3deg] origin-top-left transform-gpu -translate-y-16"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Impressum
            </h1>
            <div className="w-24 h-1 bg-red-400 mb-8"></div>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Rechtliche Informationen und Angaben zum Seitenbetreiber
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Angaben gemäß § 5 TMG</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <p className="text-neutral-300 leading-relaxed">
                <span className="text-white font-medium">Clemens Gernot Pichler</span><br />
                Habichtsgasse 2<br />
                6167 Neustift im Stubaital, Tirol<br />
                Österreich
              </p>
            </div>
          </section>

          <section className="mb-12">
  <h2 className="text-2xl font-bold mb-6 text-neutral-800">Kontakt</h2>
  <div className="w-16 h-1 bg-red-600 mb-6"></div>
  <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
    <p className="text-neutral-300 leading-relaxed mb-3">
      E-Mail: <a href="mailto:movementcave123@gmail.com" className="text-red-400 hover:underline transition-colors">movementcave123@gmail.com</a>
    </p>
    <p className="text-neutral-300 leading-relaxed">
      Telefon: <a href="tel:+436766821139" className="text-red-400 hover:underline transition-colors">+43 676 682 1139</a>
    </p>
  </div>
</section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Gewerbliche Informationen</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <p className="text-neutral-300 leading-relaxed">
                <span className="text-white font-medium">Rechtsform:</span> Einzelunternehmen<br />
                <span className="text-white font-medium">Gewerbewortlaut:</span> [z. B. Personal Training, Bewegungstherapie oder ähnliches – bitte spezifizieren]<br />
                <span className="text-white font-medium">Gewerbebeginn:</span> [Datum einfügen, z. B. 01.01.2023 – bitte spezifizieren]<br />
                <span className="text-white font-medium">Kammerzugehörigkeit:</span> Mitglied der Wirtschaftskammer Tirol<br />
                <span className="text-white font-medium">Gewerbebehörde:</span> Bezirkshauptmannschaft Innsbruck-Land<br />
                <span className="text-white font-medium">Anwendbare Rechtsvorschriften:</span> Gewerbeordnung 1994 (abrufbar unter{" "}
                <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline transition-colors">
                  www.ris.bka.gv.at
                </a>)
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Verantwortlich für den Inhalt</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <p className="text-neutral-300 leading-relaxed">
                <span className="text-white font-medium">Clemens Pichler</span><br />
                Habichtsgasse 2<br />
                6167 Neustift im Stubaital, Tirol, Österreich
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Streitschlichtung</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <p className="text-neutral-300 leading-relaxed mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-6 text-neutral-800">Haftungsausschluss</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-md">
              <p className="text-neutral-300 leading-relaxed">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
                externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
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