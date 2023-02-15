import React from 'react';
import { Header } from '../header/header';
import { Layout } from '../layout/layout';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { useEffect } from 'react';
import { Loader } from '../loader/loader';
import { loadFromApi } from '../../store/actions/ingredients';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const dispatch = useDispatch();
  const { loading: loader } = useSelector((store) => store.ingredients);

  useEffect(() => {
    dispatch(loadFromApi());
  }, []);

  return (
    <>
      <Header />
      {/* Инициализация лоадера для загрузки данных */}
      {loader ? (
        <Loader />
      ) : (
        <Layout>
          <DndProvider backend={HTML5Backend}>
            <BurgerConstructor />
            <BurgerIngredients />
          </DndProvider>
        </Layout>
      )}
    </>
  );
}

export default App;
