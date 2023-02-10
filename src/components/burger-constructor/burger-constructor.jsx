import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import Heading from '../heading/heading';
import Tabs from '../tabs/tabs';
import Scroll from '../scroll/scroll';
import IngredientList from '../ingredient-list/ingredient-list';
import { productTypes } from '../utils/types';
import IngredientItems from '../ingredient-items/ingredient-items';
import IngredientItemConstructor from '../ingredient-item-constructor/ingredient-item-constructor';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { ingredientType } from '../utils/types';
import { AppContext } from '../../context/app-context';
import { sortData } from '../utils/utils';

export default function BurgerConstructor() {
  const { appState, appDispatch } = useContext(AppContext);
  const { modalType, componentDetail } = appState;

  function closeModal() {
    appDispatch({ type: 'closeModal' });
  }

  const sortedData = sortData(appState.data, productTypes);

  return (
    <section className={`${styles.section} pt-10`}>
      <Heading>Соберите бургер</Heading>
      <Tabs />
      <Scroll>
        {Object.keys(sortedData).map((List, index) => {
          return (
            <IngredientList listHeader={productTypes[List]} key={index}>
              <IngredientItems
                data={sortedData[List]}
                Item={IngredientItemConstructor}
                // onClick={showModal}
              />
            </IngredientList>
          );
        })}
        {modalType === 'details' && (
          <Modal onClose={closeModal}>
            <IngredientDetails showData={componentDetail} />
          </Modal>
        )}
      </Scroll>
    </section>
  );
}

IngredientDetails.propTypes = {
  data: PropTypes.arrayOf(ingredientType),
};
