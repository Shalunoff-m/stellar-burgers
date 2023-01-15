import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import { api } from "./components/utils/data";
import { Header } from "./components/header/header";
import { Layout } from "./components/layout/layout";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import IngredientItemIngredients from "./components/ingredient-item-ingredients/ingredient-item-ingredients";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
// inport ingre
import Total from "./components/total/total";
import { useState, useEffect } from "react";
import OrderDetails from "./components/order-details/order-details";
import Scroll from "./components/scroll/scroll";
import IngredientItems from "./components/ingredient-items/ingredient-items";
import ModalOverlay from "./components/modal-overlay/modal-overlay";

const APIURL = "https://norma.nomoreparties.space/api/ingredients";

async function apiGetData() {
  const res = await fetch(APIURL);
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function App() {
  const [localData, setData] = React.useState([]);
  const [modalOptions, setModalOptions] = React.useState({
    visible: false,
    modal: "",
    dataModal: {},
  });

  function closeModal() {
    setModalOptions({
      ...modalOptions,
      visible: false,
    });
  }

  function showModal({ data, modal }) {
    // console.log(recieveData);
    setModalOptions({
      ...modalOptions,
      visible: true,
      modal: modal,
      dataModal: {
        ...data,
      },
    });
  }

  useEffect(() => {
    apiGetData()
      .then((remoteData) => {
        setData(remoteData.data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(`Ошибка получения данных с API: ${err}`);
      });
  }, []);

  // useEffect(() => {});

  // console.log(sortedData);
  return (
    <>
      <Header />
      <Layout>
        <BurgerConstructor data={localData} />
        {/* <BurgerIngredients>
          <Scroll type="ingredients">
            <IngredientItems
              data={localData}
              Item={IngredientItemIngredients}
            />
            {modalOptions.visible && modalOptions.modal === "OrderDetails" && (
              <ModalOverlay onCLose={closeModal}>
                <OrderDetails data={modalOptions.dataModal} />
              </ModalOverlay>
            )}
          </Scroll>
          <Total clickHandler={showModal} />
        </BurgerIngredients> */}
      </Layout>
    </>
  );
}

export default App;
