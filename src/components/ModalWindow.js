import React from 'react';
import Modal from '@material-ui/core/Modal';
import NewItem from './form/NewItem';
import { MODAL_TYPES } from '../constants';

const ModalWindow = ({ type, onClose, addCustomer }) => {
  const renderModalContent = type => {
    console.log(type);
    switch (type) {
      case MODAL_TYPES.NEW:
        return <NewItem addCustomer={addCustomer} />;
      default:
        return <div>Nothing here!</div>;
    }
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={type !== MODAL_TYPES.NONE}
      onClose={onClose}
    >
      {renderModalContent(type)}
    </Modal>
  );
};

export default ModalWindow;