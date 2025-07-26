import 'next-themes';

declare module 'next-themes' {
  interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    forcedTheme?: string;
    storageKey?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    enableColorScheme?: boolean;
    attribute?: string | 'class';
    value?: {
      light: string;
      dark: string;
    };
  }
}
