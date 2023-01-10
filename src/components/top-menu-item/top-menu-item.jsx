import styles from "./top-menu-item.module.css";
import React from "react";
import { useState } from "react";

// Всего лишь проверка
export default function TopMenuItem(props) {
  const { Icon, description, clickHandler, name } = props;
  const [state, setstate] = useState("secondary");
  const textClass =
    state === "secondary"
      ? "text text_type_main-default text_color_inactive"
      : "text text_type_main-default";
  //   console.log(Icon);

  function onEnter() {
    setstate("primary");
    // console.log(clickHandler);
  }
  function onLeave() {
    setstate("secondary");
  }

  function onClick() {
    // console.log(clickHandler, name);
    clickHandler(name);
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`${styles.menuItem} m-5`}
    >
      <Icon type={state} />
      <p className={`p-2 ${textClass}`}>{description}</p>
    </div>
  );
}
