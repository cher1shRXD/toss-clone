import { create } from "zustand";

export interface ModalStore {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

export const modalStore = create<ModalStore>((set) => ({
  isModalVisible: false,
  setIsModalVisible: (isModalVisible) => set({ isModalVisible }),
}));
