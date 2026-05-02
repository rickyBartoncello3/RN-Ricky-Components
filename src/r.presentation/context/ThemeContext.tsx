import {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {
  ThemeColors,
  darkTheme,
  lightTheme,
  AppTheme,
} from '../../shared/theme/theme.tsx';
import {useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

interface ThemeContextProps {
  currentTheme: AppTheme;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: AppTheme) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<AppTheme>(lightTheme);

  const isDark = currentTheme === darkTheme;
  const colors = isDark ? darkTheme.colors : lightTheme.colors;

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, [colorScheme]);

  const setTheme = (theme: AppTheme) => {
    setCurrentTheme(theme);
  };

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme,
          isDark,
          colors,
          setTheme: setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
