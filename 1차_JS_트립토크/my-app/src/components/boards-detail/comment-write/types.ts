export interface ICommentWrite {
  isEdit: boolean;
  el?: {
    _id: string;
    writer?: string | null;
    contents?: string;
    rating?: number;
  } | null;
}
