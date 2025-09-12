import { useState, ReactNode } from "react";
import clsx from "clsx";

type CopyablePreProps = {
  children: ReactNode;
  theme: "light" | "dark";
};

const getTextFromChildren = (children: ReactNode): string => {
  if (typeof children === "string") return children;
  if (Array.isArray(children))
    return children.map(getTextFromChildren).join("");
  if (typeof children === "object" && children && "props" in children)
    return getTextFromChildren((children as any).props.children);
  return "";
};

const CopyablePre = ({ children, theme }: CopyablePreProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (): void => {
    const text: string = getTextFromChildren(children);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout((): void => setCopied(false), 1500);
  };

  return (
    <pre
      className={clsx(
        "p-3 rounded-lg relative group",
        theme === "dark"
          ? "bg-zinc-700 text-zinc-200"
          : "bg-zinc-100 text-zinc-700",
      )}
    >
      {children}
      <button
        onClick={handleCopy}
        className={clsx(
          "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm px-2 py-1 rounded-lg font-mono hover:cursor-pointer font-medium",
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
