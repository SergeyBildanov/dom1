/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/catch-goblin.js
class CatchGoblin {
  constructor(element) {
    this._element = element;
  }
  addGoblin(index) {
    if (index < 0 || index > 15) {
      throw new Error("Invalid hole number!");
    }
    let cells = this._element.querySelectorAll(".hole");
    let img = document.createElement("img");
    img.classList.add("goblin");
    img.src = "https://raw.githubusercontent.com/netology-code/ahj-homeworks/AHJ-50/dom/pic/goblin.png";
    img.alt = "goblin";
    cells[index].appendChild(img);
  }
  moveGoblin() {
    let cells = this._element.querySelectorAll(".hole");
    let img = this._element.querySelector(".goblin");
    let index = Math.floor(Math.random() * 16);
    if (!cells[index].firstElementChild) {
      cells[index].appendChild(img);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  let game = new CatchGoblin(document.querySelector(".container"));
  game.addGoblin(Math.floor(Math.random() * 16));
  setInterval(() => {
    game.moveGoblin();
  }, 2000);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;