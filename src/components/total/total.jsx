import './total.module.css';
import React, { useContext, useEffect } from 'react';
import style from './total.module.css';
import currencyIcon from '../../images/currency 36x36.svg';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../context/app-context';

export default function Total(props) {
  const { appState, appDispatch } = useContext(AppContext);
  const { ingredients, total } = appState;
  // console.log(ingredients);

  useEffect(() => {
    const totalPrice = calculateTotal(ingredients);
    appDispatch({ type: 'setTotalPrice', payload: totalPrice });
    console.log(totalPrice);
  }, [ingredients]);

  function calculateTotal({ bread, components }) {
    // console.log(bread, components);
    const breadTotal = bread.price * 2;
    const ingredientsTotal = components.reduce(
      (acc, item) => acc + item.price,
      0
    );
    return breadTotal + ingredientsTotal;
  }

  const { clickHandler } = props;
  return (
    <>
      {total > 0 && (
        <div className={`${style.summary} pt-10 pr-4`}>
          <div className={style.total}>
            <p className='text text_type_digits-medium'>{total}</p>
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
      )}
    </>
  );
}
