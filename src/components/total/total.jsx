import './total.module.css';
import React, { useContext } from 'react';
import style from './total.module.css';
import currencyIcon from '../../images/currency 36x36.svg';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../context/app-context';

export default function Total(props) {
  const { appState, appDispatch } = useContext(AppContext);
  // const {}
  // const totalPrice = app.appState.

  const { clickHandler } = props;
  return (
    <div className={`${style.summary} pt-10 pr-4`}>
      <div className={style.total}>
        <p className='text text_type_digits-medium'>610</p>
        <img src={currencyIcon} alt='Валюта' className='pl-2 pr-10' />
        <Button
          htmlType='button'
          type='primary'
          size='large'
          onClick={() => {
            clickHandler({ data: {} });
          }}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
