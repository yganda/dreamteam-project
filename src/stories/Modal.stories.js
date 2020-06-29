import React from 'react';
import Modal from '../components/Modal';

export default { title: 'Modal' };

export const ModalWindow = () => (
  <div style={{ width: "300px", margin: "0 10px" }}>
    <Modal type="text" placeholder="Simple input field">
      This is a modal
    </Modal>
  </div>
);
