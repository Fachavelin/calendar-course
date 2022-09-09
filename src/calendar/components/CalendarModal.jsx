import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const onCloseModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1>Hola mundo</h1>
      <hr />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore facilis
        odio voluptate veritatis rem ut ipsam tempora perferendis enim
        accusamus, aliquid quas dolorum exercitationem corporis molestiae
        nostrum, quasi id ullam.
      </p>
    </Modal>
  );
};
