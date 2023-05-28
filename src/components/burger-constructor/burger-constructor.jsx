import React, { useMemo, useRef } from 'react';
import styles from './burger-constructor.module.css';
import Heading from '../heading/heading';
import Tabs from '../tabs/tabs';
import Scroll from '../scroll/scroll';
import IngredientList from '../ingredient-list/ingredient-list';
import { productTypes } from '../../utils/types';
import IngredientItems from '../ingredient-items/ingredient-items';
import IngredientItemConstructor from '../ingredient-item-constructor/ingredient-item-constructor';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { sortData } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';
import { closeIngredModal } from '../../store/actions/ingredient-detail';
import { useDispatch, useSelector } from 'react-redux';

export default function BurgerConstructor() {
  const { data } = useSelector((store) => store.ingredients);
  const bunHeader = useRef(null);
  const sauceHeader = useRef(null);
  const mainHeader = useRef(null);
  const scrollContainer = useRef(null);
  const dispatch = useDispatch();
  const { ingredientDetail } = useSelector((store) => store);
  const { visible } = ingredientDetail;

  function closeModal() {
    dispatch(closeIngredModal());
  }
  // Вытаскиваем ингриденты из контекста и сортируем
  const sortedData = useMemo(() => {
    return sortData(data ? data : [], productTypes);
  }, [data]);

  return (
    <section className={`${styles.section} pt-10`}>
      <Heading>Соберите бургер</Heading>
      <Tabs dom={{ bunHeader, sauceHeader, mainHeader, scrollContainer }} />
      <Scroll ref={scrollContainer}>
        <IngredientList
          ref={bunHeader}
          listHeader={productTypes['bun']}
          id='bun'
          key={uuidv4()}
          // header={headers}
        >
          <IngredientItems
            data={sortedData['bun']}
            Item={IngredientItemConstructor}
          />
        </IngredientList>
        <IngredientList
          ref={sauceHeader}
          listHeader={productTypes['sauce']}
          id='sauce'
          key={uuidv4()}
          // header={headers}
        >
          <IngredientItems
            data={sortedData['sauce']}
            Item={IngredientItemConstructor}
          />
        </IngredientList>
        <IngredientList
          ref={mainHeader}
          listHeader={productTypes['main']}
          id='main'
          key={uuidv4()}
          // header={headers}
        >
          <IngredientItems
            data={sortedData['main']}
            Item={IngredientItemConstructor}
          />
        </IngredientList>

        {visible && (
          <Modal onClose={closeModal}>
            <IngredientDetails />
          </Modal>
        )}
      </Scroll>
    </section>
  );
}
