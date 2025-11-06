import { FetchBoardCommentsQuery } from "@/commons/gql/graphql";

export interface ICommentListItem {
  el: FetchBoardCommentsQuery["fetchBoardComments"][0];
  index: number;
  length: number;
}

//   _id: string;
//     writer: string;
//     rating: number;
//     contents: string;
//     createdAt: string;
