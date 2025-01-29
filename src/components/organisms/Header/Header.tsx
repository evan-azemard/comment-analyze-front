import { GoogleSignOut } from "@molecules/GoogleSignOut";
import { IHeader } from "./Header.props";

export const Header: React.FC<IHeader> = ({ setIsAuthenticated }) => {

  return (
    <header>
      <h2>Bienvenue, vous êtes connecté ✅</h2>
      <GoogleSignOut setIsAuthenticated={setIsAuthenticated} />
    </header>
  );
}