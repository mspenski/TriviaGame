$(function (reset) {
    $("#startGame").show();
    $(".jumbotron").hide();
    $(startGame).show();
    $("#results").hide();
})



// *****VARIABLES******

//variable to reset timer on restart
var timer;
var time = 30;
var userChoice = 0;
var correctAnswer
var questionsRight = 0;
var questionsWrong = 0;
var questionsIncomplete = 0;



// variable for collecting which radio buttons were active when the submit button is hit or the timer hits zero


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
$("#startButton").click(function () {
    $("#startButton").hide();
    $(".jumbotron").show();
    $("#results").hide();
})
timer = setInterval(function () {
    time--;
    $("#timeRemaining").text("Time Remaining: " + time);
    if (time === 0) {
        clearInterval(timer);
        endgame()
    }
}, 1000)

//function for timer

if (timer === 0) {
    clearInterval(timer);
    endgame();
    //***need to call on function for submitting answers */
}

// function for clicking the submit button
$("#submit").click(endgame);
function endgame() {
    console.log("submitbuttomworks")
    for (var i = 0; i < myQuestions.length; i++) {
        console.log($("input[value='" + myQuestions[i].correctAnswer + "'][name='" + i + "']").checked)
        if ($("input[name=" + i + "]:checked").val() === myQuestions[i].correctAnswer) {
            questionsRight++
        }

    }
    questionsWrong = myQuestions.length - questionsRight;

    $("#correctanswers").html(questionsRight)
    $("#incorrectanswers").html(questionsWrong)

    questionsRight = 0
    questionsWrong = 0

    $("#results").show();
    $("#startGame").hide();
    $(".jumbotron").hide();
   


}

// function call for the submit button
$("#submit").click(function () {
    console.log("submit button");
    endgame();
});

//function for starting game and displaying time and questions
function startGame() {
    for (var i = 0; i < myQuestions.length; i++) {
        $("#quiz").append(myQuestions[i].question + "<br>");
        $("#quiz").append("<input type='radio' name='" + i + "' value='a'> " + myQuestions[i].answers.a + "<br>");
        $("#quiz").append("<input type='radio' name='" + i + "' value='b'> " + myQuestions[i].answers.b + "<br>");
        $("#quiz").append("<input type='radio' name='" + i + "' value='c'> " + myQuestions[i].answers.c + "<br>");
        $("#quiz").append("<input type='radio' name='" + i + "' value='d'> " + myQuestions[i].answers.d + "<br><br>");
    }
};


$("#Retry").click(function () {
    for (var i = 0; i < myQuestions.length; i++) {
        var checked = $("input[name=" + i + "]:checked")


        checked.prop("checked", false);
        time = 60;
        console.log("retry works")
    };
    $("#results").hide();
    $("#startGame").hide();
    $(".jumbotron").show();
})





