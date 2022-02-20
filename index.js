const mQuery = window.matchMedia('(max-width: 430px)') //styling for phone
if (mQuery.matches) {
    console.log('Media query matched!')
    document.getElementById("question").style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Cinzel;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #38B8E6;
    `
} else {

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
}

window.alert("⭐ Instructions Please read first! ⭐ \n Use your mouse to choose which answer you think is correct. \n After your selection you'll move to the next question. \n At the end you'll see your score! \n \n Good Luck! 🍀")

const questionContainer = document.getElementById("question")
const trueButton = document.getElementById("left")
const falseButton = document.getElementById("right")
const choose = document.getElementById("choose")
const words = ["Always", "Staying", "Take", "Me", "Down"]
var score = 0
var index = 0
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

//if true button pressed do all this
trueButton.addEventListener("click", function(){
    var correctAnswer = "left"
    if(correctAnswer === myQuestions[index].correctAnswer){
        score++
    }
    index++
    questionContainer.textContent=`<img src="Questions/test${index}.png" alt="Question ${index}">`
    
    if(index === 10){ //change numer to 1+ number of questions
        questionContainer.innerHTML=`Your Score is <br> ${score} out of 10`
        //add after "out of 10"> <br> <br> If you'd like to see how  you <br> compare to others <br> click Next for part 2!
        choose.remove("choose")
        const button =
        document.createElement("button")
        button.textContent = "Next"
        button.className = "next"
        //questionContainer.appendChild(button)
        document.querySelector(".next").addEventListener("click", clickNextButton)
        if (mQuery.matches) {
            //document.getElementById("question").style.height = "300px" //changes div to fit text
        }
    }
})

//if false button pressed do all this
falseButton.addEventListener("click", function(){
    var correctAnswer = "right"
    if(correctAnswer === myQuestions[index].correctAnswer){
        score++
    }
    index++
    questionContainer.textContent=`<img src="Questions/test${index}.png" alt="Question ${index}">`
    
    if(index === 10){ //change numer to 1+ number of questions
        questionContainer.innerHTML=`Your Score is <br> ${score} out of 10`
        //add after "out of 10"> <br> <br> If you'd like to see how  you <br> compare to others <br> click Next for part 2!
        choose.remove("choose")
        const button =
        document.createElement("button")
        button.textContent = "Next"
        button.className = "next"
        //questionContainer.appendChild(button)
        document.querySelector(".next").addEventListener("click", clickNextButton)
        if (mQuery.matches) {
            //document.getElementById("question").style.height = "300px" //changes div to fit text
        }
    }
})

function clickNextButton(){
    console.log('Part 2!')
    question.remove("question")
    setTimeout(function() {
        window.alert("For this part put the Opposite of what the word listed!")
    }, 50)
    setTimeout(function() {
        const div =
        document.createElement("div")
        div.className = "wordGuess"
        div.innerHTML = words
        container.appendChild(div)
    }, 50)
}

//possible updates  - add prompt for user name, 
//                  - store user score in internal storage
//                  - add second quiz promt "v2"