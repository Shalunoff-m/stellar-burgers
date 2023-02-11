import './total.module.css';
import React, { useContext, useEffect } from 'react';
import style from './total.module.css';
import currencyIcon from '../../images/currency 36x36.svg';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../context/app-context';
import { apiSendOrder } from '../../utils/api';

export default function Total(props) {
  const { appState, appDispatch } = useContext(AppContext);
  const { totalCoast, data } = appState;

  const isShow = !Number.isNaN(totalCoast);
  // console.log();

  const packSendData = (data) => {
    // TODO На данный момент просто упаковываются все ингридиенты
    const order = [];
    data.forEach((item) => {
      if (item.__v > 0) order.push(item._id);
    });
    return order;
  };

  const sendOrder = (e) => {
    // console.log(packSendData(data));
    appDispatch({ type: 'setLoader' });
    apiSendOrder(packSendData(data))
      .then((data) => {
        // console.log(data);
        appDispatch({ type: 'showOrderDetail', payload: data });
        appDispatch({ type: 'removeLoader' });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`${style.summary} pt-10 pr-4`}>
      {isShow && (
        <div className={style.total}>
          <p className='text text_type_digits-medium'>{totalCoast}</p>
          <img src={currencyIcon} alt='Валюта' className='pl-2 pr-10' />
          <Button
            htmlType='button'
            type='primary'
            size='large'
            onClick={sendOrder}
          >
            Оформить заказ
          </Button>
        </div>
      )}
    </div>
  );
}
