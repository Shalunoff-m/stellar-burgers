import React from "react";
import { ReactDOM } from "react";
import "./App.css";
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
import { useState, useEffect } from "react";
import ModalOverlay from "./components/modal-overlay/modal-overlay";
import OrderDetails from "./components/order-details/order-details";

const APIURL = "https://norma.nomoreparties.space/api/ingredients";

async function apiGetData() {
  try {
    const res = await fetch(APIURL);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

function App() {
  // console.log(sortedData);
  apiGetData();
  const [localData, setData] = React.useState([]);
  const [modalOptions, setModalOption] = React.useState({
    visible: false,
    activeModal: "",
  });
  const sortedData = sortData(localData, productTypes);

  function closeModal() {
    setModalOption({
      ...modalOptions,
      visible: false,
    });
  }

  function showModal() {
    setModalOption({
      ...modalOptions,
      visible: true,
    });
  }

  useEffect(() => {
    apiGetData()
      .then((remoteData) => {
        setData(remoteData.data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {});

  // console.log(sortedData);
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
                    onClick={showModal}
                  />
                </IngredientList>
              );
            })}
            {modalOptions.visible && (
              <ModalOverlay onCLose={closeModal}>Вот модалка</ModalOverlay>
            )}
          </Scroll>
        </BurgerConstructor>
        <BurgerIngredients>
          <Scroll type="ingredients">
            <IngredientItems
              data={localData}
              Item={IngredientItemIngredients}
              onClick={showModal}
            />
          </Scroll>
          <Total />
        </BurgerIngredients>
      </Layout>
    </>
  );
}

export default App;
