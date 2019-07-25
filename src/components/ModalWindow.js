import React from 'react';
import Modal from '@material-ui/core/Modal';

const ModalWindow = () => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={false}
    >
      <div >
        <h2 id="modal-title">Modal</h2>
      </div>
    </Modal>
  );
};

export default ModalWindow;