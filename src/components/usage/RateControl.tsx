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
            <span className="css-comment">{`// Enable trust proxy for Express, or rateControl gets the first IP from X-Forwarded-For`}</span>
            <br />
            <span className="css-comment">{`// If your app is behind a load balancer or reverse proxy that sets X-Forwarded-For,`}</span>
            <br />
            <span className="css-comment">{`// setting trust proxy to true ensures req.ip uses the client’s actual IP.`}</span>
            <br />
            <span className="css-comment">{`// If X-Forwarded-For is missing, req.ip will fall back to the direct socket IP.`}</span>
            <br />
            <br />
            <span className="css-keyword-amber">app</span>.
            <span className="css-keyword-blue">set</span>
            {`("trust proxy",`} <span className="css-keyword-purple">true</span>
            );
            <br />
            <br />
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">options</span>:{" "}
            <span className="css-keyword-blue">RateLimitOptions</span> = {"{"}
            <br />
            {"  "}
            <span className="css-keyword-emerald">limit</span>:{" "}
            <span className="css-keyword-red">20</span>,{" "}
            <span className="css-comment">{`// max 20 requests`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">window</span>:{" "}
            <span className="css-keyword-red">10</span>,{" "}
            <span className="css-comment">{`// per 10 seconds`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisHost</span>:{" "}
            <span className="css-keyword-red">{`"yourLiveRedisServer"`}</span>,{" "}
            <span className="css-comment">{`// optional - default: 127.0.0.1`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisPort</span>:{" "}
            <span className="css-keyword-red">6379</span>,{" "}
            <span className="css-comment">{`// optional - default: 6379`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisPassword</span>:{" "}
            <span className="css-keyword-red">{`"yourPassword"`}</span>,{" "}
            <span className="css-comment">{`// optional`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">trustProxy</span>:{" "}
            <span className="css-keyword-purple">true</span>,{" "}
            <span className="css-comment">{`// if true uses socket.remoteAddress instead of x-forwarded-for`}</span>
            <br />
            {"}"}
            <br />
            <br />
            <span className="css-comment">{`// Convert Express request to RateControlRequest (or pass plain req)`}</span>
            <br />
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">getRateControlReq</span> = (
            <span className="css-keyword-amber">req</span>:{" "}
            <span className="css-keyword-blue">Request</span>) =&gt; ({"{"}
            <br />
            {"  "}ip: <span className="css-keyword-amber">req</span>.
            <span className="css-keyword-amber">ip</span>,
            <br />
            {"  "}headers: <span className="css-keyword-amber">req</span>.
            <span className="css-keyword-amber">headers</span>,
            <br />
            {"  "}socket: <span className="css-keyword-amber">req</span>.
            <span className="css-keyword-amber">socket</span>
            <br />
            {"}"});
            <br />
            <br />
            <span className="css-keyword-amber">app</span>.use(
            <span className="css-keyword-red">{`"/api"`}</span>,
            <span className="css-keyword-purple">async</span> (
            <span className="css-keyword-amber">req</span>:{" "}
            <span className="css-keyword-blue">Request</span>,
            <span className="css-keyword-amber">res</span>:{" "}
            <span className="css-keyword-blue">Response</span>,
            <span className="css-keyword-amber">next</span>:{" "}
            <span className="css-keyword-blue">NextFunction</span>) =&gt; {"{"}
            <br />
            {"  "}
            <span className="css-keyword-purple">try</span> {"{"}
            <br />
            {"    "}
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">rateReq</span> ={" "}
            <span className="css-keyword-amber">getRateControlReq</span>(
            <span className="css-keyword-amber">req</span>);
            <br />
            {"    "}
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">result</span>:{" "}
            <span className="css-keyword-blue">RateLimitResult</span> ={" "}
            <span className="css-keyword-blue">await</span>{" "}
            <span className="css-keyword-blue">rateControl</span>(
            <span className="css-keyword-amber">rateReq</span>,{" "}
            <span className="css-keyword-amber">options</span>);
            <br />
            <br />
            {"    "}
            <span className="css-keyword-purple">if</span> (!
            <span className="css-keyword-amber">result</span>.
            <span className="css-keyword-emerald">allowed</span>) {"{"}
            <br />
            {"      "}
            <span className="css-comment">{`// Rate limit exceeded`}</span>
            <br />
            {"      "}
            <span className="css-keyword-amber">return</span>{" "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">status</span>(429).
            <span className="css-keyword-blue">json</span>(
            <span className="css-keyword-amber">result</span>);
            <br />
            {"    "}
            {"}"}
            <br />
            <br />
            {"    "}
            <span className="css-keyword-purple">if</span> (
            <span className="css-keyword-amber">result</span>.
            <span className="css-keyword-emerald">error</span>) {"{"}
            <br />
            {"      "}
            <span className="css-comment">{`// Redis not connected, or IP is unknown`}</span>
            <br />
            {"    "}
            {"}"}
            <br />
            <br />
            {"    "}
            <span className="css-comment">{`// Request allowed`}</span>
            <br />
            {"    "}
            <span className="css-keyword-amber">next</span>();
            <br />
            {"  "}
            {"}"} <span className="css-keyword-purple">catch</span> (
            <span className="css-keyword-amber">err</span>) {"{"}
            <br />
            {"    "}
            <span className="css-comment">{`// Error handling`}</span>
            <br />
            {"    "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">status</span>(500).
            <span className="css-keyword-blue">json</span>({"{"} message:{" "}
            <span className="css-keyword-red">{`"Rate limiting failed"`}</span>,
            error: <span className="css-keyword-purple">true</span> {"}"});
            <br />
            {"  "}
            {"}"}
            <br />
            {"}"});
          </code>
        </pre>
      </CopyablePre>

      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Configuration
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
            <span className="css-keyword-emerald">limit</span>:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span className="css-comment">{`// max number of allowed requests per IP`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">window</span>:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span className="css-comment">{`// time window in seconds`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisHost</span>?:{" "}
            <span className="css-keyword-purple">string</span>,{" "}
            <span className="css-comment">{`// optional, default: "127.0.0.1"`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisPort</span>?:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span className="css-comment">{`// optional, default: 6379`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">redisPassword</span>?:{" "}
            <span className="css-keyword-purple">string</span>{" "}
            <span className="css-comment">{`// optional, required if host is provided`}</span>
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
            <span className="css-comment">{`// true if request allowed`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">remaining</span>:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span className="css-comment">{`// requests left in window`}</span>
            <br />
            {"  "}
            <span className="css-keyword-emerald">resetIn</span>:{" "}
            <span className="css-keyword-purple">number</span>,{" "}
            <span className="css-comment">{`// seconds until reset`}</span>
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
            <span className="css-comment">{`// true if Redis not connected`}</span>
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
        <li>
          Requires a running Redis server. If host is not provided{" "}
          <span className="css-keyword-emerald">rateControl</span> runs on
          localhost.
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
        <li>
          rateControl resolves IPs from <code>req.ip</code>,{" "}
          <code>{`headers["x-forwarded-for"]`}</code> (first IP), or{" "}
          <code>socket.remoteAddress</code> when <code>trustProxy</code> is set.
        </li>
      </ul>

      {/* Tested with Jest */}
      <div
        className={clsx(
          "leading-[2] mt-4",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        <strong>Tested with Jest</strong>
        <p>
          All <code className="css-keyword-blue">rateControl</code> logic is
          covered:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>IP determination:</strong>
            <ul className="list-disc pl-6">
              <li>
                When <code>req.ip</code> is provided.
              </li>
              <li>
                When <code>{`headers["x-forwarded-for"]`}</code> is used.
              </li>
              <li>
                When multiple <code>x-forwarded-for</code> IPs exist, it picks
                the first one.
              </li>
              <li>
                When <code>trustProxy</code> is true,{" "}
                <code>socket.remoteAddress</code> is used.
              </li>
            </ul>
          </li>

          <li>
            <strong>Redis handling:</strong>
            <ul className="list-disc pl-6">
              <li>Requests under the limit.</li>
              <li>Requests over the limit.</li>
              <li>Redis errors are handled gracefully.</li>
            </ul>
          </li>
        </ul>

        <p className="mt-2">Example Jest expectations:</p>
        <CopyablePre theme={theme}>
          <pre className="p-3 rounded-lg overflow-x-auto text-sm leading-relaxed">
            <span className="css-keyword-blue">expect</span>(
            <span className="css-keyword-amber">result</span>.
            <span className="css-keyword-emerald">allowed</span>).toBe(
            <span className="css-keyword-purple">true</span>);{" "}
            <span className="css-keyword-amber">{`// request under limit`}</span>
            {"\n"}
            <span className="css-keyword-blue">expect</span>(
            <span className="css-keyword-amber">result</span>.
            <span className="css-keyword-emerald">allowed</span>).toBe(
            <span className="css-keyword-purple">false</span>);{" "}
            <span className="css-keyword-amber">{`// over limit`}</span>
            {"\n"}
            <span className="css-keyword-blue">expect</span>(
            <span className="css-keyword-amber">result</span>.
            <span className="css-keyword-emerald">error</span>).toBe(
            <span className="css-keyword-purple">true</span>);{" "}
            <span className="css-keyword-amber">
              {`// Redis down or IP unknown`}
            </span>
          </pre>
        </CopyablePre>
      </div>
    </div>
  );
};
