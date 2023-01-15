import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { useState, useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Proptypes from "prop-types";

const modalRoot = document.querySelector("#modal");

export default function Modal(props) {
  const { onCLose } = props;

  Modal.propTypes = {
    onCLose: Proptypes.func,
  };

  function checkClick(evt) {
    evt.stopPropagation();
    let answer = false;

    switch (evt.type) {
      case "keydown":
        if (evt.key === "Escape") answer = true;
        break;
      case "click":
        const target = evt.currentTarget.getAttribute("id");
        if (target === "modal-overlay" || target === "modal-close-icon")
          answer = true;
        break;
      default:
        answer = false;
    }

    if (answer) return onCLose();
  }

  useEffect(() => {
    document.addEventListener("keydown", checkClick);

    return () => {
      document.removeEventListener("keydown", checkClick);
    };
  });

  return ReactDOM.createPortal(
    <div onClick={checkClick} className={styles.overlay} id="modal-overlay">
      <div
        onClick={(evt) => {
          evt.stopPropagation();
        }}
        className={`${styles.box} p-10`}
      >
        {/* Место под содержимое модалки */}
        {props.children}

        <div
          className={`${styles.iconContainer} m-10 pt-8`}
          id="modal-close-icon"
          onClick={checkClick}
        >
          <CloseIcon className="closeButton" type="primary" />
        </div>
      </div>
    </div>,
    modalRoot
  );
}
