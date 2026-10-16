const questions = [
    {
        question: "What is JavaScript?",
        correctAnswer: "Programming Language"
    },
    {
        question: "Which keyword declares a variable?",
        correctAnswer: "let"
    },
    {
        question: "Which method adds an item to the end of an array?",
        correctAnswer: "push"
    }
];

const userAnswers = [
    "Programming Language",
    "let",
    "push"
];

function calculateScore(questions, userAnswers) {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].correctAnswer === userAnswers[i]) {
            score++;
        }
    }

    let percentage = (score / questions.length) * 100;

    return {
        score: score,
        total: questions.length,
        percentage: percentage
    };
}

console.log(calculateScore(questions, userAnswers));