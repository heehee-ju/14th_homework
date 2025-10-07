import { useState } from "react";
import { ISearchBar } from "./types";

export const useSearchBar = (props: ISearchBar) => {
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

  return { onChangeSearch, onClickSearch };
};
