import React from "react";
import classes from "classnames";
import "./style.scss";

const Grid = props => (
  <div {...props} className={classes("bui-grid", props.className)}>
    {props.children}
  </div>
);

const GridItem = props => {
  const { size = false, wrap = true } = props;

  return (
    <div
      {...props}
      className={classes(
        `bui-grid-item${size ? `--${size}` : ""}`,
        !wrap && "bui-grid--no-wrap",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export { Grid as default, GridItem };
