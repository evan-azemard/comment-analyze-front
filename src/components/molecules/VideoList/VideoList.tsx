import { useFetchYoutubeVideos } from "@hooks/queries";
import { useAuthStore } from "@store/useAuthStore";

export const VideoList: React.FC = () => {
    const { token } = useAuthStore();

    const { data: videos, isLoading, isError } = useFetchYoutubeVideos(token ?? "");


    if (isLoading) return <p>Chargement des vidéos...</p>;
    if (isError) return <p>Erreur lors de la récupération des vidéos.</p>;
    if (!videos || videos.length === 0) return <p>Aucune vidéo trouvée.</p>;


    return (
        <ul>
            {videos.map((video: any) => (
                <li key={video.id.videoId}>
                    <img
                        src={video.snippet.thumbnails.default.url}
                        alt={video.snippet.title}
                        width="120"
                    />
                    <p>{video.snippet.title}</p>
                </li>
            ))}
        </ul>
    );

}