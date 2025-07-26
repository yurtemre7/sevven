'use client';

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

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

  return (
    <button
      className="p-2 rounded-md hover:bg-muted transition-colors group"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-foreground/70 group-hover:text-foreground transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-foreground/70 group-hover:text-foreground transition-colors" />
      )}
    </button>
  );
}
