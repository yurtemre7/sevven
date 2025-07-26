import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'sevven - Flutter App Entwicklung aus Deutschland',
  description: 'Professionelle Flutter App Entwicklung für Unternehmen. Wir bauen moderne, plattformübergreifende Anwendungen mit 5+ Jahren Branchenerfahrung.',
  keywords: ['Flutter', 'App Entwicklung', 'Mobile Apps', 'Deutschland', 'Unternehmenssoftware', 'Cross-Platform'],
  authors: [{ name: 'sevven' }],
  metadataBase: new URL('https://sevven.dev'),
  openGraph: {
    title: 'sevven - Flutter App Entwicklung',
    description: 'Professionelle Flutter App Entwicklung für Unternehmen aus Deutschland',
    url: 'https://sevven.dev',
    siteName: 'sevven',
    locale: 'de_DE',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
