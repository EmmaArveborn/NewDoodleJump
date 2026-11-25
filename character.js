background (250, 250, 250); 

let x = 100;
let y = 100;
function draw (){ 
    // body
    fill (250, 50, 10);
    triangle (x+ 100, y+170, x+ 85, y+ 250, x+ 115, y+ 250); 
    // skirt hem
    fill (250, 250, 250); 
    stroke ( 211, 211, 211); 
    circle (x + 100, y+ 250, 10);
    circle (x + 85, y+ 250, 10);
    circle (x + 93, y+ 250, 10);
    circle (x + 113, y+ 250, 10);
    circle (x + 107, y+ 250, 10);

    // Head
    stroke (250, 250,250); 
    fill (197, 140, 133);
    circle ( x+ 100, y+ 180, 25);
    fill (250,250,250);
    circle (x+ 96, y+ 178, 6);
    circle (x+ 105, y+ 178, 6);
    fill (50, 50, 50);
    circle ( x+ 105, y+ 178, 5);
    circle ( x+ 96, y+ 178, 5);

    // Hat
    fill (250, 50, 10);
    triangle ( x+110, y+ 157, x+101, y + 168, x+ 108, y+ 171); 
    stroke ( 211, 211, 211); 
    fill (250, 250, 250);
    circle ( x+109, y+159, 5); 
    circle ( x+ 108, y+ 170, 3); 
    circle ( x+ 105, y+ 169, 3); 
    circle ( x+ 102, y+ 168, 3); 

    stroke (50, 50, 50);
    line ( x+ 106, y+ 202, x+ 122, y+ 212);
    line ( x+ 94, y+ 202, x+ 78, y+ 212); 
}
