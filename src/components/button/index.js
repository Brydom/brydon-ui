import React from "react";
import classes from "classnames";
import "./style.scss";

const Button = ({ theme, onClick, size = "lg", children }) => (
  <button
    onClick={onClick}
    className={classes(
      "bui-btn",
      theme ? `bui-${theme}` : "bui-primary",
      `bui-btn--${size}`
    )}
  >
    {children}
  </button>
);

export default Button;
