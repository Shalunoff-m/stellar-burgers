import React, { useContext } from 'react';
import styles from './ingredient-items.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';

export default function IngredientItems(props) {
  const { data, Item, onClick } = props;

  const allItems = data.map((element) => {
    return <Item key={element._id} data={element} clickHandler={onClick} />;
  });

  return allItems;
}

IngredientItems.propTypes = {
  data: PropTypes.arrayOf(ingredientType),
  Item: PropTypes.func,
  onClick: PropTypes.func,
};
