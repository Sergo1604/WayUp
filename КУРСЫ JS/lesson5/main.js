// Сегодня тебе предстоит видоизменить квиз.

// Все, что тебе нужно - это переписать код, который мы делали на занятии и заменить мои вопросы и ответы на свои.

// Уверен, что ты справишься!

// С нетерпением, жду твой первый квиз.

const quiz = [{
        question: "1+1=?",
        answers: ["2", "5", "11", "1 1"],
        rightIndex: 0,
    },
    {
        question: "2+=?",
        answers: ["2", "4", "11", "1 1"],
        rightIndex: 1,
    },
    {
        question: "3+'4'=?",
        answers: ["3", "43", "34", "7"],
        rightIndex: 2,
    },
    {
        question: "100/0=?",
        answers: ["1000000", "infinity", "0", "8"],
        rightIndex: 1,
    },

    {
        question: "сколько в килограмме центнеров?",
        answers: ["0.001цт", "10цт", "100цт", "0.01цт"],
        rightIndex: 3,
    },
];

const option = document.querySelectorAll(".option"),
    question = document.getElementById("question"),
    answersTracker = document.getElementById("answers-tracker"),
    quizContainer = document.querySelector(".quiz-container"),
    numberOfQuestion = document.getElementById('number-of-question'),
    numberOfAllQuestions = document.getElementById('number-of-all-questions')


randomIndex = () => {
    return Math.floor(Math.random() * quiz.length);
};
const btn = document.getElementById("btn-next");
let indexOfQuestion = randomIndex();
let selectedAnswer;
let responsedQuestions = [];
let isItemSelected = false;
let numberOfCurrentQuestion = 1;
let correctQuantity = 0;



setQuizQuestion = () => {
    numberOfQuestion.innerHTML = numberOfCurrentQuestion;
    numberOfAllQuestions.innerHTML = quiz.length
    question.innerHTML = quiz[indexOfQuestion].question;
    option.forEach(
        (el, index) => (el.innerHTML = quiz[indexOfQuestion].answers[index])
    );
};

answerTracker = (classItem) => {
    const tracker = document.createElement("div");
    answersTracker.appendChild(tracker);
    tracker.classList.add(classItem);
};

selectAnswer = () =>
    option.forEach((el) => {
        //answerTracker();
        el.addEventListener("click", () => {
            if (isItemSelected == false) {
                selectedAnswer = +el.getAttribute("data-id");
                isItemSelected = true;
                responsedQuestions.push(indexOfQuestion);
                if (selectedAnswer == quiz[indexOfQuestion].rightIndex) {
                    option[selectedAnswer].classList.add("correct");
                    //tracker.classList.add('correct');
                    answerTracker('correct');
                    correctQuantity++;
                } else {
                    option[quiz[indexOfQuestion].rightIndex].classList.add("correct");
                    option[selectedAnswer].classList.add("wrong");
                    //tracker.classList.add('wrong');
                    answerTracker('wrong');
                }
            }
        });
    });

clearAnsweres = () => {
    option.forEach((el) => {
        el.classList.remove("correct");
        el.classList.remove("wrong");
    });
};

nextQuestion = () => {
    btn.addEventListener("click", () => {
        if (isItemSelected == false) alert("Выберите один из вариантов ответа");
        if (responsedQuestions.length < quiz.length) {
            while (responsedQuestions.includes(indexOfQuestion)) {
                indexOfQuestion = randomIndex();

                //console.log(indexOfQuestion);
            }
            //console.log(responsedQuestions.includes(indexOfQuestion))
            isItemSelected = false;
            clearAnsweres();
            setQuizQuestion();
            selectAnswer();
        } else {
            quizOver();
            //window.location.reload();
            //console.log("новая игра");
        }
    });
};

quizOver = () => {
    const modalWindow = document.querySelector(".quiz-over-modal");
    const correctAnswer = document.getElementById('correct-answer');
    const numberOfAllQuestions = document.getElementById('number-of-all-questions-2');
    const btnTryAgain = document.getElementById('btn-try-again');
    correctAnswer.innerHTML = correctQuantity;
    numberOfAllQuestions.innerHTML = quiz.length;
    modalWindow.classList.add('active');
    btnTryAgain.addEventListener('click', () => {
        window.location.reload()
    });

}


setQuizQuestion();
selectAnswer();
nextQuestion();