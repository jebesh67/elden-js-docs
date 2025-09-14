import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { cookies } from "next/headers";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: "EldenJS Docs",
    template: "%s | EldenJS",
  },
  description: "Documentation for elden-js npm package",
  icons: "/elden-js-logo.svg",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeCookie = (await cookies()).get("theme")?.value as
    | "dark"
    | "light"
    | undefined;
  const initialTheme: "dark" | "light" = themeCookie ?? "dark";

  return (
    <html lang="en">
      <body
        className={clsx(
          initialTheme === "dark"
            ? "bg-zinc-800 text-zinc-100"
            : "bg-zinc-300 text-zinc-900",
        )}
      >
        <main>
          <ThemeProvider initialTheme={initialTheme}>
            <Header />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
