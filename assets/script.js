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
var score = 0;

//score display
var scoredisplay = document.querySelector('#scoredisplay');

var timer = document.querySelector(".timer");

var seconds = 75

function timerstart() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      seconds--;
      timer.textContent = "Time remaining: " + seconds;
  
      if(seconds === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("you lose");
      }
  
    }, 1000);
  }


function scoreUp(event) {
    event.preventDefault();
    score++;
    console.log(score);
}

//when start button is clicked, intro paragraph and start button disappear
startQuiz.addEventListener('click', function (event) {
    event.preventDefault();
    intro.textContent = "";
    startQuiz.style.display = "none";
    timerstart();
    
//first question and answer buttons are displayed
    firstQ.textContent = "JavaScript's representation of the HTML is called the: ";
    option1.setAttribute("class", "startbutton");
    option2.setAttribute("class", "startbutton");
    option3.setAttribute("class", "startbutton");
    option4.setAttribute("class", "startbutton");
    option1.textContent = "PROM";
    option2.textContent = "CON";
    option3.textContent = "DOM";
    option4.textContent = "BLOG";


//listens for correct answer and augments score
    option3.addEventListener('click', scoreUp)
//when an answer is clicked, move on to second question
    qButtons.addEventListener('click', function (event) {
    event.preventDefault();
    secondQ();
    })

})

//resets question heading and answer buttons
function secondQ () {
    firstQ.textContent = "What types of objects can be stored in localStorage?"
    option1.textContent = "All objects";
    option2.textContent = "Strings only";
    option3.textContent = "Numbers only";
    option4.textContent = "Numbers and strings only";
    if (score===0) {
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
    firstQ.textContent = "What is the JQuery syntax for the JavaScript command document.addEventListener('x')?"
    option1.textContent = "x.$";
    option2.textContent = "x.document.$";
    option3.textContent = "document.$('x')";
    option4.textContent = "$('x')";
//listens for correct answer and augments score
    option4.addEventListener('click', scoreUp);
//listens for a click and moves on to question three
    qButtons.addEventListener('click', function (event) {
        event.preventDefault();
        fourthQ();
    })
}

//resets for fourth question
function fourthQ () {
    firstQ.textContent = "What does .stopPropagation do?"
    option1.textContent = "Prevents the current function from bubbling up to the next parent function";
    option2.textContent = "Prevents parent functions from accessing the current function";
    option3.textContent = "Prevents the current function from executing more that once";
    option4.textContent = "Stops the current function from executing";
    //listens for correct answer and augments score
    option1.addEventListener('click', scoreUp);
    //listens for a click and moves on to question three
    qButtons.addEventListener('click', function (event) {
        event.preventDefault();
        fifthQ();
    })
}

//resets for fifth question
function fifthQ () {
    firstQ.textContent = "Everything that happens between {} in a function is called its: "
    option1.textContent = "range";
    option2.textContent = "scope";
    option3.textContent = "array";
    option4.textContent = "balloon";
    //listens for correct answer and augments score
    option2.addEventListener('click', scoreUp);
    //listens for a click and moves on to question three
    qButtons.addEventListener('click', function (event) {
        event.preventDefault();
        sixthQ();
    })
}

//resets for sixth question
function sixthQ () {
    firstQ.textContent = "How can you change the CSS styling of an object using Javascript?"
    option1.textContent = ".querySelector";
    option2.textContent = ".textContent";
    option3.textContent = "console.log";
    option4.textContent = ".setAttribute";
    //listens for correct answer and augments score
    option4.addEventListener('click', scoreUp);
    //listens for a click and moves on to question three
    qButtons.addEventListener('click', function (event) {
        event.preventDefault();
        yourScore();
    })
}
var hiScore = document.querySelector('.hiScore');
var submitBtn = document.querySelector(".submitBtn");

//score display screen
function yourScore () {
    firstQ.textContent = "Here is your score:"
    qButtons.style.display = "none";
    scoredisplay.textContent = score;
    var hiScoreInfo = {
        username: hiScore.value,
        userscore: score,
    }
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(hiScoreInfo);
    })
}


/*
NOT DONE

tally correct and incorrect answers
add a high scores form to final screen
hide high scores textfield and submit button until final screen

DONE
add timer
display score on screen
*/
