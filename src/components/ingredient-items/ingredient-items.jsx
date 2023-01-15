import React from "react";
import styles from "./ingredient-items.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../utils/types";

export default function IngredientItems(props) {
  const { data, Item, onClick } = props;

  IngredientItems.propTypes = {
    data: PropTypes.arrayOf(ingredientType),
    Item: PropTypes.func,
    onClick: PropTypes.func,
  };

  const allItems = data.map((element, index) => {
    return <Item key={element._id} data={element} clickHandler={onClick} />;
  });

  return allItems;
}
