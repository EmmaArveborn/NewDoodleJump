export default class Startscreen {

    constructor (x, y, width, height, text) {
        this.xPos = x;
        this.yPos = y;
        this.width = width;
        this.height = height;
        this.text = text;
    } 

    draw(){
        push();
        textSize(25);
        textAlign(CENTER, CENTER);
        textFont("Verdana");
        fill(135, 210, 230); //Färg på textrutan
        rect(this.xPos, this.yPos, this.width, this.height, 25);
        fill(0,0,0); //Färg på text
        text(this.text, 
            this.xPos + this.width / 2,
            this.yPos + this.height / 2);
        pop();
    }

    isHovered(){
        if (
            mouseX > this.xPos &&
            mouseX < this.xPos + this.width &&
            mouseY > this.yPos &&
            mouseY < this.yPos + this.height
        ) { return true;}
        else { 
            return false;}
    }
}