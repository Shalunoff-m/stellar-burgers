import burgerConstructor from "./burger-constructor.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import IngredientList from "../ingredient-list/ingredient-list";

export default function BurgerConstructor({ apiData }) {
  const [current, setCurrent] = React.useState("one");
  return (
    <>
      <h1 className="pt-10 pb-5 text text_type_main-large">Соберите бургер</h1>

      {/* TODO Переделать в компонент вкладки на основе типов продуктов */}
      <div style={{ display: "flex" }} className="pb-10">
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
      <IngredientList data={apiData} />
    </>
  );
}
