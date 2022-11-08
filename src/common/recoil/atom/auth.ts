import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

export const LoginAtom = atom<boolean>({
  key: 'authAtom',
  default: false, // 로그인 false
  effects_UNSTABLE: [persistAtom],
});
