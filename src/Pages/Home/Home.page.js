import React from "react";
import styles from "./Home.module.css";
import { skills } from "./image.home";
const HomePage = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["main-text"]}>
          <p>
            “Learn as if you will live forever, live like you will die
            tomorrow.” — Mahatma Gandhi
          </p>
        </div>
        <img src={skills} alt="Up your skills" />
      </div>
    </div>
  );
};

export default HomePage;
