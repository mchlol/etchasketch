/* 
create a grid container
create an input element
create a function to add a cell to the grid
create a function to add n cells to the grid based on input e.g. 16 rows & 16 columns
create a function to change the class of cells when hovered
create a function to clear the cells 
*/

const grid = document.querySelector('#grid-container');


// add a single cell to the grid

function addCell() {
const cell = document.createElement('div');
cell.classList.add('cell');
cell.textContent = "";
grid.appendChild(cell);
};

addCell();
addCell();

// add a certain amount of cells x cells depending on user input

const gridSize = document.querySelector("#grid-size");

const grid16x16 = gridSize.elements['16x16'];
let sizeChosen = grid16x16.value;

gridSize.addEventListener('submit', (e) => {
    // if grid chosen is 12x12 add 144 cells 12 across 12 down
    gridSize.elements['16x16']
});

/* if (grid size chosen is 16 x 16) {
    add cells

*/