/* 
create a 16 x 16 grid
hover over grid to change cell colour
  event listener for mouse hover
  change cell class on hover / change div background colour on hover
clear cells & prompt user for grid size
  limit user input to 100 max
  run function on button click
  input from prompt to change size
  container to remain at same size 
*/

const grid = document.querySelector('#grid-container'); 

addCells(256);

// add cells to grid & add hover
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



/* 

// add a certain amount of cells x cells depending on user input - change css class?

// access radio button values
const gridSize = document.querySelector("#grid-size"); // form id

the output based on form input
const grid16x16 = gridSize.elements['16x16'];
let sixteen = grid16x16.value;

const grid32x32 = gridSize.elements['32x32'];
let thirtyTwo = grid32x32.value;

const grid64x64 = gridSize.elements['64x64'];
let sixtyFour = grid64x64.value;

// function to change grid based on input

gridSize.addEventListener('submit', (e) => {
    if (sizeChosen = sixteen) { //sizeChosen has not been declared
        addCells(16*16);
    } else if (sizeChosen = thirtyTwo) {
        addCells(32*32);
    } else if (sizeChosen = sixtyFour) {
        addCells(64*64);
    } else {
        return;
    }
});

*/
