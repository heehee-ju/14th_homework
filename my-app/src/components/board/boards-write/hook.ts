import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import {
  CreateBoardDocument,
  FetchBoardDocument,
  UpdateBoardDocument,
  UploadFileDocument,
} from '../../../commons/gql/graphql';
import { Address } from 'react-daum-postcode';
import { Modal } from 'antd';
import { checkValidationFile } from '@/commons/libraries/validationFile';

export const useBoardsComponentWrite = (isEdit: boolean) => {
  // - 변경되는 입력값 새로 저장하는 상태 설정
  const router = useRouter();
  const params = useParams();
  const editId = isEdit ? params.boardId.toString() : ''; //-> 현재가 '수정 모드'라면, editId에 게시글 ID(params.boardId)를 넣고, 아니라면 빈칸을 넣는다

  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    content: '',
  });
  const [password, setPassword] = useState('');
  const [zonecode, setZoneCode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [imageUrls, setImageUrls] = useState(['', '', '']);

  const [게시글등록API요청함수] = useMutation(CreateBoardDocument);
  const [게시글업데이트요청함수] = useMutation(UpdateBoardDocument);
  const [uploadFile] = useMutation(UploadFileDocument);

  const { data } = useQuery(FetchBoardDocument, {
    variables: { boardId: editId.toString() },
    skip: !isEdit,
  });

  const 등록버튼비활성화 = !inputs.writer || !inputs.title || !inputs.content || !password;

  // - 변경되는 입력값 확인후 상태에 저장하기 함수들
  const onChangeInputs = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };
  const onChangeFile = (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files?.[0];

    //src/commons/libraries/validationFile.ts에 있는 검증함수 컴포넌트 사용하여 검증하기
    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile.url);

    const newUrls = [...imageUrls]; // ["","",""]
    newUrls[index] = result.data?.uploadFile.url ?? '';

    setImageUrls(newUrls);
  };
  //주소 모달관련~~
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onClickOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleComplete = (data: Address) => {
    //state 값에 넣어주기
    setZoneCode(data.zonecode); // 우편번호 입력창에 표시
    setAddress(data.address); // 주소 입력창에 표시
    setIsModalOpen(false); // 모달 닫기
  };

  const onClickSignup = async () => {
    try {
      const result = await 게시글등록API요청함수({
        //여기서 result는 mutation 실행 후 반환된 "변경 결과"
        variables: {
          createBoardInput: {
            writer: inputs.writer,
            password: password,
            title: inputs.title,
            images: imageUrls,
            contents: inputs.content, // ← comment를 contents로 전송
            youtubeUrl: youtubeUrl,
            boardAddress: {
              // 주소 정보 추가
              zipcode: zonecode,
              address,
              addressDetail,
              // => zipcode, address, addressDetail은 Address안에 들어있는 객체들이다!
            },
          },
        },
      });

      Modal.success({
        title: '등록 완료',
        content: '게시글이 성공적으로 등록되었습니다.',
      });
      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error({
        title: '에러 발생',
        content: '에러가 발생하였습니다. 다시 시도해 주세요.',
      });
    }
  };

  const onClickEdit = async () => {
    //   const passwordInput = prompt(
    //     "글을 입력할때 입력하셨던 비밀번호를 입력해주세요"
    //   );
    //   if (!passwordInput) {
    //     Modal.error({
    //       title: "비밀번호 오류",
    //       content: "비밀번호가 틀렸습니다. 다시 시도해 주세요.",
    //     });
    //     return;
    //   }

    //   const updateInput: any = {
    //     boardAddress: {
    //       zipcode: "",
    //       address: "",
    //       addressDetail: "",
    //     },
    //     youtubeUrl,
    //   };
    //   // title, contents, youtubeUrl => updateBoardInput의 최상위 필드
    //   //                                → 바로 넣어도 됨.
    //   // zipcode, address, addressDetail => updateBoardInput.boardAddress라는 하위 객체 안에 있어야 함
    //   //                                  → 따로 객체 만들어서 넣어야 함.

    //   // if (writer && writer.trim() !== "") updateInput.writer = writer;
    //   if (inputs.title.trim() !== "") updateInput.title = inputs.title;
    //   if (inputs.comment.trim() !== "") updateInput.contents = inputs.comment; // comment => contents
    //   if (zonecode && zonecode.trim() !== "")
    //     updateInput.boardAddress.zipcode = zonecode;
    //   if (address && address.trim() !== "")
    //     updateInput.boardAddress.address = address;
    //   if (addressDetail && addressDetail.trim() !== "")
    //     updateInput.boardAddress.addressDetail = addressDetail;

    //   if (youtubeUrl && youtubeUrl.trim() !== "")
    //     updateInput.youtubeUrl = youtubeUrl;

    //   if (Object.keys(updateInput).length > 0) {
    //     //->객체의 key(속성 이름)들을 배열로 반환하고 객체에 몇개의 속성이 있는지 말해줌
    //     try {
    //       const result = await 게시글업데이트요청함수({
    //         variables: {
    //           updateBoardInput: updateInput,
    //           password: passwordInput,
    //           boardId: editId,
    //         },
    //       });

    //       if (result.data) {
    //         Modal.success({
    //           title: "수정 완료",
    //           content: "게시글이 성공적으로 수정되었습니다.",
    //         });
    //       } else {
    //         Modal.warning({
    //           title: "수정 실패",
    //           content: "게시글 수정에 실패했습니다.",
    //         });
    //       }

    //       router.push(`/boards/${editId}`);
    //     } catch (error) {
    //       Modal.error({
    //         title: "에러 발생",
    //         content: "에러가 발생하였습니다. 다시 시도해 주세요.",
    //       });
    //     }
    //   }
    // };

    const passwordInput = prompt('글을 입력할때 입력하셨던 비밀번호를 입력해주세요');
    if (!passwordInput) {
      Modal.error({
        title: '비밀번호 오류',
        content: '비밀번호가 틀렸습니다. 다시 시도해 주세요.',
      });
      return;
    }

    const updateTitle = inputs.title || data?.fetchBoard.title;
    const updateContent = inputs.content || data?.fetchBoard.contents;
    const updateZipcode = zonecode || data?.fetchBoard.boardAddress?.zipcode;
    const updateAddress = address || data?.fetchBoard.boardAddress?.address;
    const updateAddressDetail = addressDetail || data?.fetchBoard.boardAddress?.addressDetail;
    const updateYoutubeUrl = youtubeUrl || data?.fetchBoard.youtubeUrl;
    const updateImageUrls = imageUrls;
    //->객체의 key(속성 이름)들을 배열로 반환하고 객체에 몇개의 속성이 있는지 말해줌
    try {
      const result = await 게시글업데이트요청함수({
        variables: {
          updateBoardInput: {
            title: updateTitle,
            contents: updateContent,
            boardAddress: {
              zipcode: updateZipcode,
              address: updateAddress,
              addressDetail: updateAddressDetail,
            },
            youtubeUrl: updateYoutubeUrl,
            images: updateImageUrls,
          },
          password: passwordInput,
          boardId: editId,
        },
      });

      if (result.data) {
        Modal.success({
          title: '수정 완료',
          content: '게시글이 성공적으로 수정되었습니다.',
        });
      } else {
        Modal.warning({
          title: '수정 실패',
          content: '게시글 수정에 실패했습니다.',
        });
      }

      router.push(`/boards/${editId}`);
    } catch (error) {
      Modal.error({
        title: '에러 발생',
        content: '에러가 발생하였습니다. 다시 시도해 주세요.',
      });
    }
  };

  const onClickDeleteImg = (index: number) => (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    const newUrls = [...imageUrls]; // ["","",""]
    newUrls[index] = '';
    setImageUrls(newUrls);
  };
  useEffect(() => {
    if (data?.fetchBoard?.images) {
      setImageUrls([...data.fetchBoard.images]);
    }
  }, [data]);

  // useEffect(() => {
  //   console.log(1 + 1);
  // }, [이미지1번]);
  return {
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
  };
};

// console.log(data);
// let fullAddress = data.address; //최종적으로 state에 넣을 “완성된 주소 문자열”을 담는 그릇
// let extraAddress = ""; //조건에 따라 붙일 보조정보를 모아두는 그릇

// if (data.addressType === "R") {
//   if (data.bname !== "") {
//     extraAddress += data.bname;
//   }
//   if (data.buildingName !== "") {
//     extraAddress +=
//       extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
//   }
//   fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
// }
