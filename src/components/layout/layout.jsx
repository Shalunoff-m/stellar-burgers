import PropTypes from 'prop-types';
import React from 'react';
import styles from './layout.module.css';

export function Layout(props) {
  return <main className={styles.layout}>{props.children}</main>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
