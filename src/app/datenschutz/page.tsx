export default function DatenschutzPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-semibold mb-2">Allgemeine Hinweise</h3>
          <p className="text-gray-600 mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Verantwortlicher</h2>
          <p className="text-gray-600 mb-4">
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Movement Cave<br />
            Clemens Pichler<br />
            Dorfstraße 12<br />
            6167 Stubaital<br />
            Österreich<br /><br />
            Telefon: +43 664 1234567<br />
            E-Mail: info@movementcave.at
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Datenerfassung auf unserer Website</h2>
          
          <h3 className="text-lg font-semibold mb-2">Kontaktformular</h3>
          <p className="text-gray-600 mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
            wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3 className="text-lg font-semibold mb-2">Cookies</h3>
          <p className="text-gray-600 mb-4">
            Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem 
            Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver 
            und sicherer zu machen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Ihre Rechte</h2>
          <p className="text-gray-600 mb-4">
            Sie haben jederzeit das Recht:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Die Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
            <li>Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
            <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
            <li>Der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen</li>
            <li>Ihr Recht auf Datenübertragbarkeit geltend zu machen</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. SSL- bzw. TLS-Verschlüsselung</h2>
          <p className="text-gray-600">
            Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. 
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers 
            von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.

</p>
        </section>

        <div className="text-sm text-gray-500 mt-12">
          Stand: {new Date().toLocaleDateString('de-AT')}
        </div>
      </div>
    </main>
  );
}