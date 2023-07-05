import { IIngredient } from '../types';

export const SHOW_MODAL_DETAIL: 'SHOW_MODAL_DETAIL' = 'SHOW_MODAL_DETAIL';
export const CLOSE_MODAL_DETAIL: 'CLOSE_MODAL_DETAIL' = 'CLOSE_MODAL_DETAIL';

export interface IShowModalDetail {
  readonly type: typeof SHOW_MODAL_DETAIL;
  readonly payload: IIngredient;
}
export interface ICloseModalDetail {
  readonly type: typeof CLOSE_MODAL_DETAIL;
}

export type TIngredientDetailActions = IShowModalDetail | ICloseModalDetail;

export const showModalDetail = (data: IIngredient): IShowModalDetail => ({
  type: SHOW_MODAL_DETAIL,
  payload: data,
});

export const closeIngredModal = (): ICloseModalDetail => ({
  type: CLOSE_MODAL_DETAIL,
});
