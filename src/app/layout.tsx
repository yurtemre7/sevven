import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/theme-toggle';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'sevven - Flutter App Entwicklung',
  description: 'Professionelle Flutter App Entwicklung aus Deutschland',
  metadataBase: new URL('https://sevven.de'),
  icons: {
    icon: '../../favicon.ico',
    apple: '../../apple-touch-icon.png',
  },
  openGraph: {
    title: 'sevven - Flutter App Entwicklung',
    description: 'Professionelle Flutter App Entwicklung aus Deutschland',
    url: 'https://sevven.de',
    siteName: 'sevven',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sevven - Flutter App Entwicklung',
    description: 'Professionelle Flutter App Entwicklung aus Deutschland',
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
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
