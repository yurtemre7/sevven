'use client';

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isSystemTheme, setIsSystemTheme] = React.useState(false)

  // Handle system theme changes
  React.useEffect(() => {
    if (theme === 'system') {
      setIsSystemTheme(true);
      // Force update when system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        if (theme === 'system') {
          document.documentElement.classList.toggle('dark', mediaQuery.matches);
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setIsSystemTheme(false);
    }
  }, [theme]);

  const nextTheme = React.useMemo(() => {
    switch (theme) {
      case 'light':
        return 'dark';
      case 'dark':
        return 'system';
      case 'system':
        return 'light';
      default:
        return 'system'; // Default to system theme
    }
  }, [theme]);

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md hover:bg-muted transition-colors"
        disabled
        aria-hidden="true"
      >
        <Sun className="h-5 w-5 text-foreground/70" />
      </button>
    )
  }

  const getThemeIcon = () => {
    if (theme === 'system' || !theme) {
      return <Monitor className="h-5 w-5 text-foreground/70 group-hover:text-foreground transition-colors" />;
    }
    
    if (theme === 'dark') {
      return <Moon className="h-5 w-5 text-foreground/70 group-hover:text-foreground transition-colors" />;
    }
    
    // Default to light icon if theme is light or any other value
    return <Sun className="h-5 w-5 text-foreground/70 group-hover:text-foreground transition-colors" />;
    

  };

  return (
    <button
      className="p-2 rounded-md hover:bg-muted transition-colors group relative"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Toggle theme (current: ${theme})`}
      title={`Current theme: ${theme}`}
    >
      {getThemeIcon()}
      <span className="absolute -bottom-1 -right-1 text-[10px] font-mono text-foreground/50">
        {theme === 'system' ? 'auto' : theme?.charAt(0)}
      </span>
    </button>
  );
}
