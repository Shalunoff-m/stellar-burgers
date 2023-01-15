import React from "react";
import styles from "./app.module.css";
import { Header } from "../header/header";
import { Layout } from "../layout/layout";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
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
  const [ingredients, setIngredients] = React.useState({
    bread: {},
    components: [],
  });

  useEffect(() => {
    apiGetData()
      .then((remoteData) => {
        setData(remoteData.data);
        setIngredients({
          ...ingredients,
          bread: localData[0],
        });
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
        <BurgerIngredients data={localData} ingredients={ingredients} />
      </Layout>
    </>
  );
}

export default App;
