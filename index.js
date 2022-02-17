// window.alert("⭐ Instructions Please read first! ⭐ \n Use your mouse to choose which answer you think is correct. \n After your selection you'll move to the next question. \n At the end you'll see your score! \n \n Good Luck! 🍀")

const questionContainer = document.getElementById("question")
const trueButton = document.getElementById("left")
const falseButton = document.getElementById("right")

// const name = promt ("Enter a username!")
var score = 0
var index = 0
var myQuestions = [{
    question: "", //index 0
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false
    },{
    question: "", //index 1
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "left" //true
    },{
    question: "",//index 2
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false
    },{
    question: "", //index 3
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
    
    if(index === 4){ //change numer to 1+ number of questions
        questionContainer.innerHTML=`Your Score is <br> ${score} out of 4`
    }
})

falseButton.addEventListener("click", function(){
    var correctAnswer = "right"
    if(correctAnswer === myQuestions[index].correctAnswer){
        score++
    }
    index++
    questionContainer.innerHTML=`<img src="Questions/test${index}.png" alt="Question ${index}">`
    
    if(index === 4){ //change numer to 1+ number of questions
        questionContainer.innerHTML=`Your Score is <br> ${score} out of 4`
    }
})

//styling for "Your Score is X out of 4"
document.getElementById("question").style.cssText = ` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: Cinzel;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    color: #38B8E6;
`


// document.getElementById("question").style
