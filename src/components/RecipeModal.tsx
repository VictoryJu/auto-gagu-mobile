import Modal from 'react-modal';
import { customStyles } from 'src/common/util/customStyle';
import { modalAtom } from 'src/common/recoil/atom/modal';
import { useRecoilState } from 'recoil';
const RecipeModal = () => {
  const [modal, setModal] = useRecoilState(modalAtom);
  Modal.setAppElement('body');
  if (modal.show)
    return (
      <>
        <Modal
          isOpen={modal?.show}
          style={customStyles}
          contentLabel="Example Modal"
          onRequestClose={() => {
            setModal({
              show: false,
              data: {},
            });
          }}
        >
          {modal.data.id}
        </Modal>
      </>
    );
};

export default RecipeModal;
