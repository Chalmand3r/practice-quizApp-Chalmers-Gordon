const questions = [
    {
        question: "Which animal below would NOT typically be found on a farm?",
        answers: [
            "Tiger",
            "Cow",
            "Chicken",
            "Dog"
        ],
        correct: 0
    },
    {
        question: "What coding course are we taking?",
        answers: [
            "Codecademy",
            "LaunchCode",
            "JavaScript",
            "Python"
        ],
        correct: 1
    },

];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const feedbackElement = document.getElementById("feedback");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    feedbackElement.textContent = "";

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect!";
    }

    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

answerButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        checkAnswer(index);
    });
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Quiz Complete!";
        feedbackElement.textContent = "You answered all questions.";

        answerButtons.forEach(button => {
            button.style.display = "none";
        });

        nextButton.disabled = true;
    }
});

loadQuestion();
