import styles from "./ingredient-list.module.css";
import { productTypes } from "../utils/types";
import { sortData } from "../utils/utils";
import React from "react";

export default function IngredientLists({ data, ...props }) {
  const sortedData = sortData(data, productTypes);

  function renderData({ types, Items }) {
    const renderData = Object.keys(types).map((ingredient, index) => (
      <>
        <h2 className="text text_type_main-medium">{types[ingredient]}</h2>
        <ul
          key={index}
          className={`pt-6 pr-4 pl-4 pb-10 ${styles.ingredientList}`}
        >
          <Items data={sortedData[ingredient]} />
        </ul>
      </>
    ));
    return renderData;
  }

  return <div className={styles.allContent}>{renderData(props)}</div>;
}
