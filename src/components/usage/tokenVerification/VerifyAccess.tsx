"use client";

import clsx from "clsx";
import { useThemeContext } from "@/context/ThemeContext";
import { ExampleCode } from "@/components/usage/shared/ExampleCode";

const nextJsExampleCode: string = `import { NextRequest, NextResponse } from "next/server";
import { RequestWithCookies, verifyAccess, AccessResponse } from "elden-js/frontend";

// Example backend URL and token/cookie name
const backendURL = "https://yourBackendURL";
const tokenName = "yourTokenName";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const typedReq = req as unknown as RequestWithCookies;
  const access: AccessResponse = await verifyAccess(backendURL, tokenName, typedReq);

  if (!access.accessStatus) {
    return NextResponse.redirect(new URL("/redirected-path", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*"]
};`;

const returnDataCode: string = `{
  accessStatus: boolean; // true if access allowed
  message: string; // "Access granted" or "Access denied"
}`;

const expressExampleCode: string = `export const checkAccess = (req: Request, res: Response) => {
  try {
    const token = req.cookies["YourTokenName"];
    if (!token) {
      return res.status(401).json({
        accessStatus: false,
        message: "No token provided"
      });
    }
    const payload = verifyJwt(token);
    if (!payload) {
      return res.status(403).json({
        accessStatus: false,
        message: "Invalid token"
      });
    }
    return res.json({
      accessStatus: true,
      message: "Access granted",
      payload
    });
  } catch (err) {
    console.error("checkAuth error:", err);
    return res.status(500).json({
      accessStatus: false,
      message: "Server error"
    });
  }
};`;

const exampleJestTests: string = `expect(access.accessStatus).toBe(true); // access granted
expect(access.accessStatus).toBe(false); // access denied
expect(access.message).toBe("Access denied due to server error"); // server/network error`;

export const VerifyAccess = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={clsx(
        "pt-22 md:pt-25 md:pl-[17.25rem] px-6 pb-6 space-y-6 transition-all duration-300",
        theme === "dark" ? "text-zinc-100" : "text-zinc-900",
      )}
    >
      <h3 className="css-subhead-text font-bold">verifyAccess</h3>

      <p
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        The <code className="css-keyword-blue">verifyAccess</code> helper
        secures client-side routes by asking your backend whether the current
        user is allowed in. It checks tokens from the request and returns a
        clear status with a message you can use in your app flow.
      </p>

      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Example: (Next.js middleware)
      </strong>

      <ExampleCode exampleCode={nextJsExampleCode} />

      <div
        className={clsx(
          "space-y-2 leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        <strong>Returns:</strong>
        <ExampleCode exampleCode={returnDataCode} />
      </div>

      {/* Notes */}
      <div
        className={clsx(
          "leading-[2] mt-2",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        <strong>Notes:</strong>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Backend must return{" "}
            <code>
              <span className="css-keyword-emerald">accessStatus</span>:{" "}
              <span className="css-keyword-purple">boolean</span>
            </code>
            .
          </li>
          <li>
            <code className="css-keyword-emerald">message</code> is optional —{" "}
            <code className="css-keyword-blue">elden-js</code> provides a
            default if missing.
          </li>
          <li>
            If any error occurs (network, server down), access is denied with a
            fallback message.
          </li>
          <li>
            Works with both cookies and tokens — pass the correct{" "}
            <code>tokenName</code>.
          </li>
        </ul>
      </div>

      {/* Express backend example */}
      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        Example: (handling verifyAccess via Express backend)
      </strong>

      <ExampleCode exampleCode={expressExampleCode} />

      {/* Jest tests */}
      <div
        className={clsx(
          "leading-[2] mt-4",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        <strong>Tested with Jest</strong>
        <p>
          All <code className="css-keyword-blue">verifyAccess</code> logic is
          covered:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <span className="font-bold">Cookie/token handling:</span>
            <ul className="list-disc pl-6">
              <li>When cookie is missing → access denied.</li>
              <li>When cookie is present → backend response decides access.</li>
              <li>
                Default messages are returned if backend doesn’t send one.
              </li>
              <li>Correct cookie values are sent in request headers.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Backend responses:</span>
            <ul className="list-disc pl-6">
              <li>
                Success →{" "}
                <code>{`{ accessStatus: true, message: "Access granted" }`}</code>
              </li>
              <li>
                Denied →{" "}
                <code>{`{ accessStatus: false, message: "Access denied" }`}</code>
              </li>
              <li>
                Server or network error →{" "}
                <code>
                  {`{ accessStatus: false, message: "Access denied due to server error" }`}
                </code>
              </li>
            </ul>
          </li>
        </ul>
        <p className="mt-2">Example Jest tests:</p>
        <ExampleCode exampleCode={exampleJestTests} />
      </div>
    </div>
  );
};
