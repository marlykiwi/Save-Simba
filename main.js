let screen = 0;
const game = new Game();

function preload (){
    game.preloadGame();
    
}

function setup () {
    createCanvas(WIDTH, HEIGHT);
    game.setupGame();

}

function draw () {

    game.drawGame();
    
}

function keyPressed() {
    if (keyCode === 32) {
        game.ball.throw();
    }

    if (keyCode === 13){
        screen = 1;
    }
}




