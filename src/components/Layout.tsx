import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginAtom } from 'src/common/recoil/atom/auth';
import Login from './Login';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  const loginAtom = useRecoilValue(LoginAtom);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (loginAtom) {
      setIsLoggedIn(true);
    }
  }, [loginAtom]);
  return (
    <>
      {isLoggedIn ? (
        <>{children}</>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};
export default Layout;
