import React from "react";
import styles from "./index.module.css";
import loadingGif from "../../assets/loading.gif";

const LoadingAnimation = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}>
        <img src={loadingGif} alt="Loading" />
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingAnimation;
