import React from 'react';
import PropTypes from 'prop-types';
import { MODAL_TYPES } from '../../constants';
import Modal from '../Modal';
import SignInForm from '../../components/SignInForm';

const ModalContainer = ({ showModal = true, modalType }) => {
  if (!showModal) return null;

  switch (modalType) {
    case MODAL_TYPES.SIGN_IN:
      return (
        <Modal className="" modalType={modalType}>
          <SignInForm />
        </Modal>
      );
    default:
      return null;
  }
};

ModalContainer.propTypes = {
  modalType: PropTypes.string.isRequired,
  showModal: PropTypes.bool,
};

export default ModalContainer;
