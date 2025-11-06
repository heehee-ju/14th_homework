import { FetchBoardDocument } from "@/commons/gql/graphql";
import { useQuery } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";

export const useBoardsDetail = () => {
  const router = useRouter();
  const params = useParams();
  //localhost:3000/boards/68bbd349e43aaf002915263b
  // const boardId = params?.boardId;x

  const boardId = Array.isArray(params.boardId)
    ? params.boardId[0]
    : params.boardId || "";
  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      boardId: boardId,
    },
  });

  const onClickEdit = () => {
    router.push(`/boards/${data?.fetchBoard._id}/edit`);
  };

  console.log(data?.fetchBoard?.images);
  return {
    data,
    onClickEdit,
  };
};
