import React from "react";
import styles from "./burger-constructor.module.css";

export default function BurgerConstructor(props) {
  return (
    <section className={`${styles.section} pt-10`}>{props.children}</section>
  );
}
