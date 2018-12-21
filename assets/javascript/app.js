// // runs code after a specific amount of time
// setTimeout();




// // clears timeout
// clearTimeout();
// //runs code at a specific interval
// setInterval();
// // clears interval
// clearInterval();


// *****VARIABLES******

//variable to reset timer on restart
var timer;
var time= 60;

//function for timer

timer = setInterval(function() {
    time--;
    $("#timeRemaining").text("Time Remaining: " + time);
    if (time === 0) {
        clearInterval(timer)
        //***need to call on function for submitting answers */
    }

}, 1000)

if (timer === 0) {
    clearInterval(timer)
    //***need to call on function for submitting answers */
}
// variable for collecting which radio buttons were active when the submit button is hit or the timer hits zero


var userChoice
var questionsRight
var questionsWrong
var questionsIncomplete





// user clicks a button to start the game
// start game fuction runs
// questiions and timer show and timer starts decreasing
// user clicks radio buttons for answer choice
// game ends when timer runs out or user clicks submit
// function runs to grade responses
// update results to html
// unhide results div



// Questions Array

var myQuestions = [
    {
        question: "Who is considered to be the greatest baseball player of all-time?",
        answers: {
            a: "Randy Johnson",
            b: "Babe Ruth",
            c: "Barry Bonds",
            d: "Chipper Jones"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of the Super Bowl trophy?",
        answers: {
            a: "The NFL Trophy",
            b: "The Madden Trophy",
            c: "The Lombardi Trophy",
            d: "The Panther's Trophy"
        },
        correctAnswer: "c"
    },
    {
        question: "How many innings are in a standard game of Major League Baseball?",
        answers: {
            a: "4",
            b: "7",
            c: "9",
            d: "12",
        },
        correctAnswer: "c",
    },
    {
        question: "'Football' in England, refers to which US sport?",
        answers: {
            a: "Football",
            b: "Rugby",
            c: "Kickball",
            d: "Soccer"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these is not a Triple Crown horse race?",
        answers: {
            a: "Preakness",
            b: "Kentucky Derby",
            c: "Belmont Stakes",
            d: "North London Derby"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these is not a Charlotte sports team?",
        answers: {
            a: "Charlotte Hounds",
            b: "Charlotte Cougars",
            c: "Charlotte Checkers",
            d: "Charlotte Knights"
        },
        correctAnswer: "b"
    },
    {
        question: "The mascot of East Carolina University is what?",
        answers: {
            a: "Pirate",
            b: "Wolf",
            c: "Ram",
            d: "Catamount"
        },
        correctAnswer: "a"
    },
    {
        question: "The NCAA Division I College Football Playoff is composed of how many teams",
        answers: {
            a: "4",
            b: "16",
            c: "8",
            d: "24"
        },
        correctAnswer: "a"
    },
    {
        question: "Which college football bowl game is nicknamed, 'The Grandaddy of Them All'?",
        answers: {
            a: "The Peach Bowl",
            b: "The Orange Bowl",
            c: "The Rose Bowl",
            d: "The Cotton Bowl"
        },
        correctAnswer: "c"
    }
];

// *******FUNCTIONS********

// function for hiding start button div
$("#startButton").click(function() {
    $("#startGame").hide();
    $("#jumbotron").show();
    $(startGame).show();
})

//function for the submit button
$("#submit").click(function() {
    console.log("submit button")
});

//function for starting game and displaying time and questions
function startGame() {
    for (var i = 0; i < myQuestions.length; i++) {
        $("#quiz").append(myQuestions[i].question + "<br>");
        $("#quiz").append("<input type='radio' name='" + i +  "' value='a'> " + myQuestions[i].answers.a + "<br>");
        $("#quiz").append("<input type='radio' name='" + i +  "' value='b'> " + myQuestions[i].answers.b + "<br>");
        $("#quiz").append("<input type='radio' name='" + i +  "' value='c'> " + myQuestions[i].answers.c + "<br>");
        $("#quiz").append("<input type='radio' name='" + i +  "' value='d'> " + myQuestions[i].answers.d + "<br>");
    }
};

function submitAndCheck() {
    for (var i = 0; i < myQuestions.length; i++) {
        
    }
};

//create var for user answers and myQuestions.correctAnswer[i] where i = the corresponding correct answer that was submitted



startGame();


//this function will show questions and 
// function startGame 
// function reset counters
// function restartgame
// function gradeResults // if right=correct else = incorrect
// //make div of results disappear and reset results and timer. 


