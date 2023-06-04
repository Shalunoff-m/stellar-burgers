import React, { useEffect, useState } from 'react';
import styles from './order-info-page.module.css';
import classNames from 'classnames';
import {
  CloseIcon,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  calculateTotalCoast,
  convertStatus,
  timeEncode,
} from '../../utils/utils';
import { OrderDetailElements } from '../../components/order-detail-element/order-detail-element';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  allOrdersWebSocket,
  userOrdersWebSocket,
} from '../../store/actions/ws-actions';

function OrderInfoPage() {
  // BM страница с деталями заказа
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, type } = useSelector((state) => ({
    data: state.ingredients.data,
    type: state.user.isAuthentificated,
  }));
  const { orders } = useSelector((state) => ({
    orders:
      type === true ? state.webSocket.userOrders : state.webSocket.allOrders,
  }));

  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  const closeHandler = (e) => {
    navigate(-1);
  };

  useEffect(() => {
    if (data)
      type === true
        ? dispatch({
            type: WS_CONNECTION_START,
            payload: userOrdersWebSocket,
          })
        : dispatch({
            type: WS_CONNECTION_START,
            payload: allOrdersWebSocket,
          });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [data, dispatch]);

  useEffect(() => {
    console.log(type);
    if (orders) {
      setOrder(
        orders.find((order) => {
          return order._id === id;
        })
      );
    }
    // console.log(order);
  }, [id, orders, type]);

  return (
    // <p>Код компонента</p>
    <>
      {data && order && (
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
              {/* TODO Дописать функцию подстановки статуса */}
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
      )}
    </>
  );
}

export { OrderInfoPage };
