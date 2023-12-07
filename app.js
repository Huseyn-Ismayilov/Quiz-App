import data from "./questions.json" assert {type: "json"}

const container = document.querySelector(".questionContainer")
const questionText = document.querySelector(".question")
const answerOptionList = document.querySelector(".answerOptions")
const nextBtn = document.querySelector(".nextBtn")

// console.log(data[0].question);

let currentIndex = 0

function createQuestion() {
    const currentQuestionElement = data[currentIndex]
    const questionNo = currentIndex + 1
    questionText.innerHTML = `${questionNo}. ${currentQuestionElement.question}`


    const time = document.createElement("div")
    time.classList.add("time")
    time.innerHTML = `<span>${questionNo}</span>/${data.length}`
    container.prepend(time)

    // console.log(currentQuestionElement.answer_options);
    // console.log(currentQuestionElement.question);

    currentQuestionElement.answer_options.forEach(answer => {
        const answerButton = document.createElement("li")
        answerButton.classList.add("option")
        answerButton.innerHTML = answer
        answerOptionList.appendChild(answerButton)
    })
    // console.log(currentQuestionElement.answer_options)
}

createQuestion()


nextBtn.addEventListener("click", selectQuestion)

function selectQuestion() {

    currentIndex++
    if (currentIndex < data.length) {
        createQuestion()
    }
}
