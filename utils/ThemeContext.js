import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return <ThemeContext.Provider value={{ defaultTheme: theme, setTheme }}>{children}</ThemeContext.Provider>;
};
