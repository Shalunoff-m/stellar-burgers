import './total.module.css';
import React, { useContext, useEffect } from 'react';
import style from './total.module.css';
import currencyIcon from '../../images/currency 36x36.svg';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../context/app-context';
import { apiSendOrder } from '../../utils/api';

export default function Total(props) {
  const { appState, appDispatch } = useContext(AppContext);
  const { totalCoast } = appState;

  const packSendData = (data) => {
    // TODO На данный момент просто упаковываются все ингридиенты
    const order = data.map((item) => {
      return item._id;
    });
    return order;
  };

  const sendOrder = (e) => {
    apiSendOrder()
      .then((data) => {
        console.log(data);
        appDispatch({ type: 'showOrderDetail', payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`${style.summary} pt-10 pr-4`}>
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
    </div>
  );
}
