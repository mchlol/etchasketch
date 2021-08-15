const gridContainer = document.querySelector("#grid");

// create white cells which change to black on hover
function addCells(value) {
    for (let i = 0; i < value; i++) { 
      // cell refers to newly created div only, not groups of divs
        let cell = document.createElement('div'); 
        cell.classList.add("white");
        cell.textContent = ""; 
        grid.appendChild(cell); 
}

let cells = document.querySelectorAll("#grid div");

        cells.forEach((div => {
          div.addEventListener('mouseover', () => {
          console.log("og event listener triggered");
          div.style.backgroundColor = "black";
        })
    }))

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


function blackPen() {
  let cells = document.querySelectorAll("#grid div");

  return cells.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove("white");
      div.classList.remove("color");
      div.classList.add("black");
      div.style.cssText = "background-color: black; opacity: 1";
    })
  })
}


function randomRGB() {
  // TO DO: try HSL instead of RGB to create brighter colours 
  // setting min to 100 makes pastels
  let min = 100;
  let max = 255;
  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);
  let cells = document.querySelectorAll("#grid div")
  console.log(`R${r} G${g} B${b}`)
  return cells.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove("white");
      div.classList.remove("black");
      div.classList.add("color");
      console.log("color class added");
      div.style.cssText = `background-color: rgb(${r} ${g} ${b}); opacity: 1`;
      // note: use rgba; regex can be used to change alpha value regardless of RGB value
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
      div.classList.add("white");
      div.classList.remove("color");
      div.classList.remove("black");
      div.style.cssText = "background-color: white; opacity: 1; filter: brightness(100)";
    })
  })
}


function darken() {
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
console.log("mouseoverHandler triggered")
document.querySelectorAll('#grid div').forEach(function (div) {
  div.onmouseover = mouseoverHandler;  
  // div.onmouseout = mouseoutHandler;
  });

};


  function mouseoverHandler(evt) {
    let div = evt.target;
    increaseCounter(div);
    // if bg color white, add black bg & change opacity
    // if bg color randomgRGB, leave bg & only change brightness
    if (div.classList.contains("white")) {
      console.log("white bg detected!")
      div.classList.remove("color");
      console.log("color class removed");
      return darkenWhite(div);
    } else if (div.classList.contains("color")) {
        console.log("color bg detected!");
        return darkenColor(div);
  } else {
      return console.log("no bg detected")
  };
};


function darkenColor(div) {
  console.log("changing brightness");
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
    div.classList.remove("color");
    div.style.cssText = "background-color: black; opacity: 1; filter: brightness(0)";
   return console.log("10th hover - black class added & color removed");
} else {
  console.log("end of if statement")
return div.style.backgroundColor = "black";
}
};

function darkenWhite(div) {
  console.log("changing opacity");
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
    div.classList.remove("color");
    div.classList.remove("white");
    return console.log("10th hover - black class added & color removed");
} else {
return console.log("hover over 10, counter reset");
}
};

function increaseCounter(div) {
    div.hoverCounter = div.hoverCounter || 0;
    div.hoverCounter += 1;
    console.log(div.hoverCounter);
    // if statement never runs because div.hoverCounter always == itself or 0;
    // try div.hoverCounter = <10 || 0? NO
    // try looking it up then idk
    if (div.hoverCounter > 10) {
      console.log("counter over 10");
      div.hoverCounter = 0; // reset counter
    };
};
