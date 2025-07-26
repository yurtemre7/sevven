"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Gauge,
  LifeBuoy,
  Lightbulb,
  Mail,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { BrushUnderline } from "@/components/brush-underline";
import { AnimatedBorderCard } from "@/components/animated-border-card";

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
              <div className="relative inline-block">
                <span className="relative text-primary">sevven</span>
                <div className="absolute -bottom-1 left-0 right-0 h-1">
                  <BrushUnderline />
                </div>
              </div>{" "}
              <span className="text-foreground/80">
                - Flutter-Apps optimieren & skalieren
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Wir helfen Unternehmen mit bestehenden Flutter-Apps, ihre
              Anwendungen zu optimieren, zu warten und auf die nächste Stufe zu
              heben. 5+ Jahre Erfahrung im professionellen Flutter-Einsatz.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="mailto:kontakt@sevven.de"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-12 w-12 text-blue-600" />,
                title: "CI/CD & App Store Deployment",
                description:
                  "Professionelle Konfiguration von Build-Pipelines für automatische Veröffentlichung im Play Store und App Store mit fastlane.",
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
                title: "Flutter Updates & Modernisierung",
                description:
                  "Sichere Migration auf die neueste Flutter-Version und Aktualisierung aller Abhängigkeiten.",
              },
              {
                icon: <Smartphone className="h-12 w-12 text-blue-600" />,
                title: "Code-Refactoring & Best Practices",
                description:
                  "Optimierung Ihrer Codebasis nach aktuellen Best Practices für bessere Wartbarkeit und Performance.",
              },
              {
                icon: <Gauge className="h-12 w-12 text-blue-600" />,
                title: "Performance-Optimierung",
                description:
                  "Identifizierung und Behebung von Engpässen in Ladezeiten und API-Implementierungen.",
              },
              {
                icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
                title: "Sicherheitsaudit",
                description:
                  "Umfassende Sicherheitsanalyse Ihrer App mit Fokus auf Datenschutz und App-Sicherheit.",
              },
              {
                icon: <LifeBuoy className="h-12 w-12 text-blue-600" />,
                title: "Support & Wartung",
                description:
                  "Zuverlässiger Langzeitsupport und kontinuierliche Wartung Ihrer Flutter-Anwendung.",
              },
            ].map((service, index) => (
              <AnimatedBorderCard key={index} className="overflow-hidden">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </AnimatedBorderCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Kontakt</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Sie haben ein Projekt, das Sie optimieren möchten? Lassen Sie uns
            darüber sprechen!
          </p>
          <a
            href="mailto:kontakt@sevven.de"
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
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              sevven
            </h3>
            <p className="text-muted-foreground text-sm">
              Professionelle Flutter-Entwicklung aus Deutschland
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground uppercase tracking-wider">
              Kontakt
            </h4>
            <a
              href="mailto:kontakt@sevven.de"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm block mb-2"
            >
              kontakt@sevven.de
            </a>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground uppercase tracking-wider">
              Rechtliches
            </h4>
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
