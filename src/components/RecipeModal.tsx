import Modal from 'react-modal';
import { customStyles } from 'src/common/util/customStyle';
import { modalAtom } from 'src/common/recoil/atom/modal';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { IRecipeDetail } from 'src/interface/IRecipe';
import { handleCopyRecipe } from 'src/common/util/recipe';
import { dateFormat } from 'src/common/util/date';

const RecipeModal = () => {
  const [modal, setModal] = useRecoilState(modalAtom);
  Modal.setAppElement('body');
  // modal.data.property로 데이터 가져오면됨.
  console.log(modal.data);

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
        <div>
          구매한 제품들({modal.data.isProcStocks}개 / {modal.data.paymentAmount}
          원 / {dateFormat(modal.data.paymentTime)})
        </div>
        <br />
        <div
          onClick={() => {
            handleCopyRecipe(modal.data.tag);
          }}
        >
          영수증(주문)번호 : {modal.data.tag}
        </div>
        <br />
        {modal.data.parseData?.map((recipe: IRecipeDetail) => (
          <div
            key={recipe.id}
            style={{
              display: 'flex',
            }}
          >
            <Image
              src={'https://www.ikea.com' + recipe.image.large}
              width={40}
              height={40}
              alt={'thum'}
            />
            <div>
              <div>
                {recipe.name} - {recipe.description}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div>구매수량 {recipe.quantity}개</div>
                  <div>총 구매금액 {recipe.totalPrice.formatted}원</div>
                </div>
                <div>{recipe.id}</div>
              </div>
            </div>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default React.memo(RecipeModal);
