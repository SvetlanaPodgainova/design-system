import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type TTheme } from "./ThemeContext";

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  const preferTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return preferTheme ? "dark" : "light";
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>(getInitialTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefer-color-scheme: dark)");

    const handleChangeTheme = (event: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;

      const sytemTheme = event.matches ? "dark" : "light";
      setTheme(sytemTheme);
    };

    media.addEventListener("change", handleChangeTheme);
    return () => {
      media.removeEventListener("change", handleChangeTheme);
    };
  }, []);

  const toggleTheme = (): void => {
    setTheme((prev) => {
      const currentTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", currentTheme);
      return currentTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
