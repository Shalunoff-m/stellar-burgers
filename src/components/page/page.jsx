import React from "react";
import pageStyle from "./page.module.css";

export default function Page(props) {
  return (
    <div className={pageStyle.page} style={{ color: props.color }}>
      {props.children}
    </div>
  );
}
