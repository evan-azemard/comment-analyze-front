import { GoogleSignOutButton } from "@atoms/GoogleSignOutButton";
import { IGoogleSignOut } from "./GoogleSignOut.props";

export const GoogleSignOut: React.FC<IGoogleSignOut> = ({ setIsAuthenticated }) => {
  const handleSignOut = () => {
    if (window.google) {
      window.google.accounts.id.disableAutoSelect();
    }
    setIsAuthenticated(false);
  };

  return <GoogleSignOutButton onSignOut={handleSignOut} />;
};