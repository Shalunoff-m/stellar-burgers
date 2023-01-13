import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal-overlay.module.css";
import { useState } from "react";

const modalRoot = document.querySelector("#modal");

export default function ModalOverlay(props) {
  const { onCLose } = props;

  return ReactDOM.createPortal(
    <div
      onClick={() => {
        onCLose();
      }}
      className={styles.overlay}
    >
      {props.children}
    </div>,
    modalRoot
  );
}
