import { GoogleSignOut } from "@molecules/GoogleSignOut";
import { Avatar, Typography } from "@mui/material";
import { useAuthStore } from "@store/useAuthStore"
import "./NavBar.css";
import BackButton from "@organisms/BackButton/BackButton";
export const NavBar: React.FC = () => {
    const { isAuthenticated, name, photo } = useAuthStore();

    return (
        <nav className="nav-flex">
            <BackButton />
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