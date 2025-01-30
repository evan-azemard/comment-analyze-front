import { useFetchYoutubeVideos } from "@hooks/queries";
import { useAuthStore } from "@store/useAuthStore";

export const VideoList: React.FC = () => {
    const { token } = useAuthStore();

    const { data: videos, isLoading, isError } = useFetchYoutubeVideos(token ?? "");


    if (isLoading) return <p>Chargement des vidéos...</p>;
    if (isError) return <p>Erreur lors de la récupération des vidéos.</p>;
    if (!videos || videos.length === 0) return <p>Aucune vidéo trouvée.</p>;


return (
    <div>
        {videos.filter((video) => video.snippet)
        .map((video) => (
            <div key={video.id.videoId}>
                <img
                    src={video.snippet.thumbnails?.medium?.url || "default-thumbnail.jpg"}
                    alt={video.snippet.title}
                />
                <p>{video.snippet.title}</p>
            </div>
        ))}
    </div>
);

}