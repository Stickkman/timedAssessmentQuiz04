var introCard = document.querySelector(".introCard")
var startButton = document.querySelector("#startButton");
var timerHead = document.querySelector("#headerTimer");
var timerCount = 60; // set initial timer to 2 minutes
var questionCard = document.querySelector("#questionContainer"); 
// keeps track of correct answers
var correctAnswers = 0;
//keeps track of wrong answers
var wrongAnswers = 0;

var questionDisplay = document.querySelector("#question");
var choiceDisplay = document.querySelector('#choiceButtons');

// array of questions
var questions = [ 
    'What would happen if you forgot to include a link to your JavaScript file in your html index ?',
    'What does CSS stand for?', 
    'What code generates a button in html?',
    'What does != mean in JavaScript', 
    'Which one of these is NOT an HTML element' 
]

//array of possible answers
var answerChoices =[
    'Your computer would catch on fire',
    'None of your JavaScript code will run',
    'Your internet will stop working',
    'Your JavaScript will work anyway',
    'Computational Server Station', 
    'Cascading Style Sheet',
    'Computer Service System', 
    'Common Science', 
	'<h1>Make a button</h1>',
	'<bold> insert button </bold>',
	'<button>This is a button</button>',
	'make button here',
	'Restart your router',
	'Computer is overheating',
	'Your antivirus subscription is ending soon',
	'Not equal to',
	'<img>',
	'<footer>',
	'<h3>',
	'They are all HTML elements'
	
]
// populates question
function renderQuestion() {
    console.log("questions start call"); //test
        
    questionDisplay.innerText = questions[0];

        {
        b1.textContent = answerChoices[0]; 
        b2.textContent = answerChoices[1];
        b3.textContent = answerChoices[2];
        b4.textContent = answerChoices[3];
        
        choiceDisplay.addEventListener("click", (e)=>{  // event listener to capture which button was pressed
            e.stopPropagation; // prevent multiple captures
            var element = e.target; // assign var element to target value
            console.log(element);  // test

 
            if (element.value == "correct") //if correct alert user and add to correct answer total
            {                                                                   
                e.stopPropagation();alert("Correct Answer"); correctAnswers++; 
                  element.setAttribute("value", "correct");renderQuestion2();
            
                
            }
            else if (element.value =="wrong"){ // if wrong answer, alert user and add to wrong answer total;
                console.log("Wrong Answer Chosen");  //test
                //change value
                alert("Wrong Answer"); wrongAnswers++; element.setAttribute("value", "reset");renderQuestion2();
                // if wrong subtract 10 seconds from time
                timerCount = timerCount -10;
 
            } return;
            
            
          
            
            
            //FORCE EVENT LISTENER TO ONLY RUN ONCE, FIXES DUPLICATE WINDOW ALERTS
		}, { once: true }); 
    } 
    // render question 2
    function renderQuestion2() {
    console.log("questions2 start call"); //test
        //update question and answer choices
    questionDisplay.innerText = questions[1];

        {
        b1.textContent = answerChoices[4]; 
        b2.textContent = answerChoices[5];
        b3.textContent = answerChoices[6];
        b4.textContent = answerChoices[7];
        
        choiceDisplay.addEventListener("click", (e)=>{ 
            e.stopPropagation;
            var element = e.target; // assign var element to target value
            console.log(element);  // test

			
            if (element.value == "correct") //if correct answer chosen, alert user and add to correct answer total
            {   
                e.stopPropagation();alert("Correct Answer"); correctAnswers++;  element.setAttribute("value2", "correct");renderQuestion3();
            
                
            }
            else { // if wrong answer, alert user and add to wrong answer total;
                console.log("Wrong Answer Chosen");  //test
                alert("Wrong Answer"); wrongAnswers++; element.setAttribute("value", "reset");renderQuestion3();
                // if wrong subtract time
                timerCount = timerCount -10;
 
            } return;
    
		}, { once: true }); 
    }  
	}  // populate next question set
	function renderQuestion3() {
    console.log("questions3 start call"); //test
        
    questionDisplay.innerText = questions[2];

        {
        b1.textContent = answerChoices[8]; 
        b2.textContent = answerChoices[9];
        b3.textContent = answerChoices[10];
        b4.textContent = answerChoices[11];
        
        choiceDisplay.addEventListener("click", (e)=>{ 
            e.stopPropagation;
            var element = e.target; // assign var element to target value
            console.log(element);  // test

			
            if (element.textContent == "<button>This is a button</button>") //if correct answer chosen, alert user and add to correct answer total
            {   
                e.stopPropagation();alert("Correct Answer"); correctAnswers++;  element.setAttribute("value2", "reset");renderQuestion4();
            
                
            }
            else { // if wrong answer, alert user and add to wrong answer total;
                console.log("Wrong Answer Chosen");  //test
                alert("Wrong Answer"); wrongAnswers++; element.setAttribute("value", "reset");renderQuestion4();
                timerCount = timerCount -10;
 
            } return;
            
            
          
            
            
            
		}, { once: true }); 
    }  
	}  
	// next question
	function renderQuestion4() {
    console.log("questions4 start call"); //test
        
    questionDisplay.innerText = questions[3];

        {
        b1.textContent = answerChoices[12]; 
        b2.textContent = answerChoices[13];
        b3.textContent = answerChoices[14];
        b4.textContent = answerChoices[15];
        
        choiceDisplay.addEventListener("click", (e)=>{ 
            e.stopPropagation;
            var element = e.target; // assign var element to target value
            console.log(element);  // test

			
            if (element.textContent == "Not equal to") //if correct answer chosen, alert user and add to correct answer total
            {   
                e.stopPropagation();alert("Correct Answer"); correctAnswers++;  element.setAttribute("value2", "reset");renderQuestion5();
            
                
            }
            else { // if wrong answer, alert user and add to wrong answer total;
                console.log("Wrong Answer Chosen");  //test
                alert("Wrong Answer"); wrongAnswers++; element.setAttribute("value", "reset");renderQuestion5();
                timerCount = timerCount -10;
 
            } return;
    
		}, { once: true }); 
    }  
	} 
	// final question
	function renderQuestion5() {
    console.log("questions5 start call"); //test
        
    questionDisplay.innerText = questions[4];

        {
        b1.textContent = answerChoices[16]; 
        b2.textContent = answerChoices[17];
        b3.textContent = answerChoices[18];
        b4.textContent = answerChoices[19];
        
        choiceDisplay.addEventListener("click", (e)=>{ 
            e.stopPropagation;
            var element = e.target; // assign var element to target value
            console.log(element);  // test

			
            if (element.textContent == "They are all HTML elements") //if correct answer chosen, alert user and add to correct answer total
            {   
                e.stopPropagation();alert("Correct Answer"); correctAnswers++;  element.setAttribute("value2", "reset");finishQuiz();
            
                
            }
            else { // if wrong answer, alert user and add to wrong answer total;
                console.log("Wrong Answer Chosen");  //test
                alert("Wrong Answer"); wrongAnswers++; element.setAttribute("value", "reset");finishQuiz();
                timerCount = timerCount -10;
 
            } return;
            
            
          
            
            
            
		}, { once: true }); 
    }  
	} 

}

// startQuiz function
function startQuiz() {
    //calls startTimer function
    startTimer();
   
    introCard.setAttribute("class", "hide"); //hides introcard
    startButton.setAttribute("id", "hide"); //hides startbutton
    startButton.setAttribute("class", "hide"); //hides startbutton
    questionCard.setAttribute("class", "visible"); //reveals first set of questions
    renderQuestion();

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
                timer.textContent = timerCount; 
            }
        
    },1000); // 1 second interval
}

// call startQuiz funciton when start button is pushed
startButton.addEventListener("click", startQuiz);


