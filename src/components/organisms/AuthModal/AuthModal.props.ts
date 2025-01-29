declare global {
  interface Window {
    google: any;
  }
}

export interface IAuthModalProps {
  setIsAuthenticated: (isAuth: boolean) => void;
  isAuthenticated: boolean;
}