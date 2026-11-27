import Startscreen from "./startscreen.js";

const gameState = {
    intro: "gameIntro",
    active: "gameActive",
};

let currentGameState = gameState.intro;
let startButton;

function setup() {
    createCanvas(500, 700);
    startButton = new Startscreen(150, 200, 200, 100, "GAME START");
}

function draw() {
    background("lightblue");

    if (currentGameState === gameState.intro) {
        startButton.draw();
    } else if (currentGameState === gameState.active) {
        text("Spelet har startat!", 200, 250);
    }
}

function mouseClicked() {
    if (currentGameState === gameState.intro && startButton.isHovered()) {
        currentGameState = gameState.active;
    }
}

window.setup = setup;
window.draw = draw;
window.mouseClicked = mouseClicked;

