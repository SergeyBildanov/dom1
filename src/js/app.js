import CatchGoblin from "./catch-goblin"
document.addEventListener("DOMContentLoaded", ()=>{
  let container = document.querySelector(".container");
  for(let i = 0; i < 16; i++){
    let hole = document.createElement("div");
    hole.classList.add("hole");
    container.appendChild(hole);
  }
  let game = new CatchGoblin(container);
  game.addGoblin(Math.floor(Math.random() * 16));
  setInterval(()=>{
    game.moveGoblin();
  }, 2000)
})
