import data from "./questions.json" assert {type: "json"}

const questionText = document.querySelector(".question")
const answerOptionList = document.querySelector(".answerOptions")
const answerOption = document.querySelector(".answerOptions .option")
const nextBtn = document.querySelector(".next_btn")

// console.log(data[0].question);


// data.forEach(function (element) {
//     // console.log(element)
//     // console.log(element.question)
//     questionText.innerHTML = element.question
// })



function currentQuestion(data) {
    // questionText.innerHTML = data.question
    // console.log( questionText.innerHTML = data.question);
    data.forEach()
}
currentQuestion()

function selectQuestion() {

}

function showQuestion(question) {
    questionElement.innerText = question.question
  
}
