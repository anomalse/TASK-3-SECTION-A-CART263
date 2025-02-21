setup_E();
/** THEME: SARCASM  */
function setup_E() {
  console.log("in e");
  /**************************************************** */
  //get the buttons
  activateButtons_E(`#TEAM_E`, "ani_canvE");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_E(team, teamCanvas) {
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
    console.log("in E_A");

    let toggleButton = document.createElement("button");
    toggleButton.textContent = "START/STOP";
    toggleButton.style.position = "absolute";
    toggleButton.style.top = "350px";
    toggleButton.style.left = "20px";
    document.getElementById("ani_canvE_A").appendChild(toggleButton);

    addFace();

    function addFace() {
      let circle = document.createElement("div");
      let circleTwo = document.createElement("div");
      let rect = document.createElement("div");
      console.log(circle);
      circle.classList.add("TEAM_H_circle");
      circle.style.left = "150px";
      circle.style.top = "110px";
      circle.style.width = "20px";
      circle.style.height = "20px";
      circle.style.backgroundColor = "red";
      document.getElementById("ani_canvE_A").appendChild(circle);

      circleTwo.classList.add("TEAM_H_circle");
      circleTwo.style.left = "230px";
      circleTwo.style.top = "110px";
      circleTwo.style.width = "20px";
      circleTwo.style.height = "20px";
      circleTwo.style.backgroundColor = "red";
      document.getElementById("ani_canvE_A").appendChild(circleTwo);

      rect.classList.add("TEAM_H_box");
      rect.style.left = "150px";
      rect.style.top = "200px";
      rect.style.width = "100px";
      rect.style.height = "10px";
      rect.style.backgroundColor = "red";
      document.getElementById("ani_canvE_A").appendChild(rect);
    }


    let newWord = document.createElement("h5");
    console.log("team-space down")
    newWord.textContent = " ...WOW ";
    newWord.classList.add("wowText");
    newWord.style.opacity = "0";
    setTimeout(() => {
      newWord.style.opacity = "1";
    }, 100);
    document.getElementById("ani_canvE_A").appendChild(newWord);


    let eyebrowL = document.createElement("div");
    let eyebrowR = document.createElement("div");

    eyebrowL.classList.add("TEAM_H_box");
    eyebrowL.style.left = "100px";
    eyebrowL.style.top = "70px";
    eyebrowL.style.width = "80px";
    eyebrowL.style.height = "10px";
    eyebrowL.style.backgroundColor = "red";
    document.getElementById("ani_canvE_A").appendChild(eyebrowL);

    eyebrowR.classList.add("TEAM_H_box");
    eyebrowR.style.left = "200px";
    eyebrowR.style.top = "70px";
    eyebrowR.style.width = "80px";
    eyebrowR.style.height = "10px";
    eyebrowR.style.backgroundColor = "red";
    document.getElementById("ani_canvE_A").appendChild(eyebrowR);

    let isAnimating = true;
    let animationId = null;
    let browPosition = 0;

    function animate() {
      if (!isAnimating) return;
      // //code for key down in here
      // console.log(addSarcasm)
      //SAMPLE KEY CHECK (you do not have to use)
      // if (e.code === "Space") 

      browPosition = Math.sin(Date.now() / 500) * 20;
      eyebrowL.style.transform = `translateY(${browPosition}px)`;
      eyebrowR.style.transform = `translateY(${browPosition}px)`;

      animationId = requestAnimationFrame(animate);
    }

    animate();

    toggleButton.addEventListener("click", () => {
      isAnimating = !isAnimating;  // Toggle the state
      if (isAnimating) {
        animate();  // Restart animation if we're turning it on
      } else if (animationId) {
        cancelAnimationFrame(animationId);
      }
    });
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

  //game where circles start appearing, you have to click the circle to create a new one but as time goes on more and more circles 
  //start appearing and eventually its impossible to keep up

  function aniB(parentCanvas) {
    console.log("in B");
    let aniSpeed = 1;

    window.setInterval(drawCircle, 5000);

    function drawCircle() {

      let canvasRect = parentCanvas.getBoundingClientRect();
      console.log(canvasRect);

      let circle = document.createElement("div");
      circle.classList.add("eCircle");
      circle.style.width = `20px`;
      circle.style.height = `20px`;

      circle.style.left = Math.floor(Math.random() * 379) + 'px';
      circle.style.top = Math.floor(Math.random() * 379) + 'px';
      parentCanvas.appendChild(circle);


      window.requestAnimationFrame(animate);


      function animate() {
        console.log("go");

        if (parseInt(circle.style.width) < 50) {

          circle.style.width = aniSpeed + parseInt(circle.style.width) + "px";
          circle.style.height = aniSpeed + parseInt(circle.style.height) + "px";
          aniRef = window.requestAnimationFrame(animate);
        }

        else if (parseInt(circle.style.width) >= 50) {
          circle.style.background = 'pink';
          circle.addEventListener("click", drawCircle);
          circle.addEventListener("click", eraseCircle);

        }
      }

    }

    function eraseCircle() {
      if (document.querySelectorAll(".eCircle").length > 1) {
        document.querySelectorAll(".eCircle")[0].remove();
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

    console.log("in C");
    /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e)
      //SAMPLE KEY CHECK (you do not have to use)
      if (e.code === "Space") {
        console.log("team-space down")
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
