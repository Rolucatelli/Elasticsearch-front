import { create } from "zustand";

type LoginStore = {
  username?: string;
  password?: string;
  logIn: (username: string, password: string) => void;
  logOut: () => void;
  history: string[];
  addHistory: (query: string) => void;
};

export const useLoginStore = create<LoginStore>((set) => ({
  history: [],
  logIn: (username, password) => {
    set({ username, password });
  },
  logOut: () => {
    set({ username: undefined, password: undefined, history: [] });
  },
  addHistory: (query) => {
    set((state) => {
      if (state.history[0] !== query) {
        return { history: [query, ...state.history] };
      }
      return state;
    });
  },
}));
