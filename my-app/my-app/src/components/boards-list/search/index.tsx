"use client";

import { useState } from "react";
import { ISearchBar } from "./types";

// 검색어 gql_게시글을 검색어와 페이지 번호에 따라 가져옴.

export default function SearchBar(props: ISearchBar) {
  // 검색어 상태 관리
  const [search, setSearch] = useState("");
  // const [keyword, setKeyword] = useState<string>("");

  const onChangeSearch = (event: any) => {
    setSearch(event.currentTarget.value);
  };

  // 검색 버튼을 클릭했을 때, 검색어와 페이지 1로 refetch
  const onClickSearch = () => {
    props.refetch({ search, page: 1 });
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          onChange={onChangeSearch}
        />
        <button onClick={onClickSearch}>검색</button>
      </div>
    </>
  );
}
