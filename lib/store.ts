import { create } from "zustand";

/**
 * Light client UI state shared across conversion components
 * (AI demo modal now; exit-intent modal in Pass 2).
 */
interface UIState {
  demoOpen: boolean;
  openDemo: () => void;
  closeDemo: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  demoOpen: false,
  openDemo: () => set({ demoOpen: true }),
  closeDemo: () => set({ demoOpen: false }),
}));
