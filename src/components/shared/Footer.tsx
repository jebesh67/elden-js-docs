"use client";

import { useThemeContext } from "@/context/ThemeContext";
import clsx from "clsx";

export const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <footer
      className={clsx(
        "md:pl-[14.27rem] py-4 space-y-2 transition-all duration-300 text-center shadow-[0px_10px_15px_5px] select-none",
        theme === "dark"
          ? "text-zinc-100 bg-zinc-900/70 shadow-zinc-950"
          : "text-zinc-900 bg-zinc-400/70 shadow-zinc-500",
      )}
    >
      <strong>EldenJS v1.2.0</strong>
      <p>
        <a
          href="https://www.npmjs.com/package/elden-js"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-red-600"
        >
          NPM Package
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/jebesh67/elden-js"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          GitHub Repo
        </a>
      </p>
      <p>
        Licensed under <strong>MIT</strong> &copy; 2025{" "}
        <a
          href="mailto:jebesh67@gmail.com"
          className="underline hover:text-blue-600"
        >
          Jebesh
        </a>
      </p>
    </footer>
  );
};
