import data from "./questions.json" assert {type: "json"}

const questionText = document.querySelector(".question")
const answerOptionList = document.querySelector(".answerOptions")
const answerOption = document.querySelector(".answerOptions .option")
const nextBtn = document.querySelector(".next_btn")

// console.log(data[0].question);

function showQuestion(question) {
    questionElement.innerText = question.question

}

const currentQuestionIndex = 0

function currentQuestion() {
    let currentQuestionElement = data[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionText.innerHTML = `${questionNo} . ${currentQuestionElement.question}`

    // console.log(currentQuestionElement.answer_options);
}
currentQuestion()

function selectQuestion() {

}

