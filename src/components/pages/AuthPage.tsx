import { AuthModal } from "@organisms/AuthModal";
import { Header } from "@organisms/Header";
import { useAuthStore } from "@store/useAuthStore";

export const AuthPage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? <Header /> : <AuthModal />}
    </div>
  );
};
