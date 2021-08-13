/* 
Hover over a cell to change its background to black
  remove any existing bg class & add black bg class
Click a button to create a new grid with user input number of cells
  call the function to create divs & change grid template etc.
Click a button to change the black 'pen' to random RGB
  function to remove any existing bg class (white || black) and add random rgb background colour
Click a button to add 10% of black on each hover
  add existing black bg class
  function to add a hover counter
  loop to change opacity cssText of black bg class 
    OR div.style.opacity = 0.1
    10% black === opacity: 0.1, 100% black === opacity: 1;

**  use forEach on buttons to run code for all buttons and use an if statement to apply pen colour from button id
*/

//  Create a grid of 16 x 16 square cells
//  function to create N divs and append them to grid
//    give all divs a class of white bg and content "" to display

const gridContainer = document.querySelector("#grid");

// create white cells which change to black on hover
function addCells(value) {
    for (let i = 0; i < value; i++) { 
        let cell = document.createElement('div'); 
        cell.classList.add('white'); 
        cell.textContent = ""; 
        grid.appendChild(cell); 

    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = "black"; // this event listener overrides any other event listener applied later
  });
}
};

addCells(16*16);

// remove all the existing cells
function removeCells() {
  while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
  };
  };

//  set grid template in css to default 16x16
//    function to change grid template css to user input

function gridTemplate(userInput) {
    grid.style.cssText = `grid-template-columns: repeat(${userInput}, 1fr); grid-template-rows: repeat(${userInput}, 1fr)`;
};

// function run on the new-grid button
function createNewGrid() {
  let newGrid = 0;
  do {
    newGrid = prompt("Pick a number between 1 and 100 to make a new grid:", 32);
} while (newGrid >= 100 && newGrid);

  removeCells();

  gridTemplate(newGrid);
  multiply = newGrid * newGrid;
  return addCells(multiply);
};

// create a random rgb colour
function randomRGB() {
  let min = 0;
  let max = 255;
  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);
  let cells = document.querySelectorAll("#grid div")
  console.log(`R${r} G${g} B${b}`)
  return cells.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = `rgb(${r} ${g} ${b})`
    })
  })
};

function blackPen() {
  let cells = document.querySelectorAll("#grid div");
  return cells.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = "black";
    })
  })
}

// click a button to make a black pen, colour pen, or darken pen

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === "new-grid") {
      console.log(`${button.id} selected`);
      return createNewGrid();
    } else if (button.id === "black") {
      console.log(`${button.id} selected`);
      return blackPen();
    } else if (button.id === "color") {
      console.log(`${button.id} selected`);
      return randomRGB(); 
    } else if (button.id === "darken") {
      console.log(`${button.id} selected`);
      return opacityHover();
    } else {
      return console.log("error");
    };
  })
})


function opacityHover() {
document.querySelectorAll('#grid div').forEach(function (div) {
  div.onmouseover = mouseoverHandler;  
  });
};

  function mouseoverHandler(evt) {
    let div = evt.target;
    div.classList.add('opacity');

    increaseCounter(div);

    if (div.hoverCounter === 1) {
      return div.style.opacity = 0.1;
  } else if (div.hoverCounter === 2) {
      return div.style.opacity = 0.2;
  } else if (div.hoverCounter === 3) {
      return div.style.opacity = 0.3;
  } else if (div.hoverCounter === 4) {
      return div.style.opacity = 0.4;
  } else if (div.hoverCounter === 5) {
      return div.style.opacity = 0.5;
  } else if (div.hoverCounter === 6) {
      return div.style.opacity = 0.6;
  } else if (div.hoverCounter === 7) {
      return div.style.opacity = 0.7;
  } else if (div.hoverCounter === 8) {
      return div.style.opacity = 0.8;
  } else if (div.hoverCounter === 9) {
      return div.style.opacity = 0.9;
  } else if (div.hoverCounter === 10) {
      return div.style.opacity = 1;
  } else {
  return;
  }
}

// creater counter property for div hovered on, and increase by one
function increaseCounter(div) {
    div.hoverCounter = div.hoverCounter || 0;
    div.hoverCounter += 1;
    console.log(div.counter);
};

