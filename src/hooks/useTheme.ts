"use client";

import { useState, useEffect, useCallback } from "react";

export function useTheme(initialTheme?: "dark" | "light") {
  const [theme, setThemeState] = useState<"dark" | "light">(
    initialTheme ?? "dark",
  );

  const getTheme = useCallback(async (): Promise<"dark" | "light"> => {
    try {
      const cookieObj = await window.cookieStore.get("theme");
      let value: "dark" | "light";

      if (!cookieObj) {
        value = "dark";
        await window.cookieStore.set({ name: "theme", value });
      } else {
        value = cookieObj.value === "light" ? "light" : "dark";
      }

      setThemeState(value);
      return value;
    } catch (err) {
      console.error("Failed to get or set theme cookie:", err);
      return "dark";
    }
  }, []);

  const setTheme = useCallback(
    async (value: "dark" | "light"): Promise<void> => {
      try {
        setThemeState(value);
        await window.cookieStore.set({ name: "theme", value });
      } catch (err) {
        console.error("Failed to set theme cookie:", err);
      }
    },
    [],
  );

  useEffect(() => {
    if (!initialTheme) getTheme();
  }, [getTheme, initialTheme]);

  useEffect(() => {
    const darkBg = "bg-zinc-800";
    const lightBg = "bg-zinc-300";

    document.body.classList.remove(theme === "dark" ? lightBg : darkBg);
    document.body.classList.add(theme === "dark" ? darkBg : lightBg);
  }, [theme]);

  return { theme, getTheme, setTheme };
}
