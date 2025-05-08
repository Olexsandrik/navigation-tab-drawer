import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";
import { COLORS } from "../constants";

const ThemeProvider = createContext();

export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeProvider);
