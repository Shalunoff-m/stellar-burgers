import React from "react";
import "./App.css";
// import AppHeader from "./components/app-header/app-header";
// import BurgerConstructor from "./components/burger-constructor/burger-constructor";
// import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import { api } from "./components/utils/data";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Header } from "./components/header/header";
import { Navigation } from "./components/navigation/navigation";
import { NavItem } from "./components/nav-item/nav-item";
import { Layout } from "./components/layout/layout";
import IngredientList from "./components/ingredient-list/ingredient-list";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import Tabs from "./components/tabs/tabs";
import Heading from "./components/heading/heading";
import IngredientItems from "./components/ingredient-items/ingredient-items";
import { sortData } from "./components/utils/utils";
import { productTypes } from "./components/utils/types";
import IngredientItemConstructor from "./components/ingredient-item-constructor/ingredient-item-constructor";
import IngredientItemIngredients from "./components/ingredient-item-ingredients/ingredient-item-ingredients";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
// inport ingre
import Scroll from "./components/scroll/scroll";
import Total from "./components/total/total";

function App() {
  const sortedData = sortData(api, productTypes);
  console.log(sortedData);

  return (
    <>
      <Header>
        <Navigation>
          <NavItem Icon={BurgerIcon} type="primary">
            Конструктор
          </NavItem>
          <NavItem Icon={ListIcon} type="secondary">
            Лента заказов
          </NavItem>
        </Navigation>
        <Logo />
        <NavItem Icon={ProfileIcon} type="secondary">
          Личный кабинет
        </NavItem>
      </Header>

      <Layout>
        <BurgerConstructor>
          <Heading>Соберите бургер</Heading>
          <Tabs />
          <Scroll>
            {Object.keys(sortedData).map((List, index) => {
              return (
                <IngredientList listHeader={productTypes[List]} key={index}>
                  <IngredientItems
                    data={sortedData[List]}
                    Item={IngredientItemConstructor}
                  />
                </IngredientList>
              );
            })}
          </Scroll>
        </BurgerConstructor>
        <BurgerIngredients>
          <Scroll type="ingredients">
            <IngredientItems data={api} Item={IngredientItemIngredients} />
          </Scroll>
          <Total />
        </BurgerIngredients>
      </Layout>

      {/* <Modal></Modal> */}

      {/* <AppHeader />
      <main className={`layout`}>
        <section>
          <BurgerConstructor apiData={api} />
        </section>
        <section>
          <BurgerIngredients />
        </section>
      </main> */}
    </>
  );
}

export default App;
