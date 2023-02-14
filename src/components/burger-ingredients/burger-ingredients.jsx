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
import { useSelector } from 'react-redux';

export default function BurgerIngredients() {
  const { appState, appDispatch } = useContext(AppContext);
  const { modalType } = appState;
  const { ingredients, bun = null } = useSelector((store) => store.constructor);

  function closeModal() {
    appDispatch({ type: 'closeModal' });
  }

  // function filterIngredient(data) {
  //   let bun = {};
  //   let ingredients = [];

  //   data.forEach((item) => {
  //     if (item.type === "bun") bun = item;
  //     else ingredients.push(item);
  //   });

  //   /*   data.forEach((item) => {
  //     if (item.__v > 0) {
  //       item.type === "bun"
  //         ? (bun = item)
  //         : ingredients.push({ ...item, price: item.price * item.__v });
  //     }*/

  //   return { bun, ingredients };
  // }

  // const { bun, ingredients } = filterIngredient(data2 ? data2 : []);

  return (
    <section className={`pt-25 ${styles.wrapper}`}>
      {/* <ComponentsPreset /> */}
      {bun && <Bread bread={bun} type='top' />}
      {ingredients && (
        <Scroll type='ingredients'>
          {
            <IngredientItems
              data={ingredients ? ingredients : []}
              Item={IngredientItemIngredients}
            />
          }
          {modalType === 'order' && (
            <Modal onClose={closeModal}>
              <OrderDetails />
            </Modal>
          )}
        </Scroll>
      )}
      {bun && <Bread bread={bun} type='bottom' />}
      <Total
        dataForCalc={{
          bun: bun ? bun : {},
          ingredients: ingredients ? ingredients : [],
        }}
      />
    </section>
  );
}

// Данные приходят не как пропсы, а через хук useContext, соответственно проверки на пропсы здесь неуместны.
