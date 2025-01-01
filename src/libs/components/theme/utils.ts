import { ThemeType } from './types.ts';
import { defaultTheme, themeKey } from './constants.ts';

export const calculateNextTheme = (theme: ThemeType): ThemeType => {
	if (theme === 'vymalo-light') {
		return 'vymalo-dark';
	}
	if (theme === 'vymalo-dark') {
		return 'vymalo-light';
	}
	return defaultTheme;
};

export const loadTheme = (): ThemeType => {
	const theme = localStorage.getItem(themeKey);
	switch (theme) {
		case 'vymalo-light':
		case 'vymalo-dark':
			return theme;
		default:
			return defaultTheme;
	}
};

export const saveTheme = (theme: ThemeType): void => {
	localStorage.setItem(themeKey, theme);
};