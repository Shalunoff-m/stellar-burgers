import React, { useReducer } from "react";
import { Header } from "../header/header";
import { Layout } from "../layout/layout";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect } from "react";
import { appReducer } from "../../context/app-reducer";
import { AppContext } from "../../context/app-context";
import { Loader } from "../loader/loader";
import { apiGetData } from "../../utils/api";
import { appInitialState } from "../../utils/constants";
import { loadFromApi } from "../../store/actions/ingredients";
import { useDispatch } from "react-redux";

function App() {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);
  const { loader } = appState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromApi());
    appDispatch({ type: "setLoader" });
    apiGetData()
      .then((remoteData) => {
        appDispatch({ type: "setRemoteData", payload: remoteData.data });
        appDispatch({ type: "removeLoader" });
      })
      .catch((err) => {
        console.log(`Ошибка получения данных с API: ${err}`);
      });
  }, []);

  return (
    <>
      <Header />
      {/* Инициализация лоадера для загрузки данных */}
      {loader ? (
        <Loader />
      ) : (
        <Layout>
          <AppContext.Provider value={{ appState, appDispatch }}>
            <BurgerConstructor />
            <BurgerIngredients />
          </AppContext.Provider>
        </Layout>
      )}
    </>
  );
}

export default App;
