import { GoogleSignOut } from "@molecules/GoogleSignOut";
import { Avatar, Button, Typography } from "@mui/material";
import { useAuthStore } from "@store/useAuthStore"
import "./NavBar.css";
import BackButton from "@organisms/BackButton/BackButton";
import { Link } from "react-router-dom";
export const NavBar: React.FC = () => {
    const { isAuthenticated, name, photo } = useAuthStore();

    return (
        <nav className="nav-flex">
            <BackButton />
            <Link to="/" >
                <Button variant="contained" color="secondary">
                    Home
                </Button>
            </Link>
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