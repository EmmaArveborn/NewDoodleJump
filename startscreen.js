function setup(){
    createCanvas(500, 600);
    background(138, 206, 250);
}
function draw(){
    fill("Blue");
    rect(150, 200, 200, 150, 20);

    fill("white");
    text("GAME START",210, 280); 
} 

function mouseClicked(){
    if(mouseX > 150 && mouseX < 350 && mouseY > 150 && mouseY < 350){
        console.log("It works");
    }
}
