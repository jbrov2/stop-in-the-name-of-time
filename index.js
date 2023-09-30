var splashScreen = document.querySelector('.splash');
var startButton = document.querySelector('.start-button');

startButton.addEventListener('click', function(){
    splashScreen.style.opactiy =0;
    setTimeout(()=>{
        splashScreen.classList.add('hidden')
    },610)
})