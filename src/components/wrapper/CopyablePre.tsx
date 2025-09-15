import { useState, ReactNode } from "react";
import clsx from "clsx";

type CopyablePreProps = {
  children: ReactNode;
  code?: string;
  theme: "light" | "dark";
};

const CopyablePre = ({ children, code, theme }: CopyablePreProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (): void => {
    const textToCopy = code ?? getTextFromChildren(children);
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const getTextFromChildren = (children: ReactNode): string => {
    if (typeof children === "string") return children;
    if (Array.isArray(children))
      return children.map(getTextFromChildren).join("");
    if (typeof children === "object" && children && "props" in children)
      return getTextFromChildren(
        (children as { props: { children: ReactNode } }).props.children,
      );
    return "";
  };

  return (
    <pre className={clsx("rounded-lg relative group p-4 overflow-x-auto")}>
      {children}
      <button
        onClick={handleCopy}
        className={clsx(
          "absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-sm px-2 py-1 rounded-lg font-mono hover:cursor-pointer font-medium",
          copied
            ? theme === "light"
              ? "bg-green-500 ring ring-green-700"
              : "bg-green-800 ring ring-green-700"
            : theme === "dark"
              ? "bg-zinc-800 hover:bg-zinc-900 ring ring-zinc-500 text-zinc-300"
              : "bg-zinc-300 hover:bg-zinc-200 ring ring-zinc-500 text-zinc-700",
        )}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </pre>
  );
};

export default CopyablePre;
