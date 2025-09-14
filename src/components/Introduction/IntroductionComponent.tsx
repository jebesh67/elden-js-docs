"use client";

import clsx from "clsx";
import { useThemeContext } from "@/context/ThemeContext";
import CopyablePre from "@/components/wrapper/CopyablePre";

export const IntroductionComponent = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={clsx(
        "pt-22 md:pt-25 pl-6 md:pl-[17.25rem] transition-all duration-300 px-6 pb-6 space-y-4",
        theme === "dark" ? "text-zinc-100" : "text-zinc-900",
      )}
    >
      <h2 className="css-main-head-text font-bold">Getting Started</h2>
      <h3 className="css-subhead-text font-medium">What is EldenJS?</h3>
      <p
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        <span className="css-keyword-red">EldenJS</span> is a{" "}
        <span className="font-semibold">lightweight utility library</span> that
        brings <span className="css-keyword-blue">route protection</span> to the
        frontend and <span className="css-keyword-blue">rate limiting</span> to
        the backend — all in plain JavaScript or TypeScript. It fits right into{" "}
        <span>Next.js</span>, <span>Express</span>, or any{" "}
        <span>Node.js server</span>. On the client, use{" "}
        <span className="font-semibold">verifyAccess</span>; on the server,
        reach for <span className="font-semibold">rateControl</span>.
      </p>

      <h3 className="css-subhead-text font-medium">Features</h3>
      <ul className="list-disc pl-6 space-y-1 leading-[2]">
        <li>
          <code className="css-keyword-blue">verifyAccess</code> — Secure
          frontend routes by checking cookies or tokens with your backend.
          Returns access details you can use to decide whether to grant entry.
        </li>
        <li>
          <code className="css-keyword-blue">rateControl</code> — Guard your
          server with IP-based rate limiting powered by Redis. Provides usage
          data to help you allow or block requests.
        </li>
        <li>Promise-based API with minimal setup.</li>
        <li>Framework-agnostic and dependency-light.</li>
      </ul>

      <h3 className="css-subhead-text font-medium">Installing</h3>

      <p>Using npm:</p>
      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-3 rounded-lg",
            theme === "dark"
              ? "bg-zinc-700 text-zinc-200"
              : "bg-zinc-100 text-zinc-700",
          )}
        >
          <code className="font-semibold">
            <span className="css-keyword-purple">npm install</span> elden-js
          </code>
        </pre>
      </CopyablePre>

      <p>Using yarn:</p>
      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-3 rounded-lg",
            theme === "dark"
              ? "bg-zinc-700 text-zinc-200"
              : "bg-zinc-100 text-zinc-700",
          )}
        >
          <code className="font-semibold">
            <span className="css-keyword-purple">yarn add</span> elden-js
          </code>
        </pre>
      </CopyablePre>

      <p>Using pnpm:</p>
      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-3 rounded-lg",
            theme === "dark"
              ? "bg-zinc-700 text-zinc-200"
              : "bg-zinc-100 text-zinc-700",
          )}
        >
          <code className="font-semibold">
            <span className="css-keyword-purple">pnpm add</span> elden-js
          </code>
        </pre>
      </CopyablePre>
    </div>
  );
};
