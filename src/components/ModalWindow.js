import React from 'react';
import Modal from '@material-ui/core/Modal';
import NewItem from './form/NewItem';
import EditItem from './form/EditItem';
import { MODAL_TYPES } from '../constants';

const ModalWindow = ({ type, onClose, addCustomer, editCustomer, customer = {} }) => {
  const renderModalContent = type => {
    switch (type) {
      case MODAL_TYPES.NEW:
        return <NewItem addCustomer={addCustomer} />;
      case MODAL_TYPES.EDIT:
        return <EditItem editCustomer={editCustomer} customer={customer} />;
      case MODAL_TYPES.ERROR:
        return <div className="modal-paper"><span>You should only edit one selected customer at a time!</span></div>;
      default:
        return <div className="modal-paper">Nothing here!</div>;
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
