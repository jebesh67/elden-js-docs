"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { HeaderNavs } from "@/components/shared/HeaderNavs";
import { useThemeContext } from "@/context/ThemeContext";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const { theme } = useThemeContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-screen transition-all ease-in-out">
      <header
        className={clsx(
          "w-screen select-none backdrop-blur-md",
          theme === "light" ? "bg-zinc-400/70 text-zinc-800" : "bg-zinc-900/70",
        )}
      >
        <div className="flex items-center justify-center relative py-4 px-4">
          <button
            className={clsx(
              "absolute left-4 p-2 rounded hover:cursor-pointer transition-colors md:hidden",
              theme === "light"
                ? "hover:bg-zinc-600/50 active:bg-zinc-700/50"
                : "hover:bg-zinc-800/50 active:bg-zinc-700/50",
              showNav
                ? theme === "light"
                  ? "bg-zinc-600/20"
                  : "bg-zinc-800/60"
                : theme === "light"
                  ? "bg-zinc-400/0"
                  : "bg-zinc-900/0",
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
      <AnimatePresence>{showNav && <HeaderNavs />}</AnimatePresence>
    </div>
  );
};

export default Header;
