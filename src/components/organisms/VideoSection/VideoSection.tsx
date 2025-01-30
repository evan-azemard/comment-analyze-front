import { VideoList } from "@molecules/VideoList";
import { Container, Grid2, Typography } from "@mui/material";

export const VideoSection: React.FC = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Dernières Vidéos
            </Typography>

            <Grid2 container spacing={4}>
                <VideoList />
            </Grid2>
        </Container>
    );
};
