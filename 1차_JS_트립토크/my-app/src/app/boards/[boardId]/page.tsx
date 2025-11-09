'use client';

import CommentList from '@/components/board/boards-detail/comment-list';
import CommentWrite from '@/components/board/boards-detail/comment-write';
import BoardsDetail from '@/components/board/boards-detail/detail';

export default function BoardsDetailPage() {
  return (
    <>
      <BoardsDetail />
      <CommentWrite isEdit={false} />
      <CommentList />
    </>
  );
}
