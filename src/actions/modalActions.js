// action types
export const MODAL_ACTION_TYPES = {
  CLOSE_MODAL: 'CLOSE_MODAL',
  SHOW_MODAL: 'SHOW_MODAL',
};

// actions
export const closeModal = () => ({
  type: MODAL_ACTION_TYPES.CLOSE_MODAL,
});

export const showModal = (modalType) => ({
  type: MODAL_ACTION_TYPES.SHOW_MODAL,
  modalType,
});
