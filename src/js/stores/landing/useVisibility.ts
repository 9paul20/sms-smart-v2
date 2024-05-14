import { create } from "zustand";
import { toggleVisibility } from "../../interfaces";

const useVisibilityStore = create<toggleVisibility>()((set) => ({
  isVisible: false,
  toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
}));

export default useVisibilityStore;
