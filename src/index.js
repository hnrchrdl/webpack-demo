import _ from "lodash";
import "./style.css";
import webpackLogo from "./wp.png";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const wplogo = new Image();
  wplogo.src = webpackLogo;

  element.appendChild(wplogo);

  return element;
}

document.body.appendChild(component());
