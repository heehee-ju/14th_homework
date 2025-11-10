"use client";

import { useState } from "react";
import { ISearchBar } from "./types";
import { DatePicker, Space } from "antd";
import { useSearchBar } from "./hook";
import styles from "./styles.module.css";

import Image from "next/image";
import searchIcon from "./assets/search.svg";
import writeIcon from "./assets/write.svg";

export default function SearchBar(props: ISearchBar) {
  const { RangePicker } = DatePicker;

  const { onChangeSearch, onClickWrite } = useSearchBar(props);
  // 검색 버튼을 클릭했을 때, 검색어와 페이지 1로 refetch

  return (
    <>
      <div className={styles.searchBarFrame}>
        <RangePicker
          className={styles.datePicker}
          placeholder={["YYYY.MM.DD", "YYYY.MM.DD"]}
          style={{ width: 300, height: 50 }}
        />
        <div className={styles.keywordBar}>
          <Image src={searchIcon} alt="searchIcon" />
          <input
            className={styles.keywordBarInput}
            type="text"
            placeholder="제목을 입력하세요"
            onChange={onChangeSearch}
            // onFocus={onFocusInput}
          />
        </div>
        <button className={styles.searchButton}>검색</button>
        <button className={styles.writeButton} onClick={onClickWrite}>
          <Image src={writeIcon} alt="writeIcon" />
          트립토크 등록
        </button>
      </div>
    </>
  );
}
