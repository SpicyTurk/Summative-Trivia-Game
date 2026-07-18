// Variables timer.js needs to track:
let timeRemaining = 30          
let timerInterval = null       
function startTimer() {
    timeRemaining = 30;
    timerInterval = setInterval(function() {
    timeRemaining -= 1
    document.getElementById("timer").textContent = timeRemaining   
  }, 1000)  
}

function stopTimer() {
    clearInterval(timerInterval);
}