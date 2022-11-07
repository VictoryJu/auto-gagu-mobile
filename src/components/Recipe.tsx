import { IRecipe, IRecipeItem } from 'src/interface/IRecipe';
import styled from 'styled-components';

type Props = {
  receipeData: IRecipe;
};

const Recipe = ({ receipeData }: Props) => {
  const handleCopyRecipe = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('영수증 번호가 복사되었습니다.');
    } catch (e) {
      alert('복사 실패');
    }
  };
  // console.log(receipeData);

  return (
    <RecipeContainer>
      {receipeData
        ? receipeData.list.map((recipe: IRecipeItem) => {
            return (
              <RecipeWrap key={recipe.id}>
                <RecipeLine style={{ fontWeight: 'bold' }}>
                  <span style={{ display: 'inline-block', width: 200 }}>
                    {new Intl.DateTimeFormat('kr', {
                      dateStyle: 'full',
                    }).format(new Date(recipe.paymentTime))}{' '}
                    /
                  </span>
                  <span onClick={() => handleCopyRecipe(recipe.tag)}>
                    {recipe.tag}
                  </span>
                </RecipeLine>
                <RecipeLine>
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
                </RecipeLine>
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

const RecipeLine = styled.div`
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

export default Recipe;
