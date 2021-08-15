const gridContainer = document.querySelector("#grid");

// create white cells which change to black on hover
function addCells(value) {
    for (let i = 0; i < value; i++) { 
      // cell refers to newly created div only, not groups of divs
        let cell = document.createElement('div'); 
        cell.classList.add("white");
        console.log(`${i} cells created with white class`);
        cell.textContent = ""; 
        grid.appendChild(cell); 
}
console.log("addCells() event listener disabled");
/*
let cells = document.querySelectorAll("#grid div");

        cells.forEach((div => {
          div.addEventListener('mouseover', () => {
          console.log("addCells() event listener triggered");
          console.log("addCells() has applied black bg");
          div.style.backgroundColor = "black";
        })
    }))
*/
};

addCells(16*16);
console.log("addCells() has run on page load: grid size is 16x16")


function removeCells() {
  console.log("removeCells() running");
  while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
  };
  };


function gridTemplate(userInput) {
  console.log("gridTemplate() running");
    grid.style.cssText = `grid-template-columns: repeat(${userInput}, 1fr); grid-template-rows: repeat(${userInput}, 1fr)`;
};


function createNewGrid() {
  console.log("createNewGrid() running");
  let newGrid = 0;
  do {
    newGrid = prompt("Pick a number between 1 and 100 to make a new grid:", 32);
} while (newGrid >= 100 && newGrid);
console.log(`newGrid: ${newGrid}`);

console.log("createNewGrid() will now run removeCells()");
  removeCells();

  gridTemplate(newGrid);
  multiply = newGrid * newGrid;
  return addCells(multiply);
};


function blackPen() {
  console.log("blackPen() running");
  let cells = document.querySelectorAll("#grid div");

  return cells.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove("white");
      console.log("blackPen() has removed white class");
      div.classList.remove("color");
      console.log("blackPen() has removed color class");
      div.classList.add("black");
      console.log("blackPen() has added black class");
      div.style.cssText = "background-color: black; opacity: 1";
      console.log("blackPen() has applied black bg & opacity: 1")
    })
  })
}


function randomRGB() {
  console.log("randomRGB() running");
  // TO DO: try HSL instead of RGB to create brighter colours 
  // setting min to 100 makes pastels
  let min = 100;
  let max = 255;
  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);
  let cells = document.querySelectorAll("#grid div")
  console.log(`randomRGB() has created: R${r} G${g} B${b}`)
  return cells.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove("white");
      console.log("randomRGB() has removed white class");
      div.classList.remove("black");
      console.log("randomRGB() has removed black class");
      div.classList.add("color");
      console.log("color class added");
      div.style.cssText = `background-color: rgb(${r} ${g} ${b}); opacity: 1`;
      console.log("randomRGB() has applied color bg & opacity: 1");
      // note: use rgba; regex can be used to change alpha value regardless of RGB value
    })
  })
};

// click a button to make a black pen, colour pen, or darken pen

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log("button clicked: event listeners for any other button should be disabled")
    if (button.id === "new-grid") {
      console.log(`${button.id} selected`);
      return createNewGrid();
    } else if (button.id === "black") {
      console.log(`${button.id} selected - unbind all other event handlers`);
      return blackPen();
    } else if (button.id === "color") {
      console.log(`${button.id} selected - unbind all other event handlers`);
      return randomRGB(); 
    } else if (button.id === "darken") {
      console.log(`${button.id} selected - unbind all other event handlers. counter active on this pen only`);
      return darken();
    } else if (button.id === "eraser") {
      console.log(`${button.id} selected - unbind all other event handlers`)
      return eraser();  
    } else {
      return console.log("error detected in button.forEach method");
    };
  })
})

// event listeners are remaining active even if another pen is chosen.
// event listeners need to be either removed or unbound once a different button has been clicked
// what if we put the event listeners in the button.forEach if statement instead of in separate functions?

function eraser() {
  console.log("eraser() running");
  let cells = document.querySelectorAll("#grid div");
  return cells.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.add("white");
      console.log("eraser() has added white class");
      div.classList.remove("color");
      console.log("eraser() has removed color class");
      div.classList.remove("black");
      console.log("eraser() has removed black class");
      div.style.cssText = "background-color: white; opacity: 1; filter: brightness(100)";
      console.log("eraser() has changed bg to white with opacity 1 & brightness 100");
    })
  })
}


