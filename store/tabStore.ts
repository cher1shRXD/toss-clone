import { create } from "zustand";

export interface TabStore {
  tab: string;
  setTab: (photo: string) => void;
}

export const tabStore = create<TabStore>((set) => ({
  tab: 'home',
  setTab: (tab) => set({ tab }),
}));
