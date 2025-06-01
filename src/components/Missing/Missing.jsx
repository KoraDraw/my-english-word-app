import React from "react";
import imagePig from "../../assets/images/pig.png";
import styles from "./Missing.module.css";

function Missing() {
  return (
    <div className={styles.missingContainer}>
      <h1>Whoops!</h1>
      <h2>404 Page Not Found</h2>
      <img src={imagePig} alt="pig" className={styles.missingImage} />
    </div>
  );
}

export default Missing;
