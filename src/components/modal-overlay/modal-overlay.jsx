import PropTypes from 'prop-types';
import React from 'react';
import styles from './modal-overlay.module.css';

export default function ModalOverlay(props) {
  const { clickHandler } = props;

  return (
    <div onClick={clickHandler} className={styles.overlay} id='modal-overlay'>
      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.node,
  clickHandler: PropTypes.func,
};
