"use client";

import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function Signin() {
  const { register, handleSubmit } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);

  const onClickSignIn = (formData: any) => {
    loginUser({
      variables: {
        password: formData.password,
        email: formData.email,
      },
    });
  };

  return (
    <>
      <div>로그인</div>
      <form onSubmit={handleSubmit(onClickSignIn)}>
        <input
          type="text"
          placeholder="이메일을 입력해 주세요."
          {...register("email")}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          {...register("password")}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