function darken() {
  console.log("darken() running");
// tried putting mouseoverHandler directly into darken() function - didn't work
/*
  let cells = document.querySelectorAll("grid div");
  return cells.forEach((div) => {
    div.addEventListener('mouseover', (evt) => {
      let div = evt.target;
      increaseCounter(div);

      if (div.classList.contains("white")) {
        console.log("white bg detected!")
        div.classList.remove("color");
        console.log("color class removed");
        return darkenWhite(div);
      } else if (div.classList.contains("color")) {
          console.log("color bg detected!");
          return darkenColor(div);
    } else {
        return console.log("no bg detected");
    };
  })
  })
*/
console.log("darken() mouseoverHandler triggered")
document.querySelectorAll('#grid div').forEach(function (div) {
  div.onmouseover = mouseoverHandler;  
  // div.onmouseout = mouseoutHandler;
  });

};


  function mouseoverHandler(evt) {
    let div = evt.target;
    console.log("increaseCounter() running");
    increaseCounter(div);
    // if bg color white, add black bg & change opacity
    // if bg color randomgRGB, leave bg & only change brightness
    if (div.classList.contains("white")) {
      console.log("mouseoverHandler detected white class");
      div.classList.remove("color");
      console.log("mouseoverHandler has removed color class");
      console.log("mouseoverHandler is running darkenWhite()");
      return darkenWhite(div);
    } else if (div.classList.contains("color")) {
        console.log("mouseoverHandler detected color class");
        console.log("mouseoverHandler is running darkenColor()");
        return darkenColor(div);
  } else {
      return console.log("mouseoverHandler hasn't detected a class");
  };
};


function darkenColor(div) {
  console.log("darkenColor() is changing brightness");
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
    div.classList.add("black");
    console.log("hover at 10: darkenColor() has added black class");
    div.classList.remove("color");
    console.log("hover at 10: darkenColor() has removed color class")
    div.style.cssText = "background-color: black; opacity: 1; filter: brightness(0)";
   return console.log("returning: hover at 10 - darkenColor() has applied black bg, opacity 1, brightness 0");
} else {
  console.log("hovers not counted? end of darkenColor() if statement - applying black bg")
return div.style.backgroundColor = "black";
}
};

function darkenWhite(div) {
  console.log("darkenWhite() is changing opacity");
  div.style.backgroundColor = "black";
  if (div.hoverCounter === 1) {
    return div.style.opacity = "0.1";
} else if (div.hoverCounter === 2) {
    return div.style.opacity = "0.2";
} else if (div.hoverCounter === 3) {
    return div.style.opacity = "0.3";
} else if (div.hoverCounter === 4) {
    return div.style.opacity = "0.4";
} else if (div.hoverCounter === 5) {
    return div.style.opacity = "0.5";
} else if (div.hoverCounter === 6) {
    return div.style.opacity = "0.6";
} else if (div.hoverCounter === 7) {
    return div.style.opacity = "0.7";
} else if (div.hoverCounter === 8) {
    return div.style.opacity = "0.8";
} else if (div.hoverCounter === 9) {
    return div.style.opacity = "0.9";
} else if (div.hoverCounter === 10) {
    div.classList.add("black");
    console.log("hover at 10: darkenWhite() has added black class")
    div.classList.remove("color");
    console.log("hover at 10: darkenWhite() has removed color class")
    div.classList.remove("white");
    console.log("hover at 10: darkenWhite() has removed white class")
    return console.log("returning: hover at 10: darkenWhite() has added black class & removed white & color classes");
} else {
return console.log("hover over 10, counter reset");
}
};

// TODO: find a shorter, cleaner way to change opacity/brightness. ^

function increaseCounter(div) {
    div.hoverCounter = div.hoverCounter || 0;
    div.hoverCounter += 1;
    console.log(`increaseCounter() sets counter to: ${div.hoverCounter}`);
    if (div.hoverCounter > 10) {
      console.log("counter is higher than 10: increaseCounter() will now resets to 0.");
      div.hoverCounter = 0;
    };
};

/* DEBUG:
breakpoints @ click and mouseover
A) initial page load w/o clicking a button
  1. addCells() event listener is triggered
  2. backgroundColor = "black"
B) when darken button clicked first
  1. button.forEach if statement: if new grid-false, if black false, if rgb false, if darken true.
    1a. console log darken button clicked
    1b. returns darken()
  2. darken() runs
    2a. console log mouseoverHandler triggered
    2b. cells forEach runs 
    2c. mouseoverHandler is assigned to hover event 
    2d. mouseoverHandler runs n times where n is the number of cells currently in the grid (a lot)
    2e. cells darken on successive hovers as expected
C) when any other button is clicked then darken is clicked
  1. 

*/