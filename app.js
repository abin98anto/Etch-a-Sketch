let colour = 'black';

function boardCreator(size) {
    let board = document.querySelector('#container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows=`repeat(${size}, 1fr)`;
    let amount = size * size;
    for(let i=0; i< amount; i++){
        let square = document.createElement('div'); 
        square.addEventListener("mouseover", squareColour);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

boardCreator(16);

function sizeSelector(value) {
    if(value < 2 || value > 100){
        alert('cannot do that'); 
    }else {
        boardCreator(value); 
    }
    //console.log(value);
}

function squareColour() {
    if(colour === "random"){
        let bColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        let h1 = document.getElementById("h1heading");
        this.style.backgroundColor = bColor;
        h1.style.color = bColor;
    }else {
    this.style.backgroundColor = colour;
    }
}

function changeColour(choice) {
    colour = choice;
    let h1 = document.getElementById("h1heading");
    h1.style.color = choice;
}

function reset(){
    let board = document.querySelector('#container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}