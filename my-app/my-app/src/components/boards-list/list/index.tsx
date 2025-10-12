"use client";

import styles from "./styles.module.css";
// import Image from "next/image";
// import deleteIcon from "./assets/delete.svg";
import { useBoardList } from "./hook";
import { IBoardList } from "./types";
// import { Modal } from "antd";

export default function BoardList(props: IBoardList) {
  const { onClickMoveDetail, onClickDelete } = useBoardList(props);
  //검색어가 입력될 때마다 검색 상태 업데이트 기능

  return (
    <>
      <div className={styles.BoardFrame}>
        <div className={styles.BoardFrame_Header}>
          <div className={styles.BoardFrame_Header_number}>번호</div>
          <div className={styles.BoardFrame_Header_title}>제목</div>
          <div className={styles.BoardFrame_Header_writer}>작성자</div>
          <div className={styles.BoardFrame_Header_date}>날짜</div>
        </div>

        <div className={styles.FetchBoardFrame}>
          <div>
            <div className={styles.FetchBoard}>
              {props.data?.fetchBoards?.map((el, index: number) => (
                <div
                  key={el._id}
                  id={el._id}
                  className={styles.FetchBoard_list}
                  onClick={(event) => onClickMoveDetail(event, el?._id)}
                >
                  <div className={styles.FetchBoard_number}>
                    {index + 1 + (props.page - 1) * 10}
                  </div>

                  <span className={styles.FetchBoard_title}>
                    {props.search?.trim()
                      ? el.title
                          .replaceAll(props.search, `#$%${props.search}#$%`)
                          .split("#$%")
                          .map((el, index) => (
                            <span
                              key={`${el}_${index}`}
                              style={{
                                color: el === props.search ? "red" : "black",
                              }}
                            >
                              {el}
                            </span>
                          ))
                      : el.title}
                  </span>

                  <div className={styles.FetchBoard_writer}>{el.writer}</div>
                  <div className={styles.FetchBoard_date}>
                    {el.createdAt.split("T")[0]}
                  </div>

                  {/* <div>
                        <span
                          onClick={onClickDelete}
                          className={
                            hoveredId === el._id
                              ? styles.showButton
                              : styles.hidden
                          }
                        >
                          <Image
                            src={deleteIcon}
                            alt="deleteIcon"
                          /> 
                        </span>
                      </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
