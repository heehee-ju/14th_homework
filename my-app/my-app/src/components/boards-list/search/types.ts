import { Exact, FetchBoardsQuery, InputMaybe } from "@/commons/gql/graphql";
import { ApolloQueryResult } from "@apollo/client";
import { FetchBoardsQueryVariables } from "@/commons/gql/graphql";
export interface ISearchBar {
  data: FetchBoardsQuery | undefined;
  page: number;
  search?: string;
  setSearch: (v: string) => void;
  refetch: (
    variables?: Partial<FetchBoardsQueryVariables>
  ) => Promise<ApolloQueryResult<FetchBoardsQuery>>;
}

// 1) 쿼리 결과 타입 그대로 쓰기

// 사실 IBoardList를 새로 만들 필요 없이, Codegen이 만들어준 타입 그대로 쓰면 돼:

// import { FetchBoardsQuery } from "@/commons/gql/graphql";

// // data?.fetchBoards 는 배열이므로 타입은 아래와 같다
// type Board = FetchBoardsQuery["fetchBoards"][number];

// 👉 이렇게 하면 Board가 바로 fetchBoards 배열의 각 요소 타입이 된다.
// 즉, map 돌릴 때 el의 타입이 자동으로 잡혀.
