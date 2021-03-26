// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {didUserWin} from '../utils.js'
const test = QUnit.test;

test('results in a draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'rock';
    const actual = didUserWin(player, computer);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = 'draw';

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('results in a win', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const actual = didUserWin(player, computer);
    const expected = 'win';
    expect.equal(actual, expected);
});

test('results in a loose', (expect) => {
    const player = 'paper';
    const computer = 'scissors';
    const actual = didUserWin(player, computer);
    const expected = 'win';
    expect.equal(actual, expected);
});
