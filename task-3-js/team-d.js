setup_D();
/** THEME: DECEPTION  */
function setup_D() {
  console.log("in d");
  /**************************************************** */
  //get the buttons
  activateButtons_D(`#TEAM_D`, "ani_canvD");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_D(team, teamCanvas) {
    let teamButtons = document.querySelectorAll(`${team} .team-nav p`);
    //2:
    console.log(teamButtons);
    for (let button of teamButtons) {
      button.addEventListener("click", buttonCallBack);

      function buttonCallBack(e) {
        switch (this.textContent) {
          case "1": {
            console.log("A");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas A
            document.getElementById(`${teamCanvas}_A`).style.display = "block";
            //run first
            aniA(document.getElementById(`${teamCanvas}_A`));

            break;
          }
          case "2": {
            console.log("B");
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas B
            document.getElementById(`${teamCanvas}_B`).style.display = "block";
            //run second
            aniB(document.getElementById(`${teamCanvas}_B`));
            break;
          }
          case "3": {
            console.log("C");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas C
            document.getElementById(`${teamCanvas}_C`).style.display = "block";
            //run third
            aniC(document.getElementById(`${teamCanvas}_C`));
            break;
          }
          case "4": {
            console.log("D");
            break;
          }
          case "5": {
            console.log("E");
            break;
          }
          case "6": {
            console.log("F");
            break;
          }
        }
      }
    } //for
  }
   /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION A INSIDE  HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.requestAnimationFrame() to create an animation
   * i.e. a reoccuring pattern - you can use simple shapes and colors, images etc...
   * 2: create a way to start and stop the animation using a
   * custom made button and add a mouse click event listener to either start/stop the animation
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in A");
//create button
let button = document.createElement('button');
button.classList.add("TEAM_D_box");
button.setAttribute("statement", "cheat");
button.textContent = 'cheat';
let parent = document.getElementById("ani_canvD_A");
parent.appendChild(button);
//console.log(button);

//grid
let row = 7;
let col = 7;
let originLeft = 60;
let originTop = 60;
let gridArray = [];
for (let i = 0; i < row; i++) {
  let gridCol = [];
  for (let j = 0; j < col; j++) {
    let d = document.createElement('div');
    d.classList.add("TEAM_D_circle");

    d.style.left = originLeft + i * 45 + "px";
    d.style.top = originTop + j * 45 + "px";
    gridCol[j] = d;

    parent.appendChild(d);

    //console.log(d)
  }
  gridArray[i] = gridCol;
}
let animateCheatRef = null;
let animateHonestRef = null;


//button click to change the statement 
button.addEventListener('click', function (e) {
  if (button.getAttribute('statement') === 'cheat') {
    //console.log('cheat');
    button.setAttribute("statement", "honest");
    button.textContent = 'honest';

    resetSize();
    resetColor();

    //color 

    setColor('honest', 'orange',);


    if (animateHonestRef !== null) {

      window.cancelAnimationFrame(animateHonestRef);
    }
    animateCheatRef = window.requestAnimationFrame(animateCheat);


  }
  else {
    console.log("honest");
    button.setAttribute("statement", "cheat");
    button.textContent = 'cheat';

    resetSize();
    resetColor();
    setColor('cheat', 'purple');

    if (animateCheatRef !== null) {

      window.cancelAnimationFrame(animateCheatRef);
    }
    animateHonestRef = window.requestAnimationFrame(animateHonest);
  }
})

//animation 
let theta = 0;

function animateCheat() {

  let mappedNum = mapNumRange(Math.sin(theta), -1, 1, 5, 40)
  setSize("cheat", mappedNum);
  theta += 0.05;
  animateCheatRef = window.requestAnimationFrame(animateCheat);
}

function animateHonest() {

  let mappedNum = mapNumRange(Math.sin(theta), -1, 1, 5, 40)
  setSize('honest', mappedNum);
  theta += 0.05;
  animateHonestRef = window.requestAnimationFrame(animateHonest);
}

//reset the size and color when switch statement 
function resetSize() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      gridArray[i][j].style.setProperty("height", "30px");
      gridArray[i][j].style.setProperty("width", "30px");
    }
  }
}

