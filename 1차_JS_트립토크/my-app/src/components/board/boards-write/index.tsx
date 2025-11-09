"use client";

import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { useBoardsComponentWrite } from "./hook";
import { IBoardsComponentWriteProps } from "./types";
import addIcon from "../../app/boards/new/assets/add.svg";
import { Button, Modal } from "antd";

import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { CloseCircleFilled } from "@ant-design/icons";

export default function BoardsComponentWrite(
  props: IBoardsComponentWriteProps
) {
  const { isEdit } = props;

  const {
    data,
    // 통합 state & 핸들러
    inputs, // { writer, title, comment }
    onChangeInputs,
    // 개별 상태 & 핸들러(요구사항 외)
    password,
    onChangePassword,
    zonecode,
    address,
    addressDetail,
    youtubeUrl,
    imageUrls,
    onClickDeleteImg,
    onChangeAddressDetail,
    onChangeYoutubeUrl,
    onChangeFile,
    // 모달
    isModalOpen,
    handleOk,
    handleCancel,
    handleComplete,
    onClickOpenModal,
    //
    onClickSignup,
    onClickEdit,

    등록버튼비활성화,
  } = useBoardsComponentWrite(isEdit);

  return (
    <div className={styles.게시물등록_frame}>
      <div className={styles.게시물등록_container}>
        <h1>게시물{props.isEdit ? " 수정" : " 등록"}</h1>

        <div className={styles.게시물등록_작성자and비밀번호}>
          <div className={styles.게시물등록_사용자인풋}>
            <label htmlFor="작성자" className={styles.게시물등록_라벨}>
              작성자 <span className={styles.required}>*</span>
            </label>
            <input
              id="writer"
              className={
                isEdit
                  ? styles.게시물등록_수정플레이스홀더
                  : styles.게시물등록_플레이스홀더
              }
              disabled={isEdit ? true : false}
              type="text"
              placeholder="작성자 명을 입력해 주세요."
              onChange={onChangeInputs}
              defaultValue={
                isEdit
                  ? inputs.writer || data?.fetchBoard?.writer || ""
                  : inputs.writer
              }
            />
            {/* //inputs.writer → 사용자가 지금 input에 입력한 값
                  data?.fetchBoard?.writer → 서버에서 불러온 원래 작성자 값
                  "" → 둘 다 없을 때 fallback으로 빈 문자열

                  즉,
                  사용자가 뭔가 입력했다면 그 값 보여줌
                  아직 입력 안 했으면 DB에서 불러온 기존 작성자 보여줌
                  그것마저 없으면 그냥 빈칸 보여줌 */}

            {/* <div className={styles.에러메세지_스타일}>{writererror}</div> */}
          </div>

          <div className={styles.게시물등록_사용자인풋}>
            <label htmlFor="비밀번호" className={styles.게시물등록_라벨}>
              비밀번호 <span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="비밀번호"
              className={
                isEdit
                  ? styles.게시물등록_수정플레이스홀더
                  : styles.게시물등록_플레이스홀더
              }
              disabled={isEdit ? true : false}
              type="text"
              placeholder="비밀번호를 입력해 주세요."
              onChange={onChangePassword}
              defaultValue={data ? "********" : ""}
            />
            {/* <div className={styles.에러메세지_스타일}>{passworderror}</div> */}
          </div>
        </div>

        <hr />

        <div className={styles.게시물등록_사용자인풋}>
          <label htmlFor="제목" className={styles.게시물등록_라벨}>
            제목 <span style={{ color: "red" }}>*</span>
          </label>
          <input
            id="title"
            className={styles.게시물등록_플레이스홀더}
            type="text"
            placeholder="제목을 입력해 주세요."
            onChange={onChangeInputs}
            value={
              isEdit
                ? inputs.title || data?.fetchBoard?.title || ""
                : inputs.title
            }
          />
          {/* <div className={styles.에러메세지_스타일}>{titleerror}</div> */}
        </div>

        <div className={styles.게시물등록_사용자인풋}>
          <label htmlFor="내용" className={styles.게시물등록_라벨}>
            내용 <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            id="content"
            className={styles.게시물등록_플레이스홀더_내용}
            placeholder="내용을 입력해 주세요."
            onChange={onChangeInputs}
            value={
              isEdit
                ? inputs.content || data?.fetchBoard?.contents || ""
                : inputs.content
            }
          />
          {/* <div className={styles.에러메세지_스타일}>{contenterror}</div> */}
        </div>

        <hr />

        <div className={styles.게시물등록_주소인풋}>
          <div className={styles.게시물등록_주소_상단}>
            <label className={styles.게시물등록_주소인풋_라벨}>주소</label>
            <div className={styles.게시물등록_주소인풋_우편번호}>
              <input
                className={styles.게시물등록_주소인풋_플레이스홀더}
                type="text"
                placeholder="01234"
                value={zonecode || data?.fetchBoard.boardAddress?.zipcode || ""}
                readOnly
              />
              <button
                className={styles.게시물등록_주소인풋_우편번호버튼}
                onClick={onClickOpenModal}
              >
                우편번호 검색
              </button>
            </div>
          </div>

          <input
            className={styles.게시물등록_플레이스홀더}
            type="text"
            placeholder="주소를 입력해 주세요."
            value={address || data?.fetchBoard.boardAddress?.address || ""}
            readOnly
          />
          <input
            className={styles.게시물등록_플레이스홀더}
            type="text"
            placeholder="상세주소"
            defaultValue={
              addressDetail ||
              data?.fetchBoard.boardAddress?.addressDetail ||
              ""
            }
            onChange={onChangeAddressDetail}
          />
        </div>

        <hr />

        <div className={styles.게시물등록_사용자인풋}>
          <label htmlFor="유튜브링크" className={styles.게시물등록_라벨}>
            유튜브 링크
          </label>
          <input
            id="유튜브링크"
            className={styles.게시물등록_플레이스홀더}
            type="text"
            placeholder="링크를 입력해 주세요"
            value={youtubeUrl || data?.fetchBoard?.youtubeUrl || ""}
            // value={data?.fetchBoard.youtubeUrl ?? ""}는 onChange로 youtubeUrl state를 바꿔도, 화면 value는 계속 data 값이라 타이핑이 안 먹음
            onChange={onChangeYoutubeUrl}
          />
        </div>

        <hr />

        <div className={styles.사진첨부인풋}>
          <label>사진첨부</label>
          <div className={styles.게시물등록_사진첨부}>
            <label>
              <div className={styles.게시물등록_사진첨부_박스}>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={onChangeFile(0)}
                />
                {imageUrls[0] !== "" ? (
                  <div>
                    <img
                      className={styles.uploadImage}
                      src={`https://storage.googleapis.com/${imageUrls[0]}`}
                      alt="업로드 이미지"
                    />
                    <CloseCircleFilled
                      className={styles.closeIcon}
                      onClick={onClickDeleteImg(0)}
                    />
                  </div>
                ) : (
                  <div className={styles.plusIcon}>
                    <Image src={addIcon} alt="addIcon" />
                    <p>클릭해서 사진 업로드</p>
                  </div>
                )}
              </div>
              {/* <img src={`https://storage.googleapis.com/${imageUrls}`} /> */}
            </label>
            <label>
              <div className={styles.게시물등록_사진첨부_박스}>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={onChangeFile(1)}
                />
                {imageUrls[1] !== "" ? (
                  <div>
                    <img
                      className={styles.uploadImage}
                      src={`https://storage.googleapis.com/${imageUrls[1]}`}
                      alt="업로드 이미지"
                    />
                    <CloseCircleFilled
                      className={styles.closeIcon}
                      onClick={onClickDeleteImg(1)}
                    />
                  </div>
                ) : (
                  <div className={styles.plusIcon}>
                    <Image src={addIcon} alt="addIcon" />
                    <p>클릭해서 사진 업로드</p>
                  </div>
                )}
              </div>
            </label>
            <label>
              <div className={styles.게시물등록_사진첨부_박스}>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={onChangeFile(2)}
                />
                {imageUrls[2] !== "" ? (
                  <div>
                    <img
                      className={styles.uploadImage}
                      src={`https://storage.googleapis.com/${imageUrls[2]}`}
                      alt="업로드 이미지"
                    />
                    <CloseCircleFilled
                      className={styles.closeIcon}
                      onClick={onClickDeleteImg(2)}
                    />
                  </div>
                ) : (
                  <div className={styles.plusIcon}>
                    <Image src={addIcon} alt="addIcon" />
                    <p>클릭해서 사진 업로드</p>
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>

        <div className={styles.게시물등록_취소and등록하기버튼}>
          <button className={styles.취소버튼}>취소</button>
          <button
            className={styles.등록하기버튼}
            onClick={isEdit ? onClickEdit : onClickSignup}
            disabled={isEdit ? false : 등록버튼비활성화}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </button>
        </div>
      </div>
      <Modal
        title="우편번호 검색"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
    </div>
  );
}
