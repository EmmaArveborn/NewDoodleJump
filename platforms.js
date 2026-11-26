    background (250, 250, 250);

export default class Platform { 
    xPos;
    yPos;
    height;
    width; 

constructor (x, y, height, width){ 
    this.xPos = x; 
    this.yPos= y; 
    this.height= height;
    this.width = width; 
}
draw (){ 
    fill (150, 170, 160);
    rect (this.xPos, this.yPos, this.height, this.width);
}
move () {
    this.xPos -= 1;
}
}