function resetColor() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      gridArray[i][j].style.setProperty("background-color", "rgb(223, 30, 117)");
    }
  }
}


//setting color 
function setColor(statement, color) {
  gridArray[1][1].style.setProperty("background-color", `${color}`);
  gridArray[1][1].style.setProperty("background-color", `${color}`);

  gridArray[2][1].style.setProperty("background-color", `${color}`);
  gridArray[2][1].style.setProperty("background-color", `${color}`);

  gridArray[1][2].style.setProperty("background-color", `${color}`);
  gridArray[1][2].style.setProperty("background-color", `${color}`);

  gridArray[2][2].style.setProperty("background-color", `${color}`);
  gridArray[2][2].style.setProperty("background-color", `${color}`);

  //right
  gridArray[4][1].style.setProperty("background-color", `${color}`);
  gridArray[4][1].style.setProperty("background-color", `${color}`);

  gridArray[5][1].style.setProperty("background-color", `${color}`);
  gridArray[5][1].style.setProperty("background-color", `${color}`);

  gridArray[4][2].style.setProperty("background-color", `${color}`);
  gridArray[4][2].style.setProperty("background-color", `${color}`);

  gridArray[5][2].style.setProperty("background-color", `${color}`);
  gridArray[5][2].style.setProperty("background-color", `${color}`);
  if (statement === 'cheat') {
    //mouth 
    gridArray[2][5].style.setProperty("background-color", `${color}`);
    gridArray[2][5].style.setProperty("background-color", `${color}`);

    gridArray[4][5].style.setProperty("background-color", `${color}`);
    gridArray[4][5].style.setProperty("background-color", `${color}`);


    gridArray[3][4].style.setProperty("background-color", `${color}`);
    gridArray[3][4].style.setProperty("background-color", `${color}`);


  }
  else {
    //mouth 
    gridArray[2][4].style.setProperty("background-color", `${color}`);
    gridArray[2][4].style.setProperty("background-color", `${color}`);

    gridArray[4][4].style.setProperty("background-color", `${color}`);
    gridArray[4][4].style.setProperty("background-color", `${color}`);


    gridArray[3][5].style.setProperty("background-color", `${color}`);
    gridArray[3][5].style.setProperty("background-color", `${color}`);
  }
}


//set the size 
function setSize(statement, size) {
  gridArray[1][1].style.width = (size) + "px";
  gridArray[1][1].style.height = (size) + "px";

  gridArray[2][1].style.width = (size) + "px";
  gridArray[2][1].style.height = (size) + "px";

  gridArray[1][2].style.width = (size) + "px";
  gridArray[1][2].style.height = (size) + "px";

  gridArray[2][2].style.width = (size) + "px";
  gridArray[2][2].style.height = (size) + "px";

  //right
  gridArray[4][1].style.width = (size) + "px";
  gridArray[4][1].style.height = (size) + "px";

  gridArray[5][1].style.width = (size) + "px";
  gridArray[5][1].style.height = (size) + "px";

  gridArray[4][2].style.width = (size) + "px";
  gridArray[4][2].style.height = (size) + "px";

  gridArray[5][2].style.width = (size) + "px";
  gridArray[5][2].style.height = (size) + "px";
  if (statement === "cheat") {
    //mouth 
    gridArray[2][4].style.width = (size) + "px";
    gridArray[2][4].style.height = (size) + "px";

    gridArray[4][4].style.width = (size) + "px";
    gridArray[4][4].style.height = (size) + "px";


    gridArray[3][5].style.width = (size) + "px";
    gridArray[3][5].style.height = (size) + "px";
  }
  else {
    gridArray[2][5].style.width = (size) + "px";
    gridArray[2][5].style.height = (size) + "px";

    gridArray[4][5].style.width = (size) + "px";
    gridArray[4][5].style.height = (size) + "px";


    gridArray[3][4].style.width = (size) + "px";
    gridArray[3][4].style.height = (size) + "px";
  }
}


