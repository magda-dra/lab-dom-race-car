class Obstacle {
    constructor(gameScreen){
        this.gameScreen = gameScreen
        this.left = Math.floor(Math.random() * 300 + 50)
        this.top = 0;
        this.width = 100;
        this.height = 150;

        this.element = document.createElement("img")
        this.element.src = "../images/redCar.png"
    
        this.element.style.position = "absolute" // always use 'absolute'
        
        // size of the player

        this.element.style.width = `${this.width}px`
        this.element .style.height = `${this.height}px`

        // Position the player 
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.gameScreen.appendChild(this.element)
    
    }

    move(){
        this.top += 3 // velocity with which the obstacle is comming at you
        this.updatePosition()
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

}
