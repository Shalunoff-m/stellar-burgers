import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styles from './modal-overlay.module.css';
import { useNavigate } from 'react-router-dom';

export default function ModalOverlay({ children }) {
  // const { clickHandler } = props;
  const navigate = useNavigate();

  const handleClose = (e) => {
    if (e.key === 'Escape' || e.type === 'click')
      navigate(-1, { replace: true });
    // console.log(e);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, []);

  return (
    <div onClick={handleClose} className={styles.overlay} id='modal-overlay'>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.node,
  clickHandler: PropTypes.func,
};
