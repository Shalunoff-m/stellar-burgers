import { useState, useEffect } from 'react';
import styles from './order-info.module.css';
import classNames from 'classnames';
import {
  CloseIcon,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderDetailElements } from '../order-detail-element/order-detail-element';

function OrderInfo() {
  const { id } = useParams();
  const { data, orders } = useSelector((state) => ({
    data: state.ingredients.data,
    orders: state.webSocket.orders,
  }));
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  const closeHandler = (e) => {
    navigate(-1);
  };

  useEffect(() => {
    // console.log(orders);
    setOrder(
      orders.find((order) => {
        return order._id === id;
      })
    );
    // console.log(order);
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
                {/* TODO Дописать функцию подстановки статуса */}
                {order.status}
              </p>
              <p className='text text_type_main-medium pb-6'>Состав:</p>
              <ul className={classNames(styles.ingredientsList, 'pr-6')}>
                <OrderDetailElements order={order} data={data} />
              </ul>
              <div className={styles.descriptionTotal}>
                <p className='text text_type_main-default text_color_inactive'>
                  Вчера, 13:50 i-GMT+3
                </p>
                <div className={styles.totalSum}>
                  <p
                    className={classNames(
                      styles.sum,
                      'text',
                      'text_type_digits-default'
                    )}
                  >
                    510
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
}

export { OrderInfo };
