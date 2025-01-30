import { GoogleSignOut } from "@molecules/GoogleSignOut";
import { Avatar, Typography } from "@mui/material";
import { useAuthStore } from "@store/useAuthStore"
import "./NavBar.css";
export const NavBar: React.FC = () => {
    const { isAuthenticated, name, photo } = useAuthStore();

    return (
        <nav className="nav-flex">
            {isAuthenticated ? (
                <div>
                    {photo && <Avatar src={photo} alt={name || "Utilisateur"} />}
                    <Typography >{name || "Utilisateur"}</Typography>
                    <GoogleSignOut />
                </div>
            ) : (
                ""
            )
            }
        </nav>
    )
}