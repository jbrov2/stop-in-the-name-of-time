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
var timerBar = document.querySelector('.time-left');
let timeLeft = document.querySelector('.time-secs');

let time = 60;
let timeEnd = 0;
let speed = 1000;

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



