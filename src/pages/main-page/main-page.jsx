// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React from 'react';
import styles from './main-page.module.css';
// import { Header } from '../header/header';
import { Layout } from '../../components/layout/layout';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import { useEffect } from 'react';
import { Loader } from '../../components/loader/loader';
import { loadFromApi } from '../../store/actions/ingredients';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { setCookies } from '../../utils/localSaver';
import { saveToLocalStorage } from '../../utils/localSaver';
import { clearToken } from '../../utils/utils';

function MainPage() {
  const dispatch = useDispatch();
  const { loading: loader } = useSelector((store) => store.ingredients);

  useEffect(() => {
    dispatch(loadFromApi());

    // TODO Удалить потом тестовые токены
    setCookies(
      'accesstoken',
      clearToken(
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmEzZGQxOGE0YjYyMDAxYzgzYWQ2ZiIsImlhdCI6MTY4NDY4NDI0MSwiZXhwIjoxNjg0Njg1NDQxfQ.AM6lgUE4KCptR7QN7HTUpt1HjU7X8ZgnXu_g42v4EXw'
      ),
      {
        expires: 60 * 20,
      }
    );
    saveToLocalStorage(
      'reftoken',
      'db06346438aad1e6854080328c3be33095829638f5e049500335fb72b78631fad6a0927253db77fa'
    );
  }, []);

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
}

export { MainPage };
