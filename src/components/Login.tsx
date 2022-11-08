import { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { auth } from 'src/common/service/api';
import { useSetRecoilState } from 'recoil';
import { LoginAtom } from 'src/common/recoil/atom/auth';
const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<string | number>('');
  const setLogin = useSetRecoilState(LoginAtom);
  useLayoutEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  const login = async () => {
    const res = await auth.login(password);
    if (res === undefined) {
      alert('비밀번호가 일치하지 않습니다.');
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  return (
    <>
      <Container>
        <Wrap>
          <Title>관리자 비밀번호</Title>
          <Input
            ref={inputRef}
            placeholder="비밀번호"
            type="tel"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Div onClick={login}>
            <LoginBtn>로그인</LoginBtn>
          </Div>
        </Wrap>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title14};
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid;
  background-color: transparent;
  border-radius: 0;
  width: 100%;
`;

const Wrap = styled.div`
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 5px;
  box-shadow: 7px 4px 10px gray;
  width: 280px;
  padding: 20px 10px;
`;

const Div = styled.div``;

const LoginBtn = styled.button`
  /* display: block; */
  width: 100%;
  margin-top: 15px;
  background-color: #007fc9;
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 5px 0;
`;

export default Login;
