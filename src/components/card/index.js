import React from "react";
import classes from "classnames";
import "./style.scss";

const CardHeader = props => (
  <div {...props} className={classes("bui-card-header", props.className)}>
    {props.children}
  </div>
);

const CardImage = props => (
  <img
    className={classes("bui-card-image", props.className)}
    src={props.src}
    alt={props.alt}
  />
);

const CardBody = props => (
  <div {...props} className={classes("bui-card-body", props.className)}>
    {props.children}
  </div>
);

const CardTitle = props => (
  <div {...props} className={classes("bui-card-title", props.className)}>
    {props.children}
  </div>
);

const CardFooter = props => (
  <div {...props} className={classes("bui-card-footer", props.className)}>
    {props.children}
  </div>
);

const Card = ({ children }) => <div className="bui-card">{children}</div>;

export {
  CardHeader,
  CardImage,
  CardBody,
  CardTitle,
  CardFooter,
  Card as default
};
