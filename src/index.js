import style from "./style.css";
import createHomeContent from "./homePage";
import createMenuContent from "./menuPage";

createHomeContent();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
  createHomeContent();
});

menuBtn.addEventListener("click", () => {
  createMenuContent();
});

aboutBtn.addEventListener("click", () => {
  // not done
  console.log("not done");
});
