import style from "./style.css";
import createHomeContent from "./homePage";
import createMenuContent from "./menuPage";
import createAboutContent from "./aboutPage";

function removePreviousContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

createHomeContent();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
  removePreviousContent();
  createHomeContent();
});

menuBtn.addEventListener("click", () => {
  removePreviousContent();
  createMenuContent();
});

aboutBtn.addEventListener("click", () => {
  removePreviousContent();
  createAboutContent();
});
