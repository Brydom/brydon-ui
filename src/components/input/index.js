import React from "react";
import classes from "classnames";
import "./style.scss";

const Input = props => {
  const { size = "md", valid } = props;
  console.log(props)

  return (
    <input
      {...props}
      className={classes(
        "bui-input",
        `bui-input--${size}`,
        valid === true && "bui-valid bui-success",
        valid === false && "bui-invalid bui-danger",
        valid === undefined && "bui-primary",
        props.className
      )}
    >
      {props.children}
    </input>
  );
};

export default Input;
