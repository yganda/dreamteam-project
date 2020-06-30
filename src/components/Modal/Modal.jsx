import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { MODAL_TYPES } from '../../constants';
import './Modal.scss';

const Modal = (
  {
    className,
    modalType = Modal.MODAL_TYPES,
    children,
}) => {
  const classes = clsx('modal', `modal--${modalType}`, className);
  const contentClasses = clsx('modal__content', `modal__content--${modalType}`);
  return (
    <div className={ classes }>
      <div className={ contentClasses }>
        { children }
      </div>
    </div>
  );
};

Modal.MODAL_TYPES = MODAL_TYPES;

Modal.propTypes = {
  className: PropTypes.string,
  modalType: PropTypes.oneOf([...Object.values(Modal.MODAL_TYPES)]),
};

export default Modal;
