import React from 'react';
import { useState, useEffect, useReducer, useContext } from 'react';
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

export default function BurgerConstructor(props) {
  const { appState, appDispatch } = useContext(AppContext);
  const { modalVisible, modalType, componentDetail } = appState;
  const { constructor: sortedData } = appState;

  useEffect(() => {
    const arrangeData = sortData(appState.data, productTypes);
    // console.log(arrangeData);
    appDispatch({ type: 'setConstructorData', payload: arrangeData });
  }, [appState.data]);

  function closeModal() {
    appDispatch({ type: 'closeModal' });
  }

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
        {modalVisible && modalType === 'details' && (
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
