import { useFetchYoutubeVideos } from "@hooks/queries";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useAuthStore } from "@store/useAuthStore";

export const VideoList: React.FC = () => {
    const { token } = useAuthStore();

    const { data: videos, isLoading, isError } = useFetchYoutubeVideos(token ?? "");

    if (isLoading) return <p>Chargement des vidéos...</p>;
    if (isError) return <p>Erreur lors de la récupération des vidéos.</p>;
    if (!videos || videos.length === 0) return <p>Aucune vidéo trouvée.</p>;

    console.log(videos);
    return (
        <>
            {
                videos.filter((video) => video.snippet).map((video) =>
                (
                    <Card key={video.id.videoId} sx={{ width: 345, height: 320}}>
                        <CardMedia
                            sx={{ height: 200 , objectFit: "cover"}}
                            image={video.snippet.thumbnails?.medium?.url}
                            title={video.snippet.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {video.snippet.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {video.snippet.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Voir les commentaires</Button>
                        </CardActions>
                    </Card>
                )
                )
            }
        </>

    )
}