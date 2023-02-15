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
import { useDispatch, useSelector } from 'react-redux';
import { closeOrderModal, resetOrder } from '../../store/actions/order-detail';
import { useDrop } from 'react-dnd';
import { ADD_INGREDIENT, SET_BUN } from '../../store/actions/constructor';

export default function BurgerIngredients() {
  const { appState, appDispatch } = useContext(AppContext);
  const { modalType } = appState;
  const { ingredients, bun = presetDefault } = useSelector(
    (store) => store.constructor
  );
  const { visible } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  // Часть отвечающая за DND
  const [{ isHover, isDrag }, dropTarget] = useDrop({
    accept: 'baseIngredient',
    drop(item) {
      item.type !== 'bun'
        ? dispatch({ type: ADD_INGREDIENT, payload: item })
        : dispatch({ type: SET_BUN, payload: item });
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  function closeModal() {
    // appDispatch({ type: 'closeModal' });
    dispatch(resetOrder());
  }

  return (
    <section ref={dropTarget} className={`pt-25 ${styles.wrapper}`}>
      {/* <ComponentsPreset /> */}
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
