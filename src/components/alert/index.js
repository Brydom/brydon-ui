import React from "react";
import classes from "classnames";
import "./style.scss";

const Alert = props => {
  const { children, theme = "primary", align = "left" } = props;

  return (
    <div
      {...props}
      className={classes(
        "bui-alert",
        `bui-align--${align}`,
        `bui-${theme}`,
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Alert;
