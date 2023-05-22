// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './layout-page.module.css';
import { Header } from '../../components/header/header';
import { Outlet } from 'react-router-dom';
import { checkTokens } from '../../utils/api';

function LayoutPage() {
  const dispatch = useDispatch();
  const { isAuthentificated } = useSelector((store) => store.user);

  useEffect(() => {
    if (isAuthentificated) checkTokens();
  });

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export { LayoutPage };
