
//container selector
var scoreContainer = document.querySelector(".scoreContainer");
// button selectors
var clearBtn = document.querySelector("#clearBtn");

// gets the values from local storage and stores in variables for use
var getName = localStorage.getItem("name");
var getScore = localStorage.getItem("score");

    

function clearScoreFunction() {
    window.localStorage.clear(); // clears local scores
    window.location.href ="./highscores.html"; // refreshes page to update cleared scores


    

}


//renders name and score data to page from local storage variable
    scoreContainer.innerText = "1. " + getName + " --- " + getScore + "%";

    clearBtn.addEventListener("click", clearScoreFunction);



    
    



           