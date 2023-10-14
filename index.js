//SHoutout to Sayantanm19 for the guidance on how to code a speed type game
//
//ChatGPT helped me debug and verify if there was any glaring issues in my code.
//FIXED EDITED CODE

var timerBar = document.querySelector('.time-left');
var timeLeft = document.querySelector('.time-secs');
var time = 60;
var timeEnd = 0;
// var currentTime = 0;
var speed = 1000;
var inputArea = document.querySelector('.input-area'); // Corrected class name
var score = document.querySelector('.total-score');
var quoteArea = document.querySelector('.quotePlace'); // Removed .quotes
var currentQuote = "";
var errors = 0;
var quoteNo = 0;
var characterTyped = 0;
var correct = 0;
let totalScore =0;
var progress;
var isPaused = false;
var timeIncrease = 0;
var pauseButton = document.querySelector('.pause-btn'); 
const pauseMenu = document.querySelector('#pause-menu');
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#restart-button');
var splashButton = document.querySelector(".splashButton");
var splashScreen = document.querySelector(".splash");

// Define your quotes
var quotes = [
    "TENGEN TOPPA GURREN LAGANN!",
    'Who the hell do you think I am',
    'Believe IT!',
    'Uno, Dos, Tres',
    'Started from the bottom now we here',
    'And this is to go even further beyond',
    "If you don't like your destiny, don't accept it",
    "I'll leave tomorrow's problem's to tommorow's me",
    "Reject common sense to make the impossible possible",
    "Stop caring about what your surrounding thinks of you",
    "Don't stop believing",
    "Every journey begins with a single step. We just have to have patience.",
    'It is at the moment of death that humanity has value'
];


// Initialize the quote area
quoteArea.textContent = 'Click on the area below to start the game.';

// Start the game function
function startGame() {
    shuffleArray(quotes);
    quoteNo =0;
    updateQuote();
    resetValues();
    resetTimer();
    startTimer();
    inputArea.disabled = false;
    // inputArea.focus();
}

// Reset game values
function resetValues() {
    errors = 0;
    correct = 0;
    quoteNo = 0;
    characterTyped = 0;
    score.textContent = '0'; // Set the initial score
}

// Update the displayed quote
function updateQuote() {
    currentQuote = quotes[quoteNo];
    quoteArea.textContent = currentQuote;
    if(currentQuote == quotes[12]){
        clearInterval(progress);
        quoteArea.textContent = 'YOU WIN!!! CONGRATS';
        inputArea.disabled = false;

    }
}

// Start the timer
function startTimer() {
    if(!isPaused) {
       progress = setInterval(() => {
        time--;
        timeLeft.textContent = `${time}s`;
        timerBar.style.background = `conic-gradient(#EF6F6C ${time * 6.0}deg, #56E39F 0deg)`;

        if (time === timeEnd) {
            clearInterval(progress);
            timeLeft.textContent = `Time's UP`;
            finishGame();
        }

        
    }, speed); 
    }

    
}

// Reset the timer
function resetTimer() {
    time = 60;
    timeLeft.textContent = `${time}s`;
    timerBar.style.background = `conic-gradient(#EF6F6C ${time * 6.0}deg, #56E39F 0deg)`;
}

//stop timer
// function stopTimer(){
    
// }

// Finish the game
function finishGame() {
    inputArea.disabled = true;
    quoteArea.textContent = 'Select Reset from the pause menu.';
}

// Process user input
function processText() {
    currInput = inputArea.value;
    currInputArray = currInput.split('');
    characterTyped++;
    let errors = 0;
    let correct = 0;

    for (let index = 0; index < currInputArray.length; index++) {
        let typedChar = currInputArray[index];
        let quoteChar = currentQuote[index];

        if (typedChar === quoteChar) {
            correct++;
        } else {
            errors++;
        }
    }

    if (currInput.length === currentQuote.length) {
        if (errors === 0) {
            // Advance to the next quote
            if (quoteNo < quotes.length - 1) {
                quoteNo++;
            } else {
                quoteNo = 0;
            }
            updateQuote();
        }
        inputArea.value = "";
    }

    let addScore = correct * 5;
    let minusScore = errors * 6;
    let newScore = addScore - minusScore;

    totalScore += newScore;
    score.textContent = totalScore;

    pointSystem();
}

function pauseGame(){
    isPaused = true;
    clearInterval(progress);
    pauseMenu.classList.remove('hidden');
    inputArea.disabled = true;
    
}

function resumeGame(){
    isPaused = false;
    pauseMenu.classList.add('hidden');
    inputArea.disabled = false;
    startTimer();
}

function shuffleArray(quotes){
    for(let i = quotes.length - 1; i > 0; i--){
        const j = Math.floor(Math.random()* (i + 1));
        const temp = quotes[i];
        quotes[i] = quotes[j];
        quotes[j] = temp;
    }
}

function pointSystem(){
    var scoreThousandths = Math.floor(totalScore/10000);

    //calculate the additional time to add based on the number of 10k
    var additionalTime = scoreThousandths * 15;

    //check if time should be added
    if (additionalTime > timeIncrease){
        var timeToAdd = (additionalTime - timeIncrease) * 1000;

        //update tune and timeincrease

        time += timeToAdd / 1000;
        timeIncrease = additionalTime;

        //display time

        timeLeft.textContent = `${time}s`;
    }

    

}

function restartGame(){
isPaused = false;
clearInterval(progress);
resetTimer();
inputArea.value = "";
startGame();
pauseMenu.classList.add('hidden');

}




//pause menu
pauseButton.addEventListener('click',pauseGame);
startButton.addEventListener('click', resumeGame);
resetButton.addEventListener('click',restartGame)
// Attach event listeners
quoteArea.addEventListener('click', startGame);
inputArea.addEventListener('input', processText);

//splash screen
//Chat GPT Helped with this part, the DOMCONTENTLOADED
document.addEventListener("DOMContentLoaded", function() {
    var splashButton = document.querySelector(".splash-button");
    var splashScreen = document.querySelector(".splash");

    splashButton.addEventListener("click", function() {
        splashScreen.style.display = "none";
        startGame();
    });
});
// Start the game initially

