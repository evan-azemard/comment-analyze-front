import { create } from "zustand";

interface IAuthState {
    isAuthenticated: boolean;
    token: string | null;
    name: string | null;
    photo: string | null;
    login: (token: string, name: string, photo: string) => void;
    logout: () => void;
}

export const useAuthStore = create<IAuthState>((set) => ({
    isAuthenticated: false,
    token: null,
    name: null,
    photo: null,

    login: (token, name, photo) =>
        set({isAuthenticated: true, token, name, photo}),

    logout: () => 
        set({isAuthenticated: false, token: null, name: null, photo: null}),
}));