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
  if (action.type === "ADD_POST") {
    return { ...state, postData: state.postData.push(action.newPost) };
  }
  if (action.type === "INSERT_MONEY") {
    return { ...state, money: state.money + 100 };
  }
  return state;
}

let store = createStore(reducer);
export default store;
