// window.alert("⭐ Instructions Please read first! ⭐ \n Use your mouse to choose which answer you think is correct. \n After your selection you'll move to the next question. \n At the end you'll see your score! \n \n Good Luck! 🍀")

const questionContainer = document.getElementById("question")
const trueButton = document.getElementById("left")
const falseButton = document.getElementById("right")
// const name = promt ("Enter a username!")
var score = 0
var index = 0
var myQuestions = [{
    question: "Test Question 1",
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false
    },{
    question: "Test Question 2",
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "left" //true
    },{
    question: "Test Question 2",
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false
    },{
    question: "Test Question 2",
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false
}]

trueButton.addEventListener("click", function(){
    var correctAnswer = "left"
    if(correctAnswer === myQuestions[index].correctAnswer){
        score++
    }
    index++
    questionContainer.innerHTML=`<img src="Questions/test${index}.png" alt="Question ${index}">`
    console.log(score)
})

falseButton.addEventListener("click", function(){
    var correctAnswer = "right"
    if(correctAnswer === myQuestions[index].correctAnswer){
        score++
    }
    index++
    questionContainer.innerHTML=`<img src="Questions/test${index}.png" alt="Question ${index}">`
    console.log(score)
})


//display score