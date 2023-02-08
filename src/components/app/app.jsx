import React, { useReducer } from 'react';
import styles from './app.module.css';
import { Header } from '../header/header';
import { Layout } from '../layout/layout';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { useEffect } from 'react';
import { appReducer } from '../../context/app-reducer';
import { AppContext } from '../../context/app-context';
import { sortData } from '../utils/utils';
import { productTypes } from '../utils/types';

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
  data: {},
  constructor: {},
  ingredients: { bread: {}, components: [] },
  total: {},
  modalVisible: false,
  modalType: '',
  componentDetail: {},
};

function App() {
  const [appState, appDispatch] = useReducer(appReducer, AppInitialState);

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
          bread: remoteData.data[1],
        });
        appDispatch({ type: 'setRemoteData', payload: remoteData.data });
        const arrangeData = sortData(remoteData.data, productTypes);
        appDispatch({ type: 'setConstructorData', payload: arrangeData });
        // console.log(data);
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
        <BurgerIngredients data={localData} ingredients={ingredients} />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
