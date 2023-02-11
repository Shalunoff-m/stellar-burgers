import React, { useReducer } from 'react';
import { Header } from '../header/header';
import { Layout } from '../layout/layout';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { useEffect } from 'react';
import { appReducer } from '../../context/app-reducer';
import { AppContext } from '../../context/app-context';
import { Loader } from '../loader/loader';
import { apiGetData } from '../../utils/api';

const AppInitialState = {
  data: [],
  totalCoast: '',
  modalType: '',
  modalData: {},
  loader: true,
};

function App() {
  const [appState, appDispatch] = useReducer(appReducer, AppInitialState);
  const { loader } = appState;

  useEffect(() => {
    appDispatch({ type: 'setLoader' });
    apiGetData()
      .then((remoteData) => {
        console.log(remoteData.data);
        appDispatch({ type: 'setRemoteData', payload: remoteData.data });
        appDispatch({ type: 'removeLoader' });
      })
      .catch((err) => {
        console.log(`Ошибка получения данных с API: ${err}`);
      });
  }, []);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <Header />
      {/* Инициализация лоадера для загрузки данных */}
      {loader ? (
        <Loader />
      ) : (
        <Layout>
          <BurgerConstructor />
          <BurgerIngredients />
        </Layout>
      )}
    </AppContext.Provider>
  );
}

export default App;
