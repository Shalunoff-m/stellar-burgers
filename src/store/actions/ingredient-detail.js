export const SHOW_MODAL_DETAIL = 'SHOW_MODAL_DETAIL';
export const CLOSE_MODAL_DETAIL = 'CLOSE_MODAL_DETAIL';

export const showModalDetail = (data) => ({
  type: SHOW_MODAL_DETAIL,
  payload: data,
});

export const closeIngredModal = () => ({ type: CLOSE_MODAL_DETAIL });
