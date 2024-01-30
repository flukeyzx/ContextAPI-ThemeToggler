import { createContext } from "react";
import { useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function usetheme() {
  return useContext(ThemeContext);
}
