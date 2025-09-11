"use client";

import clsx from "clsx";
import { IoMdSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { useThemeContext } from "@/context/ThemeContext";

export const HeaderNavs = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <>
      <nav
        className={clsx(
          "fixed pt-4 w-fit select-none h-full",
          theme === "light" ? "bg-zinc-400" : "bg-zinc-900",
        )}
      >
        <div className={clsx("flex flex-col gap-1 pl-6 pr-10 mb-3")}>
          <h2
            className={clsx(
              "text-left py-2 font-semibold",
              theme === "light" ? "text-zinc-900" : "text-zinc-200",
            )}
          >
            Getting Started
          </h2>
          <button
            className={clsx(
              "w-full py-2 text-left hover:cursor-pointer transition-colors",
              theme === "light"
                ? "text-zinc-700 hover:text-zinc-900"
                : "text-zinc-500 hover:text-zinc-200",
            )}
          >
            Introduction
          </button>
          <button
            className={clsx(
              "w-full py-2 text-left hover:cursor-pointer transition-colors",
              theme === "light"
                ? "text-zinc-700 hover:text-zinc-900"
                : "text-zinc-500 hover:text-zinc-200",
            )}
          >
            Hello
          </button>
        </div>

        <div className={clsx("flex flex-col gap-1 pl-6 pr-10")}>
          <h2
            className={clsx(
              "text-left py-2 font-semibold",
              theme === "light" ? "text-zinc-900" : "text-zinc-200",
            )}
          >
            Middleware Usage
          </h2>
          <button
            className={clsx(
              "w-full py-2 text-left hover:cursor-pointer transition-colors",
              theme === "light"
                ? "text-zinc-700 hover:text-zinc-900"
                : "text-zinc-500 hover:text-zinc-200",
            )}
          >
            Token verification
          </button>
          <button
            className={clsx(
              "w-full py-2 text-left hover:cursor-pointer transition-colors",
              theme === "light"
                ? "text-zinc-700 hover:text-zinc-900"
                : "text-zinc-500 hover:text-zinc-200",
            )}
          >
            Rate Limiting
          </button>
        </div>

        <div
          className={clsx(
            "absolute flex justify-center px-2 py-4 bottom-15 w-full",
          )}
        >
          <div
            className={clsx(
              "relative flex items-center w-full max-w-[140px] h-10 rounded-full select-none",
              theme === "light" ? "bg-zinc-200" : "bg-zinc-800",
            )}
          >
            <button
              className={clsx(
                "absolute top-1 left-1 w-[calc(50%-4px)] h-8 rounded-full flex items-center justify-center transition-transform ease-in-out duration-300 z-20",
                theme === "light"
                  ? "bg-zinc-800 active:bg-zinc-700 text-zinc-200"
                  : "bg-zinc-300 active:bg-zinc-200 text-zinc-900",
                theme === "dark" ? "translate-x-full" : "translate-x-0",
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <IoMoonOutline /> : <IoMdSunny />}
            </button>

            <div
              className={clsx(
                "absolute w-full h-full rounded-full flex items-center justify-center py-1",
              )}
            >
              <button
                className={clsx(
                  "w-1/2 rounded-full h-full ml-1 place-items-center hover:cursor-pointer",
                  theme === "light"
                    ? "text-zinc-900 hover:bg-zinc-400"
                    : "hover:bg-zinc-700",
                )}
                onClick={() => setTheme("light")}
              >
                <IoMdSunny />
              </button>

              <button
                className={clsx(
                  "w-1/2 rounded-full h-full mr-1 place-items-center hover:cursor-pointer",
                  theme === "light"
                    ? "text-zinc-900 hover:bg-zinc-300"
                    : "hover:bg-zinc-800",
                )}
                onClick={() => setTheme("dark")}
              >
                <IoMoonOutline />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
