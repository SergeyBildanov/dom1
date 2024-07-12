import CatchGoblin from "./catch-goblin"
document.addEventListener("DOMContentLoaded", ()=>{
  let game = new CatchGoblin(document.querySelector(".container"));
  game.addGoblin(Math.floor(Math.random() * 16));
  setInterval(()=>{
    game.moveGoblin();
  }, 2000)
})
