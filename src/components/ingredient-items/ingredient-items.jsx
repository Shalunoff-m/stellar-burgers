import React from "react";
import styles from "./ingredient-items.module.css";
import PropTypes from "prop-types";

export default function IngredientItems(props) {
  const { data, Item, onClick } = props;

  const dataTemplate = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  });

  IngredientItems.propTypes = {
    data: PropTypes.arrayOf(dataTemplate),
    Item: PropTypes.func,
  };

  const allItems = data.map((element, index) => {
    return <Item key={index} data={element} clickHandler={onClick} />;
  });

  return allItems;
}
