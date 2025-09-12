export const VerifyAccess = () => {
  return (
    <>
      {" "}
      <h3 className="css-subhead-text font-medium">Example Usage</h3>
      <p>
        <strong>Frontend Route Protection (Next.js)</strong>
      </p>
      <pre className="bg-zinc-800 text-zinc-100 p-3 rounded overflow-x-auto">
        <code>{`import { verifyAccess, RequestWithCookies } from "elden-js";

const typedReq = req as unknown as RequestWithCookies;

const access = await verifyAccess("http://yourBackend", "tokenName", typedReq);

if (!access.accessStatus) {
  // redirect or deny access
}`}</code>
      </pre>
      <p>
        <strong>Rate Limiting (Express)</strong>
      </p>
      <pre className="bg-zinc-800 text-zinc-100 p-3 rounded overflow-x-auto">
        <code>{`import { rateControl, RateControlRequest, RateLimitOptions } from "elden-js";

const options: RateLimitOptions = { limit: 5, window: 10 };
const typedReq: RateControlRequest = { ip: req.ip, headers: req.headers };

const result = await rateControl(typedReq, options);

if (!result.allowed) {
  // handle rate limit exceeded
}`}</code>
      </pre>
    </>
  );
};
