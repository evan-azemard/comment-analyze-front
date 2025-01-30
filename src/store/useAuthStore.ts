import { IAuthState } from "types/AuthState.interface";
import { create } from "zustand";

export const useAuthStore = create<IAuthState>((set) => ({
    isAuthenticated: false,
    token: null,
    name: null,
    photo: null,

    login: (token, name, photo) =>
        set({ isAuthenticated: true, token, name, photo }),

    logout: () =>
        set({ isAuthenticated: false, token: null, name: null, photo: null  }),

}));