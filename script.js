var mainE1 = document.getElementById("main");
var timerE1 = document.getElementById("time");
var bodyE1 = document.createElement("div");

// var secondsLeft = 5;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     time.textContent = secondsLeft + " seconds before the quiz begins";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       generateQuiz();
//     }

//   }, 1000);
// }

function generateQuiz() {
   
    var questions = [
        {
          title: "Commonly used data types DO NOT include:",
          choices: ["strings", "booleans", "alerts", "numbers"],
          answer: "alerts"
        },
        {
          title: "The condition in an if / else statement is enclosed within ____.",
          choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
          answer: "parentheses"
        },
        {
            title: "Which built-in method returns the calling string value converted to upper case? ",
            choices: ["toUpper()", "toUpperCase()", "changeCase(case)", "None of the above."],
            answer: "toUpperCase()"
        }
      ];

    const button = document.getElementById("btn");
    button.addEventListener('Start Quiz', event =>{
        for(var i = 0; i < questions.length; i++){
            questions(title);
        }
    })
}

setTime();


    