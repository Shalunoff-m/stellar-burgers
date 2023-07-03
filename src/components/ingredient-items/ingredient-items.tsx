import React, { FC, ReactElement, ReactNode } from 'react';
import styles from './ingredient-items.module.css';
// import PropTypes from 'prop-types';
// import { ingredientType } from '../../utils/types';
import { v4 as uuidv4 } from 'uuid';
import { IIngredient } from '../../store/types';

interface IIngredientItems {
  data: Array<IIngredient>;
  Item: any;
}

const IngredientItems: FC<IIngredientItems> = (props) => {
  const { data, Item } = props;

  const allItems =
    data &&
    Item &&
    data.map((element: IIngredient) => {
      return <Item key={uuidv4()} data={element} />;
    });

  return allItems;
};

export default IngredientItems;
