import data from "./questions.json" assert {type: "json"}

const container = document.querySelector(".questionContainer")
const time = document.querySelector(".time")
const questionText = document.querySelector(".question")
const answerOptionList = document.querySelector(".answerOptions")
const nextBtn = document.querySelector(".nextBtn")


// console.log(data[0].question);

let currentIndex = 0

function createQuestion() {
    answerOptionList.innerHTML = ""
    const currentQuestionElement = data[currentIndex]
    const questionNo = currentIndex + 1
    questionText.innerHTML = `${questionNo}. ${currentQuestionElement.question}`

    time.innerHTML = `<span>${questionNo}</span>/${data.length}`

    // console.log(currentQuestionElement.answer_options);
    // console.log(currentQuestionElement.question);

    currentQuestionElement.answer_options.forEach(answer => {
        const answerButton = document.createElement("li")
        answerButton.classList.add("option")
        answerButton.innerHTML = answer
        answerOptionList.appendChild(answerButton)
    })
}
createQuestion()

nextBtn.addEventListener("click", nextQuestion)

function nextQuestion() {
    currentIndex++
    console.log(currentIndex);

    if (currentIndex < data.length) {
        createQuestion()
    }
}
