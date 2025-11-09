import { useState } from "react";
import { debounce } from "lodash";

import { ISearchBar } from "./types";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { FetchBoardsDocument } from "@/commons/gql/graphql";

export const useSearchBar = (props: ISearchBar) => {
  const router = useRouter();

  // 검색어 상태 관리

  const getDebounce = debounce((value) => {
    props.refetch({
      search: value,
      page: 1,
    });
    props.setSearch(value);
  }, 500);

  const onChangeSearch = (event: any) => {
    getDebounce(event.target.value);
  };

  // const onFocusInput = () => {
  //   //클릭 해도 리패치x
  // };

  // 검색 버튼을 클릭했을 때, 검색어와 페이지 1로 refetch
  // const onClickSearch = () => {
  //   props.refetch({ search, page: 1 });
  // };

  const onClickWrite = () => {
    router.push(`/boards/new/`);
  };

  return { onChangeSearch, onClickWrite };
};

// const [keyword, setKeyword] = useState<string>("");
