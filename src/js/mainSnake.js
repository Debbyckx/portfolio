// console.log('game imported') ;
const GAME_SIZE = 400 ;
const SQUARE_SIZE = 20 ;
const canvas = document.getElementById('game') ;
const ctx = canvas.getContext('2d') ;

const snake = new Snake(SQUARE_SIZE) ;
const food = new Food() ;
let currentDirection = 'right' ;
let score = 0 ;

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
    location.reload();
}

refreshButton.addEventListener('click', refreshPage)

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

function detectKeyPressed() {
    document.addEventListener('keydown', function(event) {
        // console.log(event.key) ;
        switch (event.key) {
            case 'ArrowLeft':
                currentDirection = 'left' ;
                break;
            case 'ArrowRight':
                currentDirection = 'right' ;
                break;
            case 'ArrowUp':
                currentDirection = 'up' ;
                break;
            case 'ArrowDown':
                currentDirection = 'down' ;
                break;
            default:
                break;
        }
    }) ;
}

function isGameOver() {
    let gameOver = true ;
    if (gameOver) {
        ctx.fillStyle = "white" ;
        ctx.font = "50px Verdana" ;
        ctx.fillText("Game over", canvas.width / 6.5, canvas.height / 2)
    }
}

function clearScreen() {
    ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE) ;
}

function update() {
    // console.log('refresh game') ;
    clearScreen() ;
    food.draw() ;
    snake.update() ;
    if (snake.alive) {
        setTimeout(update, 150) ;
        eatFoodCount() ;
    }
    else {
        isGameOver() ;
    }
}

function eatFoodCount() {
    ctx.fillStyle = "white" ;
    ctx.font = "12px Verdana" ;
    ctx.fillText("Score : "+ score, canvas.width-75, 15) ;
}

function start() {
    detectKeyPressed() ;
    update() ;
}

start() ;