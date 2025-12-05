import { createContext } from "react";

export type TTheme = "light" | "dark";

interface IThemeContextValue {
  theme: TTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContextValue | undefined>(
  undefined
);
