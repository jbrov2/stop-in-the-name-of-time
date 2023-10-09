// //time limit


// //list of quotes
// var quotes = [
//     "TENGEN TOPPA GURREN LAGANN!",
//     'Who the hell do you think I am',
//     'Believe IT!',
//     'Uno, Dos, Tres',
//     'Started from the bottom now we here',
//     'And this is to go even further beyond',
//     "If you don't like your destiny, don't accept it",
//     "I'll leave tomorrow's problem's to tommorow's me",
//     "Reject common sense to make the impossible possible",
//     "Stop caring about what your surronding thinks of you",
//     "Don't stop believing",
//     "Every journey begins with a single step. We just have to have patience.",
//     'It is at the moment of death that humanity has value'
// ]

// //make the stopwatch work


// //turn this into a function
// // let progress = setInterval(()=>{
// //     time--;
    
// //     timeLeft.textContent = `{time}s`;
// //     timerBar.style.background = `conic-gradient(#EF6F6C ${time * 3.6}deg, #56E39F 0deg);`
// //     if(time == timeEnd){
// //         clearInterval(progress);
// //         timeLeft.textContent = `Time's UP`;
// //     }
// //     console.log(time)
// // }, speed);
//     var timerBar = document.querySelector('.time-left');
//     let timeLeft = document.querySelector('.time-secs');

//     let time = 60;  
//     let timeEnd = 0;
//     let speed = 1000;



// function startTimer(){


//     let progress = setInterval(() => {
//         time--;
//         timeLeft.textContent = `${time}s`; 
//         timerBar.style.background = `conic-gradient(#EF6F6C ${time * 6.0}deg, #56E39F 0deg)`;

//         if (time === timeEnd) {
//             clearInterval(progress);
//             timeLeft.textContent = `Time's UP`;
//             finishGame();
//         }

//         console.log(time);
//     }, speed);
// }

// function resetTimer(){
//     time;
//     timeLeft.textContent = `${time}s`; 
//     timerBar.style.background = `conic-gradient(#EF6F6C ${time * 6.0}deg, #56E39F 0deg)`;

// }

// //establish the variables
// let inputArea = document.querySelector('.input-area');
// let score = document.querySelector('.total-score');
// let pauseButton = document.querySelector('.pause-btn');
// let quoteArea = document.querySelector('.quotePlace');
// let currentQuote = "";
// let errors = 0;
// let totalErrors = 0;
// let quoteNo = 0;
// let characterTyped = 0;
// let correct = 0;

// quoteArea.textContent = null;

// function updateQuote() {
    
//     currentQuote = quotes[quoteNo];

//     //clear any existing spans
//     quoteArea.innerHTML ='';

//     //separate each character and make an element
//     // out of each of them to individually style them

//     currentQuote.split('').forEach(char => {
//         const charSpan = document.createElement('span')
//         charSpan.innerText = char
//         quoteArea.appendChild(charSpan)
//     })

//     //roll over to the first quote
//     if (quoteNo < quotes.length -1){
//         quoteNo++;
//     } else {
//         quoteNo =0;
//     }

// }

// //We want to get the current value of the input box - split it into an
// // array then store it.

// //Moving to the next quote
// //When the length of input text matches the quote text length.


// function processText() {
//     //get current input text and split it
//     currInput = inputArea.value;
//     currInputArray = currInput.split('');

//     //increment total characters typed
//     characterTyped++;
//     let errors = 0;
//     let correct = 0;

//     quoteSpanArray = quoteArea.querySelectorAll('span');
//     quoteSpanArray.forEach((char, index) => {
//         let typedChar = currInputArray[index]

//         //character not currently typed
//         if (typedChar == null){
//             char.classList.remove('correctChar');
//             char.classList.remove('incorrectChar');
//         } else if (typedChar === char.innerText){
//             //correct character
//             char.classList.add('correctChar');
//             char.classList.remove('incorrectChar');

//             correct++;
            
//         } else {
//             //incorrect character
//             char.classList.add('incorrectChar');
//             char.classList.remove('correctChar');

//             errors++;
            
            
//         }
//     });

//     //calculating score
//     let addScore = correct * 5 
//     let minusScore = errors *3
    
//     let newScore = addScore - minusScore;
//     score.textContent = newScore;

//     //if current text is completely typed
//     if(currInput.length == currentQuote.length){
//         updateQuote();

//         //ckear the input area
//         inputArea.value = "";
//     }

// }

// function startGame(){
//     updateQuote();
//     resetValues();
    

//     //clear old and start a new timer
//     resetTimer();
//     startTimer();
    
// }


// function resetValues(){
//     errors = 0;
//     correct = 0;
//     quoteNo = 0;
//     characterTyped = 0;
//     // inputArea.disabled = true;

//     // inputArea.value = "";
//     // quoteArea.textContent = 'Click on the area below to start the game.';
// }

// function finishGame(){
//     //tell them game over
//     time;
//     timeLeft.textContent = 'GAME OVER'; 
//     timerBar.style.background = `conic-gradient(#EF6F6C ${time * 6.0}deg, #56E39F 0deg)`;

//     //disable the input area
//     inputArea.disabled = true;
//     //show finish text
//     quoteArea.textContent = 'Select Reset from the pause menu.'

// }

// inputArea.addEventListener('click', startGame);
// inputArea.addEventListener('input', processText);



//FIXED CODE CHATGPT

// Define your variables
var timerBar = document.querySelector('.time-left');
var timeLeft = document.querySelector('.time-secs');
var time = 60;
var timeEnd = 0;
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
    updateQuote();
    resetValues();
    resetTimer();
    startTimer();
    inputArea.disabled = false;
    inputArea.focus();
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
}

// Start the timer
function startTimer() {
    let progress = setInterval(() => {
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

// Reset the timer
function resetTimer() {
    time = 60;
    timeLeft.textContent = `${time}s`;
    timerBar.style.background = `conic-gradient(#EF6F6C ${time * 6.0}deg, #56E39F 0deg)`;
}

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

    let addScore = correct * 5;
    let minusScore = errors * 3;
    let newScore = addScore - minusScore;

    totalScore += newScore;
    score.textContent = totalScore;

    if (currInput.length === currentQuote.length) {
        //Checking if it's the last quote in the array
        if(quoteNo < quotes.length - 1){
            quoteNo++;
            updateQuote();
            inputArea.value = "";
        } else {
            quoteNo;
            updateQuote();
            inputArea.value = "";
        }
        
    }
}

// Attach event listeners
quoteArea.addEventListener('click', startGame);
inputArea.addEventListener('input', processText);

// Start the game initially
startGame();
