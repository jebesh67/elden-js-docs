import CopyablePre from "@/components/wrapper/CopyablePre";
import { Highlight, themes } from "prism-react-renderer";
import clsx from "clsx";
import { useThemeContext } from "@/context/ThemeContext";

export const ExampleCode = ({ exampleCode }: { exampleCode: string }) => {
  const { theme } = useThemeContext();
  const currentTheme = theme === "dark" ? themes.oneDark : themes.oneLight;

  return (
    <>
      <CopyablePre code={exampleCode} theme={theme}>
        <Highlight code={exampleCode} language="tsx" theme={currentTheme}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={clsx(
                className,
                "p-4 rounded-lg w-full overflow-x-auto leading-relaxed",
              )}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, id: i })}>
                  {line.map((token, id) => (
                    <span key={id} {...getTokenProps({ token, id })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </CopyablePre>
    </>
  );
};
