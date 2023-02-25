import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Post.module.css";
import * as img from "./image/post-image";

const Post = ({ postData }) => {
  const [clickComment, setClickComment] = useState(false);
  const [clickLike, setClickLike] = useState(false);
  const dispatch = useDispatch();

  const addComment = () => {
    const takeId = postData.id;
    dispatch({
      type: "INSERT_COMMENT",
      ID: takeId,
      clickComment: clickComment,
    });
    setClickComment(!clickComment);
  };
  const addLikes = () => {
    const takeId = postData.id;
    dispatch({
      type: "INSERT_LIKE",
      ID: takeId,
      clickLike: clickLike,
    });
    setClickLike(!clickLike);
  };

  return (
    <div className={styles["post"]}>
      <header className={styles["post-heder"]}>
        <img
          className={styles["author-photo"]}
          src={postData.author.photo}
          alt="Author_photo"
        />
        <h3 className={styles["author-name"]}>{postData.author.name}</h3>
        <img
          className={styles["author-checked"]}
          src={img.checked}
          alt="checked"
        />
        <p>{postData.author.nickname}</p>
        <p>{postData.date}</p>
      </header>
      <div className={styles["post-content"]}>{postData.content}</div>
      <div className={styles["post-image"]}>
        <img src={postData.image} alt="Picture_post" />
      </div>
      <div className={styles["post-footer"]}>
        <div className={styles["footer-container"]}>
          <img
            className={styles["footer-image"]}
            src={img.comment}
            alt="comment"
            onClick={addComment}
          />
          <p>{postData.comment}</p>
        </div>
        <div className={styles["footer-container"]}>
          <img
            className={styles["footer-image"]}
            src={img.likes}
            alt="likes"
            onClick={addLikes}
          />
          <p>{postData.likes}</p>
        </div>
        <div className={styles["footer-container"]}>
          <img
            className={styles["footer-image"]}
            src={img.DOUWLOAD}
            alt="douwload"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
