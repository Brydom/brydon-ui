import React, { useState } from "react";
import classes from "classnames";
import "./style.scss";

const Alert = ({
  children,
  dismissable,
  dismissed = false,
  theme,
  align = "left"
}) => {
  const [isDismissed, setIsDismissed] = useState(dismissed);

  return isDismissed && dismissable ? null : (
    <div
      className={classes(
        "bui-alert",
        `bui-align--${align}`,
        theme ? `bui-${theme}` : "bui-primary"
      )}
    >
      {children}
    </div>
  );
};

export default Alert;
