import { createContext } from 'react';

export interface IThemeModeContext {
  toggleThemeMode: () => void;
  theme: string
}

export const ThemeModeContext = createContext({});
