"use client";

import clsx from "clsx";
import { IoMdSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { useThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const HeaderNavs = () => {
  const { theme, setTheme } = useThemeContext();
  const pathname: string = usePathname();

  return (
    <>
      <motion.nav
        key="sidebar"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ type: "tween", duration: 0.3 }}
        className={clsx(
          "fixed pt-4 w-fit select-none h-full z-40 backdrop-blur-md shadow-md",
          theme === "light"
            ? "bg-zinc-400/70 shadow-zinc-500"
            : "bg-zinc-900/70 shadow-zinc-900",
        )}
      >
        <div className={clsx("flex flex-col gap-1 px-4 mb-3")}>
          <h2
            className={clsx(
              "text-left px-2 py-2 rounded-md font-semibold",
              theme === "light" ? "text-zinc-900" : "text-zinc-200",
            )}
          >
            Getting Started
          </h2>
          <Link href={"/"}>
            <button
              className={clsx(
                "w-full pl-2 pr-10 sm:pr-15 md:pr-20 py-2 rounded-md text-left hover:cursor-pointer transition-colors",
                theme === "light"
                  ? clsx(
                      " hover:text-zinc-900",
                      pathname === "/"
                        ? "bg-zinc-300 text-blue-500"
                        : "text-zinc-700",
                    )
                  : clsx(
                      "hover:text-zinc-200",
                      pathname === "/"
                        ? "bg-zinc-800 text-blue-500"
                        : "text-zinc-500 ",
                    ),
              )}
            >
              Introduction
            </button>
          </Link>
        </div>

        <div className={clsx("flex flex-col gap-1 px-4")}>
          <h2
            className={clsx(
              "text-left px-2 py-2 rounded-md font-semibold",
              theme === "light" ? "text-zinc-900" : "text-zinc-200",
            )}
          >
            Middleware Usage
          </h2>
          <Link href={"/verify-access"}>
            <button
              className={clsx(
                "w-full pl-2 pr-10 sm:pr-15 md:pr-20 py-2 rounded-md text-left hover:cursor-pointer transition-colors",
                theme === "light"
                  ? clsx(
                      " hover:text-zinc-900",
                      pathname.startsWith("/verify-access")
                        ? "bg-zinc-300 text-blue-500"
                        : "text-zinc-700",
                    )
                  : clsx(
                      "hover:text-zinc-200",
                      pathname.startsWith("/verify-access")
                        ? "bg-zinc-800 text-blue-500"
                        : "text-zinc-500 ",
                    ),
              )}
            >
              Token verification
            </button>
          </Link>
          <Link href="/rate-control">
            <button
              className={clsx(
                "w-full pl-2 pr-10 sm:pr-15 md:pr-20 py-2 rounded-md text-left hover:cursor-pointer transition-colors",
                theme === "light"
                  ? clsx(
                      " hover:text-zinc-900",
                      pathname.startsWith("/rate-control")
                        ? "bg-zinc-300 text-blue-500"
                        : "text-zinc-700",
                    )
                  : clsx(
                      "hover:text-zinc-200",
                      pathname.startsWith("/rate-control")
                        ? "bg-zinc-800 text-blue-500"
                        : "text-zinc-500 ",
                    ),
              )}
            >
              Rate Limiting
            </button>
          </Link>
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

            <div className="absolute w-full h-full flex gap-x-2 px-1 py-1">
              <button
                className={clsx(
                  "flex justify-center items-center w-1/2 h-full rounded-full hover:cursor-pointer",
                  theme === "light"
                    ? "text-zinc-900 hover:bg-zinc-400"
                    : "text-zinc-300 hover:bg-zinc-700",
                )}
                onClick={() => setTheme("light")}
              >
                <IoMdSunny />
              </button>

              <button
                className={clsx(
                  "flex justify-center items-center w-1/2 h-full rounded-full hover:cursor-pointer",
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
      </motion.nav>
    </>
  );
};
