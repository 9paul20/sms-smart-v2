import { create } from 'zustand';
import type { VisibilityPassword } from '../../interfaces';

const VisibilityPasswordStore = create<VisibilityPassword>()((set) => ({
  isVisible: false,
  toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
}));

export default VisibilityPasswordStore;
