//time limit


//list of quotes
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
    "Stop caring about what your surronding thinks of you",
    "Don't stop believing",
    "Every journey begins with a single step. We just have to have patience.",
    'It is at the moment of death that humanity has value'
]

//make the stopwatch work


//turn this into a function
// let progress = setInterval(()=>{
//     time--;
    
//     timeLeft.textContent = `{time}s`;
//     timerBar.style.background = `conic-gradient(#EF6F6C ${time * 3.6}deg, #56E39F 0deg);`
//     if(time == timeEnd){
//         clearInterval(progress);
//         timeLeft.textContent = `Time's UP`;
//     }
//     console.log(time)
// }, speed);

function startTimer(){
    var timerBar = document.querySelector('.time-left');
    let timeLeft = document.querySelector('.time-secs');

    let time = 60;  
    let timeEnd = 0;
    let speed = 1000;

    let progress = setInterval(() => {
        time--;
        timeLeft.textContent = `${time}s`; 
        timerBar.style.background = `conic-gradient(#EF6F6C ${time * 6.0}deg, #56E39F 0deg)`;

        if (time === timeEnd) {
            clearInterval(progress);
            timeLeft.textContent = `Time's UP`;
        }

        console.log(time);
    }, speed);
}

//establish the variables
let inputArea = document.querySelector('.input_area');
let score = document.querySelector('.total-score');
let pauseButton = document.querySelector('.pause-btn');
let quoteArea = document.querySelector('.quotePlace');
let currentQuote = "";
let errors = 0;
let totalErrors = 0;
let quoteNo = 0;
let characterTyped = 0;
let correct = 0;


function updateQuote() {
    quoteArea.textContent = null;
    currentQuote = quotes[quoteNo];

    //separate each character and make an element
    // out of each of them to individually style them

    currentQuote.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        quoteArea.appendChild(charSpan)
    })

    //roll over to the first quote
    if (quoteNo < quotes.length -1){
        quoteNo++;
    } else {
        quoteNo =0;
    }

}

//We want to get the current value of the input box - split it into an
// array then store it.

//Moving to the next quote
//When the length of input text matches the quote text length.


function processCurrentText() {
    //get current input text and split it
    currInput = inputArea.value;
    currInputArray = currInput.split('');

    //increment total characters typed
    characterTyped++;
    let errors = 0;
    let correct = 0;

    quoteSpanArray = quoteArea.querySelectorAll('span');
    quoteSpanArray.forEach((char, index) => {
        let typedChar = currInputArray[index]

        //character not currently typed
        if (typedChar == null){
            char.classList.remove('correctChar');
            char.classList.remove('incorrectChar');
        } else if (typedChar === char.innerText){
            //correct character
            char.classList.add('correctChar');
            char.classList.remove('incorrectChar');

            correct++;
            
        } else {
            //incorrect character
            char.classList.add('incorrectChar');
            char.classList.remove('correctChar');

            errors++;
            
            
        }
    });

    //calculating score
    let addScore = correct * 5 
    let minusScore = error *3
    
    let newScore = addScore - minusScore;
    score.textContent = newScore

    //if current text is completely typed
    if(currInput.length == currentQuote.length){
        updateQuote();

        //ckear the input area
        inputArea.value = "";
    }

}

function startGame(){
    resetValues();
    updateQuote();

    
}