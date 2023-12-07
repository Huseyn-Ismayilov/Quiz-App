import data from "./questions.json" assert {type: "json"}


const question_text = document.querySelector(".question")
const answerOptions = document.querySelector(".answerOptions")
const nextBtn = document.querySelector(".next_btn")

// console.log(data[0].question);


data.forEach(function (element) {
    // console.log(element)
    // console.log(element.question)
    question_text.innerHTML = element.question
})



function nextQuestion() {

}

function currentQuestion() {
    
}