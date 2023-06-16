import { create } from "zustand";

interface Store {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set(() => ({ mobileMenuOpen: open })),
}));
