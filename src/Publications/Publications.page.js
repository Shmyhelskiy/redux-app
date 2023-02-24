import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Post from "./post/Post";
import styles from "./Publications.module.css";
import img from "../data/add.png";
import { appRoutes } from "../routes/Routes";

const PublicationsPage = () => {
  const postData = useSelector((state) => state.postData);
  postData.forEach((item, index) => (item.id = index + 1));
  return (
    <div className={styles["wrapper"]}>
      {postData.map((item) => (
        <Post postData={item} key={item.id} />
      ))}
      <Link to={appRoutes.createPage.path}>
        <img src={img} alt="add" className={styles["add"]}></img>
      </Link>
    </div>
  );
};

export default PublicationsPage;
