// src/app/impressum/page.tsx
export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-600">
            Clemens Gernot Pichler<br />
            Habichtsgasse 2<br />
            6167 Neustift im Stubaital, Tirol<br />
            Österreich
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
          <p className="text-gray-600">
            E-Mail: <a href="mailto:movementcave123@gmail.com">movementcave123@gmail.com</a>
          </p>
        </section>


        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Gewerbliche Informationen</h2>
          <p className="text-gray-600">
            Rechtsform: Einzelunternehmen<br />
            Gewerbewortlaut: [z. B. Personal Training, Bewegungstherapie oder ähnliches – bitte spezifizieren]<br />
            Gewerbebeginn: [Datum einfügen, z. B. 01.01.2023 – bitte spezifizieren]<br />
            Kammerzugehörigkeit: Mitglied der Wirtschaftskammer Tirol<br />
            Gewerbebehörde: Bezirkshauptmannschaft Innsbruck-Land<br />
            Anwendbare Rechtsvorschriften: Gewerbeordnung 1994 (abrufbar unter{" "}
            <a href="https://www.ris.bka.gv.at" target="_blank" className="text-blue-600 hover:underline">
              www.ris.bka.gv.at
            </a>)
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt</h2>
          <p className="text-gray-600">
            Clemens Pichler<br />
            Habichtsgasse 2<br />
            6167 Neustift im Stubaital, Tirol, Österreich
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
          <p className="text-gray-600">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p className="text-gray-600 mt-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Haftungsausschluss</h2>
          <p className="text-gray-600">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </section>
      </div>
    </main>
  );
}