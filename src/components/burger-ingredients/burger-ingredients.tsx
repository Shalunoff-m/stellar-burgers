import styles from './burger-ingredients.module.css';
import Scroll from '../scroll/scroll';
import IngredientItems from '../ingredient-items/ingredient-items';
import IngredientItemIngredients from '../ingredient-item-ingredients/ingredient-item-ingredients';
import { FC } from 'react';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Total from '../total/total';
import Bread from '../bread/bread';
import { resetOrder } from '../../store/actions/order-detail';
import { useDrop } from 'react-dnd';
import { SET_BUN, addIngredient } from '../../store/actions/constructor';
import { useDispatch, useSelector } from '../../hooks/use-custom-redux';
import { IIngredient } from '../../store/types';

interface IBurgerIngredients {}

export const BurgerIngredients: FC<IBurgerIngredients> = () => {
  // Временная часть, для навигации

  const { ingredients, bun } = useSelector((store) => store.constructorOrder);
  const { visible } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  // Часть отвечающая за DND
  //  BM добавление ингр. перетаскиванием
  const [{ isHover, isDrag }, dropTarget] = useDrop({
    accept: 'baseIngredient',
    drop(item: IIngredient) {
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
          bun: bun,
          ingredients: ingredients,
        }}
      />
    </section>
  );
};

export default BurgerIngredients;
