"use client";

import { useThemeContext } from "@/context/ThemeContext";
import clsx from "clsx";
import CopyablePre from "@/components/wrapper/CopyablePre";
import { ExampleCode } from "@/components/usage/shared/ExampleCode";

const expressControllerCode: string = `import { rateControl, RateLimitOptions, RateLimitResult } from "elden-js/backend";
import { express, Request, Response, NextFunction } from "express";

const app = express();

// Enable trust proxy for Express, or rateControl gets the first IP from X-Forwarded-For
// If your app is behind a load balancer or reverse proxy that sets X-Forwarded-For,
// setting trust proxy to true ensures req.ip uses the client’s actual IP.
// If X-Forwarded-For is missing, req.ip will fall back to the direct socket IP.
app.set("trust proxy", true);

const options: RateLimitOptions = {
  limit: 20, // max 20 requests
  window: 10, // per 10 seconds
  redisHost: "yourLiveRedisServer", // optional - default: 127.0.0.1
  redisPort: 6379, // optional - default: 6379
  redisPassword: "yourPassword", // optional
  trustProxy: true, // if true uses socket.remoteAddress instead of x-forwarded-for
}

// Convert Express request to RateControlRequest (or pass plain req)
const getRateControlReq = (req: Request) => ({
  ip: req.ip,
  headers: req.headers,
  socket: req.socket
});
app.use("/api",async (req: Request,res: Response,next: NextFunction) => {
  try {
    const rateReq = getRateControlReq(req);
    const result: RateLimitResult = await rateControl(rateReq, options);
    if (!result.allowed) {
      // Rate limit exceeded
      return res.status(429).json(result);
    }
    if (result.error) {
      // Redis not connected, or IP is unknown
    }
    
    // Request allowed
    next();
  } catch (err) {
    // Error handling
    res.status(500).json({
      message: "Rate limiting failed",
      error: true
    });
  }
});`;

const configurationCode: string = `{
  limit: number, // max number of allowed requests per IP
  window: number, // time window in seconds
  redisHost?: string, // optional, default: "127.0.0.1"
  redisPort?: number, // optional, default: 6379
  redisPassword?: string // optional, required if host is provided
  trustProxy?: boolean // if trust proxy is true then, define trustProxy: true or dont add it in config
 }`;

const returnCode: string = `{
  allowed: boolean,  // true if request allowed
  remaining: number, // requests left in window
  resetIn: number,   // seconds until reset
  ip: string,
  message: string,
  error?: boolean    // true if Redis not connected or when IP is unknown
 }`;

const exampleJestTests: string = `expect(result.allowed).toBe(true); // request under limit
expect(result.allowed).toBe(false); // over limit
expect(result.error).toBe(true); // Redis down or IP unknown`;

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

      <ExampleCode exampleCode={expressControllerCode} />

      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Configuration
      </strong>

      <ExampleCode exampleCode={configurationCode} />

      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Returns
      </strong>

      <ExampleCode exampleCode={returnCode} />

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
          <code className="css-keyword-blue">rateControl</code> resolves IPs
          from <code className="font-bold">req.ip</code>,{" "}
          <code className="font-bold">{`headers["x-forwarded-for"]`}</code>{" "}
          (first IP), or <code className="font-bold">socket.remoteAddress</code>{" "}
          when <code className="css-keyword-emerald">trustProxy</code> is{" "}
          <span className="css-keyword-purple">true</span>.
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
        <ExampleCode exampleCode={exampleJestTests} />
      </div>
    </div>
  );
};
