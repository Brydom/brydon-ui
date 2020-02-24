import React from "react";
import classes from "classnames";
import Button from "../button";
import "./style.scss";

const ButtonGroup = props => {
  const { size = "lg", vertical = false } = props;

  return (
    <div
      {...props}
      className={classes(
        "bui-btn-group",
        `bui-btn-group-${vertical ? "vertical" : "horizontal"}`,
        props.className
      )}
    >
      {props.children.map(element => (
        <Button {...element.props} size={size}></Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
