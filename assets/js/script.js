var introCard = document.querySelector(".introCard")
var startButton = document.querySelector("#startButton");
var timerHead = document.querySelector("#headerTimer");
var timerCount = 120; // set initial timer to 2 minutes
var questionCard = document.querySelector("#questionContainer") 

// startQuiz function
function startQuiz() {
    //calls startTimer function
    startTimer();
   
    introCard.setAttribute("class", "hide"); //hides introcard
    startButton.setAttribute("id", "hide"); //hides startbutton
    startButton.setAttribute("class", "hide"); //hides startbutton
    questionCard.setAttribute("class", "visible"); //reveals first set of questions
    

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
                timer.textContent = timerCount; questions();
            }
        
    },1000); // 1 second interval
}

function questions() {
    console.log("questions start call");

    
}


// call startQuiz funciton when start button is pushed
startButton.addEventListener("click", startQuiz);


