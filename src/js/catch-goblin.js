export default class CatchGoblin {
    constructor(element) {
        this._element = element;
    }
    addGoblin(index) {
        let cells = this._element.querySelectorAll(".hole");
        if (index < 0 || index > 16) {
            throw new Error("Invalid hole number!");
        }
        let img = document.createElement("img");
        img.classList.add("goblin")
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