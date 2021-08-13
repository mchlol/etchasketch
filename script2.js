const gridContainer = document.querySelector("#grid");

function blackPen() {
  let cells = document.querySelectorAll("#grid div");

  return cells.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.cssText = "background-color: black; opacity: 1";
    })
  })
}

// create white cells which change to black on hover
function addCells(value) {
    for (let i = 0; i < value; i++) { 
        let cell = document.createElement('div'); 
        cell.classList.add('white'); 
        cell.textContent = ""; 
        grid.appendChild(cell); 

        blackPen();

    }
};

addCells(16*16);


function removeCells() {
  while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
  };
  };


function gridTemplate(userInput) {
    grid.style.cssText = `grid-template-columns: repeat(${userInput}, 1fr); grid-template-rows: repeat(${userInput}, 1fr)`;
};


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
      div.style.cssText = `background-color: rgb(${r} ${g} ${b}); opacity: 1`;
    })
  })
};

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
      return darken();
    } else if (button.id === "eraser") {
      console.log(`${button.id} selected`)
      return eraser();  
    } else {
      return console.log("error");
    };
  })
})

function eraser() {
  let cells = document.querySelectorAll("#grid div");
  return cells.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.cssText = "background-color: white; opacity: 1";
    })
  })
}


function darken() {
document.querySelectorAll('#grid div').forEach(function (div) {
  div.onmouseover = mouseoverHandler;  
  div.onmouseout - mouseoutHandler;
  });
};

  function mouseoverHandler(evt) {
    let div = evt.target;
    div.classList.remove('black');
    div.classList.remove('white');

    increaseCounter(div);
   
  if (div.hoverCounter === 1) {
      return div.style.filter = "brightness(0.9)";
  } else if (div.hoverCounter === 2) {
      return div.style.filter = "brightness(0.8)";
  } else if (div.hoverCounter === 3) {
      return div.style.filter = "brightness(0.7)";
  } else if (div.hoverCounter === 4) {
      return div.style.filter = "brightness(0.6)";
  } else if (div.hoverCounter === 5) {
      return div.style.filter = "brightness(0.5)";
  } else if (div.hoverCounter === 6) {
      return div.style.filter = "brightness(0.4)";
  } else if (div.hoverCounter === 7) {
      return div.style.filter = "brightness(0.3)";
  } else if (div.hoverCounter === 8) {
      return div.style.filter = "brightness(0.2)";
  } else if (div.hoverCounter === 9) {
      return div.style.filter = "brightness(0.1)";
  } else if (div.hoverCounter === 10) {
      return div.style.filter = "brightness(0)";
  } else {
  return resetCounter(div);
  }
}


function increaseCounter(div) {
    div.hoverCounter = div.hoverCounter || 0;
    div.hoverCounter += 1;
    console.log(div.hoverCounter);
};

function resetCounter(div) {
    div.hoverCounter = 0;
};

function mouseoutHandler(evt) {
  let div = evt.target;
  div.classList.remove('opacity');
};
