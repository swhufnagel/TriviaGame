//set variables & questions
var questions = [{
    Q: "Who is the NFL's All-Time Rush Leader?",
    A: "Walter Payton",
    B: "Eric Dickerson",
    C: "Emmitt Smith",
    D: "Tony Dorsett",
    F: "He racked up 18,355 yards over 14 seasons of rushing!"
}, {
    Q: "Which QB holds the record for most passing yards in a season?",
    A: "Tom Brady",
    B: "Peyton Manning",
    C: "Dan Marino",
    D: "Drew Brees",
    F: "He threw for 5,477 yards in 2013!"
}, {
    Q: "Which player has the most touchdowns ever?",
    A: "Marshall Faulk",
    B: "Randy Moss",
    C: "Shaun Alexander",
    D: "Jerry Rice",
    F: "He scored 208 touchdowns in his career!"
}
// }, {
//     Q: "Which team has the most Super Bowl rings?",
//     A: "New England Patriots",
//     B: "Pittsburgh Steelers",
//     C: "Dallas Cowboys",
//     D: "San Francisco 49ers",
//     F: "They have won 6 rings! Ben Roethlisberger has won two Super Bowls with the Steelers, while Terry Bradshaw won four."
// }, {
//     Q: "Out of these teams who has been to the Super Bowl",
//     A: "Cleveland Browns",
//     B: "Kansas City Chiefs",
//     C: "Detroit Lions",
//     D: "Jacksonville Jaguars",
//     F: "They lost in the first ever Super Bowl against the Green Bay Packers"
// }, {
//     Q: "Which NFL team has the most Hall-of-Famers?",
//     A: "Chicago Bears",
//     B: "Oakland Raiders",
//     C: "Dallas Cowboys",
//     D: "Philadelphia Eagles",
//     F: "They have had 33 Hall of Fame players!"
// }, {
//     Q: "Who was the youngest player to win the MVP award?",
//     A: "Dan Marino",
//     B: "Walter Payton",
//     C: "Jim Brown",
//     D: "Patrick Mahomes",
//     F: "He won at age 21 and 22!"
// }, {
//     Q: "Who has the most rushing touchdowns in a season?",
//     A: "Ladanian Tomlinson",
//     B: "Priest Holmes",
//     C: "Shaun Alexander",
//     D: "Marshhall Faulk",
//     F: "He set the record at 28 in 2006!"
// }, {
//     Q: "The NFL was founded as the American Professional Football Association in 1920 with 10 teams. Out of the following teams which was included in the original 10 charter teams?",
//     A: "Green Bay Packers",
//     B: "Houston Oilers",
//     C: "Arizona Cardinals",
//     D: "Dallas Cowboys",
//     F: "They were originially know as the Racine Cardinals!"
// }, {
//     Q: "Which player has the longest streak of games with a touchdown pass?",
//     A: "Tom Brady",
//     B: "Donovan Mcnabb",
//     C: "Joe Namath",
//     D: "Johnny Unitas",
//     F: "He went 47 straight games with a touchdown pass!"
// }, {
//     Q: "Which NFL team has the best all time Win-Loss record?",
//     A: "New England Patriots",
//     B: "Dallas Cowboys",
//     C: "Green Bay Packers",
//     D: "Miami Dolphins",
//     F: "They have an all-time record of (512-380)!"
// }
];
var score = {
    right: 0,
    wrong: 0,
    unanswer: 0
}
var playerChoice = "";
var timer = 15;
var qNumber = 0;
var quests = [questions[qNumber].A, questions[qNumber].B, questions[qNumber].C, questions[qNumber].D];
var questLets = ["A", "B", "C", "D"];
var answer = "";
var clock = "";
var images = ["01.jpg","02.jpg","03.jpg","04.png","05.png","06.png","07.jpeg","08.jpg","09.png","10.jpg","11.png",];
var answers = [];
//answer key
var answerKey = ["C", "B", "D", "B", "B", "A", "C", "A", "C", "D", "B"];
//function to reset
function reset() {
    score.right = 0;
    score.wrong = 0;
    score.unanswer = 0;
    qNumber = 0;
    timer = 15;
    $('.replay').addClass('hide');
}
//function to run timer
function setTime() {
    if (timer > 0) {
        console.log(timer);
        timer--;
        $('.timer').html(timer.toString());
    }
    else if(qNumber < questions.length) {
        var answers = [questions[qNumber].C, questions[qNumber].B, questions[qNumber].D, questions[qNumber].B, questions[qNumber].B, questions[qNumber].A, questions[qNumber].C, questions[qNumber].A, questions[qNumber].C, questions[qNumber].D, questions[qNumber].B];
        answer = answers[qNumber];
        $('.card-title').empty();
        $('.card-text').empty();
        $(".pics").removeClass("hide");
        var thePic = $('.pics').html("<img class='pics' src='assets/images/answers/" + images[qNumber] + "'>");
        thePic.addClass('pics');
        $('.card-title').append("Time's Up!!");
        $('.card-text').append("The answer was " + answer + "! " + questions[qNumber].F);
        clearInterval(clock);
        setTimeout(setQuestion, 5000);
        $('.timer').addClass("hide");
        timer = 15;
        score.unanswer++;
    }
}
//function to set the question up
function setQuestion() {
    console.log("once");
    clearInterval(clock);
    $('.timer').html(timer.toString());
    qNumber++;
    console.log(qNumber);
    if (qNumber < questions.length) {
        console.log("qnum: " + qNumber);
        clock = setInterval(setTime, 1000);
        $('.timer').removeClass('hide');
        $('.pics').addClass('hide');
        $('.card-title').empty();
        $('.card-text').empty();
        $('.card-title').append(questions[qNumber].Q);
        for (i = 0; i <= 3; i++) {
            var answer = $("<p>");
            quests = [questions[qNumber].A, questions[qNumber].B, questions[qNumber].C, questions[qNumber].D];
            answer.addClass("question")
            answer.attr("id", questLets[i]);
            answer.text(quests[i]);
            $('.card-text').append(answer);
            answers = [questions[qNumber].C, questions[qNumber].B, questions[qNumber].D, questions[qNumber].B, questions[qNumber].B, questions[qNumber].A, questions[qNumber].C, questions[qNumber].A, questions[qNumber].C, questions[qNumber].D, questions[qNumber].B];
        }
        $('.question').addClass('');
    }
    else{ 
        $('.card-title').empty();
        $('.card-text').empty();
        $(".pics").addClass("hide");
        $('.card-title').append("You Finished! Here's How You Scored!");
        $('.card-text').append("Correct: " + score.right);
        $('.card-text').append("</br>");
        $('.card-text').append("Wrong: " + score.wrong);
        $('.card-text').append("</br>");
        $('.card-text').append("Unanswered: " + score.unanswer);
        $('.timer').addClass("hide");
        $('.replay').removeClass("hide");
        $('.replay').empty();
        var nButt = $('<button>');
        nButt.text("Play Again");
        nButt.attr("id","start");
        nButt.addClass("Reset startGame text-center");
        $('.replay').append(nButt)
        $('.Reset').on("click",function(){
            reset();
        })
    }
}
// clicks();
// function clicks() {
    $(document).on("click", "#A", function () {
        playerChoice = "A";
        answer = answers[qNumber];
        answerCheck();
        clearInterval(clock);
        timer = 15;
    })
    $(document).on("click", '#B', function () {
        playerChoice = "B";
        answer = answers[qNumber];
        answerCheck();
        clearInterval(clock);
        timer = 15;
    })
    $(document).on("click", '#C', function () {
        playerChoice = "C";
        answer = answers[qNumber];
        answerCheck();
        clearInterval(clock);
        timer = 15;
    })
    $(document).on("click", '#D', function () {
        playerChoice = "D";
        answer = answers[qNumber];
        answerCheck();
        clearInterval(clock);
        timer = 15;
    })
