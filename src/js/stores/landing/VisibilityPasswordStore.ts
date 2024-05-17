import { create } from "zustand";
import { VisibilityPassword } from "../../interfaces";

const VisibilityPasswordStore = create<VisibilityPassword>()((set) => ({
  isVisible: false,
  toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
}));

export default VisibilityPasswordStore;
