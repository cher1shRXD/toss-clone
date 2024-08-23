import { create } from "zustand";
import { User } from "../types/user/user.type";

export interface UserStore {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const userStore = create<UserStore>((set) => ({
  user: {
    id:0,
    username:''
  },
  setUser: (user) => set({ user }),
  clearUser: () => set({user:{
    id:0,
    username:''
  }})
}));
