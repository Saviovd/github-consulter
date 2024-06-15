import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

const initialState = {
   isOpen: false,
   repoDetails: null,
};

const modalReducer = (state = initialState, action) => {
   switch (action.type) {
      case OPEN_MODAL:
         return {
            ...state,
            isOpen: true,
            repoDetails: action.payload,
         };
      case CLOSE_MODAL:
         return {
            ...state,
            isOpen: false,
            repoDetails: null,
         };
      default:
         return state;
   }
};

export default modalReducer;
