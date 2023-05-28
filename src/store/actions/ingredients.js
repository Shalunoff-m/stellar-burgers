import { apiGetData } from '../../utils/api';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const SHOW_ORDER_DETAIL = 'SHOW_ORDER_DETAIL';
export const SET_PRESET = 'SET_PRESET';

export const loadFromApi = () => (dispatch) => {
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

export const getData = () => ({ type: GET_DATA });

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});
export const getDataFailed = (err) => ({ type: GET_DATA_FAILED, payload: err });
