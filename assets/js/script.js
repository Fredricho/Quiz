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
let questions = [{
        question: "What is the capital of France?",
        alternative1: "London",
        alternative2: "Madrid",
        alternative3: "Paris",
        alternative4: "Berlin",
        answer: "3",
    },
    {
        question: "What is the largest organ in the human body?",
        alternative1: "Liver",
        alternative2: "Heart",
        alternative3: "Skin",
        alternative4: "Brain",
        answer: "3",
    },
    {
        question: "Who invented the telephone?",
        alternative1: "Alexander Graham Bell",
        alternative2: "Thomas Edison",
        alternative3: "Benjamin Franklin",
        alternative4: "Nikola Tesla",
        answer: "1",
    },
    {
        question: "Which planet in our solar system is known as the Red Planet?",
        alternative1: "Venus",
        alternative2: "Mars",
        alternative3: "Jupiter",
        alternative4: "Saturn",
        answer: "2",
    },
    {
        question: "What is the name of the world's largest desert?",
        alternative1: "Sahara",
        alternative2: "Gobi",
        alternative3: "Atacama",
        alternative4: "Antarctic",
        answer: "1",
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        alternative1: "France",
        alternative2: "England",
        alternative3: "Italy",
        alternative4: "Spain",
        answer: "1",

    },
    {
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        alternative1: "Ernest Hemingway",
        alternative2: "F. Scott Fitzgerald",
        alternative3: "Harper Lee",
        alternative4: "J.D. Salinger",
        answer: "3",
    },
    {
        question: "Which famous scientist formulated the laws of motion?",
        alternative1: "Isaac Newton",
        alternative2: "Albert Einstein",
        alternative3: "Galileo Galilei",
        alternative4: "Stephen Hawking",
        answer: "1",
    },
    {
        question: "In what year did the Cold War end?",
        alternative1: "1989",
        alternative2: "1991",
        alternative3: "1993",
        alternative4: "1995",
        answer: "2",
    },
    {
        question: "Which city hosted the 2016 Summer Olympics?",
        alternative1: "Rio de Janeiro",
        alternative2: "Beijing",
        alternative3: "Athens",
        alternative4: "Sydney",
        answer: "1",
    },
    {
        question: "Who painted the Mona Lisa?",
        alternative1: "Michelangelo",
        alternative2: "Leonardo da Vinci",
        alternative3: "Vincent van Gogh",
        alternative4: "Pablo Picasso",
        answer: "2",
    },
    {
        question: "Which famous novel begins with the line, 'It was the best of times, it was the worst of times'?",
        alternative1: "Pride and Prejudice",
        alternative2: "Wuthering Heights",
        alternative3: "The Great Gatsby",
        alternative4: "A Tale of Two Cities",
        answer: "4",
    },
    {
        question: "What is the smallest continent by land area?",
        alternative1: "Africa",
        alternative2: "Europe",
        alternative3: "Asia",
        alternative4: "Australia",
        answer: "4",
    },
    {
        question: "Who wrote the famous play, 'Hamlet'?",
        alternative1: "William Shakespeare",
        alternative2: "Arthur Miller",
        alternative3: "Tennessee Williams",
        alternative4: "Samuel Beckett",
        answer: "1",
    },
    {
        question: "What is the name of the currency used in Japan?",
        alternative1: "Euro",
        alternative2: "Yen",
        alternative3: "Pound",
        alternative4: "Dollar",
        answer: "2",
    },
    {
        question: "What is the chemical symbol for gold?",
        alternative1: "Au",
        alternative2: "Ag",
        alternative3: "Fe",
        alternative4: "Cu",
        answer: "1",
    },
    {
        question: "Which famous rapper's real name is Shawn Carter?",
        alternative1: "Jay-Z",
        alternative2: "Nas",
        alternative3: "Eminem",
        alternative4: "Kendrick Lamar",
        answer: "1",
    },
    {
        question: "What is the largest ocean in the world?",
        alternative1: "Atlantic Ocean",
        alternative2: "Pacific Ocean",
        alternative3: "Indian Ocean",
        alternative4: "Arctic Ocean",
        answer: "2",
    },
    {
        question: "Who invented the World Wide Web (WWW)?",
        alternative1: "Bill Gates",
        alternative2: "Steve Jobs",
        alternative3: "Tim Berners-Lee",
        alternative4: "Mark Zuckerberg",
        answer: "3",
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        alternative1: "Marie Curie",
        alternative2: "Mother Teresa",
        alternative3: "Margaret Thatcher",
        alternative4: "Indira Gandhi",
        answer: "1"
    },
];


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
            let addAnswerTo = 'incorrect';
            playerAnswer.classList.add(addAnswerTo);
            incorrectScore1(+1);
        }
        // if (addAnswerTo === "correct") {
           
        // }
        // if (addAnswerTo === "incorrect") {
            
        // }
        setTimeout(function () {
                playerAnswer.classList.remove(addAnswerTo);
                showQuestion();
            },
            1500);


        //  if (qCounter == maxQ) {
        //    endGameMessage();
        // }
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