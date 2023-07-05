import React, { FC } from 'react';
import styles from './order-item-history.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import {
  calculateTotalCoast,
  convertStatus,
  timeEncode,
} from '../../utils/utils';
import { ImageList } from '../image-list/image-list';
import classNames from 'classnames';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../hooks/use-custom-redux';
import { IOrder } from '../../store/types';

interface IOrderItemHistoryProps {
  order: IOrder;
}

const OrderItemHistory: FC<IOrderItemHistoryProps> = ({ order }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { data } = useSelector((state) => ({
    data: state.ingredients.data,
  }));
  // let order = {};

  const clickHandler = () => {
    // navigate('/feed/detail', {
    //   state: { background: location },
    // });
    navigate(`/orders/${order._id}`, {
      state: { background: location },
    });
  };

  // order = orders[4];

  return (
    <>
      {order && (
        <li className={styles.orderItem} onClick={clickHandler}>
          <div className={styles.itemTopString}>
            <p className='text text_type_digits-default'>#{order.number}</p>
            <p className='text text_type_main-default text_color_inactive'>
              {timeEncode(order.createdAt)}
            </p>
          </div>
          <p className='text text_type_main-medium'>{order.name}</p>
          <p
            className={classNames(
              'text',
              'text_type_main-default',
              styles.link
            )}
          >
            {convertStatus(order.status)}
          </p>
          <div className={styles.ingredientsTotal}>
            <ul className={styles.orderIngredients}>
              <ImageList images={order.ingredients} />
            </ul>
            <div className={styles.sumTotal}>
              <p
                className={classNames(
                  styles.sum,
                  'text',
                  'text_type_digits-default'
                )}
              >
                {data && calculateTotalCoast(data, order.ingredients)}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export { OrderItemHistory };
