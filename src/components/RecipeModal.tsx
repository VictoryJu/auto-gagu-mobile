import Modal from 'react-modal';
import { customStyles } from 'src/common/util/customStyle';
import { modalAtom } from 'src/common/recoil/atom/modal';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { useState, useEffect, useLayoutEffect } from 'react';
import { IRecipeDetail } from 'src/interface/IRecipe';

const RecipeModal = () => {
  const [modal, setModal] = useRecoilState(modalAtom);
  Modal.setAppElement('body');
  // modal.data.property로 데이터 가져오면됨.
  return (
    <>
      <Modal
        isOpen={modal.show}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={() => {
          setModal({
            show: false,
            data: {},
          });
        }}
      >
        <div>
          구매한 제품들({modal.data.isProcStocks}개 / {modal.data.paymentAmount}
          원 / {modal.data.paymentTime})
        </div>
        <br />
        <div>영수증(주문)번호 : {modal.data.tag}</div>
        <br />
        {modal.data.parseData?.map((recipe: IRecipeDetail) => (
          <div key={recipe.id}>
            <div>사진들어감</div>
            <div>
              <div>
                {recipe.name} - {recipe.description}
              </div>
              <div>{recipe.href}</div>
            </div>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default RecipeModal;
