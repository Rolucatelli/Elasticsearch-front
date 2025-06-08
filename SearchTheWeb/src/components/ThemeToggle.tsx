import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <Moon className='h-[1.2rem] w-[1.2rem] text-zinc-500 scale-100 transition-all dark:scale-100 dark:rotate-0' />
      ) : (
        <Sun className='h-[1.2rem] w-[1.2rem] text-zinc-500 scale-100 transition-all dark:scale-100 dark:-rotate-90' />
      )}
    </div>
  );
}
