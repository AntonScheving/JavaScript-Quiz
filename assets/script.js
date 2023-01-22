// Begin with a problem statement
// Input: 
// 1. Create the questions and answers for the quiz
// 2. create a timer function
// 3. Once the button is clicked display the first question and start count down and display the count down
// 4. add answer buttons 3 -4 options below the question 
// 5. if wrong answer button is clicked detract time from the countdown
// Output: 
// use the words variable in the wG game to create the questions and answers 
// Next, describe the steps you will take to solve the problem
// 1. 
// 2. 
// 3. 

// Finally, write the actual code 
// using the steps described in the pseudocode

let timerElement = document.querySelector("#timer");
let quizStartButton = document.querySelector("#quiz-start-button");

let timer;
let timerCount;
let isCorrectAnswer;
isWin = false;

let questions = ["question 1", "question 2", "question 3", "question 4"];

let answerOptions = [["option 1", "option 2", "option 3", "option 4"], ["option 1", "option 2", "option 3", "option 4"], ["option 1", "option 2", "option 3", "option 4"], ["option 1", "option 2", "option 3", "option 4"]]



function startQuiz() {
    timerCount = 60;

    // isWin = false;
    // quizStartButton.disabled = true;
    startCountDownTimer()
    timerCount;
}

function startCountDownTimer() {
    timer = setInterval(function() {
        timerCount--;
    
        timerElement.textContent = timerCount;
    
            if (timerCount >= 0) 
            if (isCorrectAnswer && timerCount > 0) {
                // next question function
                // nextQuestion()
        }
    }, 1000);
};

quizStartButton.addEventListener("click", startQuiz);