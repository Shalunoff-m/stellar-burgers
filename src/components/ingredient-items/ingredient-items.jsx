import React from "react";
import styles from "./ingredient-items.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientItems(props) {
  const { data, Item } = props;
  const allItems = data.map((element, index) => {
    return <Item key={index} data={element} />;
  });

  return allItems;
}
