class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro")
        this.gameScreen = document.getElementById("game-screen")
        this.gameEndScreen = document.getElementById("game-end")
        this.player = new Player(this.gameScreen, 200, 500, 100, 150, "../images/car.png"); // pixel arts - check for drawing images
        this.height = 600;
        this.width = 500;
        this.obstacles = []
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false; // controls if the game is over
        this.gameIntervalId = null;
        this.gameLoopFrequency = Math.floor(1000/60) // the amount of time we update the game per second. The highest possible frequency

    }

    start(){
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.height}px`

        //removing the start screen from the page
        this.startScreen.style.display = "none"

        //show the gameScreen
        this.gameScreen.style.display = "block"

        //start the loop
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        },  this.gameLoopFrequency)
    }

    gameLoop() {
        //console.log("gameLoop")
        this.update()

        if(this.gameIsOver){
            clearInterval(this.gameIntervalId)
        }
        
    }

    update() {
        this.player.move()

        for(let i = 0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i]

            //moving the obstacle
            obstacle.move()
            // check for collision
            if(this.player.didCollide(obstacle)){
                // remove the html element
                obstacle.element.remove() // we have to remove this element cause otherwise we would keep colliding with it
                //this.obstacles = ["obstacle", "obstacle", "obstacle"]
                //remove from the array
                this.obstacles.splice(i,1)
                this.lives--
                // update the counter so we account for the removed obstacles
                i--

            } else if (obstacle.top > this.height){

                obstacle.element.remove() 
                this.obstacles.splice(i,1)
                this.score++
                i--
            }
        }

        if (this.lives === 0) {
            this.endGame()
        }

        //console.log(this.lives)
        //console.log(this.score)

        if(Math.random() > 0.98 && this.obstacles.length < 1) {  // this.obstacles.length < 1 - for one obstacle at a time. remove it for more obstacles to appear.  Math.random() > 0.98 is to make sure the obstacle appears after the code checkes if the array is empty
        this.obstacles.push(new Obstacle(this.gameScreen)) }

    }


    endGame() {
        //remove elements from the dom
        this.player.element.remove() // remove has to be called on html element
        this.obstacles.forEach(obstacle => obstacle.element.remove())
        this.obstacles = []
        // stop the engine
        this.gameIsOver = true;
        //Hide the gamescreen
        this.gameScreen.style.display = "none"
        //Show end game screen
        this.gameEndScreen.style.display = "block"
        
    }

}