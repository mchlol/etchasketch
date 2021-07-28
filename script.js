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

// inital grid on load
addCells(16*16);

/*
click clear button
prompt user for size eg 16
grid loads with 16 x 16 cells
*/

const clearBtn = document.querySelector('#clear-button');

clearBtn.addEventListener("click", function () {
    // remove all the cells
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    // prompt input for number of cells to be added
    let newGrid = prompt("Enter a new grid size");

    // call addCells with value 
    let notice= "";
    if (newGrid < 8 || newGrid > 64) {
        notice = "Choose a number between 8 and 64";
        alert(notice);
        return notice;
    } else {
        multiply = newGrid * newGrid;
        return addCells(multiply);
    };
    console.log(newGrid);
});
