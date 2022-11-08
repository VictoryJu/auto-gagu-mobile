import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginAtom = atom<boolean>({
  key: 'authAtom',
  default: false, // 로그인 false
  effects_UNSTABLE: [persistAtom],
});
