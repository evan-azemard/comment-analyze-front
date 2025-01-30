import { Button } from "@mui/material";
import { IGoogleSignOutButtonProps } from "./GoogleSignOutButton.props";

export const GoogleSignOutButton: React.FC<IGoogleSignOutButtonProps> = ({ onClick }) => {

    return <Button onClick={onClick} variant="contained">Déconnexion</Button>;
}