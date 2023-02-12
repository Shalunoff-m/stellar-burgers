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
import ComponentsPreset from '../components-preset/components-preset';
import { AppContext } from '../../context/app-context';
import { presetDefault } from '../../utils/preset';

export default function BurgerIngredients() {
  const { appState, appDispatch } = useContext(AppContext);
  const { data, modalType, totalCoast } = appState;

  function closeModal() {
    appDispatch({ type: 'closeModal' });
  }

  function calculateTotal({ bun, ingredients }) {
    let totalCoast = ingredients.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    return totalCoast + bun.price * 2;
  }

  function filterIngredient(data) {
    let bun = {};
    let ingredients = [];

    data.forEach((item) => {
      if (item.__v > 0) {
        item.type === 'bun'
          ? (bun = item)
          : ingredients.push({ ...item, price: item.price * item.__v });
      }
    });
    return { bun, ingredients };
  }

  const { bun, ingredients } = useMemo(() => filterIngredient(data), [data]);
  const totalPrice = useMemo(
    () => calculateTotal({ bun, ingredients }),
    [bun, ingredients]
  );

  useEffect(() => {
    // console.log(totalPrice);
    appDispatch({
      type: 'setTotal',
      payload: totalPrice,
    });
  }, [data, totalPrice]);

  return (
    <section className={`pt-25 ${styles.wrapper}`}>
      <ComponentsPreset />
      <Bread
        bread={Object.keys(bun).length !== 0 ? bun : presetDefault}
        type='top'
      />
      <Scroll type='ingredients'>
        {
          <IngredientItems
            data={ingredients}
            Item={IngredientItemIngredients}
          />
        }
        {modalType === 'order' && (
          <Modal onClose={closeModal}>
            <OrderDetails />
          </Modal>
        )}
      </Scroll>
      <Bread
        bread={Object.keys(bun).length !== 0 ? bun : presetDefault}
        type='bottom'
      />{' '}
      <Total />
    </section>
  );
}
