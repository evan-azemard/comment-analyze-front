import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IVideoDetailsProps } from "./VideoDetails.props";

export const VideoDetails: React.FC<IVideoDetailsProps> = ({ title, description, videoId }) => {

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