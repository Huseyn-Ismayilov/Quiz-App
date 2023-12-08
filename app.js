import data from "./questions.json" assert {type: "json"}

const container = document.querySelector(".questionContainer")
const answerOptionList = document.querySelector(".answerOptions")
const questionText = document.querySelector(".question")
const time = document.querySelector(".time")
const nextBtn = document.querySelector(".nextBtn")


let currentIndex = 0

function createQuestion() {
    answerOptionList.innerHTML = ""

    let currentQuestionElement = data[currentIndex]
    let questionNo = currentIndex + 1
    questionText.innerHTML = currentQuestionElement.question

    time.innerHTML = `<span>${questionNo}</span>/${data.length}`

    // console.log(currentQuestionElement.answer_options);
    // console.log(currentQuestionElement.question);

    currentQuestionElement.answer_options.forEach(answer => {
        const answerButton = document.createElement("li")
        answerButton.classList.add("option")
        answerButton.innerHTML = answer
        answerOptionList.appendChild(answerButton)

        // console.log(answer)
        // if (answer.crrect_answer) {

        // }
    })
}

createQuestion()

nextBtn.addEventListener("click", nextQuestion)
function nextQuestion() {
    currentIndex++

    if (currentIndex < data.length) {
        createQuestion()
    }
}
