import PropTypes from 'prop-types';
import React from 'react';
import styles from './navigation.module.css';

export function Navigation(props) {
  return <nav className={styles.menuList}>{props.children}</nav>;
}

Navigation.propTypes = {
  children: PropTypes.node,
};
