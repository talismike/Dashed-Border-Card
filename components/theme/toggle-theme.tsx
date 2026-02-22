"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-background h-8 border border-muted flex justify-center items-center rounded-full">
      <button
        className={`size-8 -translate-x-px rounded-full flex justify-center items-center transition-colors hover:text-foreground ${theme === "system" ? "border border-muted" : "text-muted-foreground"}`}
        onClick={() => setTheme("system")}
      >
        <Monitor className="size-4" />
      </button>
      <button
        className={`size-8 rounded-full flex justify-center items-center transition-colors hover:text-foreground ${theme === "light" ? "border border-muted" : "text-muted-foreground"}`}
        onClick={() => setTheme("light")}
      >
        <Sun className="size-4" />
      </button>
      <button
        className={`size-8 translate-x-px rounded-full flex justify-center items-center transition-colors hover:text-foreground ${theme === "dark" ? "border border-muted" : "text-muted-foreground"}`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-4" />
      </button>
    </div>
  );
}
