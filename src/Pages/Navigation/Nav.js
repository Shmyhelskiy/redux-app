import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/Routes";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={styles["wrapper"]}>
      <Link to={appRoutes.home.path} className={styles["container"]}>
        Home
      </Link>
      <Link to={appRoutes.publications.path} className={styles["container"]}>
        Publications
      </Link>
    </header>
  );
};

export default Nav;
