import { VideoList } from "@molecules/VideoList";
import { useAuthStore } from "@store/useAuthStore"

export const HomePage: React.FC = () => {
    const { isAuthenticated } = useAuthStore();

    return (
        <div>
            {isAuthenticated && <VideoList />}
        </div>
    )
}