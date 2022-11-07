import { useRef, useState } from 'react';
import { usePurchases } from 'src/common/hook/usePurchases';
import { IRecipe } from 'src/interface/IRecipe';
import styled from 'styled-components';

export const RecipeComponent = () => {
  const [start, setStart] = useState(0);
  const limit = 10;
  const [ikeaId, setIkeaId] = useState('');

  const { data } = usePurchases(start, limit, ikeaId);

  const handleCopyRecipe = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('영수증 번호가 복사되었습니다.');
    } catch (e) {
      alert('복사 실패');
    }
  };

  return (
    <RecipeContainer>
      {data
        ? data.list.map((recipe: IRecipe) => {
            return (
              <RecipeWrap key={recipe.id}>
                <Recipe style={{ fontWeight: 'bold' }}>
                  <span style={{ display: 'inline-block', width: 200 }}>
                    {new Intl.DateTimeFormat('kr', {
                      dateStyle: 'full',
                    }).format(new Date(recipe.paymentTime))}{' '}
                    /
                  </span>
                  <span onClick={() => handleCopyRecipe(recipe.tag)}>
                    {recipe.tag}
                  </span>
                </Recipe>
                <Recipe>
                  <span>{recipe.storeName} </span>
                  <span>
                    / {recipe.status === 'COMPLETE' ? '구매완료' : '진행중'} /{' '}
                  </span>
                  <span style={{ fontWeight: 'bold' }}>
                    {recipe.paymentAmount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </span>
                </Recipe>
              </RecipeWrap>
            );
          })
        : ''}
    </RecipeContainer>
  );
};

const RecipeContainer = styled.div`
  padding: 0px 20px;
`;

const Recipe = styled.div`
  padding: 10px 20px;
  width: 100%;
`;

const RecipeWrap = styled.div`
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  cursor: pointer;
  padding: 5px 0px;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
`;
