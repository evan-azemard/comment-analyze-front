export interface IComment {
  id: string;
  snippet: {
    topLevelComment: {
      id: string;
      snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        textDisplay: string;
        videoId?: string;
      };
    };
  };
}

export interface ICommentsTableProps {
  comments: IComment[];
  videoId?: string;
}
