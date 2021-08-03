/* 
create a 16 x 16 grid
hover over grid to change cell colour
  event listener for mouse hover
  change cell class on hover / change div background colour on hover

*/

// access grid container
const grid = document.querySelector('#grid'); 


// ** cell and hover created in function scope **

// add cells to grid container & add black hover effect
function addCells(value) {
    for (let i = 0; i < value; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = ""; 
        grid.appendChild(cell);

    cell.addEventListener('mouseover', () => {
        cell.style.cssText = "background-color: black";
    });
    };
};


// add a button that changes each square to a random rgb value on each mouse pass


function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r} ${g} ${b})`
};

// avoid duplicate code - make for loop its own function? variable "cell" cannot be accessed outside function scope

function addColorCells(value) {
    for (let i = 0; i < value; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = ""; 
        grid.appendChild(cell);

        cell.addEventListener('mouseover', () => {
            cell.style.cssText = "background-color:" + randomRGB();
        });
    };
};

// inital grid on load
addCells(16*16);

// access clear button
const clearBtn = document.querySelector('#clear-button');

// change the grid columns and rows based on input
function styleGrid(newNumber) {
    grid.style.cssText = `grid-template-columns: repeat(${newNumber}, 1fr); grid-template-rows: repeat(${newNumber}, 1fr)`;
};

//prompt for input
clearBtn.addEventListener("click", function () {
    // create variable to store user input
    let newGrid = 0;
    // check if input is an empty string, cancelled or isn't a number
    
    if (newGrid === "") {
        return;
    } else if (Number.isNaN(newGrid)) {
        return;
    } else if (newGrid === null) {
        return;
    } else if (newGrid === undefined) {
        return;
    } else {
    // check if number is between 1-100
    do {
        newGrid = prompt("Pick a number between 1 and 100 to make a new grid:", 16);
    } while (newGrid >= 100 && newGrid);
    // show value of input in console
    console.log(newGrid);
    // remove all the existing cells
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    // populate grid with input cells
    styleGrid(newGrid);
    multiply = newGrid * newGrid;
    return addCells(multiply);
    }
});

// clear grid and add colour hover effect

const colorBtn = document.querySelector("#color-button");

colorBtn.addEventListener("click", function () {
    do {
        newGrid = prompt("Pick a number between 1 and 100 to make a new grid:", 16);
    } while (newGrid >= 100 && newGrid);
    // show value of input in console
    console.log(newGrid);
    // remove all the existing cells
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    // populate grid with input cells
    styleGrid(newGrid);
    multiply = newGrid * newGrid;
    return addColorCells(multiply);
    
});

// cancel input should close modal window and leaves grid as is

// add a button that adds 10% black on each mouse pass so that only aftr 10 passes is the square completely black.

