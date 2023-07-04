import { useState, useEffect } from 'react';
import styles from './order-info.module.css';
import classNames from 'classnames';
import {
  CloseIcon,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
// import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderDetailElements } from '../order-detail-element/order-detail-element';
import {
  calculateTotalCoast,
  convertStatus,
  timeEncode,
} from '../../utils/utils';
import { useSelector } from '../../hooks/use-custom-redux';
import { IOrder } from '../../store/types';

const OrderInfo = () => {
  const { id } = useParams();
  const { data, type } = useSelector((state) => ({
    data: state.ingredients.data,
    type: state.webSocket.type,
  }));

  const { orders } = useSelector((state) => ({
    orders:
      type === 'user' ? state.webSocket.userOrders : state.webSocket.allOrders,
  }));
  const navigate = useNavigate();
  const [order, setOrder] = useState<IOrder>();

  const closeHandler = (e: React.SyntheticEvent) => {
    navigate(-1);
  };

  useEffect(() => {
    orders &&
      setOrder(
        orders.find((order: IOrder) => {
          return order._id === id;
        })
      );
  }, [id, orders]);

  return (
    <>
      {data && order && (
        <div
          className={classNames(styles.wrapper)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={classNames(styles.box)}>
            <div className={styles.orderItem}>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-10',
                  styles.orderNumber
                )}
              >
                #{order.number}
              </p>
              <p className='text text_type_main-medium pb-3'>{order.name}</p>
              <p
                className={classNames(
                  'text',
                  'text_type_main-small',
                  styles.status,
                  'pb-15'
                )}
              >
                {convertStatus(order.status)}
              </p>
              <p className='text text_type_main-medium pb-6'>Состав:</p>
              <ul className={classNames(styles.ingredientsList, 'pr-6')}>
                <OrderDetailElements order={order} data={data} />
              </ul>
              <div className={styles.descriptionTotal}>
                <p className='text text_type_main-default text_color_inactive'>
                  {/* Вчера, 13:50 i-GMT+3 */}
                  {timeEncode(order.createdAt)}
                </p>
                <div className={styles.totalSum}>
                  <p
                    className={classNames(
                      styles.sum,
                      'text',
                      'text_type_digits-default'
                    )}
                  >
                    {calculateTotalCoast(data, order.ingredients)}
                  </p>
                  <CurrencyIcon type='primary' />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.closeIcon} onClick={closeHandler}>
            <CloseIcon type='primary' />
          </div>
        </div>
      )}
    </>
  );
};

export { OrderInfo };