//map formular 
const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
  /**************** ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION B INSIDE  HERE */
  /**************** ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.setInterval() to create a pattern that changes over time
   * i.e. fading out/ in, growing bigger/smaller, appear/disappear, add, remove...
   *  - you can use simple shapes and colors, images etc...
   * 2: add in a / some mouse click event listener(s) somewhere to make the sketch interactive

   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniB(parentCanvas) {
    let tracker = false;
    console.log("in B");
    
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    console.log(boundingBoxParent);

    // Create reset button
    let resetButton = document.createElement("button");
    resetButton.innerText = "Reset Circles";
    resetButton.style.position = "absolute";
    resetButton.style.top = "10px";
    resetButton.style.left = "10px";
    resetButton.style.zIndex = "1000";
    parentCanvas.appendChild(resetButton);

    // Store all circles for reset functionality
    let circles = [];

    for (let x = 20; x < boundingBoxParent.width; x += 20) {
      for (let y = 20; y < boundingBoxParent.height; y += 20) {
        let circle = document.createElement("div");
        parentCanvas.appendChild(circle);
        circle.classList.add("TEAM_D_circle");
        circle.style.width = `10px`;
        circle.style.height = `10px`;
        circle.style.borderRadius = "50%"; // Make it a circle
        circle.style.position = "absolute";
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.style.backgroundColor = "blue";
        circle.addEventListener("click", clickCircle);

        circles.push(circle); // Store reference to reset later
      }
    }

    function clickCircle() {
      if (tracker === false) {
        tracker = true;
        let newWidth = parseInt(this.style.width) + 5;
        this.style.width = newWidth + "px";
      } else {
        tracker = false;
        let newHeight = parseInt(this.style.height) + 5;
        this.style.height = newHeight + "px";
      }
    }

    // Function to increase height gradually called every 500ms
    function heightChange() {
      circles.forEach(circle => {
        let newHeight = parseInt(circle.style.height) + 1;
        circle.style.height = newHeight + "px";
      });
    }

    // Start the interval using heightChange every 500ms
    let intervalRef = window.setInterval(heightChange, 500);

    // Reset function
    resetButton.addEventListener("click", function () {
      circles.forEach(circle => {
        circle.style.width = "10px";
        circle.style.height = "10px";
      });
      tracker = false; // Reset tracker
      clearInterval(intervalRef); // Stop auto growing
      intervalRef = window.setInterval(heightChange, 500); // Restart auto growing
    });
  }
  /**************** ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE  HERE */
  /**************** ANI C ************************************ */
 /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * do not use  requestAnimationFrame(), setInterval() nor setTimeout() -> meaning keep it simple ;)
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/


  function aniC(parentCanvas) {

    console.log("in C");
    /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
    parentCanvas.style.backgroundColor = "rgb(250, 87, 147)";
    let randomCircles = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e)
      //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        e.preventDefault() //sabine added :0
        console.log("d-space down")
        let newCircle = document.createElement("span");
        let randomSelection = Math.floor(Math.random() * randomCircles.length);

        newCircle.textContent = randomCircles[randomSelection];
        newCircle.style.color = "black";
        newCircle.style.background = randomCircles[randomSelection];
        newCircle.classList.add("TEAM_D_ANI_C_Div");
        parentCanvas.appendChild(newCircle);
      }

      else if (e.code === "Backspace") {
        let elements = document.querySelectorAll(".TEAM_D_ANI_C_Div");
        if (elements.length !== 0) {
          elements[elements.length - 1].remove();
        }
      }
    };

    /*** THIS IS THE CALLBACK FOR KEY UP ( DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
    //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        console.log("space up");
        console.log("team-space up")
      }

    };

    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }
}
