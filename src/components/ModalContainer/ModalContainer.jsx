import React from 'react';
import { useSelector } from 'react-redux';
import { MODAL_TYPES } from '../../constants';
import Modal from '../Modal';
import SignInForm from '../../components/SignInForm';

const ModalContainer = () => {
  const { modalType, showModal } = useSelector(({ modal }) => modal);
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

export default ModalContainer;
