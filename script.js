// Global variables

let currentQuestion = 0;
let score = 0;
let quizUserName = document.getElementById("name");
let totalScore = document.getElementById('score');

// Questions array for the code quiz

let questions = [{
    question: "Where is the correct place to insert a JavaScript?",
    answer: "1",
    option1: "Both the <Head> section and the <body> section are correct",
    option2: "The <head> section",
    option3: "The <body> section",
    option4: "None of above"
}, {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answer: "2",
    option1: "<script href='xxx.js'>",
    option2: "<script src='xxx.js>",
    option3: "<script name='xxx.js'>",
    option4: "None of above"
}, {
    question: "How do you create a function in JavaScript?",
    answer: "3",
    option1: "function = myFunction()",
    option2: "function:myFunction()",
    option3: "function myFunction()",
    option4: "None of above"
}, {
    question: "How to write an IF statement in JavaScript?",
    answer: "2",
    option1: "if i = 5",
    option2: "if (i == 5)",
    option3: "if i = 5 then",
    option4: "if i == 5 then"
}, {
    question: "How does a FOR loop start?",
    answer: "3",
    option1: "for i = 1 to 5",
    option2: "for (i = 0; i <= 5)",
    option3: "for (i = 0; i <= 5; i++)",
    option4: "for (i <= 5; i++)"
}, {
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: "1",
    option1: "onclick",
    option2: "onmouseclick",
    option3: "onmouseover",
    option4: "onchange"
}, {
    question: "Which operator is used to assign a value to a variable? (BONUS Question)",
    answer: "4",
    option1: "      *",
    option2: "      -",
    option3: "      x",
    option4: "      ="
}];


// Event Listener for 'start-quiz' button

let startQuiz = document.getElementById("button");
startQuiz.addEventListener("click", submitForm);

function submitForm() {
    event.preventDefault();
    let quizUser = document.getElementById("name").value;
    if (quizUser === "") {
        alert("Please enter your name")
        
        // return;
    }else {
        localStorage.setItem("First-name", quizUser);
        loadQuestions();
        Timer();
        console.log("First-name", quizUser);
    }
}
// Function for setting Time interval and to show Timer on the page

function Timer() {
    var secondsLeft = 60;
    countdown = document.getElementById("time");
    timerInterval = setInterval(function () {
        secondsLeft--;
        countdown.textContent = "Time Left:  " + secondsLeft + " seconds";
            if (secondsLeft === 0 || currentQuestion === questions.length) {
                clearInterval(timerInterval);
                alert("QUIZ COMPLETED!!!");
            }
    }, 1000);
    console.log("timer test");
}
// Function for checking the right answer & score

function checkRightAnswer(event) {
    event.preventDefault();
    var checkBox = document.querySelector('input[name=option]:checked');
    console.log(checkBox);
    if (!checkBox) {
        alert('Pick an option first!');
        return;
    }
    var userChoice = checkBox.value;
    
    // if it is the correct choice, compare with the right answer
    // Scores 10 points for right answer, otherwise subtract 5 points.
    if (userChoice === questions[currentQuestion - 1].answer) {
        score += 10;
    } else {
        score -= 5;
    }
    
    console.log(score, userChoice, questions[currentQuestion - 1].answer);
    
    loadQuestions();
    submitTotalScore();
    
}
// function for loading the quiz questions

function loadQuestions() {
    event.preventDefault();
    let questionEl = document.getElementById("questions");
    questionEl.textContent = questions[currentQuestion].question;
    let optEl1 = document.getElementById("opt1");
    let optEl2 = document.getElementById("opt2");
    let optEl3 = document.getElementById("opt3");
    let optEl4 = document.getElementById("opt4");
    optEl1.textContent = questions[currentQuestion].option1;
    optEl2.textContent = questions[currentQuestion].option2;
    optEl3.textContent = questions[currentQuestion].option3;
    optEl4.textContent = questions[currentQuestion].option4;
    currentQuestion++;
}
// Add event listener for 'next-question' button

let nextQ = document.getElementById("next");
nextQ.addEventListener("click", checkRightAnswer);

// Function to show quiz user name & total score
// Function to show quiz user name & total score
function submitTotalScore() {
    localStorage.setItem("Your Total Score", score);
    if(currentQuestion === questions.length){
        let totScore = JSON.stringify(localStorage.getItem("Your Total Score"));
        totalScore.textContent = "Your Total Score" + "  " + totScore + "points";
        
        console.log(lastQuizUser, totScore);
        
        return;
    }
}
