// window.alert("⭐ Instructions Please read first! ⭐ \n Use your mouse to choose which answer you think is correct. \n After your selection you'll move to the next question. \n At the end you'll see your score! \n \n Good Luck! 🍀")

const questionContainer = document.getElementById("question");
const submitButton = document.getElementById("left", "right");
const myQuestions = [{
    question: "Test Question 1",
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "right",

    question: "Test Question 2",
    answers: {
        left: "True",
        right: "False"
        },
    correctAnswer: "left"
}];