class Component {
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

        this.element = document.createElement('img')
        this.element.src = imgSrc;
    }
}