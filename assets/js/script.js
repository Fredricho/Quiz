let questions = [{
        question: "What is the capital of France?",
        alternativeA: "London",
        alternativeB: "Madrid",
        alternativeC: "Paris",
        alternativeD: "Berlin",
        answer: "c",
    },
    {
        question: "What is the largest organ in the human body?",
        alternativeA: "Liver",
        alternativeB: "Heart",
        alternativeC: "Skin",
        alternativeD: "Brain",
        answer: "c",
    },
    {
        question: "Who invented the telephone?",
        alternativeA: "Alexander Graham Bell",
        alternativeB: "Thomas Edison",
        alternativeC: "Benjamin Franklin",
        alternativeD: "Nikola Tesla",
        answer: "a",
    },
    {
        question: "Which planet in our solar system is known as the Red Planet?",
        alternativeA: "Venus",
        alternativeB: "Mars",
        alternativeC: "Jupiter",
        alternativeD: "Saturn",
        answer: "b",
    },
    {
        question: "What is the name of the world's largest desert?",
        alternativeA: "Sahara",
        alternativeB: "Gobi",
        alternativeC: "Atacama",
        alternativeD: "Antarctic",
        answer: "a",
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        alternativeA: "France",
        alternativeB: "England",
        alternativeC: "Italy",
        alternativeD: "Spain",
        answer: "a",

    },
    {
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        alternativeA: "Ernest Hemingway",
        alternativeB: "F. Scott Fitzgerald",
        alternativeC: "Harper Lee",
        alternativeD: "J.D. Salinger",
        answer: "c",
    },
    {
        question: "Which famous scientist formulated the laws of motion?",
        alternativeA: "Isaac Newton",
        alternativeB: "Albert Einstein",
        alternativeC: "Galileo Galilei",
        alternativeD: "Stephen Hawking",
        answer: "a",
    },
    {
        question: "In what year did the Cold War end?",
        alternativeA: "1989",
        alternativeB: "1991",
        alternativeC: "1993",
        alternativeD: "1995",
        answer: "b",
    },
    {
        question: "Which city hosted the 2016 Summer Olympics?",
        alternativeA: "Rio de Janeiro",
        alternativeB: "Beijing",
        alternativeC: "Athens",
        alternativeD: "Sydney",
        answer: "a",
    },
    {
        question: "Who painted the Mona Lisa?",
        alternativeA: "Michelangelo",
        alternativeB: "Leonardo da Vinci",
        alternativeC: "Vincent van Gogh",
        alternativeD: "Pablo Picasso",
        answer: "b",
    },
    {
        question: "Which famous novel begins with the line, 'It was the best of times, it was the worst of times'?",
        alternativeA: "Pride and Prejudice",
        alternativeB: "Wuthering Heights",
        alternativeC: "The Great Gatsby",
        alternativeD: "A Tale of Two Cities",
        answer: "d",
    },
    {
        question: "What is the smallest continent by land area?",
        alternativeA: "Africa",
        alternativeB: "Europe",
        alternativeC: "Asia",
        alternativeD: "Australia",
        answer: "d",
    },
    {
        question: "Who wrote the famous play, 'Hamlet'?",
        alternativeA: "William Shakespeare",
        alternativeB: "Arthur Miller",
        alternativeC: "Tennessee Williams",
        alternativeD: "Samuel Beckett",
        answer: "a",
    },
    {
        question: "What is the name of the currency used in Japan?",
        alternativeA: "Euro",
        alternativeB: "Yen",
        alternativeC: "Pound",
        alternativeD: "Dollar",
        answer: "b",
    },
    {
        question: "What is the chemical symbol for gold?",
        alternativeA: "Au",
        alternativeB: "Ag",
        alternativeC: "Fe",
        alternativeD: "Cu",
        answer: "a",
    },
    {
        question: "Which famous rapper's real name is Shawn Carter?",
        alternativeA: "Jay-Z",
        alternativeB: "Nas",
        alternativeC: "Eminem",
        alternativeD: "Kendrick Lamar",
        answer: "a",
    },
    {
        question: "What is the largest ocean in the world?",
        alternativeA: "Atlantic Ocean",
        alternativeB: "Pacific Ocean",
        alternativeC: "Indian Ocean",
        alternativeD: "Arctic Ocean",
        answer: "b",
    },
    {
        question: "Who invented the World Wide Web (WWW)?",
        alternativeA: "Bill Gates",
        alternativeB: "Steve Jobs",
        alternativeC: "Tim Berners-Lee",
        alternativeD: "Mark Zuckerberg",
        answer: "c",
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        alternativeA: "Marie Curie",
        alternativeB: "Mother Teresa",
        alternativeC: "Margaret Thatcher",
        alternativeD: "Indira Gandhi",
        answer: "a"
    },
];
const question = document.getElementById("question");
const alternatives = Array.from(document.getElementsByClassName('alternatives'));

let currentQuestion = {};
let score = 0;
let qCounter = 0;
let quizQuestions = [];


function runGame() {
    qCounter = 0;
    score = 0;
    quizQuestions = [...questions];
    console.log("quizQuestion")
    showquestion();
}


function showquestion(){
    qcounter++;
    const qIndex = Math.floor(Math.random() * quizQuestions.length);
    currentQuestion = quizQuestions[qIndex];
    question.innerText = currentQuestion.question;
}