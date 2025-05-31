import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("connexa-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("connexa-theme", theme);
    set({ theme });
  },
}));