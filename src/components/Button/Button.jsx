import React from "react";
import styles from "../Button/Button.module.css";

const Button = ({ text, children, className, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children} {text}
    </button>
  );
};

export default Button;
