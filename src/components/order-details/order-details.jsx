import styles from './order-details.module.css';
import React, { useContext } from 'react';
import DoneIcon from '../../images/done.png';
import { AppContext } from '../../context/app-context';

export default function OrderDetails(props) {
  const { appState, appDispatch } = useContext(AppContext);

  return (
    <>
      <h2
        className={`text text_type_digits-large pt-20 pb-8 ${styles.orderTotal}`}
      >
        034536
      </h2>
      <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
      <img src={DoneIcon} alt='Done' className='pb-15' />
      <p className='text text_type_main-default pb-2'>
        Ваш заказ начали готовить
      </p>
      <p className='text text_type_main-default text_color_inactive pb-20'>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}
