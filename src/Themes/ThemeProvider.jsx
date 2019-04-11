import React, {
  memo,
  createContext,
  useEffect,
  useContext,
  useState
} from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import DarkTheme from 'Themes/DarkTheme';
import LightTheme from 'Themes/LightTheme';

const defaultContextData = {
  dark: false,
  toggle: () => {}
};

const DarkThemeContext = createContext(defaultContextData);
const useDarkTheme = () => useContext(DarkThemeContext);

const useEffectDarkMode = () => {
  const matches = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeState, setThemeState] = useState({
    dark: matches,
    hasThemeLoaded: false
  });
  useEffect(() => {
    const isDark = localStorage.getItem('darkTheme') === 'true';
    setThemeState({ dark: isDark, hasThemeLoaded: true });
  }, []);
  return [themeState, setThemeState];
};

const ThemeProvider = memo(({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeLoaded) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem('darkTheme', JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = createMuiTheme(
    themeState.dark ? DarkTheme : LightTheme
  );

  return (
    <MuiThemeProvider theme={computedTheme}>
      <DarkThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </DarkThemeContext.Provider>
    </MuiThemeProvider>
  );
});

export { ThemeProvider, useDarkTheme };
