import React, { useReducer } from 'react';
import styles from './app.module.css';
import { Header } from '../header/header';
import { Layout } from '../layout/layout';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { useEffect } from 'react';
import { appReducer } from '../../context/app-reducer';
import { AppContext } from '../../context/app-context';

const APIURL = 'https://norma.nomoreparties.space/api/ingredients';

async function apiGetData() {
  const res = await fetch(APIURL);
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const AppInitialState = {
  data: [],
  ingredients: { bread: {}, components: [] },
  total: '',
  modalType: '',
  componentDetail: {},
};

function App() {
  const [appState, appDispatch] = useReducer(appReducer, AppInitialState);

  useEffect(() => {
    apiGetData()
      .then((remoteData) => {
        appDispatch({ type: 'setRemoteData', payload: remoteData.data });
      })
      .catch((err) => {
        console.log(`Ошибка получения данных с API: ${err}`);
      });
  }, []);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <Header />
      <Layout>
        <BurgerConstructor />
        <BurgerIngredients />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
