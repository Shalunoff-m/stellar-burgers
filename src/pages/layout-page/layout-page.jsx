// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React from 'react';
import styles from './layout-page.module.css';
import { Header } from '../../components/header/header';
import { Outlet } from 'react-router-dom';

function LayoutPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export { LayoutPage };
