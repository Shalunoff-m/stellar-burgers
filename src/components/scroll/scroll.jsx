import PropTypes from 'prop-types';
import React from 'react';
import styles from './scroll.module.css';

const Scroll = React.forwardRef((props, ref) => {
  const { type } = props;
  if (type === 'ingredients')
    return <ul className={styles.allContentIngredients}>{props.children}</ul>;
  return (
    <div ref={ref} className={styles.allContent}>
      {props.children}
    </div>
  );
});

Scroll.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Scroll;
