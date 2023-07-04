import styles from './order-details.module.css';
import React from 'react';
import DoneIcon from '../../images/done.png';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from '../../hooks/use-custom-redux';

export const OrderDetails = () => {
  const { order } = useSelector((store) => store.order);
  const navigate = useNavigate();

  if (!order) return <Navigate to='/' />;

  return (
    <>
      <div
        className={styles.window}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2
          className={`text text_type_digits-large pt-20 pb-8 ${styles.orderTotal}`}
        >
          {order.order.number}
        </h2>
        <p className='text text_type_main-medium pb-15'>идентификатор заказа</p>
        <img src={DoneIcon} alt='Done' className='pb-15' />
        <p className='text text_type_main-default pb-2'>
          Ваш заказ начали готовить
        </p>
        <p className='text text_type_main-default text_color_inactive pb-20'>
          Дождитесь готовности на орбитальной станции
        </p>
        <div className={styles.closeIcon}>
          <CloseIcon
            type='primary'
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;