import { createStore } from "redux";
import * as img from "../Publications/post/image/post-image";
import MariaSmik from "./Maria Smik.jpeg";
import SerhiyBrodyanskyi from "./Serhiy Brodyanskyi.jpeg";
import VolodymyrVoloshyn from "./Volodymyr Voloshyn.jpeg";

const defaultState = {
  postData: [
    {
      author: {
        name: "Anakin skywalker",
        photo: img.ANAKIN_IMAGE,
        nickname: "@dart_vader",
      },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: img.RAY_IMAGE,
      date: "26 лют.",
      likes: 226,
      comment: 478,
    },
  ],
  authorsData: [
    {
      name: "Serhiy Brodyanskyi",
      photo: SerhiyBrodyanskyi,
      nickname: "@Serhio",
    },
    { name: "Maria Smik", photo: MariaSmik, nickname: "@Smik" },
    {
      name: "Volodymyr Voloshyn",
      photo: VolodymyrVoloshyn,
      nickname: "@VolodyVOL",
    },
  ],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_POST":
      const newData = [...state.postData, action.newPost];

      return { ...state, postData: newData };

    case "INSERT_COMMENT":
      if (!action.clickComment) {
        const newComment = state.postData[action.ID].comment + 1;
        state.postData[action.ID].comment = newComment;
      } else {
        const newComment = state.postData[action.ID].comment - 1;
        state.postData[action.ID].comment = newComment;
      }
      return { ...state };

    case "INSERT_LIKE":
      if (!action.clickLike) {
        const newLike = state.postData[action.ID].likes + 1;
        state.postData[action.ID].likes = newLike;
      } else {
        const newLike = state.postData[action.ID].likes - 1;
        state.postData[action.ID].likes = newLike;
      }
      return { ...state };
    default:
      return state;
  }
}

let store = createStore(reducer);
export default store;
