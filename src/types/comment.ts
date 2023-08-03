export type CommentVerbos = {
  like?: number;
  comment?: number;
  description: string;
  title: string;
  url: string;
  isChecked: boolean;
  info: string;
  isOriginalComment: boolean;
};

export type CommentType = Omit<CommentVerbos, 'isOriginalComment'>;
