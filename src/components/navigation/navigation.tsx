import PropTypes from 'prop-types';
import React, { FC } from 'react';
import styles from './navigation.module.css';

interface INavigationProps {
  children: React.ReactNode;
}

export const Navigation: FC<INavigationProps> = (props) => {
  return <nav className={styles.menuList}>{props.children}</nav>;
};
