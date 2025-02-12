export interface IAuthState {
    isAuthenticated: boolean;
    token: string | null;
    name: string | null;
    photo: string | null;
    login: (token: string | null, name: string, photo: string) => void;
    logout: () => void;
}