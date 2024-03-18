// alert("hi");
var arr = ["red", "blue", "green", "yellow"];
var sequence = [];
var input = [];
var level = 0;
var started = false;
function nextSequence() {
    input = [];
    level++;
    $("h1").text("Level " + level);
    let x = Math.floor(Math.random() * 4);


    // console.log(x);
    var randomColor;
    randomColor = arr[x];
    sequence.push(randomColor);
    // console.log(randomColor);
    // soundEffect(randomColor)
    $("#" + randomColor).fadeOut(100).fadeIn(100);
    playSound(randomColor)

    // audio.muted = true;
}
function checkAnswer(currlevel) {
    if (sequence[currlevel] === input[currlevel]) {
        // console.log("success") ;
        if (input.length === sequence.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }

    else {
        // console.log("wrong");
        playSound("wrong");
        // started = false;
        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}
function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

$(".btn").click(function (event) {
    // alert("fasf");
    // console.log(event.target.id);
    var x = event.target.id;
    input.push(x);

    // console.log(input);

    playSound(x);
    animatePress(x);
    checkAnswer(input.length - 1);
});


function animatePress(color) {
    $("#" + color).addClass("pressed");
    // $("#" + color).removeClass("pressed");

    setTimeout(function () {
        $("#" + color).removeClass("pressed");
    }, 100);
}
// for(i = 0; i< 3; i++)
// nextSequence();


$(document).keypress(function () {
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
})


function startOver()
{
    level = 0;
    sequence = [];
    input = [];
    started = false;
}