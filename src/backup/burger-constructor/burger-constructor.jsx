import React from "react";
import styles from "./burger-constructor.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientLists from "../ingredient-list/ingredient-list";
import { productTypes } from "../utils/types";
import IngredientItems from "../ingredient-items/ingredient-items";

export default function BurgerConstructor({ apiData }) {
  const [current, setCurrent] = React.useState("one");
  return (
    <>
      <h1 className="pt-10 pb-5 text text_type_main-large">Соберите бургер</h1>
      <div className={`${styles.tabGroup} pb-10`}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <IngredientLists
        data={apiData}
        Items={IngredientItems}
        types={productTypes}
      />
    </>
  );
}
