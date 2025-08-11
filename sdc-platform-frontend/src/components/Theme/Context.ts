import { createContext } from "react";

type Context = {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ThemeContext = createContext<Context>({
  darkmode: false,
  setDarkmode: () => {},
});
