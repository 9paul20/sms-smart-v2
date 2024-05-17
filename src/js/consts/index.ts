import { create } from "zustand";
import { SwitchThemeProps } from "../interfaces";

export const useThemeStore = create<SwitchThemeProps>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));
