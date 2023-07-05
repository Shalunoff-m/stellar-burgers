import React, { FC } from 'react';
import styles from './layout.module.css';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = (props) => {
  return <main className={styles.layout}>{props.children}</main>;
};
