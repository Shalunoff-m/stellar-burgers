import React from "react";
import styles from "./burger-constructor.module.css";
// import IngredientLists from "../ingredient-list/ingredient-list";
// import { productTypes } from "../utils/types";
// import IngredientItems from "../ingredient-items/ingredient-items";

export default function BurgerConstructor(props) {
  return (
    <section className={`${styles.section} pt-10`}>{props.children}</section>
  );
}

//* TODO Переделать в компонент итератор на основе типов продуктов
//  <div style={{ display: "flex" }} className="pb-10">
//    <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
//      Булки
//    </Tab>
//    <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
//      Соусы
//    </Tab>
//    <Tab value="main" active={current === "main"} onClick={setCurrent}>
//      Начинки
//    </Tab>
//  </div>
//  <IngredientLists
//    data={apiData}
//    Items={IngredientItems}
//    types={productTypes}
