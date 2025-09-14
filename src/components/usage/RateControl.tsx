"use client";

import { useThemeContext } from "@/context/ThemeContext";
import clsx from "clsx";
import CopyablePre from "@/components/wrapper/CopyablePre";

export const RateControl = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={clsx(
        "pt-22 md:pt-25 md:pl-[17.25rem] px-6 pb-6 space-y-6 transition-all duration-300",
        theme === "dark" ? "text-zinc-100" : "text-zinc-900",
      )}
    >
      <h3 className="css-subhead-text font-bold">rateControl</h3>

      <p
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        The <code className="css-keyword-blue">rateControl</code> helper
        protects your backend by limiting requests per IP. It tracks calls in
        Redis and responds with whether the request is allowed, how many are
        left, and when the limit resets.
      </p>
      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Example: (Express controller)
      </strong>

      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-4 rounded-lg overflow-x-auto text-sm leading-relaxed",
          )}
        >
          <code>
            <span className="css-keyword-purple">import</span> {"{"}{" "}
            <span className="css-keyword-blue">rateControl</span>,{" "}
            <span className="css-keyword-blue">RateControlRequest</span>,{" "}
            <span className="css-keyword-blue">RateLimitOptions</span> {"}"}{" "}
            <span className="css-keyword-purple">from</span>{" "}
            <span className="css-keyword-red">{`"elden-js"`}</span>;
            <br />
            <br />
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">options</span>:{" "}
            <span className="css-keyword-blue">RateLimitOptions</span> = {"{"}
            <br />
            {"  "}
            <span className="css-keyword-emerald">limit</span>:{" "}
            <span className="css-keyword-red">5</span>,{" "}
            <span>{`// 5 requests`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">window</span>:{" "}
            <span className="css-keyword-red">10</span>{" "}
            <span>{`// per 10 seconds`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisHost</span>:{" "}
            <span className="css-keyword-red">{`"YourRedisHost"`}</span>,{" "}
            <span>{`// optional - default: 127.0.0.1`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisPort</span>:{" "}
            <span className="css-keyword-red">YourPORT</span>,{" "}
            <span>{`// optional - default: 6379`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisPassword</span>:{" "}
            <span className="css-keyword-red">{`"yourPassword"`}</span>{" "}
            <span>{`// optional, mandatory if host is provided`}</span>
            <br />
            {"};"}
            <br />
            <br />
            <span>{`// can also use typedReq: RateControlRequest = { headers: req.headers } or { ip: req.ip }`}</span>
            <br />
            <span>{`// or just pass the plain request`}</span>
            <br />
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">result</span> ={" "}
            <span className="css-keyword-purple">await</span>{" "}
            <span className="css-keyword-blue">rateControl</span>(
            <span className="css-keyword-amber">req</span>,{" "}
            <span className="css-keyword-amber">options</span>);
            <br />
            <br />
            <span className="css-keyword-purple">if</span> (!
            <span className="css-keyword-amber">result</span>.
            <span className="css-keyword-emerald">allowed</span>) {"{"}
            <br />
            {"  "}
            <span>{`// handle rate limit exceeded`}</span>
            <br />
            {"}"}
          </code>
        </pre>
      </CopyablePre>

      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Returns
      </strong>

      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-4 rounded-lg overflow-x-auto text-sm leading-relaxed",
          )}
        >
          <code>
            {"{"}
            <br />
            {"  "}
            <span className="css-keyword-emerald">allowed</span>:{" "}
            <span className="css-keyword-purple">boolean</span>,{" "}
            <span>{`// true if request allowed`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">remaining</span>:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span>{`// requests left in window`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">resetIn</span>:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span>{`// seconds until reset`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">ip</span>:{" "}
            <span className="css-keyword-purple">string</span>,
            <br />
            {"  "}
            <span className="css-keyword-emerald">message</span>:{" "}
            <span className="css-keyword-purple">string</span>,
            <br />
            {"  "}
            <span className="css-keyword-emerald">error</span>?:{" "}
            <span className="css-keyword-purple">boolean</span>{" "}
            <span>{`// true if Redis not connected`}</span>
            <br />
            {"}"}
          </code>
        </pre>
      </CopyablePre>

      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Notes
      </strong>

      <ul
        className={clsx(
          "list-disc pl-6 space-y-2",
          theme === "dark" ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        <li>Requires a running Redis server.</li>
        <li>
          Optional Redis settings:{" "}
          <span className="css-keyword-emerald">redisHost</span>,{" "}
          <span className="css-keyword-emerald">redisPort</span>,{" "}
          <span className="css-keyword-emerald">redisPassword</span>.
        </li>
        <li>
          If Redis is unavailable,{" "}
          <span className="css-keyword-emerald">error</span>:{" "}
          <span className="css-keyword-purple">true</span> is returned so you
          can handle it manually.
        </li>
      </ul>
    </div>
  );
};
