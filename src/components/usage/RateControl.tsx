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
        theme === "dark" ? "text-zinc-100" : "text-zinc-900"
      )}
    >
      <h3 className="css-subhead-text font-bold">rateControl</h3>

      <p
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
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
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        Example: (Express controller)
      </strong>

      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-4 rounded-lg overflow-x-auto text-sm leading-relaxed"
          )}
        >
          <code>
            <span className="css-keyword-purple">import</span> {"{"}{" "}
            <span className="css-keyword-blue">rateControl</span>,{" "}
            <span className="css-keyword-blue">RateLimitOptions</span>,{" "}
            <span className="css-keyword-blue">RateLimitResult</span> {"}"}{" "}
            <span className="css-keyword-purple">from</span>{" "}
            <span className="css-keyword-red">{`"elden-js/backend"`}</span>;
            <br />
            <span className="css-keyword-purple">import</span> {"{"}{" "}
            <span className="css-keyword-blue">express</span>,{" "}
            <span className="css-keyword-blue">Request</span>,{" "}
            <span className="css-keyword-blue">Response</span>,{" "}
            <span className="css-keyword-blue">NextFunction</span> {"}"}{" "}
            <span className="css-keyword-purple">from</span>{" "}
            <span className="css-keyword-red">{`"express"`}</span>;
            <br />
            <br />
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">app</span> ={" "}
            <span className="css-keyword-blue">express</span>();
            <br />
            <br />
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">options</span>:{" "}
            <span className="css-keyword-blue">RateLimitOptions</span> = {"{"}
            <br />
            {"  "} <span className="css-keyword-emerald">limit</span>:{" "}
            <span className="css-keyword-red">20</span>,{" "}
            <span>{`// max 20 requests`}</span>
            <br />
            {"  "} <span className="css-keyword-emerald">window</span>:{" "}
            <span className="css-keyword-red">10</span>,{" "}
            <span>{`// per 10 seconds`}</span>
            <br />
            {"  "} <span className="css-keyword-emerald">redisHost</span>:{" "}
            <span className="css-keyword-red">{`"yourLiveRedisServer`}</span>,{" "}
            <span>{`// optional - default: 127.0.0.1(localHost)`}</span>
            <br />
            {"  "} <span className="css-keyword-emerald">redisPort</span>:{" "}
            <span className="css-keyword-red">yourPORT</span>,{" "}
            <span>{`// optional - default: 6379`}</span>
            <br />
            {"  "} <span className="css-keyword-emerald">redisPassword</span>:{" "}
            <span className="css-keyword-red">{`"yourPassword"`}</span>{" "}
            <span>{`// optional`}</span>
            <br />
            {"};"}
            <br />
            <br />
            <span className="css-comment">{`// Apply middleware to /api routes`}</span>
            <br />
            <span className="css-keyword-amber">app</span>.use(
            <span className="css-keyword-red">{`"/api"`}</span>,
            <span className="css-keyword-purple">async</span> (
            <span className="css-keyword-amber">req</span>: Request,
            <span className="css-keyword-amber">res</span>: Response,
            <span className="css-keyword-amber">next</span>: NextFunction )
            =&gt; {"{"}
            <br />
            {"  "} <span className="css-keyword-purple">try</span> {"{"}
            <br />
            {"    "}const <span className="css-keyword-purple">result</span>:{" "}
            <span className="css-keyword-blue">RateLimitResult</span> ={" "}
            <span className="css-keyword-blue">await</span>{" "}
            <span className="css-keyword-blue">rateControl</span>(
            <span className="css-keyword-amber">req</span>,{" "}
            <span className="css-keyword-amber">options</span>);
            <br />
            <br />
            {"    "} <span className="css-keyword-purple">if</span> (!
            <span className="css-keyword-purple">result</span>.allowed) {"{"}
            <br />
            {"      "}{" "}
            <span className="css-comment">{`// Rate limit exceeded`}</span>
            <br />
            {"      "}return <span className="css-keyword-amber">res</span>
            .status(429).json(<span className="css-keyword-purple">result</span>
            );
            <br />
            {"    }"}
            <br />
            <br />
            {"    "} <span className="css-keyword-purple">if</span> (
            <span className="css-keyword-purple">result</span>.error) {"{"}
            <br />
            {"      "}{" "}
            <span className="css-comment">{`// Redis not connected`}</span>
            <br />
            {"    }"}
            <br />
            <br />
            {"    "} <span className="css-comment">{`// Request allowed`}</span>
            <br />
            {"    "} <span className="css-keyword-amber">next</span>();
            <br />
            {"  }"} <span className="css-keyword-purple">catch</span> (
            <span className="css-keyword-amber">err</span>) {"{"}
            <br />
            {"    "} <span className="css-comment">{`// Error handling`}</span>
            <br />
            {"    "} <span className="css-keyword-amber">res</span>
            .status(500).json({"{"} message:{" "}
            <span className="css-keyword-red">{`"Rate limiting failed"`}</span>,
            error: true {"}"});
            <br />
            {"  }"}
            <br />
            {"}"});
          </code>
        </pre>
      </CopyablePre>

      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        Configuration
      </strong>

      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-4 rounded-lg overflow-x-auto text-sm leading-relaxed"
          )}
        >
          <code>
            {"{"}
            <br />
            {"  "}
            <span className="css-keyword-emerald">limit</span>:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span>{`// max number of allowed requests per IP`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">window</span>:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span>{`// time window in seconds`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisHost</span>?:{" "}
            <span className="css-keyword-purple">string</span>,{" "}
            <span>{`// optional, default: "127.0.0.1"`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisPort</span>?:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span>{`// optional, default: 6379`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisPassword</span>?:{" "}
            <span className="css-keyword-purple">string</span>{" "}
            <span>{`// optional, required if host is provided`}</span>
            <br />
            {"}"}
          </code>
        </pre>
      </CopyablePre>

      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        Returns
      </strong>

      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-4 rounded-lg overflow-x-auto text-sm leading-relaxed"
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
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        Notes
      </strong>

      <ul
        className={clsx(
          "list-disc pl-6 space-y-2",
          theme === "dark" ? "text-zinc-400" : "text-zinc-600"
        )}
      >
        <li>
          Requires a running Redis server. If host is not provided{" "}
          <span className="css-keyword-emerald">rateControl</span> runs on
          localHost
        </li>
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
