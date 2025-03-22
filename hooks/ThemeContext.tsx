import React, { createContext, useState, useContext, useEffect } from "react";
import { Appearance } from "react-native";

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const CustomThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">(Appearance.getColorScheme() || "light");

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) setTheme(colorScheme);
    });
    return () => listener.remove();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <CustomThemeContext.Provider value={{ theme, toggleTheme }}>{children}</CustomThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
