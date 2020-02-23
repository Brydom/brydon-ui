import React from "react";
import classes from "classnames";
import Button from "../button";
import "./style.scss";

const ButtonGroup = ({ children, size = "lg", vertical = false }) => (
  <div
    className={classes(
      "bui-btn-group",
      vertical ? "bui-btn-group-vertical" : "bui-btn-group-horizontal"
    )}
  >
    {children.map(element => (
      <Button {...element.props} size={size}></Button>
    ))}
  </div>
);

export default ButtonGroup;
