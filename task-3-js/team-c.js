setup_C();
/** THEME: SERENITY  */
function setup_C() {
  console.log("in c");
  /**************************************************** */
  //get the buttons
  activateButtons_C(`#TEAM_C`, "ani_canvC");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_C(team, teamCanvas) {
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
    window.requestAnimationFrame(animate);

    function animate(){
      
    }
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
    console.log("in B");
    let gridArrayB = [];
    let shades = [
      '#f7d281',
      '#99e9f7'
    ]
    let waveNum = 1;
    

    for(let i = 0; i<8;i++){
      let rowsArray = [];
      for(let j = 0; j<8; j++){
        let parent = document.getElementById('ani_canvC_B');
        let d = document.createElement('div');
        d.classList.add('TEAM_C_gridCell');
        parent.appendChild(d);
        d.style.left = (i+1) * 50 + 'px';
        d.style.top = (j+1) * 50 + 'px';
        rowsArray[j] = d;
        }
        gridArrayB[i] = rowsArray; 
        console.log(gridArrayB);
        
        
    }
    let isMovingDown = true;
    setInterval(animateWaves,200);
    function animateWaves(){
      console.log(waveNum);
      for(let i = 0; i<8;i++){
        for(let j = 0; j<8; j++){
          let d = gridArrayB[i][j]
          if (j<waveNum){
            d.style.background = (shades[1]);
          } else {
            d.style.background = (shades[0]);
          }
          
        }
      }
      if (isMovingDown){
        waveNum+=1;
      } else {
        waveNum-=1;
      }
      if (waveNum===1){
        isMovingDown = true;
      }
      
      if (waveNum === 7){
        isMovingDown = false;
      }
    }
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
    let gridArrayC = [];
    let shadesC = [
      '#34cfeb',
      '#99e9f7',
      '#61aab8',
      '#0c93ab',
      '#26d1f0',
      '#36a6ba',
      '#9bcbd4'
    ]

    for(let i = 0; i<25;i++){
      let rowsArrayC = [];
      for(let j = 0; j<25; j++){
        let parentC = document.getElementById('ani_canvC_C');
        let d = document.createElement('div');
        d.classList.add('TEAM_C_gridCellC');
        parentC.appendChild(d);
        d.style.left = (i+1) * 15 + 'px';
        d.style.top = (j+1) * 15 + 'px';
        rowsArrayC[j] = d;
        }
        gridArrayC[i] = rowsArrayC; 
        console.log(gridArrayC);
        
        
    }

  
    /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
    windowKeyDownRef = function (e) {
      //code for key down in here

      console.log(e)
      //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        e.preventDefault(); //sabine added
        let randomNumber1 = Math.floor(Math.random()*26)
        let randomNumber2 = Math.floor(Math.random()*26)
        console.log(randomNumber1)
        console.log(randomNumber2)
        let shadesNumber = Math.floor(Math.random()*(shadesC.length+1))
        let randomDiv = gridArrayC[randomNumber1][randomNumber2]
        console.log("in C");
        console.log(randomDiv);
        console.log("team-space down")

        randomDiv.style.background = (shadesC[shadesNumber]);
        
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
