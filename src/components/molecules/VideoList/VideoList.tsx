import { useFetchYoutubeVideos } from "@hooks/queries";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import { useAuthStore } from "@store/useAuthStore";
import { useNavigate } from "react-router-dom";

export const VideoList: React.FC = () => {
    const navigate = useNavigate();
    const { token } = useAuthStore();
    const { data: videos, isLoading, isError, refetch } = useFetchYoutubeVideos(token ?? "");

    if (isLoading) return (
        Array.from(new Array(5)).map((_, index) => (
            <Box key={index} component="li" sx={{ mb: 2 }}>
              <Skeleton variant="text" width={500} height={50} animation="wave" />
              <Skeleton variant="rectangular" animation="wave" width={300} height={50} />
            </Box>
          ))
    )
    if (isError) return <p>Erreur lors de la récupération des vidéos.</p>;
    if (!videos || videos.length === 0) return <p>Aucune vidéo trouvée.</p>;

    return (
        <>
            <section>
                {
                    videos.filter((video) => video.snippet).map((video) =>
                    (
                        <Card key={video.id.videoId} sx={{ width: 345, height: 320, overflow: "scroll" }}>
                            <CardMedia
                                sx={{ height: 200, objectFit: "cover" }}
                                image={video.snippet.thumbnails?.medium?.url}
                                title={video.snippet.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {video.snippet.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => navigate(`/video/${video.id.videoId}`)}>
                                    Voir les commentaires</Button>
                            </CardActions>
                        </Card>
                    )
                    )
                }
            </section>
        </>
    )
}