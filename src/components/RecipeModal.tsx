import Modal from 'react-modal';
import { customStyles } from 'src/common/util/customStyle';
import { modalAtom } from 'src/common/recoil/atom/modal';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { IRecipeDetail } from 'src/interface/IRecipe';
import { handleCopyRecipe } from 'src/common/util/recipe';
import { dateFormat } from 'src/common/util/date';
import styled from 'styled-components';

const RecipeModal = () => {
  const [modal, setModal] = useRecoilState(modalAtom);
  Modal.setAppElement('body');

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      <Modal
        isOpen={modal.show}
        style={customStyles}
        contentLabel="Minimal Modal Example"
        onRequestClose={() => {
          setModal({
            show: false,
            data: {},
          });
        }}
      >
        <Div>구매한 제품들</Div>
        <Div>
          ({modal.data.isProcStocks}개 / {modal.data.paymentAmount}원 /{' '}
          {dateFormat(modal.data.paymentTime)})
        </Div>
        <br />
        <Div
          onClick={() => {
            handleCopyRecipe(modal.data.tag);
          }}
        >
          영수증(주문)번호 : {modal.data.tag}
        </Div>
        <br />
        {modal.data.parseData?.map((recipe: IRecipeDetail) => (
          <Flex key={recipe.id}>
            <Image
              src={'https://www.ikea.com' + recipe.image.large}
              width={40}
              height={40}
              alt={'thum'}
            />
            <Div>
              <Div>
                {recipe.name} - {recipe.description}
              </Div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Div>
                  <Div fontNeed={true}>구매수량 {recipe.quantity}개</Div>
                  <Div fontNeed={true}>
                    총 구매금액 {recipe.totalPrice.formatted}원
                  </Div>
                </Div>
                <Div colorNeed={true}>{recipe.id}</Div>
              </div>
            </Div>
          </Flex>
        ))}
      </Modal>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.content12};
  margin: 12px 0px;
`;

const Div = styled.div<{ fontNeed?: boolean; colorNeed?: boolean }>`
  font-size: ${({ theme, fontNeed }) =>
    fontNeed ? theme.fontSize.content10 : null};
`;

export default React.memo(RecipeModal);
