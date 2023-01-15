import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Layout } from "./components/layout/layout";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import { useEffect } from "react";

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

  return (
    <>
      <Header />
      <Layout>
        <BurgerConstructor data={localData} />
        <BurgerIngredients data={localData} />
      </Layout>
    </>
  );
}

export default App;
