const questionText = document.getElementById("question");
const alternativeText = Array.from(document.getElementsByClassName('alternatives'));
const scoreText = document.getElementById("correct");
const wrongText = document.getElementById("inCorrect");
const submitText = document.getElementById("btn--submit");
const qOutOFText = document.getElementById("numberofQ");
const maxQ = 10;
const SCORE_POINTS = 10;

let currentQuestion = {};
let qCounter = 0;
let quizQuestions = [];
let acceptAnswer = true;
let score = 0;



function runGame() {
    qCounter = 0;
    score = 0;
    quizQuestions = [...questions];
    showQuestion();
}

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

alternativeText.forEach(function (alternative) {
    alternative.addEventListener('click', function (event) {
        if (!acceptAnswer) return;
        acceptAnswer = false;
        const playerAnswer = event.target;
        const correctAnswer = playerAnswer.dataset.type;
        let addAnswerTo = 'incorrect';
        if (correctAnswer === currentQuestion.answer) {
            addAnswerTo = 'correct';
            playerAnswer.classList.add(addAnswerTo);
            correctScore(+1);
        } else {
            addAnswerTo = 'incorrect';
            playerAnswer.classList.add(addAnswerTo);
            incorrectScore1(+1);
        } 

        setTimeout(function () {
                playerAnswer.classList.remove(addAnswerTo);
                showQuestion();
            },
            1500);
    });
});

function correctScore(num) {
    score += num;
    scoreText.innerText = score + '/' + maxQ;
}

function incorrectScore1(num) {
    score += num;
    wrongText.innerText = score + '/' + maxQ;
}

runGame();