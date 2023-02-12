import styles from './burger-ingredients.module.css';
import Scroll from '../scroll/scroll';
import IngredientItems from '../ingredient-items/ingredient-items';
import IngredientItemIngredients from '../ingredient-item-ingredients/ingredient-item-ingredients';
import { useContext, useMemo } from 'react';
import React from 'react';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Total from '../total/total';
import Bread from '../bread/bread';
import ComponentsPreset from '../components-preset/components-preset';
import { AppContext } from '../../context/app-context';
import { presetDefault } from '../../utils/preset';

export default function BurgerIngredients() {
  const { appState, appDispatch } = useContext(AppContext);
  const { data, modalType } = appState;

  function closeModal() {
    appDispatch({ type: 'closeModal' });
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

  const { bun, ingredients } = useMemo(
    () => filterIngredient(data ? data : []),
    [data]
  );

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
      <Total dataForCalc={{ bun, ingredients }} />
    </section>
  );
}
