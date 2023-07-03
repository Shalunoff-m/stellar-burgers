import React from 'react';
import styles from './ingredient-list.module.css';
// import PropTypes from 'prop-types';

interface IIngredientListProps {
  listHeader: string;
  id: string;
  children: React.ReactElement;
}

const IngredientList = React.forwardRef<
  HTMLHeadingElement,
  IIngredientListProps
>((props, ref) => {
  const { listHeader, id } = props;

  return (
    <>
      <h2 ref={ref} className='pt-1 pb-5 text text_type_main-medium' id={id}>
        {listHeader}
      </h2>
      <ul className={`pt-6 pr-4 pl-4 pb-10 ${styles.ingredientList}`}>
        {props.children}
      </ul>
    </>
  );
});

export default IngredientList;

// IngredientList.propTypes = {
//   children: PropTypes.node,
//   id: PropTypes.any,
//   listHeader: PropTypes.string,
//   refElement: PropTypes.any,
// };
