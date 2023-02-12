import './total.module.css';
import React, { useContext, useEffect, useMemo } from 'react';
import style from './total.module.css';
import currencyIcon from '../../images/currency 36x36.svg';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../context/app-context';
import { apiSendOrder } from '../../utils/api';

export default function Total({ dataForCalc }) {
  const { appState, appDispatch } = useContext(AppContext);
  const { data } = appState;
  const { bun, ingredients } = dataForCalc;

  // Подсчет общей стоимости на основании булки и компонентов
  function calculateTotal({ bun, ingredients }) {
    let totalCoast = ingredients.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    return totalCoast + bun.price * 2;
  }

  // кеширование результатов подсчета
  const totalPrice = useMemo(
    () => calculateTotal({ bun, ingredients }),
    [bun, ingredients]
  );

  // Проверка на наличие данных для отображения
  const isShow = !Number.isNaN(totalPrice);

  // Формирование списка для отправки по АПИ
  const packSendData = (data) => {
    const order = [];
    data.forEach((item) => {
      if (item.__v > 0) order.push(item._id);
    });
    return order;
  };

  // Отправка данных на сервер
  const sendOrder = (e) => {
    appDispatch({ type: 'setLoader' });
    apiSendOrder(packSendData(data))
      .then((data) => {
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
          <p className='text text_type_digits-medium'>{totalPrice}</p>
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
