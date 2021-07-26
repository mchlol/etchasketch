/* 
create a 16 x 16 grid
hover over grid to change cell colour
  event listener for mouse hover
  change cell class on hover / change div background colour on hover

*/

// access grid container
const grid = document.querySelector('#grid'); 

// cell is created in function scope

// add cells to grid container & add hover
function addCells(value) {
    for (let i = 0; i < value; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = ""; 
    grid.appendChild(cell);

    cell.addEventListener('mouseover', () => {
        cell.classList.add('black');
    });
    };
};

// call function with value
addCells(16*16);

// clear grid
const clearBtn = document.querySelector("#clear-grid");

clearBtn.addEventListener('click', () => {
    let cell = document.querySelector(".cell");
    cell.style.backgroundColor = "white";
});

// change size
function gridSizeFunc(num) {
    if (num = 16) {
        addCells(16*16);
    } else if (num = 32) {
        addCells(32*32);
    } else if (num = 64) {
        addCells(64*64);
    } else {
        return;
    }
};


/*
clear cells & prompt user for grid size
  limit user input to 100 max
  run function on button click
  input from prompt to change size
  container to remain at same size 
  */

// add a certain amount of cells x cells depending on user input - change css class?
// set grid-template-rows / columns with a ${variable}

// access form by id
const form = document.querySelector("#grid-selector");

// access value of selected radio button
const grid16 = gridSize.elements['16x16'].value;
const grid32 = gridSize.elements['32x32'].value;
const grid64 = gridSize.elements['64x64'].value;

// function to change grid based on input

gridSize.addEventListener('submit', (e) => {
    removeCells();
    if (sizeChosen = grid16) { //sizeChosen has not been declared
        addCells(16*16);
    } else if (sizeChosen = grid32) {
        addCells(32*32);
    } else if (sizeChosen = grid64) {
        addCells(64*64);
    } else {
        return;
    }
});

// remove all child nodes
function removeCells() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
};
