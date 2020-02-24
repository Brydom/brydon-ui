import React from "react";
import classes from "classnames";
import "./style.scss";

const Badge = props => {
  const { children, theme = 'primary' } = props;

  return (
    <div
      {...props}
      className={classes(
        "bui-badge",
        `bui-${theme}`,
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
