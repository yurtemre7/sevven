'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Smartphone, Code, Lightbulb } from 'lucide-react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative overflow-hidden h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-blue-600">sevven</span> – Flutter Apps, die begeistern
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professionelle Flutter-Entwicklung aus Deutschland. Wir bauen moderne, plattformübergreifende Apps mit Leidenschaft und 5+ Jahren Erfahrung.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="mailto:kontakt@sevven.dev?subject=Anfrage%20zur%20App-Entwicklung&body=Hallo%20sevven%20Team,%0D%0A%0D%20Ich%20interessiere%20mich%20f%C3%BCr%20eine%20Beratung%20zu%20meiner%20App-Idee.%0D%0A%0D%20Kontaktdaten:%0D%20Name:%0D%20Firma:%0D%20Telefon:%0D%0A%0D%20Kurzbeschreibung%20des%20Projekts:%0D%0A%0D%0A"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Kontakt aufnehmen
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Leistungen</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-12 w-12 text-blue-600" />,
                title: 'Individuelle App-Entwicklung',
                description: 'Maßgeschneiderte Flutter-Anwendungen, die genau auf Ihre Anforderungen zugeschnitten sind.'
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
                title: 'Modernisierung',
                description: 'Wir atmen neuen Leben in Ihre veralteten Anwendungen mit modernen Technologien.'
              },
              {
                icon: <Smartphone className="h-12 w-12 text-blue-600" />,
                title: 'Support & Beratung',
                description: 'Fachkundige Beratung und zuverlässiger Support für Ihr laufendes Projekt.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-background p-8 rounded-lg border border-transparent hover:border-blue-600/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
          
          <div className="bg-muted/30 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-6">Schreiben Sie uns eine E-Mail</h3>
            
            <div className="bg-background p-6 rounded-md text-left font-mono text-sm overflow-x-auto">
              <div className="text-purple-600"># E-Mail an das sevven Team</div>
              <div className="mt-2">
                <div className="text-blue-600">An:</div>
                <a href="mailto:kontakt@sevven.dev" className="text-blue-600 hover:underline">
                  kontakt@sevven.dev
                </a>
              </div>
              <div className="mt-4">
                <div className="text-blue-600">Betreff:</div>
                <div>Anfrage zur App-Entwicklung</div>
              </div>
              <div className="mt-4">
                <div className="text-blue-600">Nachricht:</div>
                <div className="whitespace-pre-line mt-1">
                  Hallo sevven Team,

                  Ich interessiere mich für eine Beratung zu meiner App-Idee.

                  Kontaktdaten:
                  Name: [Ihr Name]
                  Firma: [Ihre Firma]
                  Telefon: [Ihre Telefonnummer]

                  Kurzbeschreibung des Projekts:
                  [Hier beschreiben Sie Ihr Projekt kurz]
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="mailto:kontakt@sevven.dev?subject=Anfrage%20zur%20App-Entwicklung&body=Hallo%20sevven%20Team,%0D%0A%0D%20Ich%20interessiere%20mich%20f%C3%BCr%20eine%20Beratung%20zu%20meiner%20App-Idee.%0D%0A%0D%20Kontaktdaten:%0D%20Name:%0D%20Firma:%0D%20Telefon:%0D%0A%0D%20Kurzbeschreibung%20des%20Projekts:%0D%0A%0D%0A"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                E-Mail-Vorlage kopieren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-blue-400">sevven</h2>
              <p className="text-muted-foreground">Flutter App Entwicklung aus Deutschland</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/impressum" className="text-muted-foreground hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-muted-foreground hover:text-white transition-colors">
                Datenschutz
              </Link>
              <a 
                href="mailto:kontakt@sevven.dev" 
                className="text-muted-foreground hover:text-white transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} sevven. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
