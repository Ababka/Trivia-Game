window.alert("⭐ Instructions Please read first! ⭐ \n Use your mouse to choose which answer you think is correct. \n After your selection you'll move to the next question. \n At the end you'll see your score! \n \n Good Luck! 🍀")

const questionContainer = document.getElementById("question")
const trueButton = document.getElementById("left")
const falseButton = document.getElementById("right")
// const name = promt ("Enter a username!")
var score = 0
var index = 0
var i = 0 //v2
var myQuestions = [{
    question: "", //index 0
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "left" //true 15
    },{
    question: "", //index 1
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false 13
    },{
    question: "",//index 2
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "left" //true 43
    },{
    question: "", //index 3
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "left" //true 64
    },{
    question: "", //index 4
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "left" //true 50
    },{
    question: "", //index 5
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false 61
    },{
    question: "", //index 6
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "left", //true 55
    },{
    question: "", //index 7
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false 30
    },{
    question: "", //index 8
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false 4
    },{
    question: "", //index 9
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right", //false 37
}]

trueButton.addEventListener("click", function(){
    var correctAnswer = "left"
    if(correctAnswer === myQuestions[index].correctAnswer){
        score++
    }
    index++
    questionContainer.innerHTML=`<img src="Questions/test${index}.png" alt="Question ${index}">`
    
    if(index === 10){ //change numer to 1+ number of questions
        questionContainer.innerHTML=`Your Score is <br> ${score} out of 10`
        // v2 add to innerHTML after "out of X">  <br> <br> If you'd like to see how  you <br> compare to others click Next!
        var button = 
        document.createElement("button")
        button.innerHTML = "Next"
        button.className = "next"
        //questionContainer.appendChild(button); //add in v2
    }
})

falseButton.addEventListener("click", function(){
    var correctAnswer = "right"
    if(correctAnswer === myQuestions[index].correctAnswer){
        score++
    }
    index++
    questionContainer.innerHTML=`<img src="Questions/test${index}.png" alt="Question ${index}">`
    
    if(index === 10){ //change numer to 1+ number of questions
        questionContainer.innerHTML=`Your Score is <br> ${score} out of 10`
        // v2 add to innerHTML after "out of X">  <br> <br> If you'd like to see how  you <br> compare to others click Next!
        var button = 
        document.createElement("button")
        button.innerHTML = "Next"
        button.className = "next"
        //questionContainer.appendChild(button); //add in v2
    }
})

//styling for "Your Score is X out of 10"
document.getElementById("question").style.cssText = ` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Cinzel;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    color: #38B8E6;
`

document.getElementsByName("button").style = `
    justify-content: center;
    align-items: center;
`

//possible updates  - add prompt for user name, 
//                  - store user score in internal storage
//                  - add second quiz promt "v2"