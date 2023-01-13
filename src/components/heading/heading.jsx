import React from "react";

export default function Heading(props) {
  return (
    <h1 className="pt-10 pb-5 text text_type_main-large">{props.children}</h1>
  );
}
