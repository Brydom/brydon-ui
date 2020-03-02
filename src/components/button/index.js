import React from "react";
import classes from "classnames";
import "./style.scss";

const Button = props => {
  const { theme = "primary", size = "md" } = props;

  return (
    <button
      {...props}
      className={classes(
        "bui-btn",
        `bui-${theme}`,
        `bui-btn--${size}`,
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
