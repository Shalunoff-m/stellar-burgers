import React from "react";
import styles from "./nav-item.module.css";

export function NavItem(props) {
  const { Icon, type, children } = props;

  return (
    <div className={`${styles.navItem} m-6 ml-5 mr-5`}>
      <Icon type={type} />
      <p className={`p-2  text text_type_main-default`}>{children}</p>
    </div>
  );
}
