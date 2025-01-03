import { defaultTheme, themeKey, themes } from './constants.ts';
import { ThemeType } from './types.ts';

export const calculateNextTheme = (theme: ThemeType): ThemeType => {
  if (theme === themes.light) {
    return themes.dark;
  }
  return themes.light;
};

export const loadTheme = (): ThemeType => {
  const theme = localStorage.getItem(themeKey);
  switch (theme) {
    case themes.light:
    case themes.dark:
      return theme;
    default:
      return defaultTheme;
  }
};

export const saveTheme = (theme: ThemeType): void => {
  localStorage.setItem(themeKey, theme);
};
