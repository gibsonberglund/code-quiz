//creates a variable for the start button
var startQuiz = document.querySelector('.startbutton');
//variable for the intro paragraph
var intro = document.querySelector('#intro');
//variable for the heading that displays each question
var firstQ = document.querySelector('#firstQ');

//variables for scoreboard
var hiScore = document.querySelector('#hiScore');
var submitBtn = document.querySelector("#submitBtn");

//variables for every answer button
//q1
var option1q1 = document.querySelector('#option1q1');
var option2q1 = document.querySelector('#option2q1');
var option3q1 = document.querySelector('#option3q1');
var option4q1 = document.querySelector('#option4q1');
//q2
var option1q2 = document.querySelector('#option1q2');
var option2q2 = document.querySelector('#option2q2');
var option3q2 = document.querySelector('#option3q2');
var option4q2 = document.querySelector('#option4q2');
//q3
var option1q3 = document.querySelector('#option1q3');
var option2q3 = document.querySelector('#option2q3');
var option3q3 = document.querySelector('#option3q3');
var option4q3 = document.querySelector('#option4q3');
//q4
var option1q4 = document.querySelector('#option1q4');
var option2q4 = document.querySelector('#option2q4');
var option3q4 = document.querySelector('#option3q4');
var option4q4 = document.querySelector('#option4q4');
//q5
var option1q5 = document.querySelector('#option1q5');
var option2q5 = document.querySelector('#option2q5');
var option3q5 = document.querySelector('#option3q5');
var option4q5 = document.querySelector('#option4q5');

//variables for every list of answers
var choices1 = document.querySelector('#choices1');
var choices2 = document.querySelector('#choices2');
var choices3 = document.querySelector('#choices3');
var choices4 = document.querySelector('#choices4');
var choices5 = document.querySelector('#choices5');

//score counter
var score = 0;

//score display
var scoreDisplay = document.querySelector('#scoreDisplay');

var testCleared = false;

//timer
var timer = document.querySelector("#timer");
var seconds = 75;
function timerstart() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      seconds--;
      timer.textContent = "Time remaining: " + seconds;
  
      if (testCleared === true){
        clearInterval(timerInterval);
      } else if (seconds === 0) {
        // Stops execution of action at set interval
        alert("you lose");
      }
    }, 1000);
};

//when start button is clicked, intro paragraph and start button disappear
startQuiz.addEventListener('click', function (event) {
    event.preventDefault();
    intro.textContent = "";
    startQuiz.style.display = "none";
    timerstart();
    
//first question and answer buttons are displayed
    firstQ.textContent = "JavaScript's representation of the HTML is called the: ";
    option1q1.setAttribute("class", "startbutton");
    option2q1.setAttribute("class", "startbutton");
    option3q1.setAttribute("class", "startbutton");
    option4q1.setAttribute("class", "startbutton");
    option1q1.textContent = "PROM";
    option2q1.textContent = "CON";
    option3q1.textContent = "DOM";
    option4q1.textContent = "BLOG";


/*listens for correct answer and augments score
    option3.addEventListener('click', scoreUp)
    */
    var answ1 = "option3q1";

//when an answer is clicked, move on to second question
choices1.addEventListener('click', function (event) {
    event.preventDefault(event);
    var useransw1 = event.target.id;
    if (useransw1 === answ1) {
        score++;
        console.log(score);
        rightorwrong.textContent = "Correct:)";
    } else {
        rightorwrong.textContent = "Incorrect :(";
    };
    secondQ();
    });
});

//resets question heading and answer buttons
function secondQ () {
    choices1.style.display = "none";
    option1q2.setAttribute("class", "startbutton");
    option2q2.setAttribute("class", "startbutton");
    option3q2.setAttribute("class", "startbutton");
    option4q2.setAttribute("class", "startbutton");
    firstQ.textContent = "What types of objects can be stored in localStorage?";
    option1q2.textContent = "All objects";
    option2q2.textContent = "Strings only";
    option3q2.textContent = "Numbers only";
    option4q2.textContent = "Numbers and strings only";

    var answ2 = "option2q2";

//listens for a click and moves on to question three
    choices2.addEventListener('click', function(event) {
        event.preventDefault();
        var useransw2 = event.target.id;
    if (useransw2 === answ2) {
        score++;
        rightorwrong.textContent = "Correct:)";
    } else {
        rightorwrong.textContent = "Incorrect :(";
    };
    thirdQ();
    });
};

