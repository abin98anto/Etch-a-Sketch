let colour = 'black';   // a global variable for the hover effects. 

function boardCreator(size) {   // function that creates the divs and the hover effect on them. takes the user input from the textbox "sizeInput".
    let board = document.querySelector('#container');   // selects the div for creating divs
    let squares = board.querySelectorAll('div');    // selects all divs created before.
    squares.forEach((div) => div.remove());     // removes all the previous divs.
    board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;     //creates coloums according to the user input.
    board.style.gridTemplateRows=`repeat(${size}, 1fr)`;    //creates rows according to the user input.
    let amount = size * size;   // the total amount of divs to be created. 
    for(let i=0; i< amount; i++){ // the loop that creates rows and columns of divs.
        let square = document.createElement('div'); 
        square.addEventListener("mouseover", squareColour); // adds the hover effect to the divs. 
        square.style.backgroundColor = 'white';     // background color of the divs before the hover effect/
        board.insertAdjacentElement('beforeend', square);   // inserts the divs into the container div.
    }
}

boardCreator(16);   // a default setting to open when the page loads for the first time.

function sizeSelector(value) {    // to make sure the user selects a number between 1 and 101.
    if(value < 2 || value > 100){
        alert('Please select a value between 1 and 101'); 
    }else {
        boardCreator(value); 
    }
    //console.log(value);
}

function squareColour() {   // adds the hover effect to the divs 
    if(colour === "random"){
        let bColor = `hsl(${Math.random()*360}, 100%, 50%)`;    // a random color is selected.
        let h1 = document.getElementById("h1heading");  //  selects the heading.
        this.style.backgroundColor = bColor;    // a random color for the hover effect.
        h1.style.color = bColor;    // a random color set according to the hover effect.
    }else {
    this.style.backgroundColor = colour; // sets the hover effects black or white.
    }
}

function changeColour(choice) {     // changes the value of global variable "color" to what user selects (black, eraser or random colour).
    colour = choice;
    let h1 = document.getElementById("h1heading");
    h1.style.color = choice;
}

function reset(){   // resets the background color of all the divs inside the container to white.
    let board = document.querySelector('#container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}