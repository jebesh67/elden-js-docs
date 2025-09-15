"use client";

import clsx from "clsx";
import { useThemeContext } from "@/context/ThemeContext";
import CopyablePre from "@/components/wrapper/CopyablePre";

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

      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-4 rounded-lg overflow-x-auto text-sm leading-relaxed",
          )}
        >
          <code>
            <span className="css-keyword-purple">import</span> {"{"}
            <span className="css-keyword-blue"> NextRequest</span>,{" "}
            <span className="css-keyword-blue">NextResponse</span> {"}"}{" "}
            <span className="css-keyword-purple">from</span>{" "}
            <span className="css-keyword-red">{`"next/server"`}</span>;
            <br />
            <span className="css-keyword-purple">import</span> {"{"}
            <span className="css-keyword-blue"> RequestWithCookies</span>,{" "}
            <span className="css-keyword-blue">verifyAccess</span>,{" "}
            <span className="css-keyword-blue">AccessResponse</span> {"}"}{" "}
            <span className="css-keyword-purple">from</span>{" "}
            <span className="css-keyword-red">{`"elden-js/frontend"`}</span>;
            <br />
            <br />
            <span className="css-comment">{`// Example backend URL and token/cookie name`}</span>
            <br />
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">backendURL</span> ={" "}
            <span className="css-keyword-red">{`"https://yourBackendURL"`}</span>
            ;
            <br />
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">tokenName</span> ={" "}
            <span className="css-keyword-red">{`"yourTokenName"`}</span>;
            <br />
            <br />
            <span className="css-keyword-purple">
              export async function
            </span>{" "}
            <span className="css-keyword-amber">middleware</span>(
            <span className="css-keyword-amber">req</span>:{" "}
            <span className="css-keyword-blue">NextRequest</span>):{" "}
            <span className="css-keyword-blue">Promise</span>&lt;
            <span className="css-keyword-blue">NextResponse</span>&gt; {"{"}
            <br />
            {"  "}
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">typedReq</span> ={" "}
            <span className="css-keyword-amber">req</span>{" "}
            <span className="css-keyword-purple">as unknown as</span>{" "}
            <span className="css-keyword-blue">RequestWithCookies</span>;
            <br />
            {"  "}
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">access</span>:{" "}
            <span className="css-keyword-blue">AccessResponse</span> ={" "}
            <span className="css-keyword-purple">await</span>{" "}
            <span className="css-keyword-blue">verifyAccess</span>(
            <span className="css-keyword-amber">backendURL</span>,{" "}
            <span className="css-keyword-amber">tokenName</span>,{" "}
            <span className="css-keyword-amber">typedReq</span>);
            <br />
            <br />
            {"  "}
            <span className="css-keyword-purple">if</span> (!
            <span className="css-keyword-amber">access</span>.
            <span className="css-keyword-emerald">accessStatus</span>) {"{"}
            <br />
            {"    "}
            <span className="css-keyword-purple">return</span>{" "}
            <span className="css-keyword-blue">NextResponse.redirect</span>(new{" "}
            <span className="css-keyword-blue">URL</span>(
            <span className="css-keyword-red">{`"/redirected-path"`}</span>,{" "}
            <span className="css-keyword-amber">req</span>.
            <span className="css-keyword-amber">url</span>));
            <br />
            {"  "}
            {"}"}
            <br />
            <br />
            {"  "}
            <span className="css-keyword-purple">return</span>{" "}
            <span className="css-keyword-blue">NextResponse.next</span>();
            <br />
            {"}"}
            <br />
            <br />
            <span className="css-keyword-purple">export const</span>{" "}
            <span className="css-keyword-amber">config</span> = {"{"}
            <br />
            {"  "}matcher: [
            <span className="css-keyword-red">{`"/protected/:path*"`}</span>],
            <br />
            {"}"}
          </code>
        </pre>
      </CopyablePre>

      <div
        className={clsx(
          "space-y-2 leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700",
        )}
      >
        <strong>Returns:</strong>
        <CopyablePre theme={theme}>
          <pre
            className={clsx(
              "p-4 rounded-lg overflow-x-auto text-sm",
              theme === "dark"
                ? "bg-zinc-700 text-zinc-200"
                : "bg-zinc-100 text-zinc-800",
            )}
          >
            {"{"}
            <br />
            {"  "}
            <span className="css-keyword-emerald">accessStatus</span>:{" "}
            <span className="css-keyword-purple">boolean</span>,{" "}
            <span>{`//`}</span> <span className="css-keyword-red">true</span> if
            access allowed <br />
            {"  "}
            <span className="css-keyword-emerald">message</span>:{" "}
            <span className="css-keyword-purple">string</span>{" "}
            <span>{`//`}</span>{" "}
            <span className="css-keyword-red">{`"Access granted"`}</span> or{" "}
            <span className="css-keyword-red">{`"Access denied"`}</span>
            <br />
            {"}"}
          </pre>
        </CopyablePre>
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

      <CopyablePre theme={theme}>
        <pre className="p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
          <code>
            <span className="css-keyword-purple">export const</span>{" "}
            <span className="css-keyword-amber">checkAccess</span> = (
            <span className="css-keyword-amber">req</span>:{" "}
            <span className="css-keyword-blue">Request</span>,{" "}
            <span className="css-keyword-amber">res</span>:{" "}
            <span className="css-keyword-blue">Response</span>) =&gt; {"{"}
            <br />
            {"  "}
            <span className="css-keyword-purple">try</span> {"{"}
            <br />
            {"    "}
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">token</span> ={" "}
            <span className="css-keyword-amber">req</span>.
            <span className="css-keyword-amber">cookies</span>[
            <span className="css-keyword-red">{`"YourTokenName"`}</span>];
            <br />
            <br />
            {"    "}
            <span className="css-keyword-purple">if</span> (!
            <span className="css-keyword-amber">token</span>) {"{"}
            <br />
            {"      "}
            <span className="css-keyword-purple">return</span>{" "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">status</span>(401).
            <span className="css-keyword-blue">json</span>({`{`}
            <br />
            {"        "}
            <span className="css-keyword-emerald">accessStatus</span>:{" "}
            <span className="css-keyword-purple">false</span>,
            <br />
            {"        "}
            <span className="css-keyword-emerald">message</span>:{" "}
            <span className="css-keyword-red">{`"No token provided"`}</span>
            <br />
            {"      "}
            {`}`});
            <br />
            {"    "}
            {"}"}
            <br />
            <br />
            {"    "}
            <span className="css-keyword-const">const</span>{" "}
            <span className="css-keyword-amber">payload</span> ={" "}
            <span className="css-keyword-blue">verifyJwt</span>(
            <span className="css-keyword-amber">token</span>);
            <br />
            {"    "}
            <span className="css-keyword-purple">if</span> (!
            <span className="css-keyword-amber">payload</span>) {"{"}
            <br />
            {"      "}
            <span className="css-keyword-purple">return</span>{" "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">status</span>(403).
            <span className="css-keyword-blue">json</span>({`{`}
            <br />
            {"        "}
            <span className="css-keyword-emerald">accessStatus</span>:{" "}
            <span className="css-keyword-purple">false</span>,
            <br />
            {"        "}
            <span className="css-keyword-emerald">message</span>:{" "}
            <span className="css-keyword-red">{`"Invalid token"`}</span>
            <br />
            {"      "}
            {`}`});
            <br />
            {"    "}
            {"}"}
            <br />
            <br />
            {"    "}
            <span className="css-keyword-purple">return</span>{" "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">json</span>({`{`}
            <br />
            {"      "}
            <span className="css-keyword-emerald">accessStatus</span>:{" "}
            <span className="css-keyword-purple">true</span>,
            <br />
            {"      "}
            <span className="css-keyword-emerald">message</span>:{" "}
            <span className="css-keyword-red">{`"Access granted"`}</span>,
            <br />
            {"      "}
            <span className="css-keyword-emerald">payload</span>
            <br />
            {"    "}
            {`}`});
            <br />
            {"  "}
            {"}"} <span className="css-keyword-purple">catch</span> (
            <span className="css-keyword-amber">err</span>) {"{"}
            <br />
            {"    "}
            <span className="css-keyword-blue">console</span>.
            <span className="css-keyword-blue">error</span>(
            <span className="css-keyword-red">{`"checkAuth error:"`}</span>,{" "}
            <span className="css-keyword-amber">err</span>);
            <br />
            {"    "}
            <span className="css-keyword-purple">return</span>{" "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">status</span>(500).
            <span className="css-keyword-blue">json</span>({`{`}
            <br />
            {"      "}
            <span className="css-keyword-emerald">accessStatus</span>:{" "}
            <span className="css-keyword-purple">false</span>,
            <br />
            {"      "}
            <span className="css-keyword-emerald">message</span>:{" "}
            <span className="css-keyword-red">{`"Server error"`}</span>
            <br />
            {"    "}
            {`}`});
            <br />
            {"  "}
            {"}"}
            <br />
            {"}"};
          </code>
        </pre>
      </CopyablePre>

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
        <CopyablePre theme={theme}>
          <pre className="p-3 rounded-lg overflow-x-auto text-sm leading-relaxed">
            <span className="css-keyword-blue">expect</span>(
            <span className="css-keyword-amber">access</span>.
            <span className="css-keyword-emerald">accessStatus</span>).toBe(
            <span className="css-keyword-purple">true</span>);{" "}
            <span className="css-keyword-amber">{`// access granted`}</span>
            {"\n"}
            <span className="css-keyword-blue">expect</span>(
            <span className="css-keyword-amber">access</span>.
            <span className="css-keyword-emerald">accessStatus</span>).toBe(
            <span className="css-keyword-purple">false</span>);{" "}
            <span className="css-keyword-amber">{`// access denied`}</span>
            {"\n"}
            <span className="css-keyword-blue">expect</span>(
            <span className="css-keyword-amber">access</span>.
            <span className="css-keyword-emerald">message</span>).toBe(
            <span className="css-keyword-red">
              {`"Access denied due to server error"`}
            </span>
            );{" "}
            <span className="css-keyword-amber">{`// server/network error`}</span>
          </pre>
        </CopyablePre>
      </div>
    </div>
  );
};
