import React from "react";
import styles from "./ingredient-item-constructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";

export default function IngredientItemConstructor(props) {
  const [data, setData] = React.useState({});
  const { data: element, clickHandler } = props;

  useEffect(() => {
    setData(element);
  }, [data, element]);

  return (
    <li
      onClick={() => {
        clickHandler({ data });
      }}
      key={element._id}
      className={`pb-10 ${styles.listItem}`}
    >
      <img src={element.image} alt={element.name} className="pt-0 pb-1" />
      <div className={styles.currency}>
        <p className="text text_type_digits-default">{element.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${styles.description}`}>
        {element.name}
      </p>
      {element.__v > 0 ? (
        <div className={styles.count}>
          <p className="text text_type_digits-default">{element.__v}</p>
        </div>
      ) : (
        ""
      )}
    </li>
  );
}
