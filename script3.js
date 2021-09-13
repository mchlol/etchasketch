/* eslint-disable no-console */

// select the container
const gridContainer = document.querySelector("#grid");

// set default pen colour
let penColor = 'black';

// create a div 'cell' with default white bg and append to grid
function addCells(value) {
    for (let i = 0; i < value; i++) { 
        let cell = document.createElement('div'); 
        cell.style.backgroundColor = "white";
        cell.textContent = ""; 
        grid.appendChild(cell); 
    }
    let cells = document.querySelectorAll('#grid div');
    cells.forEach(cell => cell.addEventListener('mouseenter', handleHover));
}
// populate the grid on page load
addCells(16*16);

// remove all the cells in the grid
function removeCells() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
    };
  
  // change grid size based on user input
  function gridTemplate(userInput) {
      grid.style.cssText = `grid-template-columns: repeat(${userInput}, 1fr); grid-template-rows: repeat(${userInput}, 1fr)`;
  };
  
  // create the new grid
  function createNewGrid() {
    let newGrid = 0;
    do {
      newGrid = prompt("Pick a number between 1 and 100 to make a new grid:", 14);
  } while (newGrid >= 100 && newGrid);
  console.log(`newGrid: ${newGrid}`);
  
    removeCells();
  
    gridTemplate(newGrid);
    multiply = newGrid * newGrid;
    return addCells(multiply);
  };
  

// select all the cells in the grid
let cells = document.querySelectorAll("#grid div");

// handleHover will change cell background colour on hover according to the active pen colour from button click

function handleHover(event) {
    // event.target is the div being hovered on
    event.target.style.backgroundColor = penColor;
}

// attach the handleHover to all the cells
cells.forEach(cell => cell.addEventListener('mouseenter', handleHover));

// select all the buttons
const buttons = document.querySelectorAll('button');

// set a single random colour
let hue = `hsl(${Math.random() * 360}, 100%, 50%)`;

function randomHSL() {
    let h = Math.random() * 360;
    return hue = `hsl(${h}, 100%, 50%)`;
}

// clear all the cells
function clearAll() {
    cells.forEach(cell => cell.style.backgroundColor = "white")
};


// handleClick will determine the active pen colour
function handleClick(event) {
    // event.target is the button that has been clicked
    console.log(event.target.id);
    if (event.target.id === 'new-grid') {
        return createNewGrid();
    } else {
        switch (event.target.id) {
            case 'black': 
                penColor = 'black';
                break;
            case 'color':
                penColor = randomHSL();
                break;
            case 'darken':
                console.log('change to darken pen')
                alert("Sorry, this function isn't available yet!")
                break;
            case 'eraser':
                penColor = 'white';
                break;
            case 'clear':
                clearAll();
                break;
            default:
                penColor = penColor;
        }
    }
}

// attach handleClick to all the buttons
buttons.forEach(button => button.addEventListener('click', handleClick));








// STYLE NOTE: remove grid gap before deployment
// TO-DO:
// lighten pen
// rainbow pen
// dark/light mode
// clear all button
// handle if user input is less than 1