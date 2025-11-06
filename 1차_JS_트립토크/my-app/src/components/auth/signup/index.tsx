"use client";

import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      picture
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function SignUp() {
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit } = useForm();

  const onClickSignUp = (formData: any) => {
    createUser({
      variables: {
        createUserInput: {
          email: formData.email,
          password: formData.password,
          name: formData.name,
        },
      },
    });
    alert("완료");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSignUp)}>
        <div>
          <p>이메일</p>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <p>이름</p>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <p>비밀번호</p>
          <input type="password" {...register("password")} />
        </div>
        <div>
          <p>비밀번호 확인</p>
          <input type="password" {...register("passwordCheck")} />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
