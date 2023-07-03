import PropTypes from 'prop-types';
import React, { useEffect, FC } from 'react';
import styles from './modal-overlay.module.css';
import { useNavigate } from 'react-router-dom';

interface IModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay: FC<IModalOverlayProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleClickClose = (e: React.SyntheticEvent) => {
    if (e.type === 'click') navigate(-1);
  };

  useEffect(() => {
    const handleKeyDownClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate(-1);
    };

    document.addEventListener('keydown', handleKeyDownClose);

    return () => {
      document.removeEventListener('keydown', handleKeyDownClose);
    };
  }, [navigate]);

  return (
    <div
      onClick={handleClickClose}
      className={styles.overlay}
      id='modal-overlay'
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
