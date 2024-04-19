window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game = null;

  startButton.addEventListener("click", function () {
    startGame();
  });

  //const imgsArray = ["../images.car", "../images.car2"] - obstacle array to run Math.random on

  function startGame() {
    console.log("start game");
    game = new Game()

    game.start()
  }


 function handleKeyDown(event){
  const key = event.key;
  const possibleKeys = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown"
  ]

  if(possibleKeys.includes(key)) { // we check if the key is included in one of the arrays
    // prevent default behaviour
    event.preventDefault()

    switch(key){
      case "ArrowLeft":
        game.player.directionX = -3; // change values to -2 or -3 etc to make it move faster
        break;
      case "ArrowRight":
        game.player.directionX = 3;
        break;
      case "ArrowDown":
        game.player.directionY = 3;
        break;
      case "ArrowUp":
        game.player.directionY = -3;
        break;

    }

  } 


 }

 window.addEventListener('keydown', handleKeyDown) // not key press cause it only works for the first time we press

window.addEventListener('keyup', () => {  // it will trigger when we release the finger from the key
  game.player.directionX = 0;
  game.player.directionY = 0;
}) 

};
