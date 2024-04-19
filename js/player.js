class Player {
    constructor(gameScreen, left, top, width, height, imgSrc){ // for obstacles - pass the imgSrc here and run Math.random on them
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement('img')
        this.element.src = imgSrc;
        
        // Position the player

        this.element.style.position = "absolute" // always use 'absolute'

        this.element.style.width = `${this.width}px`
        this.element .style.height = `${this.height}px`

        // Position the player 
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.gameScreen.appendChild(this.element) // when we create a player we gonna add it to the game screen <div>. gameScreen is declared in game.js

    }

    move() {
        // this.directionX = 0 || -1 || 1
        // this.left = 50
        this.left += this.directionX
        this.top += this.directionY
        
        //borderCollision

        if(this.left < 10) {
            this.left = 10
        }

        if (this.top < 10){
            this.top = 10;
        }

        // right
        if(this.left > this.gameScreen.offsetWidth - this.width - 10){// offsetWidth is the actual width of the screen
            this.left = this.gameScreen.offsetWidth - this.width - 10
        }  
        // bottom
        if(this.top > this.gameScreen.offsetHeight - this.height - 10){
            this.top = this.gameScreen.offsetHeight - this.height - 10
        }

        this.updatePosition()

    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    didCollide(obstacle){
        const playerRect = this.element.getBoundingClientRect() // it's gonna return top, left, bottom, right
        const obstacleRect = obstacle.element.getBoundingClientRect()

        // {left: 50, top: 50, right: 150, bottom: 150}

        if( playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            return true
        }   else {
            return false
        }

    }

}