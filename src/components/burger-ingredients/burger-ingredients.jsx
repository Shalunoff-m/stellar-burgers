import styles from './burger-ingredients.module.css';
import Scroll from '../scroll/scroll';
import IngredientItems from '../ingredient-items/ingredient-items';
import IngredientItemIngredients from '../ingredient-item-ingredients/ingredient-item-ingredients';
import { useState, useEffect, useContext } from 'react';
import React from 'react';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import Total from '../total/total';
import PropTypes from 'prop-types';
import { ingredientType } from '../utils/types';
import Bread from '../bread/bread';
import { AppContext } from '../../context/app-context';

export default function BurgerIngredients(props) {
  const { appState, appDispatch } = useContext(AppContext);
  const { modalType } = appState;
  let { bread, components } = appState.ingredients;

  function showModal() {
    appDispatch({ type: 'showOrderDetail' });
  }

  function closeModal() {
    appDispatch({ type: 'closeModal' });
  }

  return (
    <section className={`pt-25 ${styles.wrapper}`}>
      {Object.keys(bread).length > 0 && <Bread bread={bread} type='top' />}
      {components.length > 0 && (
        <Scroll type='ingredients'>
          {
            <IngredientItems
              data={components}
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
      {Object.keys(bread).length > 0 && <Bread bread={bread} type='bottom' />}{' '}
      <Total clickHandler={showModal} />
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType),
};
