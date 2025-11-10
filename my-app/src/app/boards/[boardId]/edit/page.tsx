'use client';

import { FetchBoardDocument } from '@/commons/gql/graphql';
import BoardsComponentWrite from '@/components/board/boards-write/index';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

export default function BoardsEdit() {
  const params = useParams();
  const boardId = Array.isArray(params.boardId) ? params.boardId[0] : params.boardId || '';
  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      boardId: boardId,
    },
  });

  return <BoardsComponentWrite isEdit={true} />;
}
