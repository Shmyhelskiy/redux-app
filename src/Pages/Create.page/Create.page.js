import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styles from "./Create.page.module.css";

const CreatePage = () => {
  const [author, setAuthor] = useState("Serhiy Brodyanskyi");
  const [linkImage, setLinkImage] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const authorsData = useSelector((state) => state.authorsData);

  const dispatch = useDispatch();

  const changeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const changeLinkImage = (event) => {
    setLinkImage(event.target.value);
  };

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const createNewPost = () => {
    const authorInfo = authorsData.find((item) => item.name === author);

    const newPost = {
      author: {
        name: authorInfo.name,
        photo: authorInfo.photo,
        nickname: authorInfo.nickname,
      },
      content: content,
      image: linkImage,
      date: new Date().toLocaleDateString("ua-UA"),
      likes: 0,
      comment: 0,
    };
    return newPost;
  };

  const addNewPost = () => {
    dispatch({ type: "ADD_POST", newPost: createNewPost() });
    navigate("/publications");
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <h3> Create your own post</h3>
        <form>
          <label>Choose your author</label>
          <select className={styles["author-imput"]} onChange={changeAuthor}>
            {authorsData.map((option, index) => {
              return <option key={index}>{option.name}</option>;
            })}
          </select>
        </form>
        <input
          className={styles["input"]}
          placeholder="Insert you link to image"
          onChange={changeLinkImage}
        />
        <textarea
          className={styles["textarea"]}
          placeholder="Insert your comment"
          onChange={changeContent}
          required
        />
        <button className={styles["button"]} onClick={addNewPost}>
          Submit
        </button>
        <button className={styles["button"]}>Reset</button>
      </div>
    </div>
  );
};

export default CreatePage;
