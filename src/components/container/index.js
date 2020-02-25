import React from "react";
import classes from "classnames";
import "./style.scss";

const Container = props => (
  <div {...props} className={classes("bui-container", props.className)}>
    {props.children}
  </div>
);

const Row = props => (
  <div {...props} className={classes("bui-row", props.className)}>
    {props.children}
  </div>
);

const Col = props => {
  return (
    <div {...props} className={classes("bui-col", props.className)}>
      {props.children}
    </div>
  );
};

export { Container as default, Row, Col };
