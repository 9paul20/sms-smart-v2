import { create } from "zustand";
import type { SwitchThemeProps } from "../interfaces";

const getInitialTheme = () => {
	if (typeof window !== "undefined" && window.localStorage) {
		const storedPrefs = window.localStorage.getItem("theme");
		if (typeof storedPrefs === "string") {
			return storedPrefs;
		}

		const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
		if (userMedia.matches) {
			return "dark";
		}
	}

	return "light"; // valor predeterminado si no hay nada almacenado en localStorage
};

export const useSwitchThemeStore = create<SwitchThemeProps>((set) => ({
	theme: getInitialTheme(),
	setTheme: (theme) => {
		set({ theme });
		if (typeof window !== "undefined" && window.localStorage) {
			window.localStorage.setItem("theme", theme);
		}
	},
}));
