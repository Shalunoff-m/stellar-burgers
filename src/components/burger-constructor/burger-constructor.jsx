import React, { useContext, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
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
import { AppContext } from '../../context/app-context';
import { sortData } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';

export default function BurgerConstructor() {
  const { appState, appDispatch } = useContext(AppContext);
  const { modalType, modalData } = appState;
  const bunHeader = useRef(null);
  const sauceHeader = useRef(null);
  const mainHeader = useRef(null);

  function closeModal() {
    appDispatch({ type: 'closeModal' });
  }
  // Вытаскиваем ингриденты из контекста и сортируем
  const sortedData = useMemo(() => {
    return sortData(appState.data ? appState.data : [], productTypes);
  }, [appState.data]);

  return (
    <section className={`${styles.section} pt-10`}>
      <Heading>Соберите бургер</Heading>
      <Tabs dom={{ bunHeader, sauceHeader, mainHeader }} />
      <Scroll>
        <IngredientList
          refElement={bunHeader}
          listHeader={productTypes['bun']}
          key={uuidv4()}
          // header={headers}
        >
          <IngredientItems
            data={sortedData['bun']}
            Item={IngredientItemConstructor}
          />
        </IngredientList>
        <IngredientList
          refElement={sauceHeader}
          listHeader={productTypes['sauce']}
          key={uuidv4()}
          // header={headers}
        >
          <IngredientItems
            data={sortedData['sauce']}
            Item={IngredientItemConstructor}
          />
        </IngredientList>
        <IngredientList
          refElement={mainHeader}
          listHeader={productTypes['main']}
          key={uuidv4()}
          // header={headers}
        >
          <IngredientItems
            data={sortedData['main']}
            Item={IngredientItemConstructor}
          />
        </IngredientList>

        {modalType === 'details' && (
          <Modal onClose={closeModal}>
            <IngredientDetails showData={modalData} />
          </Modal>
        )}
      </Scroll>
    </section>
  );
}
