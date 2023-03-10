import React from "react";
import styles from "./bread.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Bread(props) {
  const { bread, type } = props;
  const orderType = type === "top" ? " (Верх)" : " (Низ)";
  return (
    <div className={`${styles.breadContainer} p-2 pl-8 pr-4`}>
      <ConstructorElement
        type={type}
        isLocked={true}
        text={bread.name + orderType}
        price={bread.price}
        thumbnail={bread.image}
      />
    </div>
  );
}
