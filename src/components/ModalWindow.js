import React from 'react';
import Modal from '@material-ui/core/Modal';
import NewItem from './form/NewItem';

const ModalWindow = ({ type, onClose }) => {
  const renderModalContent = type => {
    switch (type) {
      case 'new':
        return <NewItem />;
      default:
        return '';
    };
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={type ? true : false}
      onClose={onClose}
    >
      {renderModalContent(type)}
    </Modal>
  );
};

export default ModalWindow;