import { didUserWin, randomThrow } from "./utils.js";

// import functions and grab DOM elements

const playButton = document.querySelector("#play")
const resultsText = document.querySelector("#results")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const winsText = document.querySelector("#wins")
const lossesText = document.querySelector("#losses")
const drawText = document.querySelector("#draws")

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
// set event listeners to update state and DOM

playButton.addEventListener ('click', () => {
    // results of what the player has chosen
    const player = document.querySelector('input:checked').value;
    // store what the computer has chosen
    const computer = randomThrow();
    
    
    // determine if they've won or lost against the computer
    const results = didUserWin(player, computer);
    
    // if the user wins then we will increase our wins and update text content
    // if the user loses we will increase our loses and update the text content
    // if there is no winner then we increment our draws and update text content
    
    

});