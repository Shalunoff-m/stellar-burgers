import PropTypes from 'prop-types';
import React from 'react';
import styles from './scroll.module.css';

export default function Scroll(props) {
  const { type } = props;
  if (type === 'ingredients')
    return <ul className={styles.allContentIngredients}>{props.children}</ul>;
  return <div className={styles.allContent}>{props.children}</div>;
}

Scroll.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};
