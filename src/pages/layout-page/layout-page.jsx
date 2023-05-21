// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './layout-page.module.css';
import { Header } from '../../components/header/header';
import { Outlet } from 'react-router-dom';
import { getTokens } from '../../store/actions/user';

function LayoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokens());
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export { LayoutPage };
