const mQuery = window.matchMedia("(max-width: 430px)"); //styling for phone
if (mQuery.matches) {
  console.log("Media query matched!");
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
    `;
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
    `;
}

window.alert(
  "⭐ Instructions Please read first! ⭐\nUse your mouse to choose which answer you think is correct.\nAfter your selection you'll move to the next question.\nAt the end you'll see your score!\n\nGood Luck! 🍀"
);

const questionContainer = document.getElementById("question");
const trueButton = document.getElementById("left");
const falseButton = document.getElementById("right");
const choose = document.getElementById("choose");
const words = ["Always", "Staying", "Take", "Me", "Down"];
let score = 0;
let index = 0;
let myQuestions = [
  {
    question: "", //index 0
    correctAnswer: "left", //true 15
  },
  {
    question: "", //index 1
    correctAnswer: "right", //false 13
  },
  {
    question: "", //index 2
    correctAnswer: "left", //true 43
  },
  {
    question: "", //index 3
    correctAnswer: "left", //true 64
  },
  {
    question: "", //index 4
    correctAnswer: "left", //true 50
  },
  {
    question: "", //index 5
    correctAnswer: "right", //false 61
  },
  {
    question: "", //index 6
    correctAnswer: "left", //true 55
  },
  {
    question: "", //index 7
    correctAnswer: "right", //false 30
  },
  {
    question: "", //index 8
    correctAnswer: "right", //false 4
  },
  {
    question: "", //index 9
    correctAnswer: "right", //false 37
  },
];

let fact = [
  {
    theFact: "True -\nThat's almost 5 miles for you Americans", //for index 0
  },
  {
    theFact: "False -\nThere's actually 236", //for index 1
  },
  {
    theFact: "True -\nOctopus has one main, systemic heart to pumps blood around its body.\nThe two additional hearts are responsible for pumping blood over each of its gills", //for index 2
  },
  {
    theFact: "True -\nIts a antibiotic and sunscreen substance because science", //for index 3
  },
  {
    theFact: "True -\nA process called 'negative geotropism' means the fruit grows upwards to break through the canopy", //for index 4
  },
  {
    theFact: "False -\nI mean it could but traditionally they do not", //for index 5
  },
  {
    theFact: "True -\nChaplin died when 50 Cent was about two and a half years old", //for index 6
  },
  {
    theFact: "False -\nShes was born in 1993, which means shes 28", //for index 7
  },
  {
    theFact: "False -\nIts actually Rabat.\nThe more you Know!", //for index 8
  },
  {
    theFact: "False -\nIt's one of the biggest bones in your forearm", //for index 9
  },
];

//if true button pressed do all this
trueButton.addEventListener("click", function () {
  let correctAnswer = "left";
  if (correctAnswer === myQuestions[index].correctAnswer) {
    score++;
}
console.log(fact[index]);
window.alert(fact[index].theFact)
  index++;
  //fact++;
  questionContainer.innerHTML = `<img src="Questions/test${index}.png" alt="Question ${index}">`;

  if (index === 10) {
    //change numer to 1+ number of questions
    questionContainer.innerHTML = `Your Score is <br> ${score} out of 10`;
    //add after "out of 10"> <br> <br> If you'd like to see how  you <br> compare to others <br> click Next for part 2!
    choose.remove("choose");
    const button = document.createElement("button");
    button.textContent = "Next";
    button.className = "next";
    //questionContainer.appendChild(button)
    //document.querySelector(".next").addEventListener("click", clickNextButton);
    if (mQuery.matches) {
      document.getElementById("question").style.height = "300px"; //changes div to fit text
    }
  }
});

//if false button pressed do all this
falseButton.addEventListener("click", function () {
  let correctAnswer = "right";
  if (correctAnswer === myQuestions[index].correctAnswer) {
    score++;
}
console.log(fact[index]);
window.alert(fact[index].theFact)
  index++;
  //fact++;
  questionContainer.innerHTML = `<img src="Questions/test${index}.png" alt="Question ${index}">`;

  if (index === 10) {
    //change numer to 1+ number of questions
    questionContainer.innerHTML = `Your Score is <br> ${score} out of 10`;
    //add after "out of 10"> <br> <br> If you'd like to see how  you <br> compare to others <br> click Next for part 2!
    choose.remove("choose");
    const button = document.createElement("button");
    button.textContent = "Next";
    button.className = "next";
    //questionContainer.appendChild(button)
    //document.querySelector(".next").addEventListener("click", clickNextButton);
    if (mQuery.matches) {
      document.getElementById("question").style.height = "300px"; //changes div to fit text
    }
  }
});

function clickNextButton() {
  console.log("Part 2!");
  question.remove("question");
  setTimeout(function () {
    window.alert("For this part put the Opposite of what the word listed!");
  }, 50);
  setTimeout(function () {
    const div = document.createElement("div");
    div.className = "wordGuess";
    div.innerHTML = words;
    container.appendChild(div);
  }, 50);
}

//possible updates  - add prompt for user name,
//                  - store user score in internal storage
//                  - add second quiz promt "v2"
