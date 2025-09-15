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
        theme === "dark" ? "text-zinc-100" : "text-zinc-900"
      )}
    >
      <h3 className="css-subhead-text font-bold">verifyAccess</h3>

      <p
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
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
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        Example: (Next.js middleware)
      </strong>

      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-4 rounded-lg overflow-x-auto text-sm leading-relaxed"
          )}
        >
          <code>
            <span className="css-keyword-purple">import</span> {"{"}
            <span className="css-keyword-blue"> NextRequest</span>,{" "}
            <span className="css-keyword-blue">NextResponse</span> {"}"} from{" "}
            <span className="css-keyword-red">{`"next/server"`}</span>;
            <br />
            <span className="css-keyword-purple">import</span> {"{"}
            <span className="css-keyword-blue"> RequestWithCookies</span>,{" "}
            <span className="css-keyword-blue">verifyAccess</span>,{" "}
            <span className="css-keyword-blue">AccessResponse</span> {"}"} from{" "}
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
            <span className="css-keyword-amber">middleware</span>(req:{" "}
            <span className="css-keyword-blue">NextRequest</span>):{" "}
            <span className="css-keyword-blue">Promise</span>&lt;
            <span className="css-keyword-blue">NextResponse</span>&gt; {"{"}
            <br />
            {"  "}
            <span className="css-comment">{`// Optional TypeScript typing: cast request to RequestWithCookies`}</span>
            <br />
            {"  "}
            <span className="css-comment">{`// You can also just pass 'req' directly without casting`}</span>
            <br />
            {"  "}
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">typedReq</span> = req as unknown
            as <span className="css-keyword-blue">RequestWithCookies</span>;
            <br />
            {"  "}
            <span className="css-comment">{`// Example without typing:`}</span>
            <br />
            {"  "}
            <span className="css-comment">{`// const access: AccessResponse = await verifyAccess(backendURL, tokenName, req);`}</span>
            <br />
            <br />
            {"  "}
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">access</span>:{" "}
            <span className="css-keyword-blue">AccessResponse</span> ={" "}
            <span className="css-keyword-purple">await</span>{" "}
            <span className="css-keyword-blue">verifyAccess</span>(
            <span className="css-keyword-amber">backendURL</span>, <span className="css-keyword-amber">tokenName</span>,
            <span className="css-keyword-amber">typedReq</span>);
            <br />
            <br />
            {"  "}
            <span className="css-keyword-purple">if</span> (!
            <span className="css-keyword-amber">access</span>.
            <span className="css-keyword-emerald">accessStatus</span>) {"{"}
            <br />
            {"    "}
            <span className="css-comment">{`// redirect if access denied`}</span>
            <br />
            {"    "}
            <span className="css-keyword-purple">return</span>{" "}
            <span className="css-keyword-blue">NextResponse.redirect</span>(new{" "}
            <span className="css-keyword-blue">URL</span>(
            <span className="css-keyword-red">{`"/redirected-path"`}</span>, req.url));
            <br />
            {"  "}
            {"}"}
            <br />
            <br />
            {"  "}
            <span className="css-comment">{`// access allowed`}</span>
            <br />
            {"  "}
            <span className="css-keyword-purple">return</span>{" "}
            <span className="css-keyword-blue">NextResponse.next</span>();
            <br />
            {"}"}
            <br />
            <br />
            <span className="css-comment">{`// apply to routes`}</span>
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
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        <strong>Returns:</strong>
        <pre
          className={clsx(
            "p-4 rounded-lg overflow-x-auto text-sm",
            theme === "dark"
              ? "bg-zinc-700 text-zinc-200"
              : "bg-zinc-100 text-zinc-800"
          )}
        >
          <code className="pl-2">
            {`{`}
            <br />
            <span className="css-keyword-emerald pl-7">accessStatus</span>:
            boolean,
            <br />
            <span className="css-keyword-emerald pl-7">message</span>: string
            <br />
            <span className="pl-2">{`}`}</span>
          </code>
        </pre>
      </div>

      <div
        className={clsx(
          "leading-[2] mt-2",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        <strong>How it works:</strong>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <code className="css-keyword-blue">verifyAccess</code> sends a
            request to your backend
          </li>
          <li>
            On the backend, get the token from{" "}
            <code className="css-keyword-amber">req.cookies</code>
          </li>
          <li>
            Validate the token and respond with an object containing{" "}
            <code className="css-keyword-emerald">accessStatus</code>
          </li>
          <li>
            <code className="css-keyword-emerald">accessStatus</code> is{" "}
            <strong>required</strong>
          </li>
          <li>
            <code className="css-keyword-emerald">message</code> is{" "}
            <strong>optional</strong> —{" "}
            <code className="css-keyword-red">elden-js</code> provides a default
            if not given
          </li>
          <li>
            Use <code className="css-keyword-emerald">accessStatus</code> to
            allow or deny access in your app flow
          </li>
        </ul>
      </div>
      <strong
        className={clsx(
          "leading-[2]",
          theme === "dark" ? "text-zinc-300" : "text-zinc-700"
        )}
      >
        Example: (handling verifyAccess via Express backend)
      </strong>

      <CopyablePre theme={theme}>
        <pre
          className={clsx(
            "p-4 rounded-lg overflow-x-auto text-sm leading-relaxed"
          )}
        >
          <code>
            <span className="css-keyword-purple">export const</span>{" "}
            <span className="css-keyword-blue">checkAccess</span> = (
            <span className="css-keyword-amber">req</span>:{" "}
            <span className="css-keyword-blue">Request</span>,{" "}
            <span className="css-keyword-amber">res</span>:{" "}
            <span className="css-keyword-blue">Response</span>) {"=>"} {"{"}
            <br />
            {"  "}
            <span className="css-keyword-purple">try</span> {"{"}
            <br />
            {"  "}
            {"  "}
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">token</span> =
            <span className="css-keyword-amber">req</span>.
            <span className="css-keyword-emerald">cookies</span>
            {`["YourTokenName"]`};
            <br />
            <br />
            {"  "}
            {"  "}
            <span className="css-keyword-purple">if</span> (!
            <span className="css-keyword-amber">token</span>) {"{"}
            <br />
            {"  "}
            {"  "}
            {"  "}
            <span className="css-keyword-amber">return</span>{" "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">status</span>(401).
            <span className="css-keyword-blue">json</span>({`{`}
            <span className="css-keyword-emerald">accessStatus</span>:{" "}
            <span className="css-keyword-purple">false</span>,{" "}
            <span className="css-keyword-emerald">message</span>:
            <span className="css-string">{`"No token provided"`}</span> {`}`});
            <br />
            {"  "}
            {"  "}
            {"}"}
            <br />
            <br />
            {"  "}
            {"  "}
            <span className="css-keyword-purple">const</span>{" "}
            <span className="css-keyword-amber">payload</span> =
            <span className="css-keyword-blue">verifyJwt</span>(
            <span className="css-keyword-amber">token</span>);
            <br />
            {"  "}
            {"  "}
            <span className="css-keyword-purple">if</span> (!
            <span className="css-keyword-amber">payload</span>) {"{"}
            <br />
            {"  "}
            {"  "}
            {"  "}
            <span className="css-keyword-amber">return</span>{" "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">status</span>(403).
            <span className="css-keyword-blue">json</span>({`{`}
            <span className="css-keyword-emerald">accessStatus</span>:{" "}
            <span className="css-keyword-purple">false</span>,{" "}
            <span className="css-keyword-emerald">message</span>:
            <span className="css-string">{`"Invalid token"`}</span> {`}`});
            <br />
            {"  "}
            {"  "}
            {"}"}
            <br />
            <br />
            {"  "}
            {"  "}
            <span className="css-keyword-amber">return</span>{" "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">json</span>({`{`}
            <span className="css-keyword-emerald">accessStatus</span>:{" "}
            <span className="css-keyword-purple">true</span>,{" "}
            <span className="css-keyword-emerald">message</span>:
            <span className="css-string">{`"Access granted"`}</span>,{" "}
            <span className="css-keyword-emerald">payload</span> {`}`});
            <br />
            {"  "}
            {"}"} <span className="css-keyword-purple">catch</span> (
            <span className="css-keyword-amber">err</span>) {"{"}
            <br />
            {"  "}
            {"  "}
            {"  "}
            <span className="css-keyword-amber">console</span>.
            <span className="css-keyword-blue">error</span>(
            <span className="css-string">{`"checkAuth error:"`}</span>,{" "}
            <span className="css-keyword-amber">err</span>);
            <br />
            {"  "}
            {"  "}
            {"  "}
            <span className="css-keyword-amber">return</span>{" "}
            <span className="css-keyword-amber">res</span>.
            <span className="css-keyword-blue">status</span>(500).
            <span className="css-keyword-blue">json</span>({`{`}
            <span className="css-keyword-emerald">accessStatus</span>:{" "}
            <span className="css-keyword-purple">false</span>,{" "}
            <span className="css-keyword-emerald">message</span>:
            <span className="css-string">{`"Server error"`}</span> {`}`});
            <br />
            {"  "}
            {"}"}
            <br />
            {"}"};
          </code>
        </pre>
      </CopyablePre>
    </div>
  );
};
