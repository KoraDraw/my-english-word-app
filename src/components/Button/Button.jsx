import React from "react";
import styles from "../Button/Button.module.css";

const Button = React.forwardRef(
  ({ text, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.button} ${className || ""}`}
        {...props}
      >
        {children} {text}
      </button>
    );
  }
);

export default Button;
