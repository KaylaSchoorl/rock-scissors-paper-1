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
let total =0;
// set event listeners to update state and DOM

playButton.addEventListener ('click', () => {
   
    const player = document.querySelector('input:checked').value;

    
    const computer = randomThrow();
    
   
    const results = didUserWin(player, computer);
    
    
    if (results === 'draw') {
        draws++
        drawText.textContent = `${draws} Draws`
    }
    
    
    if (results === 'loss') {
        losses++
        lossesText.textContent = `${losses} losses`
    }

    if (results === 'win') {
        wins++
        winsText.textContent = `${wins} wins`
    }

});