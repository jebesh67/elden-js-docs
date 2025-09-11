"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import clsx from "clsx";
import { useState } from "react";
import { HeaderNavs } from "@/components/shared/HeaderNavs";
import { useThemeContext } from "@/context/ThemeContext";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const { theme } = useThemeContext();

  return (
    <div className="fixed top-0 z-50 w-screen">
      <header
        className={clsx(
          "w-screen select-none",
          theme === "light" ? "bg-zinc-400 text-zinc-800" : "bg-zinc-900",
        )}
      >
        <div className="flex items-center justify-center relative py-4 px-4">
          <button
            className={clsx(
              "absolute left-4 p-2 rounded hover:cursor-pointer transition-colors",
              theme === "light"
                ? "hover:bg-zinc-600 active:bg-zinc-700"
                : "hover:bg-zinc-800 active:bg-zinc-700",
              showNav
                ? theme === "light"
                  ? "bg-zinc-600"
                  : "bg-zinc-800"
                : theme === "light"
                  ? "bg-zinc-400"
                  : "bg-zinc-900",
            )}
            onClick={(): void => setShowNav(!showNav)}
          >
            <GiHamburgerMenu
              className={clsx(
                "transition-colors css-header-text",
                theme === "light" ? "text-zinc-800" : "text-zinc-200",
              )}
            />
          </button>

          <h1
            className={clsx(
              "text-center css-header-text font-bold tracking-widest",
              theme === "light" ? "text-zinc-900" : "text-zinc-200",
            )}
          >
            ELDEN JS
          </h1>
        </div>
      </header>

      {showNav && <HeaderNavs />}
    </div>
  );
};

export default Header;
