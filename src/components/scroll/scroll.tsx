// import PropTypes from 'prop-types';
import React, { FC } from 'react';
import styles from './scroll.module.css';

interface IScrollProps {
  type?: string;
  children: React.ReactNode;
  // ref: React.ForwardedRef<HTMLDivElement>;
  // ref: React.ForwardedRef;
}
type TRefProps = HTMLDivElement;

const Scroll = React.forwardRef<TRefProps, IScrollProps>((props, ref) => {
  const { type } = props;
  if (type === 'ingredients')
    return <ul className={styles.allContentIngredients}>{props.children}</ul>;
  return (
    <div ref={ref} className={styles.allContent}>
      {props.children}
    </div>
  );
});

// Scroll.propTypes = {
//   children: PropTypes.node,
//   type: PropTypes.string,
// };

export default Scroll;
