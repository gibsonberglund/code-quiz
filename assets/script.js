//creates a variable for the start button
var startQuiz = document.querySelector('.startbutton');
//variable for the intro paragraph
var intro = document.querySelector('#intro');
//variable for the heading that displays each question
var firstQ = document.querySelector('#firstQ');
//variable for the answer button list
var qButtons = document.querySelector('#choices')
//variables for each answer button
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');

//score counter
var score = localStorage.getItem("score", 0);

//score display
var scoredisplay = document.querySelector('#scoredisplay');

var timer = document.querySelector(".timer");

var seconds = 75

function timerstart() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      seconds--;
      timer.textContent = seconds;
  
      if(seconds === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("you lose");
      }
  
    }, 1000);
  }


function scoreUp() {
    score ++;
    localStorage.setItem("score", score);
    console.log(score);
}

/*
  var userchoice = answer.addEventListener('click', function(event) {
    event.preventDefault();
    score++;
    localStorage.setItem('score', score);
  })
  */

//when start button is clicked, intro paragraph and start button disappear
startQuiz.addEventListener('click', function (event) {
    event.preventDefault();
    intro.textContent = "";
    startQuiz.style.display = "none";
    timerstart();
    
//first question and answer buttons are displayed
    firstQ.textContent = "This is the first question";
    option1.setAttribute("class", "startbutton");
    option2.setAttribute("class", "startbutton");
    option3.setAttribute("class", "startbutton");
    option4.setAttribute("class", "startbutton");
    option1.textContent = "option1";
    option2.textContent = "option2";
    option3.textContent = "option3";
    option4.textContent = "option4";


//listens for correct answer and augments score
    option1.addEventListener('click', scoreUp)
//when an answer is clicked, move on to second question
    qButtons.addEventListener('click', function (event) {
    event.preventDefault();
    secondQ();
    })

})



//resets question heading and answer buttons
function secondQ () {
    firstQ.textContent = "This is the second question"
    option1.textContent = "choice2";
    option2.textContent = "choice";
    option3.textContent = "choices";
    option4.textContent = "choicel";
    if (score=0) {
        intro.textContent = "Correct!";
    } else {
        intro.textContent = "Incorrect :("
    }
//listens for correct answer and augments score
    option2.addEventListener('click', scoreUp)
//listens for a click and moves on to question three
    qButtons.addEventListener('click', function (event) {
        event.preventDefault();
        thirdQ();
    })

}


//resets question and answer buttons for third question
function thirdQ () {
    firstQ.textContent = "This is the third question"
    option1.textContent = "cho2";
    option2.textContent = "chce";
    option3.textContent = "choces";
    option4.textContent = "chicel";
//listens for correct answer and augments score
    option3.addEventListener('click', scoreUp);
//listens for a click and moves on to question three
    qButtons.addEventListener('click', function (event) {
        event.preventDefault();
        fourthQ();
    })
}

//resets for fourth question
function fourthQ () {
    firstQ.textContent = "This is the fourth question"
    option1.textContent = "cho2";
    option2.textContent = "chce";
    option3.textContent = "choces";
    option4.textContent = "chicel";
    //listens for a click and moves on to question three
    qButtons.addEventListener('click', function (event) {
        event.preventDefault();
        fifthQ();
    })
    //listens for correct answer and augments score
    option1.addEventListener('click', function(event){
         event.preventDefault();
         score ++;
        localStorage.setItem("score", score);
        console.log("logging");
        })
}

//resets for fifth question
function fifthQ () {
    firstQ.textContent = "This is the fifth question"
    option1.textContent = "cho2";
    option2.textContent = "chce";
    option3.textContent = "choces";
    option4.textContent = "chicel";
    //listens for a click and moves on to question three
    qButtons.addEventListener('click', function (event) {
        event.preventDefault();
        sixthQ();
    })
    //listens for correct answer and augments score
    option1.addEventListener('click', function(event){
        event.preventDefault();
        score ++;
        localStorage.setItem("score", score);
        console.log("in");
        })
}

//resets for sixth question
function sixthQ () {
    firstQ.textContent = "This is the sixth question"
    option1.textContent = "cho2";
    option2.textContent = "chce";
    option3.textContent = "choces";
    option4.textContent = "chicel";
    //listens for a click and moves on to question three
    qButtons.addEventListener('click', function (event) {
        event.preventDefault();
        yourScore();
    })
    //listens for correct answer and augments score
    option1.addEventListener('click', function(event){
        event.preventDefault();
        score ++;
        localStorage.setItem("score", score);
        console.log("here");
        })
}

//score display screen
function yourScore () {
    firstQ.textContent = "Here is your score:"
    qButtons.style.display = "none";
    scoredisplay.textContent = score;
}


/*
NOT DONE

tally correct and incorrect answers
display score on screen
add a high scores form to final screen
add timer


DONE

*/
