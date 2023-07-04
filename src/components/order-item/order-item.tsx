import React, { FC } from 'react';
import styles from './order-item.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { calculateTotalCoast, timeEncode } from '../../utils/utils';
import { ImageList } from '../image-list/image-list';
import classNames from 'classnames';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from '../../hooks/use-custom-redux';
import { IOrder } from '../../store/types';

interface IOrderItem {
  order: IOrder;
}

const OrderItem: FC<IOrderItem> = ({ order }) => {
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
    navigate(`/feed/${order._id}`, {
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

export { OrderItem };
