var startButton = document.querySelector("#startButton");
var timerHead = document.querySelector("#headerTimer");
var timerCount = 120; // set initial timer to 2 minutes

// startQuiz function
function startQuiz() {
    //calls startTimer function
    startTimer();

}

function startTimer(){
    timer = setInterval(function() {
        //decrements timerCount every interval
        timerCount--;
        //updates time left in header
        timerHead.textContent = "Time left: " + timerCount;
        // runs timer while count is greater than or equal to zero
        if (timerCount == 0) {
            clearInterval(timer);

        }
            else {
                timer.textContent = timerCount; question1();
            }
        
    },1000); // 1 second interval
}

function question1() {
    console.log("questions start call");
}


// call startQuiz funciton when start button is pushed
startButton.addEventListener("click", startQuiz);


