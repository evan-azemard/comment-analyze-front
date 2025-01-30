export interface IYouTubeVideo  {
    id: string;
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        default: { url: string };
      };
    };
}