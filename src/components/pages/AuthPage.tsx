import { AuthModal } from "@organisms/AuthModal";
import { Header } from "@organisms/Header";
import { useState } from "react";

export const AuthPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <Header setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <AuthModal isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
};
