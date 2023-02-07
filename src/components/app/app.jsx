import React, { useReducer } from 'react';
import styles from './app.module.css';
import { Header } from '../header/header';
import { Layout } from '../layout/layout';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { useEffect } from 'react';
import { AppContextProvider } from '../../context/app-context';
import { ModalContextProvider } from '../../context/app-context';
import { appReducer, modalReducer } from '../../context/app-reducer';
import { ModalContext, AppContext } from '../../context/app-context';

const APIURL = 'https://norma.nomoreparties.space/api/ingredients';

async function apiGetData() {
  const res = await fetch(APIURL);
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const AppInitialState = { ingredients: {}, constructor: {}, total: {} };
const ModalInitialState = { details: { visible: false, data: {} }, total: {} };

function App() {
  const [appState, appDispatch] = useReducer(appReducer, AppInitialState);
  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    ModalInitialState
  );

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
        // console.log(data);
      })
      .catch((err) => {
        console.log(`Ошибка получения данных с API: ${err}`);
      });
  }, []);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <ModalContext.Provider value={{ modalState, modalDispatch }}>
        <Header />
        <Layout>
          <BurgerConstructor data={localData} />
          <BurgerIngredients data={localData} ingredients={ingredients} />
        </Layout>
      </ModalContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
