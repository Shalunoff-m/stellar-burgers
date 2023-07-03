import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.querySelector('#modal');

interface IModal {
  onClose: () => void;
  children: any;
}

const Modal: FC<IModal> = (props) => {
  const { onClose } = props;

  useEffect(() => {
    function closeByEscape(evt: any) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeByEscape);

    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [onClose]);

  return (
    modalRoot &&
    ReactDOM.createPortal(
      <ModalOverlay clickHandler={onClose}>
        <div
          onClick={(evt) => {
            evt.stopPropagation();
          }}
          className={`${styles.box} p-10`}
        >
          {/* Здесь будет содержимое модалки */}
          {props.children}

          <div
            onClick={onClose}
            className={`${styles.iconContainer} m-10 pt-8`}
            id='modal-close-icon'
          >
            <CloseIcon type='primary' />
          </div>
        </div>
      </ModalOverlay>,

      modalRoot
    )
  );
};

export default Modal;
