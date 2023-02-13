import React, { useContext } from 'react';
import styles from './ingredient-items.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';

export default function IngredientItems(props) {
  const { data, Item } = props;

  const allItems = data.map((element) => {
    return <Item key={element._id} data={element} />;
  });

  return allItems;
}

IngredientItems.propTypes = {
  Item: PropTypes.func,
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
};