//resets question and answer buttons for third question
function thirdQ () {
    choices2.style.display = 'none';
    firstQ.textContent = "What is the JQuery syntax for the JavaScript command document.addEventListener('x')?";
    option1q3.setAttribute("class", "startbutton");
    option2q3.setAttribute("class", "startbutton");
    option3q3.setAttribute("class", "startbutton");
    option4q3.setAttribute("class", "startbutton");
    option1q3.textContent = "x.$";
    option2q3.textContent = "x.document.$";
    option3q3.textContent = "document.$('x')";
    option4q3.textContent = "$('x')";

    var answ3 = "option4q3";

//listens for a click and moves on to question four
    choices3.onclick = function (event) {
        event.preventDefault();
        var useransw3 = event.target.id;
        if (useransw3 === answ3) {
            score++;
            console.log(score);
            rightorwrong.textContent = "Correct:)";
        } else {
            rightorwrong.textContent = "Incorrect :(";
        };
        fourthQ();
    }
}

//resets for fourth question
function fourthQ () {
    choices3.style.display = 'none';
    firstQ.textContent = "What does .stopPropagation do?";
    option1q4.setAttribute("class", "startbutton");
    option2q4.setAttribute("class", "startbutton");
    option3q4.setAttribute("class", "startbutton");
    option4q4.setAttribute("class", "startbutton");
    option1q4.textContent = "Prevents the current function from bubbling up to the next parent function";
    option2q4.textContent = "Prevents parent functions from accessing the current function";
    option3q4.textContent = "Prevents the current function from executing more that once";
    option4q4.textContent = "Stops the current function from executing";

    var answ4 = "option1q4";

    //listens for a click and moves on to question three
    choices4.onclick = function (event) {
        event.preventDefault();
        var useransw4 = event.target.id;
        if (useransw4 === answ4) {
            score++;
            console.log(score);
            rightorwrong.textContent = "Correct :)";
        } else {
            rightorwrong.textContent = "Incorrect :(";
        };
        fifthQ();
    }
}

//resets for fifth question
function fifthQ () {
    choices4.style.display = 'none';
    firstQ.textContent = "Everything that happens between {} in a function is called its: ";
    option1q5.setAttribute("class", "startbutton");
    option2q5.setAttribute("class", "startbutton");
    option3q5.setAttribute("class", "startbutton");
    option4q5.setAttribute("class", "startbutton");
    option1q5.textContent = "range";
    option2q5.textContent = "scope";
    option3q5.textContent = "array";
    option4q5.textContent = "balloon";

    var answ5 = "option2q5";

    //listens for a click and moves on to question three
    choices5.onclick = function (event) {
        event.preventDefault();
        var useransw5 = event.target.id;
        if (useransw5 === answ5) {
            score++;
            console.log(score);
            rightorwrong.textContent = "Correct :)";
        } else {
            rightorwrong.textContent = "Incorrect :(";
        };
        yourScore();
    };
};

//score display screen
function yourScore () {
    choices5.style.display = "none";
    firstQ.style.display = "none";
    firstQ.setAttribute('style', 'display: none');
    timer.style.display = "none";
    scoreDisplay.textContent = "Your score: " + score;
    submitBtn.setAttribute('class', 'submitBtn');
    submitBtn.textContent = 'Submit';
    
    clearInterval(timerstart);
    hiScore.setAttribute('class', 'hiScore');
    var hiScoreInfo = {
        username: hiScore.value,
        userscore: score,
    };
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        firstQ.textContent = hiScore.value;
    });
};

/*
NOT DONE


add a high scores form to final screen
hide high scores textfield and submit button until final screen
wrong answers decrement time-remaining

DONE
add timer
display score on screen
tally correct and incorrect answers
*/
