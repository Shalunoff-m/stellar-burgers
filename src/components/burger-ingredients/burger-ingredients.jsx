import styles from './burger-ingredients.module.css';
import Scroll from '../scroll/scroll';
import IngredientItems from '../ingredient-items/ingredient-items';
import IngredientItemIngredients from '../ingredient-item-ingredients/ingredient-item-ingredients';
import { useContext, useEffect, useMemo } from 'react';
import React from 'react';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Total from '../total/total';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import Bread from '../bread/bread';
import { AppContext } from '../../context/app-context';

export default function BurgerIngredients() {
  const { appState, appDispatch } = useContext(AppContext);
  const { data, modalType } = appState;

  function closeModal() {
    appDispatch({ type: 'closeModal' });
  }

  function calculateTotal(data) {
    const totalCoast = data.reduce((acc, item) => {
      return acc + item.type === 'bun' ? item.price * 2 : item.price;
    }, 0);
    return totalCoast;
  }

  const totalPrice = useMemo(() => calculateTotal(data), [data]);

  useEffect(() => {
    appDispatch({ type: 'setTotal', payload: totalPrice });
  }, [data, totalPrice]);

  return (
    <section className={`pt-25 ${styles.wrapper}`}>
      <Bread bread={data[0]} type='top' />
      <Scroll type='ingredients'>
        {<IngredientItems data={data} Item={IngredientItemIngredients} />}
        {modalType === 'order' && (
          <Modal onClose={closeModal}>
            <OrderDetails />
          </Modal>
        )}
      </Scroll>
      <Bread bread={data[0]} type='bottom' />
      <Total />
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType),
};
