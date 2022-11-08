import { useRecoilValue } from 'recoil';
import { LoginAtom } from 'src/common/recoil/atom/auth';
import Login from 'src/components/Login';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function Home() {
  const loginAtom = useRecoilValue(LoginAtom);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (loginAtom) {
      setIsLoggedIn(true);
    }
  }, [loginAtom]);
  return (
    <Container>{!isLoggedIn ? <Login /> : <div>로그인했다~~</div>}</Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
