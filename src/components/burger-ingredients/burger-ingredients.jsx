import styles from './burger-ingredients.module.css';
import Scroll from '../scroll/scroll';
import IngredientItems from '../ingredient-items/ingredient-items';
import IngredientItemIngredients from '../ingredient-item-ingredients/ingredient-item-ingredients';
import React from 'react';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Total from '../total/total';
import Bread from '../bread/bread';
import { presetDefault } from '../../utils/preset';
import { useDispatch, useSelector } from 'react-redux';
import { closeOrderModal, resetOrder } from '../../store/actions/order-detail';
import { useDrop } from 'react-dnd';
import {
  ADD_INGREDIENT,
  SET_BUN,
  addIngredient,
} from '../../store/actions/constructor';

export default function BurgerIngredients() {
  // Временная часть, для навигации

  const { ingredients, bun } = useSelector((store) => store.constructorOrder);
  const { visible } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  // Часть отвечающая за DND
  //  BM добавление ингр. перетаскиванием
  const [{ isHover, isDrag }, dropTarget] = useDrop({
    accept: 'baseIngredient',
    drop(item) {
      item.type !== 'bun'
        ? dispatch(addIngredient(item))
        : dispatch({ type: SET_BUN, payload: item });
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  function closeModal() {
    dispatch(resetOrder());
  }

  return (
    <section ref={dropTarget} className={`pt-25 ${styles.wrapper}`}>
      <div
        className={`${styles.dropContainer} ${isDrag && styles.activeDrag} ${
          isHover && styles.activeDrop
        } `}
      >
        {bun && <Bread bread={bun} type='top' />}
        {ingredients && (
          <Scroll type='ingredients'>
            {
              <IngredientItems
                data={ingredients ? ingredients : []}
                Item={IngredientItemIngredients}
              />
            }
            {visible && (
              <Modal onClose={closeModal}>
                <OrderDetails />
              </Modal>
            )}
          </Scroll>
        )}
        {bun && <Bread bread={bun} type='bottom' />}
      </div>
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
