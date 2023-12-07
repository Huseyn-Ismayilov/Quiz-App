import data from "./questions.json" assert {type: "json"}

const questionText = document.querySelector(".question")
const answerOptionList = document.querySelector(".answerOptions")
const nextBtn = document.querySelector(".next_btn")

// console.log(data[0].question);

const currentQuestionIndex = 0

function createQuestion() {
    let currentQuestionElement = data[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionText.innerHTML = `${questionNo} . ${currentQuestionElement.question}`

    // console.log(currentQuestionElement.answer_options);
    currentQuestionElement.answer_options.forEach(answer => {
        const answerButton = document.createElement('li')
        answerButton.classList.add("option")
        answerButton.innerHTML = answer
        answerOptionList.appendChild(answerButton)
    })
    console.log(currentQuestionElement.answer_options)
}
createQuestion()

function selectQuestion() {

}

