import styles from './layout-page.module.css';
import { Header } from '../../components/header/header';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { LayoutPage };