// }
//function for if user is wrong report answer and reset
function wrong() {
    $('.card-title').empty();
    $('.card-text').empty();
    $(".pics").removeClass("hide");
    var thePic = $('.pics').html("<img class='pics' src='assets/images/answers/" + images[qNumber] + "'>");
    thePic.addClass('pics');
    $('.card-title').append("Nope!");
    $('.card-text').append("The answer was " + answer + "! " + questions[qNumber].F);
    $('.timer').addClass("hide");
    score.wrong++;
    clearInterval(clock);
    setTimeout(setQuestion, 5000);

}

//function to set the page to results of answer
function answerCheck() {
    if (playerChoice === answerKey[qNumber]) {
        $('.card-title').empty();
        $('.card-text').empty();
        $(".pics").removeClass("hide");
        var thePic = $('.pics').html("<img class='pics' src='assets/images/answers/" + images[qNumber] + "'>");
        thePic.addClass('pics');
        $('.timer').addClass("hide");
        $('.card-title').append("Correct!");
        $('.card-text').append("You guessed it was " + answer + "! " + questions[qNumber].F);
        clearInterval(clock);
        score.right++;
        setTimeout(setQuestion, 5000);
    }
    else {
        wrong();
    }
}
//press start to start & show
var button = $('<button>');
button.text("Click to Play");
button.addClass("startGame text-center");
$("#start").append(button);
window.onload = function () {
    $(document).on("click", "#start", function () {
        //unhide elements
        qNumber--;
        $('.replay').addClass("hide");
        $('.body').addClass("back");
        $('.card').removeClass("hide");
        $('.card-body').removeClass("hide");
        $('.timer').removeClass("hide");
        //hide button
        $('#start').addClass("hide");
        //set timer
        $('.timer').html(timer.toString());
        // set question & set answers
        setQuestion();
        // clicks();
    })
}

