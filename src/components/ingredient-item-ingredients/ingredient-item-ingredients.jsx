import React, { useRef } from "react";
import styles from "./ingredient-item-ingredients.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientItemIngredients(props) {
  const { data, clickHandler } = props;
  const container = useRef("");

  function message(evt) {
    // clickHandler();
    console.log(container);
    // const container = useRef("");
    // if (evt.target.classList.contain === "constructor-element__text")
    //   console.log(evt.target);
  }

  return (
    <li
      onClick={message}
      ref={container}
      className={`${styles.listItem} pl-4 pr-4 pt-2 pb-2`}
    >
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
