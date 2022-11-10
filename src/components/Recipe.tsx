import React, { useState, useLayoutEffect } from 'react';
import { IRecipe, IRecipeItem } from 'src/interface/IRecipe';
import styled from 'styled-components';
import UsePagination from 'src/common/hook/usePagination';
import { useSetRecoilState } from 'recoil';
import { modalAtom } from 'src/common/recoil/atom/modal';
type Props = {
  receipeData: IRecipe;
  onChange: Function;
  page: number;
};

const Recipe = ({ receipeData, onChange, page }: Props) => {
  const setModal = useSetRecoilState(modalAtom);

  return (
    <>
      {receipeData && (
        <UsePagination
          page={page}
          totalCount={receipeData?.allCount}
          callBack={onChange}
        />
      )}
      <RecipeContainer>
        {receipeData
          ? receipeData.list.map((recipe: IRecipeItem) => {
              return (
                <RecipeWrap
                  key={recipe.id}
                  onClick={() => {
                    setModal({
                      show: true,
                      data: {
                        ...recipe,
                        parseData: JSON.parse(recipe.productsJson),
                      },
                    });
                  }}
                >
                  <RecipeLine style={{ fontWeight: 'bold' }}>
                    <span style={{ display: 'inline-block', width: 200 }}>
                      {new Intl.DateTimeFormat('kr', {
                        dateStyle: 'full',
                      }).format(new Date(recipe.paymentTime))}{' '}
                      /
                    </span>
                    <span>{recipe.tag}</span>
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
    </>
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

export default React.memo(Recipe);
