import { VideoList } from "@molecules/VideoList";
import { Typography } from "@mui/material";
import { useAuthStore } from "@store/useAuthStore"

export const HomePage: React.FC = () => {
    const { isAuthenticated } = useAuthStore();

    return (
        <div>
            <Typography variant="h3" component="h2">Bienvenue !</Typography>
            {isAuthenticated && <VideoList />}
        </div>
    )
}