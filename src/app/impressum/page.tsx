import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum - sevven',
  description: 'Rechtliche Hinweise und Angaben gemäß § 5 TMG',
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:underline inline-flex items-center mb-8">
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-3xl font-bold mb-6">Impressum</h1>
          <div className="h-1 w-24 bg-blue-600 mb-8"></div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">sevven</h3>
              <p>Inhaber: Emre Yurtseven</p>
              <p>Innsbrucker Straße 47A</p>
              <p>10825 Berlin</p>
              <p>Deutschland</p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Kontakt</h3>
              <p>Telefon: +49 177 9214352</p>
              <p>E-Mail: <a href="mailto:kontakt@sevven.de" className="text-blue-600 hover:underline">kontakt@sevven.de</a></p>
            </div>
            
            {/* NOT YET A BUSINESS */}
            {/* <div>
              <h3 className="text-xl font-medium mb-2">Umsatzsteuer-ID</h3>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p></p>
            </div> */}

            <div>
              <h3 className="text-xl font-medium mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p>Emre Yurtseven</p>
              <p>Innsbrucker Straße 47A</p>
              <p>10825 Berlin</p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-medium mb-2">Haftungsausschluss</h3>
              <p className="mb-4">
                <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p>
                <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
