import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { useState, useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Proptypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.querySelector("#modal");

export default function Modal(props) {
  const { onClose } = props;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", closeByEscape);

    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);

  return ReactDOM.createPortal(
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
          id="modal-close-icon"
        >
          <CloseIcon className="closeButton" type="primary" />
        </div>
      </div>
    </ModalOverlay>,

    modalRoot
  );
}

Modal.propTypes = {
  onClose: Proptypes.func,
};
