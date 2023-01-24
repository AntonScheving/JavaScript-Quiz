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


let timerElement = document.getElementById("timer");
let startScreen = document.getElementById("start-screen");
let quizStartButton = document.getElementById("quiz-start-button");
let questions = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let answerChoices = document.getElementById("choices");
let endScreen = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let initials = document.getElementById("initials");
let submit = document.getElementById("submit");
let feedback = document.getElementById("feedback");



let timer;
let timerCount;
let questionOnDisplay = 0;
let aQuestion;

let listEl = document.querySelector("ul");

let questionsAndAnswers = [
    {
        question: "Question 1",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1"
    },
    {
        question: "Question 2",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1"
    },
    {
        question: "Question 3",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1"
    },
    {
        question: "Question 4",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "option 1"
    },
]



function startQuiz() {
    // isWin = false;
    // quizStartButton.disabled = true;
    questionOnDisplay;
    startCountDownTimer()
    // timerCount;
    displayQuestions();
}

function startCountDownTimer() {
    timerCount = 5;
    timer = setInterval(function () {
        timerCount--;

        timerElement.textContent = timerCount;

            if (timerCount <= 0) {
                clearInterval(timer);
            }
        
        // if (isCorrectAnswer && timerCount > 0) {
        // next question function
        // nextQuestion()
    }, 1000);
        
};

function displayQuestions() {
    questions.classList.remove("hide");
    questionTitle.textContent = questionsAndAnswers[0].question;
    answerChoices.textContent = questionsAndAnswers[0].options;

    
    
        
    // aQuestion = document.querySelector("hide");

    // aQuestion.addEventListener("click" function () {
 
    // })
    
    
    
    // aQuestion = questionsAndAnswers.question()[Math.floor(Math.random())];

    // questionTitle.textContent = "hello";
   
// aQuestion.push(
   
//     <div class="hide"> question${questionsAndAnswers.question}"</div>
   
// )
}
let button = document.createElement("button")
button.textContent = answerChoices;
listEl.append(button);


// variable                                 Function
quizStartButton.addEventListener("click", startQuiz);


let questionIndex = 0;

listEl.addEventListener("click", function (event) {
    if (!event.target.matches("button")) {
      return;
    }
    if (event.target.textContent === questionsAndAnswers[questionIndex].answer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      questionIndex += 1;
    
});
/*
var listEl = document.querySelector("ul");

var questions = [
  {
    text: "Answer this!",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "C"
  },
  {
    text: "Answer That!",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "D"
  }
];

var questionIndex = 0;

listEl.addEventListener("click", function (event) {
  if (!event.target.matches("button")) {
    return;
  }
  var question = questions[questionIndex];

  console.log(event.target.textContent, questionsAndAnswers.answer);
  if (event.target.textContent === questionsAndAnswers.answer) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
  questionIndex += 1;
});
*/