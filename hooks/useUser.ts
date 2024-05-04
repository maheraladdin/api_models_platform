import {create} from "zustand";

type User = {
  name: string;
  age: number;
} | null;

type UserStore = {
  user: User;
  setUser: (user: User) => void;
};

export const useUser = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({user}),
}));