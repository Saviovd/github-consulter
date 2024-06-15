export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (repoDetails) => {
   return {
      type: OPEN_MODAL,
      payload: { repoDetails },
   };
};

export const closeModal = () => {
   return {
      type: CLOSE_MODAL,
   };
};
