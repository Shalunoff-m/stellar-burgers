import React from "react";
import styles from "./header.module.css";

export function Header(props) {
  return (
    <header className={`${styles.header} `}>
      <div className={styles.wrapper}>{props.children}</div>
    </header>
  );
}
