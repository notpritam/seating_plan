import { create } from "zustand";
import { persist } from "zustand/middleware";

const user = (set) => ({
  name: null,
  batchNumber: null,
  id: null,
  imageUrl: null,
  isLoggedIn: false,

  login: (name, batchNumber, id, imageUrl) => {
    set((state) => {
      return {
        name,
        batchNumber,
        id,
        imageUrl,
        isLoggedIn: true,
      };
    });
  },

  logout: () => {
    set((state) => {
      return {
        name: null,
        batchNumber: null,
        id: null,
        imageUrl: null,
        isLoggedIn: false,
      };
    });
  },
});

export const useUser = create(persist(user, { name: "_auth" }));
