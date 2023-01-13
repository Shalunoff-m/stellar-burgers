import styles from "./top-menu-item.module.css";
import React from "react";
import { useState, useEffect } from "react";

// Всего лишь проверка
export default function TopMenuItem(props) {
  const { Icon, description, clickHandler, name, active } = props;
  const [state, setState] = useState(active);
  const textClass = state
    ? "text text_type_main-default"
    : "text text_type_main-default text_color_inactive";
  //   console.log(Icon);

  useEffect(() => {
    setState(active);
  }, [active]);

  function onEnter() {
    setState(true);
    // console.log(clickHandler);
  }
  function onLeave() {
    if (!active) setState(false);
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
      <Icon type={state === true ? "primary" : "secondary"} />
      <p className={`p-2 ${textClass}`}>{description}</p>
    </div>
  );
}

{
  /* <div
      className={`${styles.menuItem} m-5`}
    >
      <Icon type={state === true ? "primary" : "secondary"} />
      <p className={`p-2 ${textClass}`}>{description}</p>
    </div> */
}
