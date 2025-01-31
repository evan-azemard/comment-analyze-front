export interface IComment {
  id: string;
  snippet: {
    topLevelComment: {
      id: string;
      snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        textDisplay: string;
      };
    };
  };
}

export interface ICommentsTableProps {
  comments: IComment[];
}
