import { atom } from 'recoil';
import { IRecipeModal } from 'src/interface/IRecipe';

export const modalAtom = atom<IRecipeModal>({
  key: 'modalAtom',
  default: {
    show: false,
    data: {},
  }, // 로그인 false
});
