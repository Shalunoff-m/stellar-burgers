import React from 'react';
// import styles from './main-page.module.css';
// import { Header } from '../header/header';
import { Layout } from '../../components/layout/layout';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
// import { useEffect } from 'react';
import { Loader } from '../../components/loader/loader';
// import { loadFromApi } from '../../store/actions/ingredients';
import { useSelector } from '../../hooks/use-custom-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const MainPage = () => {
  // const dispatch = useDispatch();
  const { loading: loader } = useSelector((store) => store.ingredients);

  // useEffect(() => {
  //   // dispatch(loadFromApi());
  // }, [dispatch]);

  return (
    <>
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
};
