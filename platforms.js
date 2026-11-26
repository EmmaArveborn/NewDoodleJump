background (250, 250, 250);

export default class Platform { 
    xPos; 
    yPos;
    width;
    height; 

constructor(x, y, width, height){ 
    this.xPos = x; 
    this.yPos= y; 
    this.width = width; 
    this.height= height;
}
draw (){ 
    fill ( 250, 50, 50); 
    rect (this.xPos, this.yPos,this.width, this.height);
}
move () {
    this.xPos -= 1;
}
}
