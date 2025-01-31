import { useFetchYoutubeVideos } from "@hooks/queries";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useAuthStore } from "@store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { IVideoDetailsProps } from "./VideoDetails.props";

export const VideoDetails: React.FC<IVideoDetailsProps> = ({ title, description, videoId }) => {
    const navigate = useNavigate();
    const { token } = useAuthStore();
    const { data: videos, isLoading, isError } = useFetchYoutubeVideos(token ?? "");

    if (isLoading) return <p>Chargement des vidéos...</p>;
    if (isError) return <p>Erreur lors de la récupération des vidéos.</p>;
    if (!videos || videos.length === 0) return <p>Aucune vidéo trouvée.</p>;

    return (
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia
            component="iframe"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </CardContent>
        </Card>
      );
}