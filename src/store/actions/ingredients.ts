import { apiGetData } from '../../utils/api';
import { IIngredient } from '../types';

export const GET_DATA: 'GET_DATA' = 'GET_DATA';
export const GET_DATA_SUCCESS: 'GET_DATA_SUCCESS' = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED: 'GET_DATA_FAILED' = 'GET_DATA_FAILED';
export const SHOW_ORDER_DETAIL: 'SHOW_ORDER_DETAIL' = 'SHOW_ORDER_DETAIL';
export const SET_PRESET: 'SET_PRESET' = 'SET_PRESET';

export interface IGetData {
  readonly type: typeof GET_DATA;
}
export interface IGetDataSuccess {
  readonly type: typeof GET_DATA_SUCCESS;
  readonly payload: Array<IIngredient>;
}
export interface IGetDataFailed {
  readonly type: typeof GET_DATA_FAILED;
  readonly payload: any;
}
export interface IShowOrderDetail {
  readonly type: typeof SHOW_ORDER_DETAIL;
}
export interface ISetPreset {
  readonly type: typeof SET_PRESET;
}

// TODO Доделать
export const loadFromApi = () => (dispatch: any) => {
  dispatch(getData());
  apiGetData()
    .then((res) => {
      // console.log(res);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailed(err));
      console.log(err);
    });
};

export const getData = (): IGetData => ({ type: GET_DATA });

export const getDataSuccess = (data: Array<IIngredient>): IGetDataSuccess => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});
export const getDataFailed = (err: any): IGetDataFailed => ({
  type: GET_DATA_FAILED,
  payload: err,
});
