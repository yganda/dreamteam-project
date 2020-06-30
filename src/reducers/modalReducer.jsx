import { MODAL_ACTION_TYPES } from '../actions/modalActions';

const initialState = {
  modalType: '',
  showModal: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTION_TYPES.SHOW_MODAL:
      return {
        ...initialState,
        modalType: action.modalType,
        showModal: true
      };
    case MODAL_ACTION_TYPES.CLOSE_MODAL:
      return {
        ...initialState,
        modalType: '',
        showModal: false
      }
    default:
      return state;
  }
};
