"use client";

import { createContext, useContext, ReactNode } from "react";
import { useTheme as useThemeHook } from "@/hooks/useTheme";

type ThemeContextType = ReturnType<typeof useThemeHook>;

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeProviderProps) => {
  const themeHook = useThemeHook(initialTheme);
  return (
    <ThemeContext.Provider value={themeHook}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
