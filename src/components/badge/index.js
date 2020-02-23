import React from "react";
import classes from 'classnames';
import "./style.scss";

const Badge = ({ children, theme }) => (
  <div
    className={classes(
      "bui-badge",
      theme ? `bui-${theme}` : "bui-primary"
    )}
  >
    {children}
  </div>
);

export default Badge;
