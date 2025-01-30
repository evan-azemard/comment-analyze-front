import { GoogleSignOutButton } from "@atoms/GoogleSignOutButton";
import { useAuthStore } from "@store/useAuthStore";

export const GoogleSignOut: React.FC = () => {
  const logount = useAuthStore((state) => state.logout);

  const handleSignOut = () => {
    if (window.google) {
      window.google.accounts.id.disableAutoSelect();
    }
    logount();
  };

  return <GoogleSignOutButton onClick={handleSignOut} />;
};