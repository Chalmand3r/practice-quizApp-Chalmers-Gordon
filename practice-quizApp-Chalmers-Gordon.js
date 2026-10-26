const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Transfer Markup Language",
            "Hyperlink Text Management Language"
        ],
        correct: 0
    },
    {
        question: "What does CSS do?",
        answers: [
            "Creates databases",
            "Styles web pages",
            "Handles server requests",
            "Runs Java programs"
        ],
        correct: 1
    },
    {
        question: "Which keyword creates a variable?",
        answers: [
            "new",
            "create",
            "let",
            "make"
        ],
        correct: 2
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const feedbackElement = document.getElementById("feedback");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
    });

    feedbackElement.textContent = "";
}

function handleAnswerClick(event) {

    const selectedIndex =
        Array.from(answerButtons).indexOf(event.target);

    const correctAnswer =
        questions[currentQuestionIndex].correct;

    if (selectedIndex === correctAnswer) {
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect!";
    }

    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

answerButtons.forEach(button => {
    button.addEventListener("click", handleAnswerClick);
});

nextButton.addEventListener("click", () => {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Quiz Complete!";
        feedbackElement.textContent =
            "You answered all questions.";

        answerButtons.forEach(button => {
            button.style.display = "none";
        });

        nextButton.disabled = true;
    }
});

loadQuestion();
