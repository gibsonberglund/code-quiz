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

//when start button is clicked, intro paragraph and start button disappear, first question and answer buttons are displayed
startQuiz.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("did I do this right?");
    firstQ.textContent = "This is the first question";
    intro.textContent = "";
    startQuiz.style.display = "none";
    option1.setAttribute("class", "startbutton");
    option1.textContent = "option1";
    option2.setAttribute("class", "startbutton");
    option2.textContent = "option2";
    option3.setAttribute("class", "startbutton");
    option3.textContent = "option3";
    option4.setAttribute("class", "startbutton");
    option4.textContent = "option4";

})

//when an answer is clicked, move on to second question
qButtons.addEventListener('click', function (event) {
    event.preventDefault();
    secondQ();
})

//resets question heading and answer buttons
function secondQ () {
    firstQ.textContent = "This is the second question"
    option1.textContent = "choice2";
    option2.textContent = "choice";
    option3.textContent = "choices";
    option4.textContent = "choicel";
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
}


//NOT DONE



//DONE
//set <p> attr to empty
//display the first question
//display a row of buttons beneath the first q