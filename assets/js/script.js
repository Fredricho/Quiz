/*jshint esversion: 8 */
const questionText = document.getElementById("question");
const alternativeText = Array.from(document.getElementsByClassName('alternatives'));
const scoreText = document.getElementById("correct");
const qOutOFText = document.getElementById("numberofQ");
const maxQ = 10;

let currentQuestion = {};
let qCounter = 0;
let quizQuestions = [];
let acceptAnswer = true;
let score = 0;

// This function starts the game
function runGame() {
    qCounter = 0;
    score = 0;
    quizQuestions = [...questions];
    showQuestion();
}
/*This function chooses random questions with alternatives, 
handles the questions counter and removes already asked questions from the array.*/
function showQuestion() {
    qCounter++;
    const qIndex = Math.floor(Math.random() * quizQuestions.length);
    currentQuestion = quizQuestions[qIndex];
    questionText.innerText = currentQuestion.question;
    alternativeText.forEach(function (alternative) {
        const number = alternative.dataset.type;
        alternative.innerText = currentQuestion["alternative" + number];
    });
    quizQuestions.splice(qIndex, 1);
    acceptAnswer = true;
}
/* Checks if the players answer is correct/incorrect and changes the button style depeding on it. 
Counts questions and correct answers and delays their answer. Ends the game at question 10*/
alternativeText.forEach(function (alternative) {
    alternative.addEventListener('click', function (event) {
        if (!acceptAnswer) return;
        acceptAnswer = false;
        const playerAnswer = event.target;
        const currentAnswer = playerAnswer.dataset.type;
        let addAnswerTo = 'incorrect';
        if (currentAnswer === currentQuestion.answer) {
            addAnswerTo = 'correct';
            playerAnswer.classList.add(addAnswerTo);
            correctScore(+1);
        } else {
            addAnswerTo = 'incorrect';
            playerAnswer.classList.add(addAnswerTo);
        }
        qOutOFText.innerText = qCounter;
        if (qCounter === maxQ) {
            gameOver();
        }
        setTimeout(function () {
                playerAnswer.classList.remove(addAnswerTo);
                showQuestion();
            },
            1500);
    });
});

// Increments number of correct answers
function correctScore(num) {
    score += num;
    scoreText.innerText = score + '/' + maxQ;
}
// Hides the alternative buttons, at question 10.
function gameOver() {
    let buttons = document.getElementsByClassName("alternatives");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }
}
// Start the Quiz
runGame();