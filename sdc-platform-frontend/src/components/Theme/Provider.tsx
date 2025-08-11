import { ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "src/components/Theme/Context";

type Props = {
  children: ReactNode;
};
const ThemeProvider = (props: Props) => {
  // Use system settings for default value
  const [darkmode, setDarkmode] = useState(() => {
    try {
      const storedDarkMode = sessionStorage.getItem("darkmode");
      if (!storedDarkMode) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return JSON.parse(storedDarkMode);
    } catch (_) {
      return false; // defaults to light mode if browser does not support media queries.
    }
  });

  useEffect(() => {
    sessionStorage.setItem("darkmode", JSON.stringify(darkmode));
    const html = document.documentElement;
    if (darkmode) {
      html.className = "dark";
    } else {
      html.className = "";
    }
  }, [darkmode]);

  const theme = useMemo(() => ({ darkmode: darkmode, setDarkmode: setDarkmode }), [darkmode]);

  return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>;
};

export default ThemeProvider;
