import { Button } from "@mui/material";
import { IGoogleSignOutButton } from "./GoogleSignOutButton.props";

export const GoogleSignOutButton: React.FC<IGoogleSignOutButton> = ({ onSignOut }) => {
    return (
        <Button onClick={onSignOut} variant="contained">Déconnexion</Button>
    )
}