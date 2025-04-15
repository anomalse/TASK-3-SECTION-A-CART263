/**
 * Think prototype
 * Olivia Axiuk Julia Axiuk
 *  * Made with p5
* https://p5js.org/
 */

"use strict";




//the background image for the cutscenes
let BG = undefined;

//The titlescreen image
let titleScreenIMG = undefined;
//loads inthe JSON file for the story dialogue
let storyDialogue = undefined;
// goes through the scenes of the JSON file for the story mode dialogue
let sceneIndex = 0;
// 
let dialogueIndex = 0;
let showDialogueBox = false;


//sets the initial state
let state = "title"


// Might need a timer?
let playSceneTimer = {
    counter: undefined,
};

// loads in the timer based on the JSON file
let storyTimer = {
    counter: undefined
};

// the hit boxes for the title screen
const clickBox = {
    // x: //,
    // y: //,
    // w://,
    // h: //,
    // fill: "#******",
    // state: ""

}


const textBoxSpeech = {
    // body: {
    //     x: //,
    //     y: //,
    //     w: //,
    //     h: //,
    //     fill: "#******",
    // },

    // border: {
    //     x: //,
    //     y: //,
    //     w: //,
    //     h: //,
    //     fill: "#******",

    // }

}




//sound effects will be defined here
let soundFX = undefined


//load in all sprites
function preload() {
    //load story mode dialogue data
    storyDialogue = loadJSON("assets/Data/dialogue.JSON");
    //sprites and sounds will be loaded in here
}


/**
 * creates the canvas
*/
function setup() {
    createCanvas(1920, 1080);
    // links the storyTimer object to the JSON file, then directs it to the Delay part of each scene (calls each after the designated delay time)
    storyTimer.counter = storyDialogue.Scenes[sceneIndex].Delay;
}


/**
 * drawws black background and sets the states
*/
function draw() {
    background(0, 0, 0);

    if (state === "title") {
        title();
    }
    if (state === "NewGame") {
        NewGame();
    }
}

// The title screen menu 
function title() {
    //sets size and alignment of the Title text 
    textSize(32);
    textAlign(LEFT, LEFT)
    background("#000000");
    push();
    imageMode(CENTER);
    image(titleScreenIMG, width / 2, height / 2);
    pop();
    //"title Boxes" act as hit boxes to detect which one the player wants to choose
    gamePick(/*titleBoxPlay*/);
}


// detects the overlap of the mouse over the menu boxes
function gamePick(titleBox) {
    if (state === "title") {
        const mouseGameModeOverlap = mouseX > titleBox.x &&
            mouseX < titleBox.x + titleBox.w &&
            mouseY > titleBox.y &&
            mouseY < titleBox.y + titleBox.h;

        if (mouseGameModeOverlap && mouseIsPressed) {
            state = titleBox.state
        }
    }
}

//start the game
function NewGame() {
}

// example of iterating through dialogue
// const dialogArray = storyDialogue.Scenes[sceneIndex].Dialogue;
//  checkDialogueTimer("storyCutscene", dialogArray);





// responsible for drawing all the elements that have sprites 
function drawSpriteElements(spriteObject) {
    push();
    imageMode(CENTER);
    image(spriteObject.body.sprite, spriteObject.body.x, spriteObject.body.y);
    pop();
}



//countdown, may the useful??
function countDown(timer) {
    timer.counter -= 0.01;

}

//determines when the timer end, displays the designated scene
function playScene(timer, scene) {
    if (floor(timer.counter) === 0) {
        state = scene;
    }
}



//For the dialogue text
//Functions draws the text boxes (needs to be edited)
function drawTextBox(textBox, textArray) {
    //border
    push();
    fill(textBox.border.fill);
    rect(textBox.border.x, textBox.border.y, textBox.border.w, textBox.border.h);
    pop();
    // text box
    push();
    fill(textBox.body.fill);
    rect(textBox.body.x, textBox.body.y, textBox.body.w, textBox.body.h);
    pop();
    push();
    fill("#66ff66");
    textSize(20);
    textAlign(LEFT);
    textFont('Courier New');
    //plug in wanted text here!
    text(textArray[dialogueIndex], textBox.body.x + 5, textBox.body.y + 5, textBox.body.w, textBox.body.h)
    pop();
}


//Delays the appearance of the dialogue box
function checkDialogueTimer(scene, dialogue) {
    //dialogue appearance
    if (state === scene) {
        setTimeout(showTheTextBox, 1000);
    }
    if (showDialogueBox == true) {
        drawTextBox(textBoxCutscene, dialogue);
    }
}

//handles the showing of the text box
function showTheTextBox() {
    showDialogueBox = true;
}

// //Allows the player to click through the dialogues
// This code is taken from another project and will serve as an example for "Think" but needs to be modified used for iterating through story dialogue
// function mousePressed() {
//     // for the play game version
//     if (state === /** current scene */ && showDialogueBox === true) {
//         dialogueIndex++;
//         if (dialogueIndex === cutsceneText.length) {
//         }
//     }
//     // for the story mode cutscenes
//     if (state === "storyCutscene" && showDialogueBox === true) {
//         dialogueIndex++;
//         // returns the Dialogue JSON path, selects the scene from the array, then the dialogue of that scene
//         if (dialogueIndex === storyDialogue.Scenes[sceneIndex].Dialogue.length) {
//             sceneIndex++;
//             if (sceneIndex === storyDialogue.Scenes.length) {
//                 // at the end of all scenes, return to the title screen
//                 state = "title";
//             }
//             else {
//                 // if not at the end of the scenes, return to the game
//                 dialogueIndex = 0;
//                 storyTimer.counter = storyDialogue.Scenes[sceneIndex].Delay;
//                 state = "storyMode";
//             }
//         }
//     }
// }











