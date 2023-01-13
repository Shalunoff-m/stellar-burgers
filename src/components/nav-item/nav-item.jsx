import React from "react";
import styles from "./nav-item.module.css";

export function NavItem(props) {
  const { Icon, type, children } = props;

  return (
    <div className={`${styles.navItem} m-5`}>
      <Icon type={type} />
      <p className={`p-2`}>{children}</p>
    </div>
  );
}
