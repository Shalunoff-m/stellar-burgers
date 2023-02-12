import React from 'react';
import styles from './ingredient-list.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const IngredientList = React.forwardRef((props, ref) => {
  const { listHeader } = props;

  return (
    <>
      <h2 ref={ref} className='pt-1 pb-5 text text_type_main-medium'>
        {listHeader}
      </h2>
      <ul className={`pt-6 pr-4 pl-4 pb-10 ${styles.ingredientList}`}>
        {props.children}
      </ul>
    </>
  );
});

export default IngredientList;

IngredientList.propTypes = {
  children: PropTypes.node,
  id: PropTypes.any,
  listHeader: PropTypes.string,
  refElement: PropTypes.any,
};
