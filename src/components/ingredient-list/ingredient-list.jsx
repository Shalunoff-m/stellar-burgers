import React from 'react';
import styles from './ingredient-list.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useRef } from 'react';

export default function IngredientList(props) {
  const { listHeader, id } = props;
  const headerDOM = useRef();

  return (
    <>
      <h2
        // ref={header}
        // id={listHeader}
        className='pt-1 pb-5 text text_type_main-medium'
        id={id}
        ref={headerDOM}
      >
        {listHeader}
      </h2>
      <ul className={`pt-6 pr-4 pl-4 pb-10 ${styles.ingredientList}`}>
        {props.children}
      </ul>
    </>
  );
}

IngredientList.propTypes = {
  listHeader: PropTypes.string,
};
