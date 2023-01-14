import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal-overlay.module.css";
import { useState, useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.querySelector("#modal");

export default function ModalOverlay(props) {
  const { onCLose } = props;

  function checkClick(evt) {
    evt.stopPropagation();
    // console.log(evt);
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
        className={styles.box}
      >
        {/* Место под содержимое модалки */}
        {props.children}

        <div
          className={`${styles.iconContainer} mr-10 mt-15`}
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
