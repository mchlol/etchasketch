/* 
create a grid container
on page load grid is 16 x 16
create an input element
create a function to add a cell to the grid
create a function to add n cells to the grid based on input e.g. 16 rows & 16 columns
create a function to change the class of cells when hovered
create a function to reset cell classes
*/

const grid = document.querySelector('#grid-container');


// add a single cell to the grid

function addCell() {
const cell = document.createElement('div');
cell.classList.add('cell');
cell.textContent = "";
grid.appendChild(cell);
};

// function to add n cells to grid

// ADD N cells
function addCells(value) {
    for (let i = 0; i <= value; i++) {
        addCell();
    }
};


// add a certain amount of cells x cells depending on user input - change css class?

// access radio button values
const gridSize = document.querySelector("#grid-size");

//
const grid16x16 = gridSize.elements['16x16'];
let sixteen = grid16x16.value;


gridSize.addEventListener('submit', (e) => {
    if (sizeChosen = sixteen) {
        addCells(16*16);
    } else if (sizeChosen = thirtyTwo) {
        addCells(32*32);
    } else if (sizeChosen = sixtyFour) {
        addCells(64*64);
    } else {
        return;
    }
});
