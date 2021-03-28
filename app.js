import { didUserWin, randomThrow } from "./utils.js";

const playButton = document.querySelector("#play");
const resultsText = document.querySelector("#results");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const winsText = document.querySelector("#wins");
const lossesText = document.querySelector("#losses");
const drawText = document.querySelector("#draws");
const totalAnswers = document.querySelector("#total");
const spock = document.querySelector("#spock");
const lizard = document.querySelector("lizard");

let wins = 0;
let losses = 0;
let draws = 0;
let total =0;

playButton.addEventListener ('click', () => {
    const player = document.querySelector('input:checked').value;
    const computer = randomThrow();
    const results = didUserWin(player, computer);
     if (results === 'draw') {
        draws++
        drawText.textContent = `${draws} Draws`
        total++
        totalAnswers.textContent = `${total} total`
        };
    if (results === 'loss') {
        losses++
        lossesText.textContent = `${losses} losses`
        total++
        totalAnswers.textContent = `${total} total`
        };
    if (results === 'win') {
        wins++ 
        winsText.textContent = `${wins} wins`
        total++
        totalAnswers.textContent = `${total} total`
        };
});