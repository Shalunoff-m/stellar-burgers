import React, { useEffect } from 'react';
import styles from './order-history.module.css';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { OrderItemHistory } from '../../components/order-item-history/order-item-history';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  userOrdersWebSocket,
} from '../../store/actions/ws-actions';
import { useDispatch, useSelector } from '../../hooks/use-custom-redux';

const OrderHistory = () => {
  const { data, orders } = useSelector((state) => ({
    data: state.ingredients.data,
    orders: state.webSocket.userOrders,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (data)
      dispatch({
        type: WS_CONNECTION_START,
        payload: userOrdersWebSocket,
      });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [data]);

  return (
    data &&
    orders && (
      <ul className={classNames(styles.orderBox)}>
        {orders.map((order) => (
          <OrderItemHistory key={uuidv4()} order={order} />
        ))}
      </ul>
    )
  );
};

export { OrderHistory };
