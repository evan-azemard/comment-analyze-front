import { VideoSection } from "@organisms/VideoSection";
import { useAuthStore } from "@store/useAuthStore"

export const HomePage: React.FC = () => {
    const { isAuthenticated } = useAuthStore();

    return (
        <div>
            {isAuthenticated && <VideoSection />}
        </div>
    )
}