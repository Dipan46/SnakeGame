// Constans
let direction = { x: 0, y: 0 };
const fSound = new Audio('./music/food.mp3');
const oSound = new Audio('./music/gameover.mp3');
const moSound = new Audio('./music/move.mp3');
const muSound = new Audio('./music/music.mp3');
const speed = 2
let lastPaintTime = 0
let snakeArr = [{ x: 13, y: 15 }];

// Function
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime / 100 < 1 / speed)) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine() {
    // Update snake

    // Render snake & food
    // Display snake
    board.innerHtml = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('head');
        board.appendChild(snakeElement);
    });
}

// Main logic
window.requestAnimationFrame(main);