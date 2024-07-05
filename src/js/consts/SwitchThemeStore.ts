import { create } from 'zustand';
import type { SwitchThemeProps } from '../interfaces';

export const useSwitchThemeStore = create<SwitchThemeProps>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));
