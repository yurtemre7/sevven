"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Lightbulb, Mail, Smartphone } from "lucide-react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary">sevven</span>{" "}
              <span className="text-foreground/80">- Apps, die funktionieren</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professionelle Flutter-Entwicklung aus Deutschland. Wir bauen
              moderne, plattformübergreifende Apps mit Leidenschaft und 5+
              Jahren Erfahrung.
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
                title: "Individuelle App-Entwicklung",
                description:
                  "Maßgeschneiderte Flutter-Anwendungen, die genau auf Ihre Anforderungen zugeschnitten sind.",
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
                title: "Modernisierung",
                description:
                  "Wir atmen neuen Leben in Ihre veralteten Anwendungen mit modernen Technologien.",
              },
              {
                icon: <Smartphone className="h-12 w-12 text-blue-600" />,
                title: "Support & Beratung",
                description:
                  "Fachkundige Beratung und zuverlässiger Support für Ihr laufendes Projekt.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl transition-all hover:scale-[1.02] bg-background border border-border hover:border-primary/30 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Kontakt</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Sie haben ein Projekt, das Sie umsetzen möchten? Lassen Sie uns
            darüber sprechen!
          </p>
          <a
            href="mailto:kontakt@sevven.dev?subject=Anfrage%20zur%20App-Entwicklung&body=Hallo%20sevven%20Team,%0D%0A%0D%0AIch%20interessiere%20mich%20f%C3%BCr%20eine%20Beratung%20zu%20meinem%20App-Projekt.%0D%0A%0D%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-accent hover:bg-hover transition-colors duration-200 hover:shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            E-Mail verfassen
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">sevven</h3>
            <p className="text-muted-foreground text-sm">
              Professionelle Flutter-Entwicklung aus Deutschland
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground uppercase tracking-wider">Kontakt</h4>
            <a 
              href="mailto:kontakt@sevven.dev" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm block mb-2"
            >
              kontakt@sevven.dev
            </a>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground uppercase tracking-wider">Rechtliches</h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="/impressum"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} sevven. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
