var startQuiz = document.querySelector('.startbutton');
var intro = document.querySelector('#intro');
var firstQ = document.querySelector('#firstQ');
var qButtons = document.querySelector('#choices')
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');

startQuiz.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("did I do this right?");
    firstQ.textContent = "This is the first question";
    intro.textContent = "";
    option1.setAttribute("class", "startbutton");
    option1.textContent = "option1";


})


//NOT DONE



//display a row of buttons beneath the first q


//DONE
//set <p> attr to empty
//display the first question