import React from "react";
import styles from "./ingredient-item-ingredients.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientItemIngredients(props) {
  const { data, clickHandler } = props;

  function message(evt) {
    clickHandler();
  }

  return (
    <li onClick={message} className={`${styles.listItem} pl-4 pr-4 pt-2 pb-2`}>
      <DragIcon type="primary" />
      <ConstructorElement
        type={data.type}
        isLocked={false}
        text={data.name}
        price={data.price}
        thumbnail={data.image}
      />
    </li>
  );
}
